"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export default function ShareBtn({ url }) {
  return (
    <div className="flex items-center justify-end gap-10 text-black">
      <FacebookShareButton url={url}>
        <FaFacebookF
          size={20}
          className="hover:text-primary text-black"
          aria-label="Facebook"
        />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <FaLinkedinIn
          size={20}
          className="hover:text-primary text-black"
          aria-label="LinkdIn"
        />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <FaXTwitter
          size={20}
          className="hover:text-primary text-black"
          aria-label="Twitter"
        />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <FaWhatsapp
          size={20}
          className="hover:text-primary text-black"
          aria-label="WhatsApp"
        />
      </WhatsappShareButton>
    </div>
  );
}
