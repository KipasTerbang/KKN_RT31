import { Card, Carousel } from "flowbite-react";
import { SiGoogledocs } from "react-icons/si";
import Gambar1 from "/h-1.png";
import Gambar2 from "/h-3.png";

function home() {
  const cardData = [
    {
      title: "Surat Keterangan Kematian",
      href: "/SuratKeteranganKematian",
    },
    {
      title: "Surat Keterangan Tidak Mampu",
      href: "/SuratKeteranganTidakMampu",
    },
    {
      title: "Surat Pernyataan Belum Pernah Menikah",
      href: "/SuratPernyataanBelumPernahMenikah",
    },
    {
      title: "Surat Keterangan Kehilangan",
      href: "/SuratKeteranganKehilangan",
    },
    {
      title: "Surat Pengantar",
      href: "/SuratPengantar",
    },
    // {
    //   title: "Surat Pernyataan Jaminan Tempat Tinggal",
    //   href: "/SuratPernyataanJaminanTempatTinggal",
    // },
    {
      title: "Surat Pengantar Pemakaman Jenazah",
      href: "/SuratPengantarPemakamanJenazah",
    },
    {
      title: "Surat Perjanjian Pinjam Pakai",
      href: "/SuratPerjanjianPinjamPakai",
    },
    {
      title: "Surat Pernyataan Usaha",
      href: "/SuratPernyataanUsaha",
    },
  ];

  return (
    <div id="home">
      <div className="bg-green-700 px-10 md:px-16 lg:px-24 flex md:flex-row flex-col justify-center items-center h-96 lg:py-80">
        {/* <p className="text-white flex mt-5 md:mt-0 text-center md:text-left lg:text-6xl md:text-4xl text-2xl w-full font-semibold  md:w-1/2">
          Sistem Administrasi RT 31 Karang Joang
        </p> */}
        <div className="h-72 w-screen p-3 lg:h-[650px] lg:w-4/5 md:h-80 md:w-1/2 md:p-5 lg:p-10 ">
          <Carousel
            className="rounded-2xl flex flex-col justify-center"
            leftControl=" "
            rightControl=" "
            slideInterval={3000}
          >
            <img src={Gambar1} alt="..." className="" />
            <img src={Gambar2} alt="..." className="" />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold my-2">Dokumen Yang Tersedia</p>
        <hr className="bg-green-700 h-2 w-72 rounded-md"></hr>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-10 md:gap-10 gap-5 p-4">
            {cardData.map((card, index) => (
              <Card
                key={index}
                href={card.href}
                className="flex w-36 md:w-56 justify-self-center"
              >
                <h5 className="text-lg md:text-xl lg:text-6xl text-green-700 flex justify-center">
                  <SiGoogledocs />
                </h5>
                <p className="text-sm md:text-lg font-semibold flex justify-center text-center text-gray-700 dark:text-gray-400">
                  {card.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
