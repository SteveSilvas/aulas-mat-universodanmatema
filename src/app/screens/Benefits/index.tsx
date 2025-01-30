import React from 'react';

// import { Container } from './styles';

const Benefits: React.FC = () => {
    return (
        <section id="beneficios" className="text-center flex flex-col items-center px-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-blue_d  my-6">Benefícios dos Planos</h2>
            <ul className="w-full space-y-2 text-lg flex flex-col items-start md:w-[50%] bg-white shadow-lg rounded-lg p-4">
                <li>✅ Aulas Personalizadas</li>
                <li>✅ Plataforma Interativa Matific</li>
                <li>✅ Gravações das Aulas</li>
                <li>✅ Materiais Exclusivos</li>
                <li>✅ Relatórios e Feedbacks</li>
            </ul>
        </section>
    );
}

export default Benefits;