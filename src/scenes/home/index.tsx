import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/type";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/Logo.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* Image & Main Header */}
        <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* Main Header */}
            <div className="z-10 mt-32 md:basis-3/5 ">
                {/* Headings */}
                <motion.div className="md:-mt-20" 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{ duration: 0.5 }} 
                            variants={{ 
                                hidden: { opacity:0, x: -50}, 
                                visible: { opacity:1, x: 0},
                            }}>
                    <div className="relative">
                        <div >
                            <img className="rounded-3xl w-48" src={Logo} alt="home-page-text" />
                            </div>  
                    </div>
                    <p className="mt-8 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error minus aspernatur 
                        a pariatur laboriosam quod at necessitatibus repellat vel fugiat nostrum officiis, 
                        consequatur nam quidem! Obcaecati animi neque possimus similique.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div className="mt-8 flex items-center gap-8 md:justify-start"
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{ delay: 0.2, duration: 0.5 }} 
                            variants={{ 
                                hidden: { opacity:0, x: -50}, 
                                visible: { opacity:1, x: 0},
                            }}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.Contact)}
                        href={`#${SelectedPage.Contact}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img className="w-48 rounded-full" src={Logo} alt="home-pageGraphic" />
            </div>
        </motion.div>

        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-16 items-center justify-between gap-8">
                    <img className="rounded-full" src={Logo} alt="redbull" />
                    <img className="rounded-full" src={Logo} alt="forbes" />
                    <img className="rounded-full" src={Logo} alt="fortune" />
                </div>
            </div> 
            </div>
        )}
    </section>
  );
};

export default Home;