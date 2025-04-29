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
                <Button variant="link" className="text-gray-500 hover:text-gray-300 text-sm p-0 h-auto cursor-pointer">
                    Termos de Serviço
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl max-h-[80vh] pb-10">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Termos de Serviço</DialogTitle>
                    <DialogDescription>
                        Última atualização: {new Date().toLocaleDateString()}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-4 text-black">
                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">1. Aceitação dos Termos</h3>
                            <p>
                                Ao acessar e utilizar este site, você concorda em cumprir estes Termos de Serviço e nossa Política de Privacidade. Caso não concorde, por favor, não utilize nosso site.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">2. Uso do Site</h3>
                            <p>
                                Este site tem como objetivo apresentar meu trabalho como desenvolvedor front-end, incluindo:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Exibição de projetos pessoais e profissionais</li>
                                <li>Informações sobre minhas habilidades e experiência</li>
                                <li>Meios para contato profissional</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">3. Propriedade Intelectual</h3>
                            <p>
                                Todo o conteúdo deste site, incluindo códigos, designs, textos, imagens e demais materiais, são de minha propriedade ou licenciados para mim, e estão protegidos por leis de direitos autorais.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">4. Limitações de Uso</h3>
                            <p>Você concorda em não:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
                                <li>Utilizar o site para fins ilegais ou não autorizados</li>
                                <li>Modificar, adaptar ou fazer engenharia reversa do site</li>
                                <li>Utilizar o site de forma que possa prejudicar seu funcionamento</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">5. Links para Terceiros</h3>
                            <p>
                                O site pode conter links para outros sites. Não tenho controle sobre e não assumo responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">6. Isenção de Garantias</h3>
                            <p>
                                O site é fornecido &quot;no estado em que se encontra&quot;, sem garantias de qualquer tipo, expressas ou implícitas. Não garanto que o site será ininterrupto, seguro ou livre de erros.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">7. Limitação de Responsabilidade</h3>
                            <p>
                                Em nenhuma circunstância serei responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou incapacidade de uso deste site.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">8. Alterações nos Termos</h3>
                            <p>
                                Reservo-me o direito de modificar estes Termos a qualquer momento. Alterações entrarão em vigor imediatamente após sua publicação no site.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">9. Contato</h3>
                            <p>
                                Para quaisquer dúvidas sobre estes Termos de Serviço, entre em contato através dos meios disponíveis no site.
                            </p>
                        </section>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}