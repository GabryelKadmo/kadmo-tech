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

export function TermsOfServiceModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="text-gray-500 hover:text-white transition-all duration-200 text-sm p-0 h-auto cursor-pointer underline-offset-4 hover:underline">
                    Termos de Serviço
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl max-h-[85vh] pb-10 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50">
                <DialogHeader className="border-b border-gray-700/50 pb-4">
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        Termos de Serviço
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[65vh] pr-4">
                    <div className="space-y-6 text-gray-300">
                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                1. Aceitação dos Termos
                            </h3>
                            <p className="leading-relaxed">
                                Ao acessar e utilizar este site, você concorda em cumprir estes Termos de Serviço e nossa Política de Privacidade. Caso não concorde, por favor, não utilize nosso site.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                2. Uso do Site
                            </h3>
                            <p className="leading-relaxed mb-3">
                                Este site tem como objetivo apresentar meu trabalho como desenvolvedor front-end, incluindo:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Exibição de projetos pessoais e profissionais</li>
                                <li>Informações sobre minhas habilidades e experiência</li>
                                <li>Meios para contato profissional</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                3. Propriedade Intelectual
                            </h3>
                            <p className="leading-relaxed">
                                Todo o conteúdo deste site, incluindo códigos, designs, textos, imagens e demais materiais, são de minha propriedade ou licenciados para mim, e estão protegidos por leis de direitos autorais.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                4. Limitações de Uso
                            </h3>
                            <p className="leading-relaxed mb-3">Você concorda em não:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
                                <li>Utilizar o site para fins ilegais ou não autorizados</li>
                                <li>Modificar, adaptar ou fazer engenharia reversa do site</li>
                                <li>Utilizar o site de forma que possa prejudicar seu funcionamento</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                5. Links para Terceiros
                            </h3>
                            <p className="leading-relaxed">
                                O site pode conter links para outros sites. Não tenho controle sobre e não assumo responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                6. Isenção de Garantias
                            </h3>
                            <p className="leading-relaxed">
                                O site é fornecido &quot;no estado em que se encontra&quot;, sem garantias de qualquer tipo, expressas ou implícitas. Não garanto que o site será ininterrupto, seguro ou livre de erros.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                7. Limitação de Responsabilidade
                            </h3>
                            <p className="leading-relaxed">
                                Em nenhuma circunstância serei responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou incapacidade de uso deste site.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                8. Alterações nos Termos
                            </h3>
                            <p className="leading-relaxed">
                                Reservo-me o direito de modificar estes Termos a qualquer momento. Alterações entrarão em vigor imediatamente após sua publicação no site.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                9. Contato
                            </h3>
                            <p className="leading-relaxed">
                                Para quaisquer dúvidas sobre estes Termos de Serviço, entre em contato através dos meios disponíveis no site.
                            </p>
                        </section>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}