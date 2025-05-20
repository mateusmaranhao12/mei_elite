'use client'

import { useRouter } from 'next/navigation';


const ObrigadoPage = () => {

    const router = useRouter()

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Cabeçalho */}
            <div className="bg-gray-800 text-white py-4 text-center text-xl font-bold">
                LEIA COM ATENÇÃO
            </div>

            {/* Conteúdo principal */}
            <div className="max-w-3xl mx-auto mt-10 border p-6 rounded shadow-md text-center">
                {/* Seta de Voltar */}
                <button
                    onClick={() => router.push('/')}
                    className="absolute top-4 left-4 flex items-center bg-black text-white p-2 rounded-lg hover:text-gray-600 cursor-pointer"
                >
                    Voltar
                </button>

                <p className="font-semibold text-lg mb-4">
                    As vagas para o programa eram realmente limitadas e nesse momento todos os acessos para o Protocolo MEI de Elite já foram preenchidos, mas...
                </p>

                <p className="text-sm mb-6">
                    Eu guardei seu contato aqui e assim que novos acessos forem liberados eu vou pessoalmente te enviar uma mensagem para te avisar...
                    Te vejo em breve!
                    <br />
                    <strong>- - Otávio Coutinho</strong>
                </p>

                {/* Imagem ilustrativa (substituindo o gif) */}
                <div className="inline-block">
                    <img
                        src="/assets/otavio.jpeg"
                        alt="Imagem obrigado"
                        width={320}
                        height={180}
                        className="rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default ObrigadoPage;
