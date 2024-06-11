"use client";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import AvatarPerfil from "./avatar";
import MenurBar from "./menu-mobile";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" h-20 flex items-center justify-between my-5 mx-0 md:mx-4  p-2 md:p-3 shadow-md shadow-violet-500">
      <div className="flex">
        <AvatarPerfil />
        <div className="flex flex-col text-left my-2 ml-2">
          <p>Matheus Fernandes</p>
          <p className="text-gray-500">Desenvolvedor Fullstack</p>
        </div>
      </div>
      <div className="hidden md:flex rounded-md border-2">
        <Button className="rounded-none hover:border-b-4 border-violet-400">
          Perfil
        </Button>
        <Button className="rounded-none hover:border-b-4 border-violet-400">
          Habilidades
        </Button>
        <Button className="rounded-none hover:border-b-4 border-violet-400">
          Projetos
        </Button>
        <Button className="rounded-none hover:border-b-4 border-violet-400">
          Carreira
        </Button>
        <Button className="rounded-none hover:border-b-4 border-violet-400">
          Educação
        </Button>
        <Button className="rounded-none hover:border-b-4 border-violet-400">
          Contato
        </Button>
      </div>
      <div className="hidden md:flex">
        <ThemeToggle />
      </div>
      <div className="block md:hidden">
        <MenurBar isOpen={isOpen} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Header;
