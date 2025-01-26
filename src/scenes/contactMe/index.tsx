import HText from "@/shared/HText";
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
        <motion.div
          className="md:w-3/5"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }} 
          variants={{
            hidden: { opacity:0, x: -50}, 
            visible: { opacity:1, x: 0},
          }}
        >
           <HText> <span className="text-primary-500"> Join Now </span> </HText>
           <p className="my-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Distinctio tempore ratione dolor, dolorem ad, quia beatae illum deleniti quam 
            necessitatibus eveniet culpa cupiditate libero, labore obcaecati? Doloremque 
            laboriosam vitae ratione.</p>
        </motion.div>

        {/* Form And Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div 
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.5 }} 
            variants={{
              hidden: { opacity:0, x: 50}, 
              visible: { opacity:1, x: 0},
            }}
          >

          </motion.div>
          <p className="mt-10 justify-between gap-8 md:flex text-center"> Contact Me </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;