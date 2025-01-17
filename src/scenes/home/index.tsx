import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/type";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/Logo.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* Image & Main Header */}
        <div>
            {/* Main Header */}
            <div>
                {/* Headings */}
                <div>
                    <div>
                        <div>
                            <img className="rounded-3xl" src={Logo} alt="home-page-text" />
                            </div>  
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error minus aspernatur a pariatur laboriosam quod at necessitatibus repellat vel fugiat nostrum officiis, consequatur nam quidem! Obcaecati animi neque possimus similique.
                    </p>
                </div>

                {/* Actions */}
                <div>
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

            {/* Image Header */}
            <div>
                <img src={Logo} alt="home-pageGraphic" />
            </div>
        </div>
    </section>
  );
};

export default Home;