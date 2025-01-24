import { SelectedPage, ClassType } from '@/shared/type';
import Logo from "@/assets/Logo.webp";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Service from "./Service";

const services: Array<ClassType> = [
    {
        name: "Web Development",
        description:"Lorem ipsum jackey happy map in the end of the",
        image: Logo,
    },
    {
        name: "Graphic Designing",
        description:"Lorem ipsum jackey happy map in the end of the",
        image: Logo,
    },
    {
        name: "Mobile App Solutions",
        description:"Lorem ipsum jackey happy map in the end of the",
        image: Logo,
    },
    {
        name: "Web Development",
        description:"Lorem ipsum jackey happy map in the end of the",
        image: Logo,
    },
    {
        name: "Graphic Designing",
        description:"Lorem ipsum jackey happy map in the end of the",
        image: Logo,
    },
    {
        name: "Mobile App Solutions",
        description:"Lorem ipsum jackey happy map in the end of the",
        image: Logo,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="w-full bg-primary-100 py-40">
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }} 
            >
                <div className="md:w-3/5">
                 <HText> Our Services </HText>
                 <p className="py-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Cum tempora quis quia enim, quasi ab cupiditate a! Impedit, 
                    iste ducimus assumenda eum officiis quibusdam magnam placeat 
                    repellat expedita earum voluptas?
                 </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                   {services.map((item: ClassType, index) => (
                    <Service 
                      key={`${item.name}-${index}`}
                      name={item.name}
                      description={item.description}
                      image={item.image}
                    />
                   ))}
                </ul>
            </div>
        </motion.div>
    </section>
  );
};

export default Services;