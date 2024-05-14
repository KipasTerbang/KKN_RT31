import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../docs/docsSuratPernyataanUsaha";

const SuratPernyataanUsaha = () => {
  const getCurrentDate = () => {
    const today = new Date();
    return `${today.toLocaleDateString("id-ID", {
      day: "numeric",
    })} ${today.toLocaleDateString("id-ID", {
      month: "long",
    })}, ${today.getFullYear()}`;
  };

  const [formData, setFormData] = useState({
    nama: "",
    jenisKelamin: "Laki-laki",
    tempatLahir: "",
    tanggalLahir: "",
    kewarganegaraan: "WNI",
    pekerjaan: "",
    agama: "Islam",
    nomorKTP: "",
    jalan: "",
    kelurahan: "",
    kecamatan: "",
    kabKota: "",
    namaUsaha: "",
    jenisUsaha: "",
    aktePendirianUsaha: "",
    jalanUsaha: "",
    kelurahanUsaha: "",
    kecamatanUsaha: "",
    kabKotaUsaha: "",
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
        Surat Pernyataan Usaha
      </p>
      <div className="flex justify-center bg-white lg:w-1/2 md:w-2/3 sm:w-3/4 h-auto mx-auto rounded-md shadow-below-right md:shadow-below-right">
        <form className="w-full px-10 py-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jenisKelamin"
              className="block text-sm font-medium text-gray-700"
            >
              Jenis Kelamin
            </label>
            <select
              id="jenisKelamin"
              name="jenisKelamin"
              value={formData.jenisKelamin}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="tempatLahir"
              className="block text-sm font-medium text-gray-700"
            >
              Tempat Lahir
            </label>
            <input
              type="text"
              id="tempatLahir"
              name="tempatLahir"
              value={formData.tempatLahir}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tanggalLahir"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="tanggalLahir"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kewarganegaraan"
              className="block text-sm font-medium text-gray-700"
            >
              Kewarganegaraan
            </label>
            <select
              id="kewarganegaraan"
              name="kewarganegaraan"
              value={formData.kewarganegaraan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="WNI">WNI</option>
              <option value="WNA">WNA</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="pekerjaan"
              className="block text-sm font-medium text-gray-700"
            >
              Pekerjaan
            </label>
            <input
              type="text"
              id="pekerjaan"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="agama"
              className="block text-sm font-medium text-gray-700"
            >
              Agama
            </label>
            <select
              id="agama"
              name="agama"
              value={formData.agama}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="Islam">Islam</option>
              <option value="Protestan">Protestan</option>
              <option value="Katolik">Katolik</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddha">Buddha</option>
              <option value="Khonghucu">Khonghucu</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="nomorKTP"
              className="block text-sm font-medium text-gray-700"
            >
              Nomor KTP
            </label>
            <input
              type="text"
              id="nomorKTP"
              name="nomorKTP"
              value={formData.nomorKTP}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatJalan"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Jalan
            </label>
            <input
              type="text"
              id="alamatJalan"
              name="jalan"
              value={formData.jalan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatKelurahan"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Kelurahan
            </label>
            <input
              type="text"
              id="alamatKelurahan"
              name="kelurahan"
              value={formData.kelurahan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kecamatan"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Kecamatan
            </label>
            <input
              type="text"
              id="kecamatan"
              name="kecamatan"
              value={formData.kecamatan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kabKota"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Kab/Kota
            </label>
            <input
              type="text"
              id="kabKota"
              name="kabKota"
              value={formData.kabKota}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="namaUsaha"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Usaha
            </label>
            <input
              type="text"
              id="namaUsaha"
              name="namaUsaha"
              value={formData.namaUsaha}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jenisUsaha"
              className="block text-sm font-medium text-gray-700"
            >
              Jenis Usaha
            </label>
            <input
              type="text"
              id="jenisUsaha"
              name="jenisUsaha"
              value={formData.jenisUsaha}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="aktePendirianUsaha"
              className="block text-sm font-medium text-gray-700"
            >
              Akte Pendirian Usaha
            </label>
            <input
              type="text"
              id="aktePendirianUsaha"
              name="aktePendirianUsaha"
              value={formData.aktePendirianUsaha}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatUsahaJalan"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Jalan Usaha
            </label>
            <input
              type="text"
              id="alamatUsahaJalan"
              name="jalanUsaha"
              value={formData.jalanUsaha}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatUsahaKelurahan"
              className="block text-sm font-medium text-gray-700"
            >
              Kelurahan Usaha
            </label>
            <input
              type="text"
              id="alamatUsahaKelurahan"
              name="kelurahanUsaha"
              value={formData.kelurahanUsaha}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatUsahaKecamatan"
              className="block text-sm font-medium text-gray-700"
            >
              Kecamatan Usaha
            </label>
            <input
              type="text"
              id="alamatUsahaKecamatan"
              name="kecamatanUsaha"
              value={formData.kecamatanUsaha}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatUsahaKabKota"
              className="block text-sm font-medium text-gray-700"
            >
              Kab/Kota Usaha
            </label>
            <input
              type="text"
              id="alamatUsahaKabKota"
              name="kabKotaUsaha"
              value={formData.kabKotaUsaha}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-2">
            <PDFDownloadLink
              document={<PDFDocument data={formData} />}
              fileName="surat_pernyataan_usaha.pdf"
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

export default SuratPernyataanUsaha;
