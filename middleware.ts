import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Só intercepta a rota de login do admin
  if (request.nextUrl.pathname === "/admin/login") {
    // Tenta pegar o token do localStorage (não disponível no middleware),
    // mas pode pegar de cookies se o token for salvo lá.
    const token = request.cookies.get("kadmo_admin_token")?.value;
    if (token) {
      // Se já tem token, redireciona para o painel
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/login"],
};
