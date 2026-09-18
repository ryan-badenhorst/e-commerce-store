import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="mt-13 px-35 py-5 flex justify-between bg-green-50 font-serif text-xl">
            <div className="">
                <p>© 2026 Rove & Co.</p>
            </div>

            <div className="flex flex-row gap-5 pt-1">
                <FaSquareInstagram />
                <FaTwitter />
            </div>
        </div>
    )
}