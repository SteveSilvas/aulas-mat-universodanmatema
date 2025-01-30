import React from 'react';
import Image from 'next/image';
import danmatema_home from "../../../assets/professor_danilo.png";
import DefaultButton from '@/components/DefaultButton';
const Flyer: React.FC = () => {
    return (
        <section id="flyer" className="min-h-[50vh] flex flex-col md:flex-row-reverse bg-gray-100 p-6">
            <figure className="flex justify-center items-center w-full md:w-1/2 animate-slideInRight">
                <Image
                    className="h-[75%] w-auto rounded-lg shadow-lg"
                    src={danmatema_home}
                    title="Fotografia do Vendedor"
                    alt="Fotografia do Vendedor"
                    width={500}
                    height={500}
                    priority
                />
            </figure>

            <section className="flex flex-col justify-center items-center w-full md:w-1/2 animate-slideInLeft">
                <h2 className="text-2xl md:text-4xl font-bold text-blue_d">
                    Não espere mais, as vagas são limitadas!
                </h2>
                <p className="mt-2 text-lg md:text-xl">
                    📌 Entre em contato para mais informações e reserve o melhor para sua criança.
                </p>
                <DefaultButton
                    to='#contato'
                    title='Garanta sua Vaga Agora!'
                    className="mt-4 bg-blue_d text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-600 transition"
                />
            </section>
        </section>
    );
};

export default Flyer;