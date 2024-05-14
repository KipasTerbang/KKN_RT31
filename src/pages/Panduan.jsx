import Panduan1 from "/p-1.jpeg";
import Panduan2 from "/p-2.jpeg";
import Panduan3 from "/p-3.jpeg";
import Panduan4 from "/p-4.jpeg";
import Panduan5 from "/p-5.jpeg";
import Panduan6 from "/p-6.png";

const Panduan = () => {
  return (
    <div className="mt-5 p-3">
      <h1 className="text-center text-xl lg:text-2xl font-bold mb-5">
        Panduan Website Sistem Administrasi RT 31 Karang Joang
      </h1>
      <div>
        <div className="mx-2 lg:mx-40 mb-5 flex flex-col justify-center">
          <p className="mb-2 font-semibold lg:text-xl">
            No.1 Tampilan Awal Website
          </p>
          <img src={Panduan1} />
        </div>
        <div className="mx-2 lg:mx-40 mb-5 flex flex-col justify-center">
          <p className="mb-2 font-semibold lg:text-xl">
            No.2 Tampilan Fitur Website
          </p>
          <img src={Panduan2} />
        </div>
        <div className="mx-2 lg:mx-40 mb-5 flex flex-col justify-center">
          <p className="mb-2 font-semibold lg:text-xl">
            No.3 Isi Form Sesuai Dengan Yang Disediakan
          </p>
          <img src={Panduan3} />
        </div>
        <div className="mx-2 lg:mx-40 mb-5 flex flex-col justify-center">
          <p className="mb-2 font-semibold lg:text-xl">
            No.4 Apabila Sudah, Silahkan Tekan Button Submit
          </p>
          <img src={Panduan4} />
        </div>
        <div className="mx-2 lg:mx-40 mb-5 flex flex-col justify-center">
          <p className="mb-2 font-semibold lg:text-xl">
            No.5 Otomatis Akan Terdownload dan Tersimpan ke Dalam Penyimpanan
            Lokal
          </p>
          <img src={Panduan5} />
        </div>
        <div className="mx-2 lg:mx-40 mb-5 flex flex-col justify-center">
          <p className="mb-2 font-semibold lg:text-xl">
            No.5 contoh Hasil Dokumen Pdf yang di download
          </p>
          <img src={Panduan6} />
        </div>
      </div>
    </div>
  );
};

export default Panduan;
