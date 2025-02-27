import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiMailFill, RiWhatsappFill, RiYoutubeFill } from "react-icons/ri";

const Header: React.FC = () => {
    return (
        <section className="hidden md:flex bg-yellow_d top-0 w-[100%] mx-0 justify-around items-center p-1 text-[18px] md:text-[16px]">
            <div className="flex justify-center items-center flex-1 gap-4">
                <a
                    className="flex justify-center items-center text-[12px] hover:text-blue_d gap-1"
                    href="https://wa.me/5511947934827"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RiWhatsappFill className="text-xl hover:text-blue_d" />
                    +55 (11) 94793-4827
                </a>
                <a
                    className="flex justify-center items-center text-[12px] hover:text-blue_d gap-1"
                    href="mailto:profdanmatema@gmail.com">
                    <RiMailFill className="text-xl hover:text-blue_d" />
                    profdanmatema@gmail.com
                </a>
            </div>
            <div className="flex justify-end items-center gap-1 flex-1 px-4">
                <Link
                    title="Instagram"
                    className="flex justify-center items-center text-[12px]"
                    href={"https://www.instagram.com/danmatema/"}
                    target="_blank">
                    <RiInstagramFill className="text-xl hover:text-blue_d" />
                </Link>
                <Link
                    title="Facebook"
                    className="flex justify-center items-center text-[12px] "
                    href={"https://www.facebook.com/danmatema/"}
                    target="_blank">
                    <RiFacebookFill className="text-xl hover:text-blue_d" />
                </Link>
                <Link
                    title="Youtube"
                    className="flex justify-center items-center text-[12px]"
                    href={"https://www.youtube.com/c/%C3%89oesquema"}
                    target="_blank">
                    <RiYoutubeFill className="text-xl hover:text-blue_d transition-colors" />
                </Link>
            </div>
        </section>
    );
};

export default Header;
