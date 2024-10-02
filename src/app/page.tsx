import AvatarPerfil from "@/components/avatar";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Page = () => {
  return (
      <section className="mx-0 ">
        <div className="w-full  flex-wrap-reverse lg:flex-nowrap h-full flex gap-2 justify-center p-[10px]  " >
          <div className="w-full flex flex-col justify-center items-center  gap-10">
             <p className="text-[13px]">
              OLÁ, BEM VINDO AO MEU PORTIFÓLIO<span>!</span>
            </p>
              <p className="text-center text-[13px]">
                Com mais quase 4 anos de experiência com Desenvolvedor
                Fullstack, construiindo minha carreira com maior expertise em
                Node.js, React.js e agora também com Nest.js, Next.js, tenho
                colocado todos meus esforços na criação e implementação de
                projetos e APIs com alta qualidade e organização, desde o
                levantamento de requisitos até a entrega final.
              </p>

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
          </div>
          <div className="w-2/3 flex justify-center items-center">
            <div className="flex justify-center items-center">
            <img className="rounded-full animate-pulse" src="/perfil.png" />
            </div>
       
          </div>
        </div>
      </section>
   
  );
};

export default Page;
