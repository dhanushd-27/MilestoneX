import Menu from '@/assets/icons/menu.svg'
import Image from "next/image";
import Logo from "@/assets/images/logosaas.png"

export const Navbar = () => {
  return (
    <div
      className="bg-black h-20 p-4 flex justify-between items-center"
    >
      <div className="relative">
        <div className="absolute bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] w-12 h-10 top-3 blur-md"></div>
        <Image src={Logo} alt="Logo" height={48} width={48} className="relative"></Image>
      </div>

      <nav className="hidden sm:flex gap-6 items-center justify-center">
        <ul className="text-gray-400 flex gap-6">
          <li>About</li>
          <li>Features</li>
          <li>Updates</li>
          <li>Help</li>
          <li>Customers</li>
        </ul>
        <button className="bg-white px-4 py-2 rounded-lg">Get for free</button>
      </nav>

      <div className="sm:hidden border border-gray-400 rounded-lg p-2">
        <Image src={Menu} alt="menu" height={24} width={24} className="invert"></Image>
      </div>
    </div>
  )
};
