import Logo from "@/assets/Logo.webp";
type Props = {
    name: string;
    description?: string;
    image: string;
};

const Service = ({ name, description, image }: Props) => {
  const overlayStyles =`p-5 absolute z-30 flex 
  h-[580px] w-[340px] flex-col items-center justify-center 
  whitespace-normal bg-primary-500 text-center text-white 
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[580px] w-[340px]">
        <div className={overlayStyles}>
            <p className="text-violet-600 text-2xl"> {name} </p>
            <p className="mt-0.5"> {description} </p>
        </div>
        <img className= "" src={Logo} alt={`${Logo}`} />
    </li>
  );
};

export default Service;