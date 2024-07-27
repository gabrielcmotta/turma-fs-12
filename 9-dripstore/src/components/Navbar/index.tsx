import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import Button from "../Button";
import InputSearch from "../InputSearch";
import LogoNavbar from "./LogoNavbar";
import { useState } from "react";

export const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearchBar = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div className="h-48 bg-[#FFF] sm:px-14 py-8 flex flex-col content-center gap-4">
      <div className="flex justify-center md:justify-between gap-14">
        <div className="flex items-center cursor-pointer md:hidden" >
          <Bars3Icon className="w-6 h-6 text-dark-gray" />
        </div>
        <LogoNavbar />
        <InputSearch />
        <div className="items-center hidden gap-4 md:flex">
          <a href="#" className="underline text-dark-gray">Cadastre-se</a>
          <Button onClick={() => console.log("Clicou")}>Entrar</Button>
        </div>
        <div className="flex items-center">
          <a onClick={toggleSearchBar} className="flex items-center h-full px-5 text-white rounded-lg cursor-pointer md:hidden">
              <MagnifyingGlassIcon className={"size-6 " + (searchActive == true ? "text-primary" : "text-dark-gray")}/>
          </a>
          <ShoppingCartIcon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div>MENU</div>
    </div>
  )
};
