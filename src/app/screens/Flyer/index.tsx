import React from 'react';

const Flyer: React.FC = () => {
    return (
        <section id="flyer" className="h-[50vh] p-6 text-center flex flex-col items-center justify-center bg-gray-100">
            <h2 className="text-2xl font-bold">Não Espere Mais – Vagas Limitadas!</h2>
            <p className="mt-2">📌 Garanta a sua vaga agora mesmo!</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
                Garanta sua Vaga Agora!
            </button>
        </section>
    );
}

export default Flyer;