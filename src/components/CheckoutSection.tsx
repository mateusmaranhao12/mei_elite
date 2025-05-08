'use client'

import Image from 'next/image';

const CheckoutSection = () => {
    return (
        <section className="bg-white text-black px-4 py-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center font-bold text-xl mb-4">Oferta Termina Em</h2>

                {/* Contador falso */}
                <div className="flex justify-center gap-4 mb-8 text-center">
                    <div>
                        <div className="text-3xl font-bold">00</div>
                        <div className="text-xs text-gray-600">Horas</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">00</div>
                        <div className="text-xs text-gray-600">Minutos</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">00</div>
                        <div className="text-xs text-gray-600">Segundos</div>
                    </div>
                </div>

                {/* Container principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulário */}
                    <div className="border p-6 rounded-md shadow-md bg-gray-100">
                        <h3 className="font-bold mb-2">1. Pagamento Seguro</h3>
                        <p className="text-sm mb-4">
                            Usaremos seus dados para: Identificar seu perfil, histórico de compras,
                            enviar notificações necessárias.
                        </p>

                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Nome completo*"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="E-mail*"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Celular/WhatsApp (com DDD)*"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                placeholder="CPF*"
                                className="p-2 border rounded"
                                required
                            />
                            <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800">
                                Continuar
                            </button>
                        </form>
                    </div>

                    {/* Resumo do Produto */}
                    <div className="border p-6 rounded-md shadow-md bg-gray-50">
                        <h3 className="font-bold mb-2">RESUMO</h3>
                        <p className="text-sm mb-4">Produto: Programa de 10 Semanas Sistema Unfair Advantage</p>
                        <p className="text-green-600 font-semibold text-lg mb-4">TOTAL: R$ 297,00</p>
                        <Image
                            src="/assets/capa-curso.jpeg"
                            alt="Produto"
                            width={300}
                            height={400}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutSection;
