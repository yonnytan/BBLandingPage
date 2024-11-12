import Image from "next/image";
import Link from "next/link";
import TikLogo from "@/assets/tiktok-logo.png";
import Logo from "@/assets/bbLogo.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-.75 before:bottom-0 before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] before:absolute">
          <Image src={Logo} style={{borderRadius: 5}} height={40} alt="bb Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <Link href="/">Home</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/support">Support</Link>
        </nav>
        <div className="grid place-items-center mt-6">
          <button>
            <Image src={TikLogo} height={40} alt="tik logo" />
          </button>
        </div>
        <p className="mt-6">&copy; 2024 Beatbytes LLC. All rights reserved</p>
      </div>
    </footer>
  );
};
