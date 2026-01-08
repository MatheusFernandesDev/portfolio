"use client";
import { MdMenuOpen } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

type MenurBarProps = {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: (sectionId: string) => void;
};

const MenurBar = ({ isOpen, onToggle, onNavigate }: MenurBarProps) => {
  const handleButtonClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    onToggle();
  };

  const navItems = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "experience", label: "Carreira" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <Sheet open={isOpen}>
      <SheetTrigger>
        <MdMenuOpen size={"35px"} onClick={onToggle} />
      </SheetTrigger>
      <SheetContent className="w-full p-0 my-2 ">
        <div
          className="cursor-pointer flex justify-end mt-0 "
          onClick={() => onToggle()}
        >
          <IoIosCloseCircleOutline size={"20px"} />
        </div>
        <SheetHeader>
          <SheetTitle className="mt-2 my-5 mx-4 p-3 shadow-md shadow-violet-500">
            Menu
          </SheetTitle>

          <div className="flex flex-col gap-1 ">
            {navItems.map((item) => (
              <Button
                key={item.id}
                className="w-full font-bold py-2 px-4 rounded-none hover:bg-primary/10 hover:text-primary"
                onClick={() => handleButtonClick(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </SheetHeader>
        <SheetFooter className="fixed bottom-0 left-0 right-0 p-4 shadow-md">
          <div className="flex  justify-center gap-10  ">
            <div className=" flex gap-2 cursor-pointer">
              <a
                className="flex gap-2 cursor-pointer"
                href="https://www.linkedin.com/in/matheus-fernandes--devfull/"
                target="_blank"
              >
                <BsLinkedin size={"25px"} />
                <p className="text-center hover:border-b-2 hover:border-violet-500">
                  LINKEDIN
                </p>
              </a>
            </div>
            <div className=" flex gap-2  cursor-pointer  ">
              <a
                className="flex gap-2 cursor-pointer"
                href="https://github.com/MatheusFernandesDev"
                target="_blank"
              >
                <BsGithub size={"25px"} />
                <p className="hover:border-b-2 hover:border-violet-500">
                  GIT HUB
                </p>
              </a>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenurBar;
