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
    description: "Lorem Ipsum being such an extra vagant how you define that",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Web Development",
    description: "Lorem Ipsum play such a nice game is that true or false boolean",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Graphic Designing",
    description: "Lorem Ipsum hue saturation all things color gradient and tint white balance",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

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
      <motion.div 
        className="md:my-5 md:w-3/5"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.5 }} 
        variants={{ 
          hidden: { opacity:0, x: -50}, 
          visible: { opacity:1, x: 0},
      }}>
          <HText> More Than Just A Portfolio </HText>
            <p className="my-5 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, 
              neque sit aperiam est asperiores at soluta, cumque itaque earum quibusdam 
              ipsa, nihil reiciendis error rem provident beatae recusandae repellat deserunt!
            </p>
      </motion.div>

      {/* About */}
      <motion.div 
        className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5 }}
        variants={ container }
      >
        {abouts.map((about: AboutType) => (
          <About
            key={about.title}
            icon={about.icon}
            title={about.title}
            description={about.description}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      {/* Graphics & Description */}
      <div>
        {/* Graphic */}
        <img src="" alt="" />

        {/* Description */}
        <div>
          {/* Title */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <div>
                <HText> Will be interesting collabing with {""}<span className="bg-gradient-to-br from-violet-800 to-rose-600 
                text-transparent bg-clip-text"> The World. </span> </HText>
              </div>
            </div>
          </div>

          {/* Descript */}

          {/* Button */}
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Abouts;