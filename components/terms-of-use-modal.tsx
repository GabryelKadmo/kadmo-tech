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

export function TermsOfUseModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="text-gray-500 hover:text-gray-300 text-sm p-0 h-auto cursor-pointer">
                    Termos de Serviço
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl max-h-[80vh] pb-10">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Termos de Uso</DialogTitle>
                    <DialogDescription>
                        Última atualização: {new Date().toLocaleDateString()}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-4 text-black">
                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">1. Aceitação dos Termos</h3>
                            <p>
                                Ao acessar e utilizar os serviços oferecidos, você concorda em cumprir estes Termos de Uso.
                                Caso não concorde com qualquer parte destes termos, você não deve utilizar nossos serviços.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">2. Serviços Oferecidos</h3>
                            <p>
                                Nós fornecemos serviços de desenvolvimento web, design UI/UX e soluções tecnológicas personalizadas,
                                conforme descrito em nosso site e acordado com cada cliente.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">3. Responsabilidades do Usuário</h3>
                            <p>Como usuário de nossos serviços, você concorda em:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Fornecer informações precisas e completas quando necessário</li>
                                <li>Utilizar nossos serviços apenas para fins legais</li>
                                <li>Não reproduzir, duplicar ou revender qualquer parte de nossos serviços</li>
                                <li>Respeitar todos os direitos de propriedade intelectual</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">4. Propriedade Intelectual</h3>
                            <p>
                                Todo o conteúdo e tecnologia relacionados a nossos serviços são de nossa propriedade ou licenciados
                                para nós. Você concorda em não copiar, modificar ou distribuir qualquer parte de nossos serviços sem
                                autorização por escrito.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">5. Pagamentos e Reembolsos</h3>
                            <p>
                                Os valores e condições de pagamento serão acordados individualmente com cada cliente. Políticas de
                                reembolso serão claramente especificadas em cada contrato ou proposta de serviço.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">6. Limitação de Responsabilidade</h3>
                            <p>
                                Nós não seremos responsáveis por quaisquer danos indiretos, incidentais, especiais ou consequenciais
                                resultantes do uso ou incapacidade de usar nossos serviços.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">7. Modificações nos Termos</h3>
                            <p>
                                Reservamos o direito de modificar estes Termos de Uso a qualquer momento. Alterações significativas
                                serão comunicadas aos clientes ativos.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">8. Lei Aplicável</h3>
                            <p>
                                Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar conflitos
                                de disposições legais.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-black mb-2">9. Contato</h3>
                            <p>
                                Para quaisquer dúvidas sobre estes Termos de Uso, entre em contato conosco através dos canais
                                disponíveis em nosso site.
                            </p>
                        </section>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}