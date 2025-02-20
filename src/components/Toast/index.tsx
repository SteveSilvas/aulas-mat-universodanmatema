"use client";
import { Toast, ToastToggle } from "flowbite-react";
import { RiMessage2Fill } from "react-icons/ri";
import { useAtom } from 'jotai';
import { useEffect } from "react";
import toastContext from "@/context/ToastAtom";

const ToastComponent: React.FC = ({
}) => {
    const [toast, setToast] = useAtom(toastContext);

    useEffect(() => {
        if (toast.isOpen) {
            setTimeout(() => {
                setToast({
                    isOpen: false,
                    text: ''
                });
            }, 5000);
        }
    }, [toast, setToast]);

    return toast.isOpen ? (
        <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                <RiMessage2Fill className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
                {toast.text}
            </div>
            <ToastToggle />
        </Toast>
    ) : null;
}

export default ToastComponent;