"use client";
import { useState } from "react";
import { useAtom } from "jotai";
import toastContext from "@/context/ToastAtom";
import ContactBar from "@/components/ContactBar";
import { sendEmailContact } from "@/services/SendEmailService";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [cicle, setCicle] = useState("");

    const [, setToast] = useAtom(toastContext);
    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidateFields())
            return;

        const emailSended = await sendEmailContact({
            fromName: name,
            fromEmail: email,
            phone: phone,
            cicle: cicle,
            message: message
        })

        setToast({
            isOpen: true,
            text: emailSended.message ?? ""
        })
    }

    const isValidateFields = () => {
        if (!name || !phone || !email || !message || !cicle) {
            setToast({
                isOpen: true,
                text: "Preencha todos os campos."
            });
            return false;
        }
        return true;
    }

    return (
        <div className="text-center bg-white h-full " id="contato">
            <section className="w-full flex flex-col text-start items-center">
                <h2 className="text-2xl font-bold">Entre em contato</h2>
                <form
                    className="flex flex-col items-center w-full gap-4"
                    onSubmit={handleSendEmail}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4"
                    />
                    <select
                        value={cicle}
                        onChange={(e) => setCicle(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4">
                        <option value="" disabled selected>
                            Selecione o Ciclo
                        </option>
                        <option value="1">1º Ano Fundamental</option>
                        <option value="2">2º Ano Fundamental</option>
                        <option value="3">3º Ano Fundamental</option>
                        <option value="4">4º Ano Fundamental</option>
                        <option value="5">5º Ano Fundamental</option>
                        <option value="6">6º Ano Fundamental</option>
                        <option value="7">7º Ano Fundamental</option>
                        <option value="8">8º Ano Fundamental</option>
                        <option value="9">9º Ano Fundamental</option>
                        <option value="1-medio">1º Ano - Ensino Médio</option>
                        <option value="2-medio">2º Ano - Ensino Médio</option>
                        <option value="3-medio">3º Ano - Ensino Médio</option>
                        <option value="pre-vestibular">Pré-vestibular</option>
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="WhatsApp"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4"
                        pattern="\+?[0-9\s\-\(\)]{7,15}"
                        inputMode="tel"
                        title="Por favor, insira um número de telefone válido."
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Mensagem"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue_d :hover:bg-yellow_d text-white p-2 rounded-md w-3/4 mb-4"
                    >
                        Enviar
                    </button>
                </form>
                <ContactBar />

                <div className="w-3/4 flex flex-col text-center py-4">
                    <p className="text-xl text-gray-800">
                        Muito obrigado por acreditar na matemática e chegar até aqui!
                    </p>
                    <p className="text-xl text-gray-800 ">
                        Entre em contato para desenvolvermos soluções juntos e me acompanhe nas redes sociais.
                    </p>
                </div>
            </section>
        </div>
    );
}
