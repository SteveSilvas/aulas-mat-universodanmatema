import React from 'react';

const Plains: React.FC = () => {
    return (
        <section id="planos" className="bg-gray-100 text-center flex flex-col items-center h-[50vh]">
            <h2 className="text-2xl font-bold text-blue_d my-6">Planos Disponíveis</h2>
            <div className="mt-4 flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h3 className="text-xl font-bold">Plano Básico</h3>
                    <p>💡 1 Aula por Semana</p>
                    <p>💰 R$ 350/mês</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h3 className="text-xl font-bold">Plano Avançado</h3>
                    <p>🚀 2 Aulas por Semana</p>
                    <p>💰 R$ 590/mês</p>
                </div>
            </div>
        </section>
    );
}

export default Plains;