import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import headerImageSrc from "../assets/Logo_D6.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-green-700 py-7 pl-2 flex flex-col items-center md:items-stretch justify-center bottom-0 left-0 right-0">
        <div className=" flex items-center md:items-start justify-center flex-col md:flex-row lg:px-10 md:px-8">
          <img src={headerImageSrc} className="md:hidden" />
          <section className="md:w-full text-center md:text-left ">
            <img src={headerImageSrc} className="hidden md:block" />
            <p className="text-lg lg:text-2xl pt-2">
              Dekat Jl. Soekarno Hatta, Karang Joang, Kec. Balikpapan Utara,
              Kota Balikpapan, Kalimantan Timur 76127
            </p>
          </section>
          <div></div>
          <section className="md:w-full md:pl-2 lg:pl-54 text-center  md:text-left">
            <h3 className="lg:mb-2 lg:text-2xl text-sm font-semibold">
              Contact Person
            </h3>
            <div className="flex mt-1 md:justify-start justify-center items-center">
              <MdOutlineWhatsapp className="lg:text-3xl pr-1 text-xl" />
              <p className="lg:text-2xl text-xs">
                Shokim Fedrus Ariadi :{" "}
                <span className="inline-block">+62-812-5360-9197</span>
              </p>
            </div>
            <div className="flex mt-1 items-center justify-center md:justify-start">
              <MdOutlineWhatsapp className="lg:text-3xl pr-1 text-xl" />
              <p className="lg:text-2xl text-xs">
                Rizky Amelia :{" "}
                <span className="inline-block">+62-878-8902-7188</span>
              </p>
            </div>
            <div className="flex mt-1 items-center justify-center md:justify-start">
              <MdOutlineWhatsapp className="lg:text-3xl pr-1 text-xl" />
              <p className="lg:text-2xl text-xs">
                Muhammad Nuralimsyah :{" "}
                <span className="inline-block">+62-812-5614-5759</span>
              </p>
            </div>
          </section>
          <section className=" md:pl-2 md:w-2/5 text-center md:text-left">
            <h3 className="lg:mb-2 font-semibold lg:text-2xl text-sm">
              Tautan Lainnya
            </h3>
            <div className="flex flex-row items-center mt-1 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/kkn_d6.itk?igsh=OHp2ZHpjNGZvNnB1"
                className="flex items-center"
              >
                <AiOutlineInstagram
                  className="lg:text-3xl text-xl"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/kkn_d6.itk?igsh=OHp2ZHpjNGZvNnB1",
                      "_blank"
                    )
                  }
                />
                <p className="lg:text-2xl text-xs pl-1">kkn_d6.itk</p>
              </a>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};
export default Footer;
