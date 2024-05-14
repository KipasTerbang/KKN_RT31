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
  },
  sectionNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column1: {
    width: "35%",
  },
  column2: {
    width: "65%",
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
  contents: {
    fontSize: 12,
    marginBottom: 15,
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
  contentNumbers: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 90,
  },
  footer: {
    fontSize: 12,
    marginRight: 30,
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
        <Text style={styles.title}>SURAT KETERANGAN KEMATIAN</Text>
        <Text style={styles.stitle}>
          Nomor: ....................................................
        </Text>
        <Text></Text>
        <Text style={styles.content}>
          Bersama ini kami beritahukan bahwa warga kami yang tersebut dibawah
          ini:
        </Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>1. Nama</Text>
            <Text style={styles.contentNumber}>2. NIK</Text>
            <Text style={styles.contentNumber}>3. Tempat/Tgl. Lahir</Text>
            <Text style={styles.contentNumber}>4. Jenis Kelamin</Text>
            <Text style={styles.contentNumber}>5. Alamat</Text>
            <Text style={styles.contentNumber}>6. Agama</Text>
            <Text style={styles.contentNumber}>7. Status Perkawinan</Text>
            <Text style={styles.contentNumber}>8. Pekerjaan</Text>
            <Text style={styles.contentNumber}>9. Kewarganegaraan</Text>
            <Text style={styles.contents}>
              Telah meninggal dunia/wafat pada
            </Text>
            <Text style={styles.contentNumbers}>Hari/tanggal</Text>
            <Text style={styles.contentNumbers}>Jam</Text>
            <Text style={styles.contentNumbers}>Penyebab</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.nama}</Text>
            <Text style={styles.contentNumber2}>: {data.nik}</Text>
            <Text style={styles.contentNumber2}>
              : {data.tempatLahir}, {formatTanggal(data.tanggalLahir)}
            </Text>
            <Text style={styles.contentNumber2}>: {data.jenisKelamin}</Text>
            <Text style={styles.contentNumber2}>: {data.alamat}</Text>
            <Text style={styles.contentNumber2}>: {data.agama}</Text>
            <Text style={styles.contentNumber2}>: {data.statusPerkawinan}</Text>
            <Text style={styles.contentNumber2}>: {data.pekerjaan}</Text>
            <Text style={styles.contentNumber2}>: {data.kewarganegaraan}</Text>
            <Text style={styles.contentNumber2}>: </Text>
            <Text style={styles.contentNumber2}>: {data.tanggalKematian}</Text>
            <Text style={styles.contentNumber2}>: {data.jamKematian}</Text>
            <Text style={styles.contentNumber2}>: {data.penyebabKematian}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          Demikian Surat Keterangan ini diberikan untuk dapat diproses lebih
          lanjut
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ textAlign: "right", marginBottom: 25 }}>
          Balikpapan, {data.currentDate}
        </Text>
        <Text></Text>
        <Text
          style={{
            textAlign: "right",
            marginRight: 35,
            marginBottom: 10,
            fontFamily: "Times-Bold",
          }}
        >
          Ketua RT 031,
        </Text>
        <Text
          style={{
            textAlign: "right",
            marginRight: 10,
            marginBottom: 60,
            fontFamily: "Times-Bold",
          }}
        >
          Kelurahan Karang Joang
        </Text>
        <Text></Text>
        <Text
          style={{
            textAlign: "right",
            marginRight: 18,
            fontFamily: "Times-Bold",
          }}
        >
          Shokim Fedrus Ariadi
        </Text>
      </View>
    </Page>
  </Document>
);

export default docsSuratKeteranganTidakMampu;
