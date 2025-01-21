import HText from "@/shared/HText";
import { AboutType, SelectedPage } from "@/shared/type";
import { 
  HomeModernIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import About from "./About";

const abouts: Array<AboutType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Figma Design",
    description: "Lorem Ipsum hjkjrfiu rhuhoghgfg jhf jhjlhfr ghuhr fhgu uytr rggreg",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Web Development",
    description: "Lorem Ipsum hjkjrfiu rhuhoghgfg jhf jhjlhfr ghuhr fhgu uytr rggreg",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Graphic Designing",
    description: "Lorem Ipsum hjkjrfiu rhuhoghgfg jhf jhjlhfr ghuhr fhgu uytr rggreg",
  },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Abouts = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
    >
      {/* Header */}
      <div className="md:my-5 md:w-3/5">
        <HText> More Than Just A Portfolio </HText>
        <p className="my-5 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, 
          neque sit aperiam est asperiores at soluta, cumque itaque earum quibusdam 
          ipsa, nihil reiciendis error rem provident beatae recusandae repellat deserunt!
        </p>
      </div>

      {/* About */}
      <div className="mt-5 items-center justify-between gap-8 md:flex">
        {abouts.map((about: AboutType) => (
          <About
            key={about.title}
            icon={about.icon}
            title={about.title}
            description={about.description}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default Abouts;