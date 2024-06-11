import AvatarPerfil from "@/components/avatar";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Page = () => {
  return (
    <main>
      <section>
        <div className="w-full mx-auto">
          <div className="flex gap-2">
            <div className="w-1/2 flex flex-col justify-center items-center  gap-10">
              <div className="">
                OLÁ, BEM VINDO AO MEU PORTIFÓLIO<span>!</span>
              </div>
              <div className="w-1/2">
                <p>
                  Com mais quase 4 anos de experiência com Desenvolvedor
                  Fullstack, construiindo minha carreira com maior expertise em
                  Node.js, React.js e agora também com Nest.js, Next.js, tenho
                  colocado todos meus esforços na criação e implementação de
                  projetos e APIs com alta qualidade e organização, desde o
                  levantamento de requisitos até a entrega final.
                </p>
              </div>

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
            <div className="w-1/2 flex justify-center items-center">
              <img className="rounded-full animate-pulse" src="/perfil.png" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
