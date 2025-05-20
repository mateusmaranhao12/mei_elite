'use client'

import React from 'react';

const VturbPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-4">Não feche essa página!</h1>

            <div className="relative w-full max-w-2xl mt-5 mb-5 aspect-video overflow-hidden rounded-md shadow-lg">
                <iframe
                    src="https://scripts.converteai.net/d31a78cc-60f1-4b42-bf38-9c4de34467c7/players/681bc8510e75485d47123829/embed.html"
                    title="VTurb Video"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VturbPage;
