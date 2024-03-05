import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import {
  ArrowRight,
  ArrowUp,
  Blocks,
  FileText,
  Globe,
  GraduationCap,
  Headset,
  Landmark,
  Library,
  NotebookText,
  PencilRuler,
  School,
  Search,
  User,
} from "lucide-react";

function App() {
  const backToTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="w-full bg-primary">
        <nav className="w-full flex justify-between items-center py-4 px-10">
          <h1 className="text-xl lg:text-3xl text-slate-50 font-bold">SIGAA</h1>
          <div className="flex gap-2">
            <Button
              variant={"ghost"}
              className="text-slate-50 font-semibold hover:bg-accent hover:text-slate-50 hidden lg:inline-flex"
            >
              <User className="mr-2" /> Fazer login
            </Button>
            <Button
              variant={"link"}
              className="text-slate-50 hover:text-slate-50 lg:hidden"
            >
              <User />
            </Button>
            <Button
              variant={"outline"}
              className="text-slate-50 bg-transparent border-black font-semibold hover:bg-black active:bg-black"
            >
              Registrar frequência
            </Button>
          </div>
        </nav>
      </header>
      <main>
        <section
          id="hero"
          className="w-full h-[28rem] lg:h-[40rem] flex justify-around px-2 lg:px-40 bg-primary rounded-b-[3rem] lg:rounded-b-[6rem] bg-hero-pattern bg-no-repeat bg-cover"
        >
          <div className="w-full max-w-[47rem] mt-10 lg:mt-40 flex flex-col gap-8">
            <h1 className="text-slate-200 font-bold text-4xl">
              Desperte o <strong>Gênio Acadêmico</strong> dentro de{" "}
              <strong>Você!</strong>
            </h1>
            <p className="text-slate-50 text-lg">
              Você já se pegou sonhando com uma maneira de tornar sua vida
              acadêmica mais emocionante, mais envolvente e, acima de tudo, mais
              produtiva? Bem-vindo à revolução que você esperava! Imagine uma
              ferramenta que não apenas organiza suas tarefas, mas também
              inflama sua criatividade, energiza seu processo de aprendizagem e
              o envolve em uma comunidade apaixonada por conhecimento.
            </p>
          </div>
          <img src="/student.png" className="hidden lg:block h-[40rem]" />
        </section>
        <section
          id="quick-access"
          className="w-full my-10 px-2 flex flex-col gap-y-8"
        >
          <h1 className="text-primary text-xl font-semibold text-center">
            Acesso Rápido
          </h1>
          <div
            id="button-group"
            className="w-full grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:flex xl:justify-center"
          >
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <School className="mb-2" />
              Acadêmico
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <Library className="mb-2" />
              Biblioteca
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <Landmark className="mb-2" />
              Ensino
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <Blocks className="mb-2" />
              Extensão
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <GraduationCap className="mb-2" />
              Graduação
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <Search className="mb-2" />
              Pesquisa
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <GraduationCap className="mb-2" />
              Pós Graduação
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <NotebookText className="mb-2" />
              Processos
              <br />
              Seletivos
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <PencilRuler className="mb-2" />
              Técnico
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <Globe className="mb-2" />
              Relações
              <br />
              Internacionais
            </Button>
            <Button
              variant={"ghost"}
              className="bg-primary text-slate-50 hover:text-slate-50 flex flex-col w-28 h-28 font-semibold"
            >
              <Headset className="mb-2" />
              Ouvidoria
            </Button>
          </div>
        </section>
        <section
          id="news"
          className="w-full flex flex-col xl:flex-row justify-between px-2 lg:px-[16.5rem] gap-8"
        >
          <Card className="w-full bg-white border-none p-0 relative">
            <div className="w-full h-full absolute bg-transparent hover:bg-black hover:bg-opacity-15 transition-colors rounded-lg hover:cursor-pointer" />
            <CardContent className="w-full p-0">
              <img
                src="/campus.png"
                className="rounded-t-lg w-full max-h-96"
                alt=""
              />
            </CardContent>
            <CardFooter className="h-auto flex items-center p-6 bg-white">
              <h1 className="text-xl font-bold">Lorem ipsum dolor sit amet</h1>
            </CardFooter>
          </Card>
          <div className="w-full xl:w-[60%] flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Outras Notícias</h1>
              <Button
                variant={"outline"}
                className="text-primary bg-transparent border-primary font-semibold hover:bg-primary active:bg-primary"
              >
                Ver mais <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="divide-y">
              <div className="flex gap-4 items-center py-2 relative">
                <div className="w-full h-full absolute bg-transparent hover:bg-black hover:bg-opacity-15 hover:cursor-pointer transition-colors rounded-lg" />
                <img src="/campus.png" className="rounded-lg w-24" alt="" />
                <h1 className="text-base font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
              </div>
              <div className="flex gap-4 items-center py-2 relative">
                <div className="w-full h-full absolute bg-transparent hover:bg-black hover:bg-opacity-15 hover:cursor-pointer transition-colors rounded-lg" />
                <img src="/campus.png" className="rounded-lg w-24" alt="" />
                <h1 className="text-base font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
              </div>
              <div className="flex gap-4 items-center py-2 relative">
                <div className="w-full h-full absolute bg-transparent hover:bg-black hover:bg-opacity-15 hover:cursor-pointer transition-colors rounded-lg" />
                <img src="/campus.png" className="rounded-lg w-24" alt="" />
                <h1 className="text-base font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
              </div>
              <div className="flex gap-4 items-center py-2 relative">
                <div className="w-full h-full absolute bg-transparent hover:bg-black hover:bg-opacity-15 hover:cursor-pointer transition-colors rounded-lg" />
                <img src="/campus.png" className="rounded-lg w-24" alt="" />
                <h1 className="text-base font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
              </div>
              <div className="flex gap-4 items-center py-2 relative">
                <div className="w-full h-full absolute bg-transparent hover:bg-black hover:bg-opacity-15 hover:cursor-pointer transition-colors rounded-lg" />
                <img src="/campus.png" className="rounded-lg w-24" alt="" />
                <h1 className="text-base font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
              </div>
              <div className="flex gap-4 items-center py-2 relative">
                <div className="w-full h-full absolute bg-transparent hover:bg-black hover:bg-opacity-15 hover:cursor-pointer transition-colors rounded-lg" />
                <img src="/campus.png" className="rounded-lg w-24" alt="" />
                <h1 className="text-base font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section
          id="press"
          className="w-full flex flex-col justify-between lg:px-[16.5rem] px-2 gap-y-8 my-10"
        >
          <div className="w-full flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Comunicados</h1>
            <Button
              variant={"outline"}
              className="text-primary bg-transparent border-primary font-semibold hover:bg-primary active:bg-primary"
            >
              Ver mais <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:flex 2xl:gap-8">
            <Card className="min-h-full">
              <CardHeader>
                <CardTitle>PROAE PUBLICA O EDITAL Nº 07/2024</CardTitle>
                <CardDescription>23/02/2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A PRÓ REITORIA DE ASSUNTOS ESTUDANTIS TORNA PÚBLICO O EDITAL
                  Nº 07/2024 – PROAE/UFRN PROCESSO SELETIVO DO PROGRAMA DE
                  ASSISTÊNCIA ESTUDANTIL – PAE - AUXÍLIO ALIMENTAÇÃO - EAJ
                </p>
              </CardContent>
              <hr />
              <CardFooter className="p-4">
                <Button
                  variant={"outline"}
                  className="w-full text-black bg-transparent border-black font-semibold hover:bg-black active:bg-black"
                >
                  Baixar Edital <FileText className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>PROAE PUBLICA O EDITAL Nº 06/2024</CardTitle>
                <CardDescription>23/02/2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A PRÓ REITORIA DE ASSUNTOS ESTUDANTIS TORNA PÚBLICO O EDITAL
                  Nº 06/2024 – PROAE/UFRN PROCESSO SELETIVO DO PROGRAMA DE
                  ASSISTÊNCIA ESTUDANTIL – PAE - RESIDÊNCIA UNIVERSITÁRIA /
                  AUXÍLIO MORADIA - CERES
                </p>
              </CardContent>
              <hr />
              <CardFooter className="p-4">
                <Button
                  variant={"outline"}
                  className="w-full text-black bg-transparent border-black font-semibold hover:bg-black active:bg-black"
                >
                  Baixar Edital <FileText className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>PROAE PUBLICA O EDITAL Nº 06/2024</CardTitle>
                <CardDescription>23/02/2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A PRÓ REITORIA DE ASSUNTOS ESTUDANTIS TORNA PÚBLICO O EDITAL
                  Nº 06/2024 – PROAE/UFRN PROCESSO SELETIVO DO PROGRAMA DE
                  ASSISTÊNCIA ESTUDANTIL – PAE - RESIDÊNCIA UNIVERSITÁRIA /
                  AUXÍLIO MORADIA - CERES
                </p>
              </CardContent>
              <hr />
              <CardFooter className="p-4">
                <Button
                  variant={"outline"}
                  className="w-full text-black bg-transparent border-black font-semibold hover:bg-black active:bg-black"
                >
                  Baixar Edital <FileText className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>PROAE PUBLICA O EDITAL Nº 06/2024</CardTitle>
                <CardDescription>23/02/2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A PRÓ REITORIA DE ASSUNTOS ESTUDANTIS TORNA PÚBLICO O EDITAL
                  Nº 06/2024 – PROAE/UFRN PROCESSO SELETIVO DO PROGRAMA DE
                  ASSISTÊNCIA ESTUDANTIL – PAE - RESIDÊNCIA UNIVERSITÁRIA /
                  AUXÍLIO MORADIA - CERES
                </p>
              </CardContent>
              <hr />
              <CardFooter className="p-4">
                <Button
                  variant={"outline"}
                  className="w-full text-black bg-transparent border-black font-semibold hover:bg-black active:bg-black"
                >
                  Baixar Edital <FileText className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="w-full bg-primary mt-10 p-6 font-semibold text-slate-50 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <p>&copy; 2024 SIGAA - Todos os direitos reservados.</p>
        <Button
          variant={"ghost"}
          className="text-slate-50 font-semibold hover:bg-accent hover:text-slate-50"
          onClick={backToTheTop}
        >
          Voltar ao Topo <ArrowUp className="ml-2" />
        </Button>
      </footer>
    </>
  );
}

export default App;
