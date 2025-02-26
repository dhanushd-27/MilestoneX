import x from "@/assets/icons/x-social.svg"
import linkedin from "@/assets/icons/linkedin.svg"
import github from "@/assets/icons/github.svg"
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    icon: x,
    link: "https://x.com/orca_x27",
    alt: "x-png"
  },
  {
      icon: github,
      link: "https://github.com/dhanushd-27",
      alt: "git-png"
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/dhanush27/",
    alt: "linkedin-png"
  }
]

export const Footer = () => {
  return (
    <section className="text-white/60 w-full text-center justify-center border-t border-white/20 py-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:px-20">
        <h6>© 2024 Your Company, Inc. All rights reserved</h6>
        <div className="flex gap-4 justify-center items-center">
          { socials.map(({ icon, link, alt }, index)  => (
            <Link href={ link } key={ index } target="_blank"><Image src={ icon } alt={ alt } height={ 24 } width={ 24 } className="invert"/></Link>
          ))
          }
        </div>
      </div>
    </section>
  );
};
