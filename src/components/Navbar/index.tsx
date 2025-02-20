"use client";
import Link from "next/link";
import { useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`${isOpen ? "h-screen" : "h-auto"} md:h-auto top-0 left-0 bg-white text-black flex flex-col md:flex-row align-center items-center p-4`}
        >
            <div className="flex justify-center md:justify-start items-center relative w-full md:w-auto p-4 md:p-0">
                {isOpen ? <GrClose
                    className="cursor-pointer absolute right-4 md:hidden"
                    onClick={toggleSidebar} /> :
                    <GrMenu
                        className="cursor-pointer absolute right-4 md:hidden"
                        onClick={toggleSidebar}
                    />}
            </div>
            <nav className="w-[100%] h-[100%] text-[18px] md:h-auto flex flex-col md:flex-row align-center items-center justify-center md:justify-end gap-10">
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Inicio
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#planos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Planos
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#beneficios"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Benefícios
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#depoimentos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Depoimentos
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#contato"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Contato
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
