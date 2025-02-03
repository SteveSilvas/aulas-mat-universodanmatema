"use client";
import { useEffect } from "react";
import ToastComponent from "@/components/Toast";
import { useAtom } from "jotai";
import toastContext from "@/context/ToastAtom";
import ContactButton from "@/components/ContactButton";
import Navbar from "@/components/Navbar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const [toast, setToast] = useAtom(toastContext);

    useEffect(() => {
        if (toast.isOpen) {
            setTimeout(() => {
                setToast({ isOpen: false, text: "" });
            }, 5000);
        }
    }, [toast, setToast]);

    return (
        <>
            <div className="fixed z-50 right-0">
                {toast.isOpen && <ToastComponent text={toast.text} />}
            </div>
            <Navbar />
            <ContactButton />
            {children}
        </>
    );
};

export default ClientLayout;
