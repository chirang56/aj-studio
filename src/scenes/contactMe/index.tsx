import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo.webp";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register, trigger, formState: { errors }
  } = useForm();
  
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactme" className="mx-auto w-5/6 pt-24 pb-32"> 
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
           <HText> <span className="text-primary-500"> Join Now </span> To Collaborate </HText>
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
            <form 
            target="_blank" 
            onSubmit={onSubmit}
            action="https://formsubmit.co/your@email.com"
            method="POST">
              <input className= {inputStyles} 
                type="text" 
                placeholder="NAME" 
                {...register("name", {
                  required: true, 
                  maxLength: 100, 
                })} />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max Length is 100 Char."}
                </p>
              )}

              <input className= {inputStyles} 
                type="text" 
                placeholder="EMAIL" 
                {...register("email", {
                  required: true, 
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })} />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid E-mail Address."}
                </p>
              )}

              <textarea className= {inputStyles} 
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true, 
                  maxLength: 2000,
                })} />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max Length is 2000 Char."}
                </p>
              )}

              <button 
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ delay: 0.2, duration: 0.5 }} 
            variants={{
              hidden: { opacity:0, x: 50}, 
              visible: { opacity:1, x: 0},
          }}>
            <div className="md:before:content-evolvetext w-80 before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img className="rounded-3xl ml-36" src={Logo} alt="Logo" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;