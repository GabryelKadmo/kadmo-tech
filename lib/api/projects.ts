// Funções para consumir a API de projetos

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  featured?: boolean;
  order?: number;
}

export async function getProjects(token?: string): Promise<Project[]> {
  const res = await fetch("https://api.kadmo.tech/projects", {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Erro ao buscar projetos");
  const result = await res.json();
  return result.data || [];
}

export async function getProjectById(
  id: string,
  token?: string
): Promise<Project | null> {
  const res = await fetch(`https://api.kadmo.tech/projects/${id}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Projeto não encontrado");
  const result = await res.json();
  return result.data || null;
}

export async function createProject(
  payload: Omit<Project, "id">,
  token: string
): Promise<void> {
  const res = await fetch("https://api.kadmo.tech/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Erro ao salvar projeto");
}

export async function updateProject(
  id: number,
  payload: Omit<Project, "id">,
  token: string
): Promise<void> {
  const res = await fetch(`https://api.kadmo.tech/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Erro ao salvar projeto");
}

export async function deleteProject(id: number, token: string): Promise<void> {
  const res = await fetch(`https://api.kadmo.tech/projects/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Erro ao remover projeto");
}
