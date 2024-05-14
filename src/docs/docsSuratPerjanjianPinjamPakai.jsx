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
    width: "15%",
  },
  column2: {
    width: "85%",
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
    textAlign: "justify",
  },
  contents: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: "justify",
  },
  contentNumber: {
    fontSize: 12,
    marginBottom: 1,
  },
  contentNumberf: {
    fontSize: 12,
    marginBottom: 3,
    fontFamily: "Times-Bold",
    textAlign: "center",
  },
  contentNumberfc: {
    fontSize: 12,
    marginBottom: 10,
    fontFamily: "Times-Bold",
    marginLeft: 38,
  },
  contentNumberfc2: {
    fontSize: 12,
    marginBottom: 10,
    fontFamily: "Times-Roman",
    marginLeft: 38,
  },
  contentNumber2: {
    fontSize: 12,
    marginBottom: 1,
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
  fc1: {
    width: "33%",
  },
  fc2: {
    width: "33%",
  },
  fc3: {
    width: "33%",
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

const docsSuratPerjanjianPinjamPakai = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.headerImage} src={headerImageSrc} />
      <View style={styles.section}>
        <Text style={styles.title}>SURAT PERJANJIAN PINJAM PAKAI</Text>
        <Text></Text>
        <Text style={styles.content}>Yang bertanda tangan di bawah ini :</Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>Nama</Text>
            <Text style={styles.contentNumber}>No. KTP</Text>
            <Text style={styles.contentNumber}>Alamat</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.namaPihakPertama}</Text>
            <Text style={styles.contentNumber2}>
              : {data.noKTPPihakPertama}
            </Text>
            <Text style={styles.contentNumber2}>
              : {data.alamatPihakPertama}
            </Text>
          </View>
        </View>
        <Text style={styles.content}>
          Bertindak untuk dan atas diri sendiri, yang selanjutnya adalah PIHAK
          PERTAMA
        </Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>Nama</Text>
            <Text style={styles.contentNumber}>No. KTP</Text>
            <Text style={styles.contentNumber}>Alamat</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.namaPihakKedua}</Text>
            <Text style={styles.contentNumber2}>: {data.noKTPPihakKedua}</Text>
            <Text style={styles.contentNumber2}>: {data.alamatPihakKedua}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          Bertindak untuk dan atas diri sendiri, yang selanjutnya adalah PIHAK
          KEDUA
        </Text>
        <Text style={styles.content}>
          Bahwa PIHAK PERTAMA adalah pemilik sah dari tanah yang berlokasi{" "}
          {data.lokasiTanah}, PIHAK PERTAMA menyatakan tidak keberatan dan
          bersedia menjamin pakaikan tanahnya kepada PIHAK KEDUA, akan tetapi
          apabila sewaktu-waktu tanah diambil alih kembali oleh PIHAK PERTAMA
          tidak ada pergantian/ganti rugi apapun atas sesuatu yang ada di atas
          tanah tersebut, tanaman maupun bangunan.
        </Text>
        <Text style={styles.content}> </Text>
        <Text style={styles.content}>
          Demikian perjanjian ini dibuat dan ditandatangani oleh para pihak yang
          terlibat dalam keadaan sadar, sehat jasmani dan rohani, serta tanpa
          adanya paksaan dari pihak manapun.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ textAlign: "right", marginBottom: 15 }}>
          Balikpapan, {data.currentDate}
        </Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.fc1}>
            <Text style={styles.contentNumberf}>Pihak Pertama</Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}>Materai</Text>
            <Text style={styles.contentNumberf}>({data.namaPihakPertama})</Text>
          </View>
          <View style={styles.fc2}>
            <Text style={styles.contentNumberf}>Mengetahui</Text>
            <Text style={styles.contentNumberf}>Ketua RT. 031</Text>
            <Text style={styles.contentNumberf}>Kelurahan Karang Joang</Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}>(Shokim Fedrus Ariadi)</Text>
          </View>
          <View style={styles.fc3}>
            <Text style={styles.contentNumberf}>Pihak Kedua</Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}> </Text>
            <Text style={styles.contentNumberf}>Materai</Text>
            <Text style={styles.contentNumberf}>({data.namaPihakKedua})</Text>
          </View>
        </View>
        <Text
          style={{
            marginBottom: 15,
            fontFamily: "Times-Bold",
            marginLeft: 25,
            marginTop: 15,
          }}
        >
          Saksi-saksi :
        </Text>
        <View style={styles.sectionNumber}>
          <View style={styles.fc1}>
            <Text style={styles.contentNumberfc}>No</Text>
            <Text style={styles.contentNumberfc2}>1.</Text>
          </View>
          <View style={styles.fc2}>
            <Text style={styles.contentNumberfc}>Nama</Text>
          </View>
          <View style={styles.fc3}>
            <Text style={styles.contentNumberfc}>Tanda Tangan</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default docsSuratPerjanjianPinjamPakai;
