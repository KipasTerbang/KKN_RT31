import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import headerImageSrc from "../docs/Header.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 25,
    fontFamily: "Times-Roman",
    marginLeft: 5,
  },
  section: {
    margin: 25,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "left",
  },
  sectionNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column1: {
    width: "35%",
  },
  column2: {
    width: "15%",
  },
  column3: {
    width: "50%",
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
    textDecoration: "underline",
    fontFamily: "Times-Bold",
  },
  stitle: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: "center",
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "justify",
  },
  contentNumber: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 30,
  },
  contentNumber2: {
    fontSize: 12,
    marginBottom: 15,
  },
  contentNumber2s: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 5,
  },
  contentNumbers: {
    fontSize: 12,
    marginBottom: 5,
  },
  contentNumberDesc: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 6,
  },
  footer: {
    fontSize: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerImage: {
    width: 500,
    height: 100,
  },
});

const formatTanggal = (tanggal) => {
  const [tahun, bulan, hari] = tanggal.split("-");
  const namaBulan = new Date(`${tahun}-${bulan}-${hari}`).toLocaleDateString(
    "id-ID",
    {
      month: "long",
    }
  );
  return `${parseInt(hari, 10)} ${namaBulan} ${tahun}`;
};

const docsSuratKeteranganTidakMampu = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.headerImage} src={headerImageSrc} />
      <View style={styles.section}>
        <Text style={styles.title}>
          SURAT PERNYATAAN JAMINAN TEMPAT TINGGAL
        </Text>
        <Text style={styles.stitle}>
          Nomor: ....................................................
        </Text>
        <Text style={styles.content}>
          Saya yang bertanda tangan di bawah ini :
        </Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>1. Nama Lengkap</Text>
            <Text style={styles.contentNumber}>2. Nomor Kartu Keluarga</Text>
            <Text style={styles.contentNumber}>
              3. Nomor Induk Kependudukan
            </Text>
            <Text style={styles.contentNumber}>4. Alamat Lengkap</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.namaPenjamin}</Text>
            <Text style={styles.contentNumber2}>
              : {data.nomorKartuKeluarga}
            </Text>
            <Text style={styles.contentNumber2}>
              : {data.nomorIndukKependudukan}
            </Text>
            <Text style={styles.contentNumber2}>: Jalan</Text>
            <Text style={styles.contentNumber2s}>Kelurahan</Text>
            <Text style={styles.contentNumber2s}>Kecamatan</Text>
            <Text style={styles.contentNumber2s}>No. Telepon</Text>
          </View>
          <View style={styles.column3}>
            <Text style={styles.contentNumber2}> </Text>
            <Text style={styles.contentNumber2}> </Text>
            <Text style={styles.contentNumber2}> </Text>
            <Text style={styles.contentNumber2}>
              : {data.namaJalanPenjamin}
            </Text>
            <Text style={styles.contentNumber2s}>
              : {data.kelurahanPenjamin}
            </Text>
            <Text style={styles.contentNumber2s}>
              : {data.kecamatanPenjamin}
            </Text>
            <Text style={styles.contentNumber2s}>: {data.noHP}</Text>
          </View>
        </View>
        <Text></Text>
        <Text style={styles.content}>
          Dengan ini menyatakan bahwa yang Namanya tersebut di bawah ini :
        </Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>1. Nama Lengkap</Text>
            <Text style={styles.contentNumber}>
              2. Tempat dan Tanggal Lahir
            </Text>
            <Text style={styles.contentNumber}>3. Status Perkawinan</Text>
            <Text style={styles.contentNumber}>4. Berasal dari Daerah</Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}>5. Jumlah Pengikut</Text>
            <Text style={styles.contentNumber}>6. Alamat Sekarang</Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.namaTerjamin}</Text>
            <Text style={styles.contentNumber2}>
              : {data.tempatLahirTerjamin},
              {formatTanggal(data.tanggalLahirTerjamin)}
            </Text>
            <Text style={styles.contentNumber2}>
              : {data.statusPerkawinanTerjamin}
            </Text>
            <Text style={styles.contentNumber2}>: Jalan</Text>
            <Text style={styles.contentNumber2s}>Kelurahan</Text>
            <Text style={styles.contentNumber2s}>Kecamatan</Text>
            <Text style={styles.contentNumber2s}>Kab/kota</Text>
            <Text style={styles.contentNumber2}>
              : {data.jumlahPengikutTerjamin}
            </Text>
            <Text style={styles.contentNumber2}>: Jalan</Text>
            <Text style={styles.contentNumber2s}>Kelurahan</Text>
            <Text style={styles.contentNumber2s}>Kecamatan</Text>
          </View>
          <View style={styles.column3}>
            <Text style={styles.contentNumber2}> </Text>
            <Text style={styles.contentNumber2}> </Text>
            <Text style={styles.contentNumber2}> </Text>
            <Text style={styles.contentNumber2}>
              : {data.namaAsalJalanTerjamin}
            </Text>
            <Text style={styles.contentNumber2}>
              : {data.kelurahanAsalTerjamin}
            </Text>
            <Text style={styles.contentNumber2}>
              : {data.kecamatanAsalTerjamin}
            </Text>
            <Text style={styles.contentNumber2}>: {data.kotaAsalTerjamin}</Text>
            <Text style={styles.contentNumber2s}> </Text>
            <Text style={styles.contentNumber2}>
              : {data.namaJalanSekarangTerjamin}
            </Text>
            <Text style={styles.contentNumber2}>
              : {data.kelurahanSekarangTerjamin}
            </Text>
            <Text style={styles.contentNumber2}>
              : {data.kecamatanSekarangTerjamin}
            </Text>
          </View>
        </View>
        <Text style={styles.content}>
          Adalah benar bertempat tinggal pada alamat tersebut diatas sejak
          tanggal : {formatTanggal(data.tanggalMenempatiTempatTinggal)}
        </Text>
        <Text style={styles.content}>
          Status hubungan saya dengan yang bersangkutan sebagai :{" "}
          {data.statusHubunganPenjaminDenganTerjamin}
        </Text>
        <Text style={styles.content}>
          Surat pernyataan ini dibuat dengan sebenarnya dan apabila kemudian
          hari isi surat pernyataan ini ternyata tidak benar, maka saya bersedia
          dituntut secara hukum sesuai ketentuan yang berlaku.
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          textAlign: "right",
          marginBottom: 15,
          marginRight: 100,
        }}
      >
        Balikpapan, {formatTanggal(data.currentDate)}
      </Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: "left",
          marginBottom: 15,
          marginLeft: 60,
          fontFamily: "Times-Bold",
        }}
      >
        Mengetahui,
      </Text>
      <View style={styles.footer}>
        <View style={styles.column1}>
          <Text
            style={{
              textAlign: "center",
              marginLeft: 30,
              marginBottom: 60,
              fontFamily: "Times-Roman",
            }}
          >
            Ketua RT.31
          </Text>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginLeft: 30,
              fontFamily: "Times-Roman",
              textDecoration: "underline",
            }}
          >
            Shokim Fedrus Ariadi
          </Text>
        </View>
        <View style={styles.column2}>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginRight: 0,
              marginBottom: 60,
              fontFamily: "Times-Bold",
            }}
          >
            Yang Membuat Pernyataan Penjamin
          </Text>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginRight: 0,
              fontFamily: "Times-Bold",
            }}
          >
            {data.namaPenjamin}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default docsSuratKeteranganTidakMampu;
