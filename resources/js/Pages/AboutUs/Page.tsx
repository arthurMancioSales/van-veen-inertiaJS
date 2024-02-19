import Container from "@/components/ui/Container";
import becan from "/public/images/about-us/partners/becan.gif";
import etec from "/public/images/about-us/partners/etec.png";
import franklin from "/public/images/about-us/partners/franklinCovey.png";
import kopert from "/public/images/about-us/partners/kopert.png";
import multicultural from "/public/images/about-us/partners/multicultural.png";
import nuffic from "/public/images/about-us/partners/nuffic.jpeg";
import rosso from "/public/images/about-us/partners/rossotrudnichestvo.png";
import uepb from "/public/images/about-us/partners/UEPB.png";
import unesp from "/public/images/about-us/partners/unesp.svg";
import dutcham from "/public/images/about-us/partners/dutcham.png";
import ets from "/public/images/about-us/partners/ets.png";
import nicolas from "/public/images/about-us/Nicolas-Van-Veen.jpg";
import alisson from "/public/images/about-us/alisson.jpg";
import arthur from "/public/images/about-us/arthur.jpg";
import marcela from "/public/images/about-us/marcela.jpeg";
import katie from "/public/images/about-us/katie.jpeg";
import russia from "/public/images/about-us/russia.jpeg";
import Alumni from "./components/alumni/Alumni";
import Guest from "@/Layouts/GuestLayout";

export default function AboutUs() {
    const today = new Date();
    const vanVeenFoundation = new Date("01-01-2013");
    const vanVeenAge = today.getFullYear() - vanVeenFoundation.getFullYear();

    return (
        <Guest>
            <div
                className={
                    "flex flex-col items-center justify-start overflow-hidden"
                }
            >
                <section id="history" className="text-clip pb-12 lg:flex-row">
                    <Container className="flex flex-col items-end gap-3 lg:w-full">
                        <div className="flex flex-col gap-8 lg:w-1/2 lg:items-center">
                            <h2 className="mt-8 text-left text-4xl font-bold text-accent">
                                Há {vanVeenAge} anos transformando a vida de
                                brasileiros
                            </h2>
                            <p className="w-full text-left indent-6 ">
                                Fundado em fevereiro de 2002, o Instituto Van
                                Veen surgiu com o propósito de fortalecer as
                                relações culturais e educacionais entre
                                diferentes segmentos sociais no Brasil e no
                                exterior. Ao longo dos anos, nosso compromisso
                                com a excelência nos levou a evoluir para uma
                                agência de relações internacionais. Em 2015, nos
                                tornamos parceiros-chave da NESO NUFFIC Brasil,
                                órgão do governo holandês, e da
                                ROSSOTRUDCHESTVO, órgão do governo russo,
                                consolidando nossa atuação global
                            </p>
                        </div>

                        <div className="relative left-[20%] flex flex-col gap-6 md:left-0 md:w-full lg:absolute lg:left-[-15%] lg:top-8 lg:h-[158%] lg:w-[60vw] xl:h-[116%] 2xl:left-auto 2xl:right-[55%] 2xl:h-[42%] 2xl:max-w-screen-lg mobileP:left-1/2 mobileG:left-[15%] mobileG:w-[130%]">
                            <div className="flex gap-6 md:hidden lg:flex lg:h-[70%] lg:w-full">
                                <figure className="relative h-[16rem] w-40 overflow-hidden lg:order-2 lg:h-full lg:w-80">
                                    <img
                                        src={katie}
                                        alt="Van Veen alumni"
                                        className="absolute inset-x-0 size-full rounded-md object-cover lg:object-left"
                                    />
                                </figure>
                                <figure className="relative h-[16rem] w-60  overflow-hidden lg:size-full">
                                    <img
                                        src={russia}
                                        alt="Van Veen alumni"
                                        className="absolute inset-x-0 size-full rounded-md object-cover"
                                    />
                                </figure>
                            </div>

                            <figure className="relative h-[15rem] w-full overflow-hidden md:h-[25rem] mobileP:right-[10%]">
                                <img
                                    src={marcela}
                                    alt="Van Veen alumni"
                                    className="absolute inset-x-0 size-full rounded-md object-cover"
                                />
                            </figure>
                        </div>

                        <div className="flex w-full flex-col gap-4 lg:w-1/2 lg:items-end">
                            <p className="w-full text-left indent-6 font-normal">
                                Ao longo de nossa história, alcançamos
                                resultados notáveis. Contamos com mais de 300
                                aprovações internacionais, permitindo que
                                estudantes realizem o ensino superior no
                                exterior e ampliem seus horizontes acadêmicos.
                                Além disso, orgulhamo-nos de ter concedido mais
                                de 30.000 bolsas de estudos, tornando a educação
                                internacional mais acessível e possibilitando
                                que talentos promissores alcancem seu potencial
                                máximo.
                            </p>

                            <p className="w-full text-left indent-6 font-normal">
                                Em 2023, estabelecemos uma parceria estratégica
                                com a renomada organização Educational Testing
                                Service (ETS). Como resultado dessa colaboração,
                                o Instituto Van Veen se tornou um centro
                                examinador oficial da ETS. Essa importante
                                conquista fortaleceu ainda mais nossa capacidade
                                de oferecer preparação de alto nível para exames
                                padronizados, por meio de recursos atualizados e
                                suporte especializado. Essa parceria exemplifica
                                nosso compromisso contínuo em proporcionar aos
                                nossos alunos as melhores oportunidades para
                                alcançar sucesso em suas jornadas acadêmicas
                                internacionais.
                            </p>
                        </div>
                    </Container>
                </section>

                <Container className="flex w-full flex-col items-start">
                    <section className="flex w-full flex-col pb-12">
                        <div className="flex w-full flex-col gap-4">
                            <h2 className="text-left text-3xl font-bold text-accent lg:text-4xl">
                                Nossa equipe
                            </h2>
                            <p className="indent-6">
                                Conheça a equipe dedicada por trás do Instituto
                                Van Veen, composta por profissionais apaixonados
                                e experientes.
                            </p>
                        </div>
                        <div className="w-full flex-row justify-between pt-5 md:flex md:flex-row md:gap-5">
                            <div className="flex w-full flex-col justify-center pt-4 md:p-0 lg:w-1/3 2xl:w-[30%]">
                                <div className="relative aspect-square overflow-hidden rounded-lg">
                                    <img
                                        alt="Institute's Founder"
                                        src={nicolas}
                                        className="absolute left-0 top-0 h-auto w-full rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="pt-4 text-lg">
                                        <strong>Nicolas Van Veen</strong>
                                    </p>
                                    <p className="pt-2">Fundador</p>
                                    <p className="pt-2 font-light">
                                        São José dos Campos - Brasil
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col justify-center pt-8 md:p-0  lg:w-1/3 2xl:w-[30%]">
                                <div className="relative w-full overflow-hidden rounded-lg pb-[100%]">
                                    <img
                                        alt="Institute's Studies Director"
                                        src={alisson}
                                        className="absolute left-0 top-0 h-auto w-full rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="pt-4 text-lg">
                                        <strong>Alisson Brito</strong>
                                    </p>
                                    <p className="pt-2">Diretor de Estudos</p>
                                    <p className="pt-2 font-light">
                                        São José dos Campos - Brasil
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col justify-center pt-8 md:p-0 lg:w-1/3 2xl:w-[30%]">
                                <div className="relative w-full overflow-hidden rounded-lg pb-[100%]">
                                    <img
                                        alt="Institute's College Advisor"
                                        src={arthur}
                                        className="absolute left-0 top-0 h-auto w-full rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="pt-4 text-lg">
                                        <strong>Arthur Mancio Sales</strong>
                                    </p>
                                    <p className="pt-2">
                                        Coordenador de alunos
                                    </p>
                                    <p className="pt-2 font-light">
                                        São José dos Campos - Brasil
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
                <section className="pb-12">
                    <Container className="flex flex-col items-start gap-8">
                        <h2 className="text-left text-3xl font-bold lg:text-4xl">
                            Nossos valores
                        </h2>
                        <div>
                            <p className=" indent-6">
                                Os valores são a base do nosso método no
                                Instituto Van Veen. Eles moldam nossa abordagem
                                e direcionam todas as nossas interações e
                                atividades. Acreditamos que cultivar e viver
                                nossos valores é fundamental para o crescimento
                                acadêmico, pessoal e ético dos nossos alunos.
                            </p>
                            <div className="flex w-full justify-between gap-4 pt-6 lg:pb-8">
                                <ul className="list-inside list-disc text-lg font-normal lg:hidden">
                                    <li className="pb-2">
                                        <strong>
                                            Cultivar a paz e bom caráter
                                        </strong>
                                        . Promovemos um ambiente de harmonia e
                                        integridade, incentivando o
                                        desenvolvimento de um bom caráter em
                                        nossos alunos.
                                    </li>
                                    <li className="py-2">
                                        <strong>
                                            Ajudar os mais pobres e oprimidos
                                        </strong>
                                        . Valorizamos a solidariedade e a
                                        responsabilidade social, buscando
                                        oportunidades para auxiliar aqueles que
                                        mais necessitam.
                                    </li>
                                    <li className="py-2">
                                        <strong>Respeitar pai e mãe</strong>.
                                        Reconhecemos a importância dos laços
                                        familiares e incentivamos o respeito e a
                                        gratidão aos pais e responsáveis.
                                    </li>
                                    <li className="py-2">
                                        <strong>Respeitar as diferenças</strong>
                                        . Celebramos a diversidade e promovemos
                                        um ambiente inclusivo, onde todas as
                                        pessoas são valorizadas e respeitadas.
                                    </li>
                                    <li className="py-2">
                                        <strong>
                                            Respeitar seus professores
                                        </strong>
                                        . Enfatizamos a importância do respeito
                                        e valorização dos professores,
                                        reconhecendo sua contribuição
                                        fundamental para o aprendizado dos
                                        alunos.
                                    </li>
                                    <li className="py-2">
                                        <strong>Método e disciplina</strong>.
                                        Valorizamos a disciplina e um método
                                        estruturado de estudo, que são
                                        fundamentais para o progresso acadêmico.
                                    </li>
                                    <li className="py-2">
                                        <strong>Perseverança</strong>.
                                        Incentivamos a persistência diante dos
                                        desafios, acreditando que a perseverança
                                        é fundamental para alcançar o sucesso.
                                    </li>
                                    <li className="py-2">
                                        <strong>Ser honesto</strong>.
                                        Valorizamos a honestidade em todas as
                                        áreas da vida, fomentando a integridade
                                        acadêmica e pessoal.
                                    </li>
                                    <li className="py-2">
                                        <strong>Ser livre</strong>. Defendemos a
                                        liberdade de expressão e o respeito às
                                        opiniões individuais, encorajando nossos
                                        alunos a desenvolverem um pensamento
                                        crítico e independente.
                                    </li>
                                    <li className="py-2">
                                        <strong>Estudar sempre</strong>.
                                        Promovemos uma mentalidade de
                                        aprendizado contínuo, incentivando
                                        nossos alunos a cultivarem o hábito de
                                        estudo e a busca constante pelo
                                        conhecimento.
                                    </li>
                                </ul>

                                <ul className="hidden w-[40%] list-inside list-disc text-lg font-normal lg:block">
                                    <li className="pb-2">
                                        <strong>
                                            Cultivar a paz e bom caráter
                                        </strong>
                                        . Promovemos um ambiente de harmonia e
                                        integridade, incentivando o
                                        desenvolvimento de um bom caráter em
                                        nossos alunos.
                                    </li>
                                    <li className="py-2">
                                        <strong>
                                            Ajudar os mais pobres e oprimidos
                                        </strong>
                                        . Valorizamos a solidariedade e a
                                        responsabilidade social, buscando
                                        oportunidades para auxiliar aqueles que
                                        mais necessitam.
                                    </li>
                                    <li className="py-2">
                                        <strong>Respeitar pai e mãe</strong>.
                                        Reconhecemos a importância dos laços
                                        familiares e incentivamos o respeito e a
                                        gratidão aos pais e responsáveis.
                                    </li>
                                    <li className="py-2">
                                        <strong>Respeitar as diferenças</strong>
                                        . Celebramos a diversidade e promovemos
                                        um ambiente inclusivo, onde todas as
                                        pessoas são valorizadas e respeitadas.
                                    </li>
                                    <li className="py-2">
                                        <strong>
                                            Respeitar seus professores
                                        </strong>
                                        . Enfatizamos a importância do respeito
                                        e valorização dos professores,
                                        reconhecendo sua contribuição
                                        fundamental para o aprendizado dos
                                        alunos.
                                    </li>
                                </ul>

                                <ul className="hidden w-[40%] list-inside list-disc text-lg font-normal lg:block">
                                    <li className="py-2">
                                        <strong>Método e disciplina</strong>.
                                        Valorizamos a disciplina e um método
                                        estruturado de estudo, que são
                                        fundamentais para o progresso acadêmico.
                                    </li>
                                    <li className="py-2">
                                        <strong>Perseverança</strong>.
                                        Incentivamos a persistência diante dos
                                        desafios, acreditando que a perseverança
                                        é fundamental para alcançar o sucesso.
                                    </li>
                                    <li className="py-2">
                                        <strong>Ser honesto</strong>.
                                        Valorizamos a honestidade em todas as
                                        áreas da vida, fomentando a integridade
                                        acadêmica e pessoal.
                                    </li>
                                    <li className="py-2">
                                        <strong>Ser livre</strong>. Defendemos a
                                        liberdade de expressão e o respeito às
                                        opiniões individuais, encorajando nossos
                                        alunos a desenvolverem um pensamento
                                        crítico e independente.
                                    </li>
                                    <li className="py-2">
                                        <strong>Estudar sempre</strong>.
                                        Promovemos uma mentalidade de
                                        aprendizado contínuo, incentivando
                                        nossos alunos a cultivarem o hábito de
                                        estudo e a busca constante pelo
                                        conhecimento.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="pb-12">
                    <Container className="flex flex-col items-start gap-4">
                        <h2 className="text-left text-3xl font-bold lg:text-4xl">
                            Nossos parceiros
                        </h2>
                        <div className="flex flex-row flex-wrap items-center justify-between lg:gap-4">
                            <a
                                href="https://www.ets.org"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - ETS logo"
                                    src={ets}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="ETS"
                                />
                            </a>
                            <a
                                href="https://multicultural.com.br"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Multicultural logo"
                                    src={multicultural}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="multicultural Communication Consulting"
                                />
                            </a>
                            <a
                                href="https://www.cps.sp.gov.br/etec/"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Etec logo"
                                    src={etec}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="ETEC"
                                />
                            </a>
                            <a
                                href="https://www2.unesp.br"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Unesp logo"
                                    src={unesp}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="UNESP"
                                />
                            </a>
                            <a
                                href="https://ufpb.br"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - UEPB logo"
                                    src={uepb}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="UEPB"
                                />
                            </a>
                            <a
                                href="https://franklincovey.com.br"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Franklin Covey logo"
                                    src={franklin}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="Franklin Covey"
                                />
                            </a>
                            <a
                                href="https://becan.ca"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Becan logo"
                                    src={becan}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="Becan"
                                />
                            </a>
                            <a
                                href="http://government.ru/en/department/93/"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Rossotrudnichestvo logo"
                                    src={rosso}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="Rossotrudnichestvo"
                                />
                            </a>
                            <a
                                href="https://www.koppert.com.br/sobre-a-koppert/koppert-do-brasil/"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Kopert logo"
                                    src={kopert}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="Kopert"
                                />
                            </a>
                            <a
                                href="https://www.nuffic.nl/en/subjects/neso"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Nuffic logo"
                                    src={nuffic}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                    title="Nuffic"
                                />
                            </a>
                            <a
                                href="https://www.dutcham.com.br"
                                target="_blank"
                                className="w-[45%] lg:w-[18%]"
                                rel="noreferrer"
                            >
                                <img
                                    alt="Institute's Partner - Dutcham logo"
                                    src={dutcham}
                                    className="py-3 transition duration-300 ease-in-out hover:scale-110 "
                                    title="Dutcham"
                                />
                            </a>
                        </div>
                    </Container>
                </section>
                <section className="pb-12">
                    <Container className="flex flex-col items-start gap-4">
                        <h2 className="text-left text-3xl font-bold lg:text-4xl">
                            Conheça nossa Alumni
                        </h2>
                        <p className="indent-6">
                            Temos muito orgulho da nossa rede alumni, composta
                            por estudantes talentosos que passaram pelo
                            Instituto Van Veen e alcançaram sucesso em suas
                            trajetórias acadêmicas no exterior. Dedicamos esse
                            espaço, a todos que compartilharam conosco suas
                            histórias inspiradoras e conquistas notáveis.
                        </p>
                        <Alumni />
                    </Container>
                </section>
            </div>
        </Guest>
    );
}
