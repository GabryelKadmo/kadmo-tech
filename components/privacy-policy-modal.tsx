"use client";

import * as React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

export function PrivacyPolicyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-gray-500 hover:text-white transition-all duration-200 text-sm p-0 h-auto cursor-pointer underline-offset-4 hover:underline">
          Política de Privacidade
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[85vh] pb-10 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50">
        <DialogHeader className="border-b border-gray-700/50 pb-4">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Política de Privacidade
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[65vh] pr-4">
          <div className="space-y-6 text-gray-300">
            <section>
              <h3 className="text-lg font-semibold text-white mb-3">
                1. Sobre este Site
              </h3>
              <p className="leading-relaxed">
                Este é um site pessoal para exibição do meu trabalho como desenvolvedor front-end. Não coletamos dados pessoais automaticamente - apenas informações que você decide compartilhar voluntariamente através do formulário de contato.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">
                2. Dados Coletados
              </h3>
              <p className="leading-relaxed mb-3">
                <strong>Único cenário de coleta:</strong> Quando você usa o formulário de contato, podemos receber:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Seu nome</li>
                <li>Endereço de e-mail</li>
                <li>Mensagem enviada</li>
              </ul>
              <p className="mt-4 leading-relaxed mb-3">
                <strong>Dados técnicos:</strong> Como qualquer site, registramos logs anônimos com:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Endereço IP (anonimizado)</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas (sem associar a identidades)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">
                3. Uso dos Dados
              </h3>
              <p className="leading-relaxed mb-3">As informações do formulário de contato são usadas exclusivamente para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Responder sua mensagem</li>
                <li>Enviar informações solicitadas</li>
                <li>Possíveis follow-ups profissionais</li>
              </ul>
              <p className="mt-4 leading-relaxed mb-3">
                Dados técnicos são usados apenas para:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Monitorar tráfego básico</li>
                <li>Identificar problemas técnicos</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">
                4. Armazenamento e Segurança
              </h3>
              <p className="leading-relaxed">
                Mensagens do formulário são armazenadas no serviço de e-mail utilizado (ex: Gmail) e apagadas após 1 ano de inatividade. Não utilizamos bancos de dados ou sistemas complexos para armazenar seus dados.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">
                5. Seus Direitos
              </h3>
              <p className="leading-relaxed mb-3">
                Você pode solicitar a qualquer momento:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Acesso às informações que nos forneceu</li>
                <li>Correção de dados incorretos</li>
                <li>Exclusão de suas informações de contato</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Basta enviar um e-mail para o endereço disponível no site.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">
                6. Alterações
              </h3>
              <p className="leading-relaxed">
                Esta política pode ser atualizada ocasionalmente. A data no topo do documento indica a última revisão.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">
                7. Contato
              </h3>
              <p className="leading-relaxed">
                Para dúvidas sobre privacidade, utilize o mesmo formulário de contato disponível no site.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}