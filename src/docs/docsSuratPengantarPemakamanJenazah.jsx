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

const formatTanggalJenazah = (tanggal) => {
  const [tahun, bulan, hari] = tanggal.split("-");
  const namaBulan = new Date(`${tahun}-${bulan}-${hari}`).toLocaleDateString(
    "id-ID",
    {
      month: "long",
    }
  );
  const namaHari = new Date(`${tahun}-${bulan}-${hari}`).toLocaleDateString(
    "id-ID",
    {
      weekday: "long",
    }
  );
  return `${namaHari}, tanggal ${parseInt(hari, 10)} ${namaBulan} ${tahun}`;
};

const docsSuratKeteranganTidakMampu = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.headerImage} src={headerImageSrc} />
      <View style={styles.section}>
        <Text style={styles.title}>SURAT PENGANTAR PEMAKAMAN JENAZAH</Text>
        <Text style={styles.stitle}>
          Nomor: ....................................................
        </Text>
        <Text style={styles.content}>I. Pemohon/Pelapor</Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>Nama</Text>
            <Text style={styles.contentNumber}>Alamat</Text>
            <Text style={styles.contentNumber}>No Telepon Pemohon</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.namaPemohon}</Text>
            <Text style={styles.contentNumber2}>: {data.alamatPemohon}</Text>
            <Text style={styles.contentNumber2}>: {data.noTeleponPemohon}</Text>
          </View>
        </View>
        <Text></Text>
        <Text style={styles.content}>II. Keterangan Jenazah</Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>Nama Jenazah</Text>
            <Text style={styles.contentNumber}>Nik/No.KK</Text>
            <Text style={styles.contentNumber}>Agama</Text>
            <Text style={styles.contentNumber}>Tempat/tgl lahir jenazah</Text>
            <Text style={styles.contentNumber}>Hari/tgl meninggal</Text>
            <Text style={styles.contentNumber}>
              Alamat terakhir semasa hidup
            </Text>
            <Text style={styles.contentNumber}>Nama TPU yang dituju</Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}>Hari/tgl dimakamkan</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.namaJenazah}</Text>
            <Text style={styles.contentNumber2}>: {data.nik}</Text>
            <Text style={styles.contentNumber2}>: {data.agama}</Text>
            <Text style={styles.contentNumber2}>
              : {data.tempatLahirJenazah},
              {formatTanggal(data.tanggalLahirJenazah)}
            </Text>
            <Text style={styles.contentNumber2}>
              : {formatTanggalJenazah(data.hariTanggalMeninggal)}
            </Text>
            <Text style={styles.contentNumber2}>: {data.alamatTerakhir}</Text>
            <Text style={styles.contentNumber2}>
              : TPU/ pemakaman {data.namaTPU}
            </Text>
            <Text style={styles.contentNumber2s}>
              {" "}
              Kelurahan {data.kelurahanTPU}
            </Text>
            <Text style={styles.contentNumber2s}>
              {" "}
              Kecamatan {data.kecamatanTPU}
            </Text>
            <Text style={styles.contentNumber2s}>
              {" "}
              Kota Balikpapan-Kalimantan Timur
            </Text>
            <Text style={styles.contentNumber2}>
              : {formatTanggalJenazah(data.hariTanggalMeninggal)}
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 12,
          textAlign: "right",
          marginBottom: 15,
          marginRight: 120,
        }}
      >
        Balikpapan, {formatTanggal(data.currentDate)}
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
            Pemohon/pelapor
          </Text>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginLeft: 30,
              fontFamily: "Times-Roman",
            }}
          >
            {data.namaPemohon}
          </Text>
        </View>
        <View style={styles.column2}>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginRight: 0,
              marginBottom: 60,
              fontFamily: "Times-Roman",
            }}
          >
            Ketua RT 031,
          </Text>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginRight: 0,
              fontFamily: "Times-Bold",
            }}
          >
            Shokim Fedrus Ariadi
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default docsSuratKeteranganTidakMampu;
