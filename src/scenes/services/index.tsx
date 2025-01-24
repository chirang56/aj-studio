import { SelectedPage } from '@/shared/type';
import Logo from "@/assets/Logo.webp";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="w-full bg-primary-100 py-40">
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        >

        </motion.div>
    </section>
  );
};

export default Services;