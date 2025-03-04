import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default function ShareBtn() {
  return (
    <div className="flex items-center justify-end gap-10 text-black">
      <span>
        <FaFacebookF size={20} />
      </span>
      <span>
        <FaLinkedinIn size={20} />
      </span>
      <span>
        <FaXTwitter size={20} />
      </span>
      <span>
        <FaInstagram size={20} />
      </span>
    </div>
  );
}
