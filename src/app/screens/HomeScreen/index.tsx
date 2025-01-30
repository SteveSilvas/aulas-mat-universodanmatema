import DefaultButton from '@/components/DefaultButton';
import React from 'react';

const HomeScreen: React.FC = () => {
    return (
        <>
            <header id="inicio" className="bg-blue_d h-[50vh] text-white text-center py-6 px-4 flex flex-col items-center">
                <h1 className="text-3xl font-bold">Transforme a matemática no maior aliado do sua criança!</h1>
                <p className="text-lg mt-2">Escolha a Melhor Solução para Garantir Resultados Reais nos Estudos.</p>
                <DefaultButton
                    title="Quero saber mais!"
                    to="#contato"
                    className="flex items-center md:w-1/6 mt-4 text:black bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-xl"
                />
            </header>

            <section className="p-6 text-center h-[40vh]">
                <p className="text-xl">🧮 +10 anos de experiência:
                    <span className='block'> Ajudando alunos a superar dificuldades e ganhar confiança.</span>
                </p>
                <p className="text-xl mt-2">📈 Resultados comprovados:
                    <span> Pais satisfeitos e alunos preparados para o sucesso.</span>
                </p>
            </section>
        </>
    );
}

export default HomeScreen;