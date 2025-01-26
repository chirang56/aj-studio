import { SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32"> 
       <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}>
        {/* Header */}
        <p className="text-center"> Contact Me </p>
       </motion.div>
    </section>
  );
};

export default ContactMe;