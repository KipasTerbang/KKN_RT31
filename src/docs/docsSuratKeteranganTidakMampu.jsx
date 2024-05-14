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
    alignItems: "center",
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
    marginBottom: 5,
  },
  contentNumberDesc: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 6,
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
        <Text style={styles.title}>SURAT KETERANGAN TIDAK MAMPU</Text>
        <Text style={styles.stitle}>
          Nomor: ....................................................
        </Text>
        <Text></Text>
        <Text style={styles.content}>
          Yang bertanda tangan di bawah ini, Ketua Rukun Tetangga (RT) 31
          Kelurahan Karang Joang Kecamatan Balikpapan Utara.
        </Text>
        <Text></Text>
        <Text style={styles.content}>
          Menyatakan dengan sebenarnya bahwa keluarga yang tersebut di bawah ini
          termasuk keluarga tidak mampu.
        </Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>1. Nama</Text>
            <Text style={styles.contentNumber}>2. Tempat/Tanggal Lahir</Text>
            <Text style={styles.contentNumber}>3. NIK</Text>
            <Text style={styles.contentNumber}>4. Tempat Tinggal</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.nama}</Text>
            <Text style={styles.contentNumber2}>
              : {data.tempatLahir}, {formatTanggal(data.tanggalLahir)}
            </Text>
            <Text style={styles.contentNumber2}>: {data.nik}</Text>
            <Text style={styles.contentNumbers}>: {data.tempatTinggal}</Text>
            <Text style={styles.contentNumberDesc}>
              Kelurahan Karang Joang Kecamatan Balikpapan Utara
            </Text>
          </View>
        </View>
        <Text></Text>
        <Text style={styles.content}>
          Demikianlah keterangan ini dibuat dengan sebenar-benarnya agar dapat
          dipergunakan sebagaimana mestinya.
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
