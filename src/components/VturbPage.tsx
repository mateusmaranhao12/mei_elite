'use client'

import React from 'react';

const VturbPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-4">Não feche essa página!</h1>

            <p className="text-white text-base sm:text-lg max-w-2xl leading-relaxed">
                Antes de liberar para você o segredo de ser um <span className="text-red-500 font-bold">MEI BEM SUCEDIDO</span>,
                assista esse vídeo até o fim para ganhar um <span className="text-red-500 font-bold">PRESENTE EXCLUSIVO!</span>
            </p>

            <div className="my-8 w-full max-w-2xl">
                {/* Video do VTURB */}
                <video
                    controls
                    preload="auto"
                    className="w-full rounded-md shadow-lg"
                >
                    <source src="https://link-do-seu-video.vturb.com/video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos em HTML5.
                </video>
            </div>

            <a
                href="/checkout-section"
                className="bg-red-600 hover:bg-red-700 transition-colors text-white font-bold py-3 px-6 rounded-full text-lg"
            >
                Acesse agora
            </a>
        </div>
    );
};

export default VturbPage;
