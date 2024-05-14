import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../docs/docsSuratPerjanjianPinjamPakai";

const SuratPerjanjianPinjamPakai = () => {
  const getCurrentDate = () => {
    const today = new Date();
    return `${today.toLocaleDateString("id-ID", {
      day: "numeric",
    })} ${today.toLocaleDateString("id-ID", {
      month: "long",
    })}, ${today.getFullYear()}`;
  };

  const [formData, setFormData] = useState({
    namaPihakPertama: "",
    noKTPPihakPertama: "",
    alamatPihakPertama: "",
    namaPihakKedua: "",
    noKTPPihakKedua: "",
    alamatPihakKedua: "",
    lokasiTanah: "",
    currentDate: getCurrentDate(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      currentDate: getCurrentDate(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-4 mx-auto mb-8">
      <p className="md:text-2xl text-xl font-bold text-center mb-4">
        Surat Perjanjian Pinjam Pakai
      </p>
      <div className="flex justify-center bg-white lg:w-1/2 md:w-2/3 sm:w-3/4 h-auto mx-auto rounded-md shadow-below-right md:shadow-below-right">
        <form className="w-full px-10 py-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="namaPihakPertama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Pihak Pertama
            </label>
            <input
              type="text"
              id="namaPihakPertama"
              name="namaPihakPertama"
              value={formData.namaPihakPertama}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <label
              htmlFor="noKTPPihakPertama"
              className="block text-sm font-medium text-gray-700"
            >
              No. KTP Pihak Pertama
            </label>
            <input
              type="text"
              id="noKTPPihakPertama"
              name="noKTPPihakPertama"
              value={formData.noKTPPihakPertama}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <label
              htmlFor="alamatPihakPertama"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Pihak Pertama
            </label>
            <input
              type="text"
              id="alamatPihakPertama"
              name="alamatPihakPertama"
              value={formData.alamatPihakPertama}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="namaPihakKedua"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Pihak Kedua
            </label>
            <input
              type="text"
              id="namaPihakKedua"
              name="namaPihakKedua"
              value={formData.namaPihakKedua}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <label
              htmlFor="noKTPPihakKedua"
              className="block text-sm font-medium text-gray-700"
            >
              No. KTP Pihak Kedua
            </label>
            <input
              type="text"
              id="noKTPPihakKedua"
              name="noKTPPihakKedua"
              value={formData.noKTPPihakKedua}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <label
              htmlFor="alamatPihakKedua"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Pihak Kedua
            </label>
            <input
              type="text"
              id="alamatPihakKedua"
              name="alamatPihakKedua"
              value={formData.alamatPihakKedua}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lokasiTanah"
              className="block text-sm font-medium text-gray-700"
            >
              Lokasi Tanah
            </label>
            <input
              type="text"
              id="lokasiTanah"
              name="lokasiTanah"
              value={formData.lokasiTanah}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-2">
            <PDFDownloadLink
              document={<PDFDocument data={formData} />}
              fileName="surat_perjanjian_pinjam_pakai.pdf"
              className=" w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT
            </PDFDownloadLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuratPerjanjianPinjamPakai;
