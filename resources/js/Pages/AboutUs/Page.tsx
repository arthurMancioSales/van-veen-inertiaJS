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
import pharmacy from "/public/images/about-us/partners/farmacia comunitaria do petiti.png";
import decolar from "/public/images/about-us/partners/decolar.png";
import charlesUniversity from "/public/images/about-us/partners/charles-university-logo.png";
import nicolas from "/public/images/about-us/Nicolas-Van-Veen.jpg";
import jpMorgan from "/public/images/about-us/business/jp morgan.webp";
import nasa from "/public/images/about-us/business/NASA logo.svg";
import boeing from "/public/images/about-us/business/logo boeing.png";
import harvard from "/public/images/about-us/business/logo harvard.png";
import mit from "/public/images/about-us/business/logo mit.png";
import alpha from "/public/images/about-us/business/logo_ial.png";
import alisson from "/public/images/about-us/alisson.jpg";
import boardAlisson from "/public/images/about-us/board/board alisson.png";
import boardMauricio from "/public/images/about-us/board/board mauricio.png";
import boardFabio from "/public/images/about-us/board/board fabio.png";
import boardMarcella from "/public/images/about-us/board/board marcella.png";
import arthur from "/public/images/about-us/arthur.png";
import marcela from "/public/images/about-us/marcela.jpeg";
import katie from "/public/images/about-us/katie.jpeg";
import russia from "/public/images/about-us/russia.jpeg";
import fundacao from "/public/images/about-us/fundacao.png";
import Alumni from "./components/alumni/Alumni";
import Guest from "@/Layouts/GuestLayout";
import ita from "/public/images/about-us/business/ita logo.png";

type partner = {
    link: string;
    image: string;
    alt: string;
    title: string;
};

const partnerLogos: partner[] = [
    {
        alt: "Institute's Partner - ETS logo",
        image: ets,
        link: "https://www.ets.org",
        title: "ETS",
    },
    {
        alt: "Institute's Partner - Multicultural logo",
        image: multicultural,
        link: "https://multicultural.com.br",
        title: "multicultural Communication Consulting",
    },
    {
        alt: "Institute's Partner - Etec logo",
        image: etec,
        link: "https://www.cps.sp.gov.br/etec/",
        title: "Etec",
    },
    {
        alt: "Institute's Partner - Unesp logo",
        image: unesp,
        link: "https://www2.unesp.br",
        title: "Unesp",
    },
    {
        alt: "Institute's Partner - UEPB logo",
        image: uepb,
        link: "https://ufpb.br",
        title: "UEPB",
    },
    {
        alt: "Institute's Partner - Franklin Covey logo",
        image: franklin,
        link: "https://franklincovey.com.br",
        title: "Franklin Covey",
    },
    {
        alt: "Institute's Partner - Becan logo",
        image: becan,
        link: "https://becan.ca",
        title: "Becan",
    },
    {
        alt: "Institute's Partner - Rossotrudnichestvo logo",
        image: rosso,
        link: "http://government.ru/en/department/93/",
        title: "Rossotrudnichestvo",
    },
    {
        alt: "Institute's Partner - Kopert logo",
        image: kopert,
        link: "https://www.koppert.com.br/sobre-a-koppert/koppert-do-brasil/",
        title: "Kopert",
    },
    {
        alt: "Institute's Partner - Nuffic logo",
        image: nuffic,
        link: "https://www.nuffic.nl/en/subjects/neso",
        title: "Nuffic",
    },
    {
        alt: "Institute's Partner - Dutcham logo",
        image: dutcham,
        link: "https://www.dutcham.com.br",
        title: "Dutcham",
    },
    {
        alt: "Institute's Partner - Petiti's Communitary Pharmacy logo",
        image: pharmacy,
        link: "https://www.instagram.com/farmaciacomunitariadopetiti/",
        title: "Farmácia Comunitária do Petiti",
    },
    {
        alt: "Institute's Partner - Decolar Logo",
        image: decolar,
        link: "https://www.instagram.com/decolar.cedet/",
        title: "Projeto Decolar",
    },
    {
        alt: "Institute's Partner - Charles University Logo",
        image: charlesUniversity,
        link: "https://www.studycharles.cz",
        title: "Charles University",
    },
];

type business = {
    logo: string;
    link: string;
};

const alumniBussnies: business[] = [
    {
        logo: jpMorgan,
        link: "",
    },
    {
        logo: nasa,
        link: "",
    },
    {
        logo: ita,
        link: "",
    },
    {
        logo: boeing,
        link: "",
    },
    {
        logo: harvard,
        link: "",
    },
    {
        logo: mit,
        link: "",
    },
    {
        logo: alpha,
        link: "",
    },
];

const banca = [boardAlisson, boardMarcella, boardMauricio, boardFabio];

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

                        <div className="relative left-[20%] flex flex-col gap-6 md:left-0 md:w-full lg:absolute lg:left-[-15%] lg:top-8 lg:h-[55rem] lg:w-[60vw] xl:h-[45rem] 2xl:left-auto 2xl:right-[55%] 2xl:h-[42%] 2xl:max-w-screen-lg mobileP:left-1/2 mobileG:left-[15%] mobileG:w-[130%]">
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
                    <section className="flex w-full flex-col pb-12 ">
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
                                        <strong>Dr. Alisson Brito</strong>
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

                <section className="pb-12">
                    <Container className="flex flex-col items-start gap-4">
                        <h2 className="text-left text-3xl font-bold lg:text-4xl">
                            Onde eles estão
                        </h2>
                        <div className="flex flex-row flex-wrap items-center justify-between lg:gap-4">
                            {alumniBussnies.map((business, index) => {
                                return (
                                    <a
                                        href={business.link}
                                        target="_blank"
                                        className="w-[45%] lg:w-[18%]"
                                        rel="noreferrer"
                                        key={index}
                                    >
                                        <img
                                            alt=""
                                            src={business.logo}
                                            className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                <section className="pb-12">
                    <Container className="flex flex-col items-start gap-4">
                        <h2 className="text-left text-3xl font-bold lg:text-4xl">
                            Nossos parceiros
                        </h2>
                        <div className="flex flex-row flex-wrap items-center justify-between lg:gap-4">
                            {partnerLogos.map((partner, index) => {
                                return (
                                    <a
                                        href={partner.link}
                                        target="_blank"
                                        className="w-[45%] lg:w-[18%]"
                                        rel="noreferrer"
                                        key={index}
                                    >
                                        <img
                                            alt={partner.alt}
                                            src={partner.image}
                                            className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                            title="multicultural Communication Consulting"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </Container>
                </section>
                <section className="pb-12">
                    <Container className="flex flex-col items-start gap-4">
                        <h2 className="text-left text-3xl font-bold lg:text-4xl">
                            Conheça nossa banca acadêmica
                        </h2>
                        <p className="indent-6">
                            Em 2024 foi criada a banca acadêmica do instituto
                            van veen. As pesquisas atuais são desenvolvidas em
                            sustentabilidade, inteligencia artificial e doenças
                            oncológicas.
                        </p>
                        <div className="flex w-full flex-col items-center justify-between lg:flex-row">
                            {banca.map((member, index) => {
                                return (
                                    <div
                                        className="relative aspect-[9/16] w-full md:basis-1/4 lg:h-fit"
                                        key={index}
                                    >
                                        <img
                                            src={member}
                                            alt="Alumni"
                                            className="absolute left-0 top-0 size-full object-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                <section className="pb-12">
                    <Container className="flex flex-col items-start gap-4">
                        <h2 className="text-left text-3xl font-bold lg:text-4xl">
                            Nosso futuro!
                        </h2>
                        <p className="indent-6">
                            Está em andamento a criação da fundação van veen,
                            que nos permitirá captar recursos junto a iniciativa
                            público-privada e garantir estabilidade jurídica,
                            financeira e sustentável a todos os projetos
                            vinculados à fundação.
                        </p>
                        <div className="relative mx-auto h-[23rem] w-[100%] md:h-[47rem] lg:h-[70rem] lg:w-[80vw] xl:h-[88rem]">
                            <img
                                src={fundacao}
                                alt="Alumni"
                                className="absolute left-0 top-0 size-full object-cover"
                            />
                        </div>
                    </Container>
                </section>
            </div>
        </Guest>
    );
}
