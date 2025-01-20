import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/type";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/Logo.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { div } from "framer-motion/client";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* Image & Main Header */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            {/* Main Header */}
            <div className="z-10 mt-32 md:basis-3/5 ">
                {/* Headings */}
                <div className="md:-mt-20">
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetxt">
                            <img className="rounded-3xl w-48" src={Logo} alt="home-page-text" />
                            </div>  
                    </div>
                    <p className="mt-8 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error minus aspernatur 
                        a pariatur laboriosam quod at necessitatibus repellat vel fugiat nostrum officiis, 
                        consequatur nam quidem! Obcaecati animi neque possimus similique.
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex items-center gap-8 md:justify-start">
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
                </div>
            </div>

            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img className="w-48 rounded-full" src={Logo} alt="home-pageGraphic" />
            </div>
        </div>

        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div>
            <div>
                <div className="w-6">
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