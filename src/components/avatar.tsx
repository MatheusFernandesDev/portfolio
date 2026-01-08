"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarPerfil = () => {
  return (
    <Avatar className="rounded-none md:rounded-full w-16 h-full   ">
      <AvatarImage src="/perfil.png" />
      <AvatarFallback>MF</AvatarFallback>
    </Avatar>
  );
};

export default AvatarPerfil;
