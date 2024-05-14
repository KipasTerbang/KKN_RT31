import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../docs/docsSuratPengantarPemakamanJenazah";

const SuratPengantarPemakamanJenazah = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const formattedDate = today
      .toLocaleDateString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");
    return formattedDate;
  };

  const [formData, setFormData] = useState({
    namaPemohon: "",
    alamatPemohon: "",
    noTeleponPemohon: "",
    namaJenazah: "",
    nik: "",
    agama: "",
    tempatLahirJenazah: "",
    tanggalLahirJenazah: "",
    hariTanggalMeninggal: "",
    alamatTerakhir: "",
    namaTPU: "",
    kelurahanTPU: "",
    kecamatanTPU: "",
    hariTanggalDimakamkan: "",
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
        Surat Pengantar Pemakaman Jenazah
      </p>
      <div className="flex justify-center bg-white lg:w-1/2 md:w-2/3 sm:w-3/4 h-auto mx-auto rounded-md shadow-below-right md:shadow-below-right">
        <form className="w-full px-10 py-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="namaPemohon"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Pemohon/Pelapor
            </label>
            <input
              type="text"
              id="namaPemohon"
              name="namaPemohon"
              value={formData.namaPemohon}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatPemohon"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Pemohon/Pelapor
            </label>
            <input
              type="text"
              id="alamatPemohon"
              name="alamatPemohon"
              value={formData.alamatPemohon}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="noTeleponPemohon"
              className="block text-sm font-medium text-gray-700"
            >
              No Telepon Pemohon/Pelapor
            </label>
            <input
              type="text"
              id="noTeleponPemohon"
              name="noTeleponPemohon"
              value={formData.noTeleponPemohon}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="namaJenazah"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Jenazah
            </label>
            <input
              type="text"
              id="namaJenazah"
              name="namaJenazah"
              value={formData.namaJenazah}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nik"
              className="block text-sm font-medium text-gray-700"
            >
              NIK
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tempatLahirJenazah"
              className="block text-sm font-medium text-gray-700"
            >
              Tempat Lahir
            </label>
            <input
              type="text"
              id="tempatLahirJenazah"
              name="tempatLahirJenazah"
              value={formData.tempatLahirJenazah}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tanggalLahirJenazah"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="tanggalLahirJenazah"
              name="tanggalLahirJenazah"
              value={formData.tanggalLahirJenazah}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hariTanggalMeninggal"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Meninggal
            </label>
            <input
              type="date"
              id="hariTanggalMeninggal"
              name="hariTanggalMeninggal"
              value={formData.hariTanggalMeninggal}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatTerakhir"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Terakhir Semasa Hidup
            </label>
            <input
              type="text"
              id="alamatTerakhir"
              name="alamatTerakhir"
              value={formData.alamatTerakhir}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="namaTPU"
              className="block text-sm font-medium text-gray-700"
            >
              Nama TPU yang Dituju
            </label>
            <input
              type="text"
              id="namaTPU"
              name="namaTPU"
              value={formData.namaTPU}
              onChange={handleChange}
              placeholder="Nama TPU/Pemakaman"
              className="mt-1 mb-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              id="kelurahanTPU"
              name="kelurahanTPU"
              value={formData.kelurahanTPU}
              onChange={handleChange}
              placeholder="Kelurahan"
              className="mt-1 mb-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              id="kecamatanTPU"
              name="kecamatanTPU"
              value={formData.kecamatanTPU}
              onChange={handleChange}
              placeholder="Kecamatan"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hariTanggalDimakamkan"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Dimakamkan
            </label>
            <input
              type="date"
              id="hariTanggalDimakamkan"
              name="hariTanggalDimakamkan"
              value={formData.hariTanggalDimakamkan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-2">
            <PDFDownloadLink
              document={<PDFDocument data={formData} />}
              fileName="surat_pengantar_pemakaman_jenazah.pdf"
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

export default SuratPengantarPemakamanJenazah;
