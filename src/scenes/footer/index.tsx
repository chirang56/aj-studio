import Logo from "@/assets/Logo.webp"
type Props = {}

const Footer = (props: Props) => {
  return (
  <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <p className="w-1 text-black font-serif font-bold"> CHIRANJIBI
              <span className="bg-gradient-to-br from-violet-800 to-rose-600 
              text-transparent bg-clip-text"> GAUTAM </span> 
            </p>
            <p className="my-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio 
                dolorem neque optio, harum omnis aperiam minima non sunt mollitia corporis 
                labore, commodi eius quo culpa molestiae! Deleniti atque eius qui!
            </p>
            <p> Copyright &copy; Chiranjibi Gautam; All Rights Reserved. </p>
        </div>
        <div></div>
        <div></div>
    </div>
  </footer>
  );
};

export default Footer;