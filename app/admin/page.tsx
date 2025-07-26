"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import * as projectApi from "../../lib/api/projects";
import { checkToken as checkTokenApi } from "../../lib/api/auth";

export default function AdminPage() {
    const [auth, setAuth] = useState(false);
    const [projects, setProjects] = useState<projectApi.Project[]>([]);
    const [selectedProject,] = useState<projectApi.Project | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [editProject, setEditProject] = useState<projectApi.Project | null>(null);
    const [form, setForm] = useState({
        title: "",
        description: "",
        tags: "",
        image: "",
        link: "",
        featured: false,
        order: 1
    });
    const [formLoading, setFormLoading] = useState(false);
    const [formError, setFormError] = useState("");
    const router = useRouter();

    useEffect(() => {
        async function checkToken() {
            const token = typeof window !== "undefined" ? localStorage.getItem("kadmo_admin_token") : null;
            if (!token) {
                router.replace("/admin/login");
                return false;
            }
            try {
                const valid = await checkTokenApi(token);
                if (valid) {
                    setAuth(true);
                    return true;
                } else {
                    localStorage.removeItem("kadmo_admin_token");
                    router.replace("/admin/login");
                    return false;
                }
            } catch {
                localStorage.removeItem("kadmo_admin_token");
                router.replace("/admin/login");
                return false;
            }
        }
        checkToken();
        // Checagem automática a cada 2 minutos
        const intervalId = setInterval(() => {
            checkToken();
        }, 2 * 60 * 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [router]);

    // Função para buscar projetos
    async function fetchProjects() {
        setLoading(true);
        setError("");
        try {
            const token = typeof window !== "undefined" ? localStorage.getItem("kadmo_admin_token") : null;
            if (!token) throw new Error();
            const data = await projectApi.getProjects(token);
            setProjects(data);
        } catch {
            setError("Erro ao buscar projetos");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (auth) fetchProjects();
    }, [auth]);

    function openAddModal() {
        setEditProject(null);
        setForm({ title: "", description: "", tags: "", image: "", link: "", featured: false, order: 1 });
        setModalOpen(true);
        setFormError("");
    }

    function openEditModal(project: projectApi.Project) {
        setEditProject(project);
        setForm({
            title: project.title || "",
            description: project.description || "",
            tags: project.tags?.join(", ") || "",
            image: project.image || "",
            link: project.link || "",
            featured: project.featured ?? false,
            order: typeof project.order === "number" ? project.order : 1
        });
        setModalOpen(true);
        setFormError("");
    }

    function isValidUrl(url: string) {
        try {
            if (!url) return true; // Campo opcional
            const u = new URL(url);
            return u.protocol === "http:" || u.protocol === "https:";
        } catch {
            return false;
        }
    }

    async function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        setFormLoading(true);
        setFormError("");
        // Validações
        if (!form.title.trim() || form.title.length < 3) {
            setFormError("O título deve ter pelo menos 3 caracteres.");
            setFormLoading(false);
            return;
        }
        if (!form.description.trim() || form.description.length < 10) {
            setFormError("A descrição deve ter pelo menos 10 caracteres.");
            setFormLoading(false);
            return;
        }
        if (form.link && !isValidUrl(form.link)) {
            setFormError("O link do projeto deve ser uma URL válida começando com http:// ou https://");
            setFormLoading(false);
            return;
        }
        if (form.image && !isValidUrl(form.image)) {
            setFormError("A URL da imagem deve ser válida e começar com http:// ou https://");
            setFormLoading(false);
            return;
        }
        const tagsArr = form.tags.split(",").map(t => t.trim()).filter(Boolean);
        if (tagsArr.length === 0) {
            setFormError("Adicione pelo menos uma tag.");
            setFormLoading(false);
            return;
        }
        const payload = {
            title: form.title,
            description: form.description,
            tags: tagsArr,
            image: form.image,
            link: form.link,
            featured: form.featured,
            order: Number(form.order) || 1
        };
        try {
            const token = typeof window !== "undefined" ? localStorage.getItem("kadmo_admin_token") : null;
            let res;
            if (editProject) {
                res = await fetch(`https://api.kadmo.tech/projects/${editProject.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token ? { Authorization: `Bearer ${token}` } : {})
                    },
                    body: JSON.stringify(payload)
                });
            } else {
                res = await fetch("https://api.kadmo.tech/projects", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token ? { Authorization: `Bearer ${token}` } : {})
                    },
                    body: JSON.stringify(payload)
                });
            }
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem("kadmo_admin_token");
                router.replace("/admin/login");
                return;
            }
            if (!res.ok) throw new Error("Erro ao salvar projeto");
            setModalOpen(false);
            fetchProjects();
        } catch {
            setFormError("Erro ao salvar projeto");
        } finally {
            setFormLoading(false);
        }
    }

    async function handleDelete(id: number) {
        if (!window.confirm("Tem certeza que deseja remover este projeto?")) return;
        setLoading(true);
        try {
            const token = typeof window !== "undefined" ? localStorage.getItem("kadmo_admin_token") : null;
            const res = await fetch(`https://api.kadmo.tech/projects/${id}`, {
                method: "DELETE",
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem("kadmo_admin_token");
                router.replace("/admin/login");
                return;
            }
            if (!res.ok) throw new Error();
            fetchProjects();
        } catch {
            setError("Erro ao remover projeto");
        } finally {
            setLoading(false);
        }
    }


    if (!auth) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 px-2 py-10 flex flex-col items-center">
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent className="bg-gray-900 border border-gray-700 shadow-2xl text-white">
                    <DialogHeader>
                        <DialogTitle>{editProject ? "Editar Projeto" : "Adicionar Projeto"}</DialogTitle>
                    </DialogHeader>
                    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                        <Input
                            placeholder="Título"
                            value={form.title}
                            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                            required
                        />
                        <Textarea
                            placeholder="Descrição"
                            value={form.description}
                            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                            required
                        />
                        <Input
                            placeholder="Tags (separadas por vírgula)"
                            value={form.tags}
                            onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                        />
                        <Input
                            placeholder="URL da imagem"
                            value={form.image}
                            onChange={e => setForm(f => ({ ...f, image: e.target.value }))}
                        />
                        <Input
                            placeholder="Link do projeto"
                            value={form.link}
                            onChange={e => setForm(f => ({ ...f, link: e.target.value }))}
                        />
                        <div className="flex items-center gap-4 mt-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-white select-none">
                                <Switch
                                    checked={form.featured}
                                    onCheckedChange={(checked: boolean) => setForm(f => ({ ...f, featured: checked }))}
                                    id="featured-switch"
                                />
                                Destaque
                            </label>
                            <Input
                                type="number"
                                min={1}
                                step={1}
                                placeholder="Ordem"
                                value={form.order}
                                onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))}
                                className="w-24"
                            />
                            <span className="text-xs text-gray-400">Ordem</span>
                        </div>
                        {formError && <div className="text-red-400 text-center text-sm font-medium">{formError}</div>}
                        <DialogFooter className="flex flex-row gap-2 justify-end mt-2">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary" className="px-6 py-2 rounded-lg font-semibold">Cancelar</Button>
                            </DialogClose>
                            <Button type="submit" disabled={formLoading} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-all">
                                {formLoading ? "Salvando..." : "Salvar"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
            <div className="w-full max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg">
                            <Image src="/KadmoPFPpintura.png" alt="Logo" width={56} height={56} className="rounded-full bg-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">Painel <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Admin</span></h1>
                            <p className="text-gray-300 text-sm md:text-base mt-1">Gerencie seus projetos de forma prática e visual.</p>
                        </div>
                    </div>
                    <Button type="button" size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg px-8 py-3 rounded-xl hover:scale-105 transition-all" onClick={openAddModal}>
                        Adicionar Projeto
                    </Button>
                </div>
                {selectedProject && (
                    <div className="mb-10">
                        <Card className="bg-gradient-to-br py-[0px] from-gray-900/90 to-gray-800/80 border border-purple-700 shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-white text-xl flex items-center gap-2">
                                    <span className="text-purple-400 font-bold">#{selectedProject.id}</span> {selectedProject.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {selectedProject.tags?.map((tag: string, i: number) => (
                                        <Badge key={i}>{tag}</Badge>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-2 text-lg">{selectedProject.description}</p>
                                {selectedProject.link && (
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline font-medium">Acessar Projeto</a>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                )}
                <div className="">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4M4 11h16" /></svg>
                        Projetos Ativos
                    </h2>
                    <Separator className="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 h-1 opacity-40" />
                    {loading && <div className="text-gray-400">Carregando...</div>}
                    {error && <div className="text-red-400 mb-2">{error}</div>}
                    {!loading && !error && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {projects.map((project: projectApi.Project) => (
                                <Card key={project.id} className="flex flex-col justify-between h-[410px] min-h-[410px] relative bg-gradient-to-br from-[#23213a] to-[#393053] border border-gray-700 shadow-xl hover:shadow-purple-700/40 transition-shadow group overflow-hidden rounded-2xl pb-8 pt-0">
                                    <div className="relative w-full mb-3 rounded-t-2xl overflow-hidden">
                                        {project.image ? (
                                            <div className="relative w-full aspect-[2.5/1] overflow-hidden rounded-t-none">
                                                {/* Blur background */}
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={400}
                                                    height={160}
                                                    className="absolute inset-0 w-full h-full object-cover blur-md scale-110 z-0"
                                                    aria-hidden="true"
                                                    draggable={false}
                                                    sizes="(max-width: 768px) 100vw, 400px"
                                                />
                                                {/* Main image */}
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={400}
                                                    height={160}
                                                    className="relative object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300 z-10 shadow-lg border border-white/10 rounded-t-2xl"
                                                    sizes="(max-width: 768px) 100vw, 400px"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative w-full aspect-[2.5/1] overflow-hidden rounded-t-2xl flex items-center justify-center bg-gray-800 text-gray-400">
                                                <span className="text-base">Sem imagem</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                        {/* ID removido do card */}
                                        <div className="absolute right-4 top-4 z-10 flex gap-2">
                                            <Button
                                                size="icon"
                                                variant="secondary"
                                                className="p-2 bg-purple-700/90 border border-purple-400/60 hover:bg-purple-600 hover:border-purple-300 transition-colors shadow-md"
                                                onClick={() => openEditModal(project)}
                                                title="Editar"
                                            >
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M16.862 3.487a2.5 2.5 0 013.535 3.535l-9.193 9.193a2 2 0 01-.707.464l-4.243 1.414a.5.5 0 01-.632-.632l1.414-4.243a2 2 0 01.464-.707l9.192-9.192z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15 6l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Button>
                                            <Button size="icon" variant="destructive" className="p-2" onClick={() => handleDelete(project.id)} title="Remover">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <CardHeader className="pb-2 pt-0">
                                            <CardTitle className="text-white text-lg line-clamp-1 font-bold">{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col justify-between flex-1">
                                            <div>
                                                <div className="flex flex-nowrap gap-2 mb-2 overflow-x-auto scrollbar-none">
                                                    {project.tags?.map((tag: string, i: number) => (
                                                        <Badge key={i} className="bg-purple-700 text-white px-2 py-1 rounded-full text-xs font-semibold shadow">{tag}</Badge>
                                                    ))}
                                                </div>
                                                <p className="text-gray-300 mb-2 text-sm line-clamp-3">{project.description}</p>
                                            </div>
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline font-medium mt-auto">Acessar Projeto</a>
                                            )}
                                        </CardContent>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
