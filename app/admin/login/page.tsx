"use client";


import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkToken as checkTokenApi } from "../../../lib/api/auth";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AdminLoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function checkIfLoggedIn() {
            const token = typeof window !== "undefined" ? localStorage.getItem("kadmo_admin_token") : null;
            if (token) {
                try {
                    const valid = await checkTokenApi(token);
                    if (valid) {
                        router.replace("/admin");
                    }
                } catch {
                    // Se der erro, não faz nada, deixa na tela de login
                }
            }
        }
        checkIfLoggedIn();
    }, [router]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("https://api.kadmo.tech/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            if (res.ok) {
                const data = await res.json();
                if (data.token) {
                    localStorage.setItem("kadmo_admin_token", data.token);
                    router.push("/admin");
                } else {
                    setError("Token não recebido. Verifique as credenciais.");
                }
            } else {
                setError("Usuário ou senha inválidos.");
            }
        } catch {
            setError("Erro ao conectar com o servidor.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#23232a] to-[#393943] px-4 relative overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/30 via-pink-400/20 to-transparent rounded-full blur-3xl z-0" />
            <Card className="w-full max-w-md shadow-2xl border-0 bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md relative z-10">
                <CardHeader className="flex flex-col items-center gap-2 pt-8 pb-2">
                    <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg mb-2">
                        <Image src="/KadmoPFPpintura.png" alt="Logo" width={64} height={64} className="rounded-full bg-white w-16 h-16 object-cover" />
                    </div>
                    <CardTitle className="text-center text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">Acesso Restrito</CardTitle>
                    <span className="text-sm text-gray-400 font-medium mt-1">Painel administrativo Kadmo Tech</span>
                </CardHeader>
                <Separator className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 opacity-40 h-1" />
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <Input
                            type="text"
                            placeholder="Usuário"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            autoFocus
                            required
                            className="bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-400/30 rounded-lg px-4 py-3 shadow"
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-400/30 rounded-lg px-4 py-3 shadow"
                        />
                        {error && <div className="text-red-400 text-center text-sm font-medium bg-red-900/30 border border-red-700 rounded-lg py-2 px-3 mt-1">{error}</div>}
                        <Button
                            type="submit"
                            size="lg"
                            className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg shadow-lg text-lg tracking-wide"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2 justify-center">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                                    Entrando...
                                </span>
                            ) : "Entrar"}
                        </Button>
                    </form>
                </CardContent>
                <div className="text-center text-xs text-gray-500 mt-6 mb-2">&copy; {new Date().getFullYear()} Kadmo Tech. Todos os direitos reservados.</div>
            </Card>
        </div>
    );
}
