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
                <Button variant="link" className="text-gray-500 hover:text-gray-300 text-sm p-0 h-auto cursor-pointer">
                    Política de Privacidade
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl max-h-[80vh] pb-10">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Política de Privacidade</DialogTitle>
                    <DialogDescription>
                        Última atualização: {new Date().toLocaleDateString()}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-4 text-black">
                        <section>
                            <h3 className="text-lg font-semibold text-balck mb-2">1. Introdução</h3>
                            <p>
                                Esta Política de Privacidade descreve como suas informações pessoais são coletadas,
                                usadas e compartilhadas quando você visita ou utiliza nossos serviços.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">2. Informações que Coletamos</h3>
                            <p>
                                Podemos coletar informações pessoais que você nos fornece voluntariamente, como nome,
                                endereço de e-mail, número de telefone e outras informações de contato quando você:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Preenche formulários em nosso site</li>
                                <li>Se inscreve para receber nossa newsletter</li>
                                <li>Realiza uma compra ou contrata nossos serviços</li>
                                <li>Entra em contato conosco</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">3. Como Usamos Suas Informações</h3>
                            <p>Utilizamos as informações coletadas para:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Fornecer e manter nossos serviços</li>
                                <li>Notificá-lo sobre mudanças em nossos serviços</li>
                                <li>Permitir que você participe de recursos interativos</li>
                                <li>Fornecer suporte ao cliente</li>
                                <li>Coletar análises ou informações valiosas para melhorar nossos serviços</li>
                                <li>Monitorar o uso de nossos serviços</li>
                                <li>Detectar, prevenir e resolver problemas técnicos</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">4. Compartilhamento de Dados</h3>
                            <p>
                                Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário
                                para fornecer nossos serviços, cumprir com a lei ou proteger nossos direitos.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">5. Segurança de Dados</h3>
                            <p>
                                Implementamos medidas de segurança para proteger suas informações pessoais contra
                                acesso não autorizado, alteração, divulgação ou destruição.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">6. Seus Direitos</h3>
                            <p>
                                Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais.
                                Para exercer esses direitos, entre em contato conosco.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">7. Alterações nesta Política</h3>
                            <p>
                                Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você
                                revise esta página regularmente para quaisquer alterações.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">8. Contato</h3>
                            <p>
                                Para dúvidas sobre esta Política de Privacidade, entre em contato conosco através
                                dos meios disponíveis em nosso site.
                            </p>
                        </section>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}