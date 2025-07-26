// Função para checar validade do token

export async function checkToken(token: string): Promise<boolean> {
  const res = await fetch("https://api.kadmo.tech/auth/check-token", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 200) return true;
  return false;
}
