import { Github, InstagramIcon, Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Alex Sison | Contact",
  description: "Alex Sison Portfolio",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto font-mono flex flex-col justify-center items-center mt-44 text-center">
      <h2 className="flex justify-center text-4xl font-bold items-center">
        Feel free to contact me.
      </h2>
      <div className="flex justify-center mt-8">
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&to=alexmortelsison@gmail.com&su=Hello&body=This%20is%20a%20test%20email"
          className="flex space-x-2 hover:underline underline-offset-4"
        >
          <Mail />
          <p>alexismortelsison@gmail.com</p>
        </a>
      </div>
      <div className="flex justify-center mt-8">
        <h2 className="flex space-x-2">
          <Phone />
          <p>###</p>
        </h2>
      </div>
      <div className="flex pt-2 space-x-4 mt-8">
        <a
          href={"https://x.com/urmrdev"}
          target="_blank"
          className="transform hover:scale-125 duration-200"
        >
          <FaXTwitter className="h-6 w-6" />
        </a>
        <a
          href={"https://github.com/alexmortelsison"}
          target="_blank"
          className="transform hover:scale-125 duration-200"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href={"https://www.instagram.com/alexmortelsison/"}
          target="_blank"
          className="transform hover:scale-125 duration-200"
        >
          <InstagramIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
