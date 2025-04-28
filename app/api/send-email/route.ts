import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${"re_MukT3YpH_5nRTRLKHjvYtSvYh5f1mwvXF"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "gabryelkadmo@gmail.com",
        subject: `Nova mensagem de ${name} (${email})`,
        html: `
          <html>
            <head>
              <style>
                body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f7f8fb;
                  margin: 0;
                  padding: 0;
                  color: #333333;
                }
                .container {
                  width: 100%;
                  max-width: 700px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #ffffff;
                  border-radius: 8px;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
                .header {
                  text-align: left;
                  margin-bottom: 20px;
                }
                .header img {
                  max-width: 120px;
                  margin-bottom: 15px;
                }
                .content {
                  color: #333333;
                  line-height: 1.8;
                  padding: 20px;
                }
                .content h1 {
                  font-size: 24px;
                  color: #2c3e50;
                  margin-bottom: 15px;
                }
                .content p {
                  margin: 10px 0;
                  font-size: 16px;
                  color: #555555;
                }
                .content p strong {
                  color: #2c3e50;
                }
                .footer {
                  text-align: center;
                  font-size: 12px;
                  color: #999999;
                  margin-top: 20px;
                }
                .footer p {
                  margin: 5px 0;
                }
                @media (max-width: 600px) {
                  .container {
                    padding: 15px;
                  }
                  .content h1 {
                    font-size: 20px;
                  }
                  .content p {
                    font-size: 14px;
                  }
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="content">
                  <h1>Nova mensagem do seu portfólio</h1>
                  <p><strong>Nome:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Mensagem:</strong></p>
                  <p>${message}</p>
                </div>
                <div class="footer">
                  <p>Este é um e-mail gerado automaticamente. Por favor, não responda.</p>
                  <p>© 2025 Portfólio de Gabryel Kadmo. Todos os direitos reservados.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    const data = (await res.json()) as { error?: string };

    if (res.ok) {
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } else {
      throw new Error(data?.error || "Failed to send email");
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
