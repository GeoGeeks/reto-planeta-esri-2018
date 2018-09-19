// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Grafik Referensi dengan Grid",newGRGFromAreaButtonLabel:"Tentukan Grid dari suatu Area",newGRGFromPointButtonLabel:"Tentukan Grid dari suatu Titik",newGRGFromAreaTitle:"Tentukan Grid dari suatu Area",newGRGFromPointTitle:"Tentukan Grid dari suatu Titik",newGRGBySizeButtonLabel:"Menurut Dimensi",newGRGFromRefSystemButtonLabel:"Menurut Sistem Referensi",newGRGByTimeLabel:"Menutur Waktu dan Kecepatan",newGRGFromNonStandardButtonLabel:"Tentukan Grid Non-Standar",
newGRGAreaBySizeTitle:"GRG dari Area menurut Dimensi",newGRGAreaBySizeDefineAreaLabel:"Area GRG",addGRGAreaPolygonToolTip:"Gambar Area GRG menggunakan poligon",addGRGAreaExtentToolTip:"Gambar Area GRG menggunakan jangkauan",rotation:"Rotasi Grid",numberRowsColumnsLabel:"Tentukan jumlah baris dan kolom",newGRGAreaByRefSystemTitle:"GRG dari Area menurut Sistem Referensi",gridSize:"Ukuran Grid",UTMZoneandBand:"Zona Grid","100000m":"100000 meter","10000m":"10000 meter","1000m":"1000 meter","100m":"100 meter",
"10m":"10 meter",clipGrid:"Sematkan Grid ke Area GRG",newGRGAreaFromNonStandardTitle:"NRG Baru",newGRGPointBySizeTitle:"GRG dari Titik menurut Dimensi",newGRGPointByRefSystemTitle:"GRG dari Titik menurut Sistem Referensi",newGRGPointByTimeTitle:"GRG dari Titik menggunakan Waktu dan Kecepatan",time:"Waktu",rate:"Kecepatan",hours:"Jam",minutes:"Menit",seconds:"Detik",ftPerSec:"Kaki/detik",ftPerHour:"Kaki/jam",kmPerSec:"Kilometer/detik",kmPerHour:"Kilometer/jam",mPerSec:"Meter/detik",mPerHour:"Meter/jam",
miPerSec:"Mil/detik",miPerHour:"Mil/jam",nMPerSec:"Mil Laut/detik",nMPerHour:"Mil Laut/jam",settingsTitle:"Pengaturan",labelSettingsLabel:"Pengaturan Label",labelSettingsButtonLabel:"Konfigurasikan Pengaturan Label",gridSettingsLabel:"Pengaturan Grid",gridSettingsButtonLabel:"Konfigurasikan Pengaturan Grid",transparency:"Transparansi",labelStyle:"Gaya Label",font:"Font",textSize:"Ukuran Teks",textColor:"Warna Teks",halo:"Halo",show:"Tampilkan",lockSettings:"Pengaturan sudah dikunci oleh pemilik aplikasi",
gridSettings:{cellShape:"Bentuk Sel",cellUnits:"Unit Sel",cellOutline:"Pengaturan Kerangka Sel",cellFill:"Pengaturan Isi Sel",gridReferenceSystem:"Sistem Referensi",gridDatum:"Datum: WGS84",labelStartPosition:"Asal Label",labelType:"Jenis Label",labelDirection:"Arah Label",gridOrigin:"Asal Grid","default":"Persegi Empat",hexagon:"Heksagon",miles:"Mil",kilometers:"Kilometer",feet:"Kaki",meters:"Meter",yards:"Yard","nautical-miles":"Mil Laut",lowerLeft:"Kiri-Bawah",lowerRight:"Kanan-Bawah",upperLeft:"Kiri-Atas",
upperRight:"Kanan-Atas",center:"Tengah",alphaNumeric:"Alfa-Numerik",alphaAlpha:"Alfa-Alfa",numeric:"Numerik",horizontal:"Horizontal",vertical:"Vertikal",MGRS:"MGRS",USNG:"USNG",showLabels:"Tampilkan Label"},publishTitle:"Publikasikan GRG ke Portal",publishGRGBtn:"Publikasikan",GRGLayerName:"Nama Layer GRG yang Dipublikasikan",invalidGRGLayerName:"Nama layer tidak boleh mengandung karakter alfa-numerik atau garis bawah",missingGRGLayerName:"Anda harus memasukkan nama untuk GRG",publishingFailedLayerExists:"Publikasi Gagal: Anda telah memiliki feature service bernama {0}. Harap pilih nama lain.",
checkService:"Periksa Layanan: {0}",createService:"Buat Layanan: {0}",unableToCreate:"Tidak dapat membuat: {0}",addToDefinition:"Tambahkan ke definisi: {0}",successfullyPublished:"Berhasil memublikasikan layer web{0}Kelola layer web",userRole:"Tidak dapat membuat layanan karena pengguna tidak memiliki izin",createGRGBtn:"Buat GRG",clearGRGBtn:"Hapus",labelFormat:"Format Label",helpIconTooltip:"Z: Pemilih Zona Grid (GZD)\nS: Identifikasi Persegi Grid (GSID) 100,000-meter\nX: Arah Timur (Koordinat X)\nY: Arah Utara (Koordinat Y)\n\nContoh:\nZSXY adalah 15SWC8081751205\nZS X,Y adalah 15SWC 80817,51205",
addPointToolTip:"Tambahkan Asal GRG",cellWidth:"Lebar Sel (x)",cellHeight:"Tinggi Sel (y)",invalidNumberMessage:"Nilai yang dimasukkan tidak valid",invalidRangeMessage:"Nilai harus lebih besar dari 0",gridAngleInvalidRangeMessage:"Nilai harus di antara -89,9 dan 89,9",formatIconTooltip:"Format Input",coordInputLabel:"Asal GRG (DD)",setCoordFormat:"Atur Format Koordinat String",prefixNumbers:"Tambahkan awalan '+/-' untuk nomor positif dan negatif",cancelBtn:"Batal",applyBtn:"Terapkan",comfirmInputNotation:"Konfirmasikan Notasi Input",
notationsMatch:"notasi sesuai dengan input Anda, harap konfirmasikan yang ingin Anda gunakan:",numberOfCellsHorizontal:"# Sel Horizontal",numberOfCellsVertical:"# Sel Vertikal",gridAngle:"Rotasi Grid",tooManyCellsErrorMessage:"Anda mencoba membuat grid yang terdiri lebih dari 2000 sel. Disarankan untuk mengurangi jumlah sel yang dibuat dengan mengubah ukuran grid atau area grid.",missingParametersMessage:"\x3cp\x3eFormulir pembuatan GRG tidak ada atau parameter tidak valid. Harap pastikan:\x3c/p\x3e\x3cul\x3e\x3cli\x3eArea GRG telah digambar.\x3c/li\x3e\x3cli\x3eLebar dan tinggi sel berisi nilai valid.\x3c/li\x3e\x3c/ul\x3e",
missingOriginParametersMessage:"\x3cp\x3eFormulir pembuatan GRG tidak ada atau parameter tidak valid. Harap pastikan:\x3c/p\x3e\x3cul\x3e\x3cli\x3eAsal GRG sudah diatur.\x3c/li\x3e\x3cli\x3eInput waktu, kecepatan, dan sudut berisi nilai valid.\x3c/li\x3e\x3c/ul\x3e",invalidWidthHeightParametersMessage:"\x3cp\x3eFormulir pembuatan GRG tidak ada atau parameter tidak valid. Harap pastikan input lebar dan tinggi sel berisi nilai valid.\x3c/p\x3e",invalidHorizontalVerticalParametersMessage:"\x3cp\x3eFormulir pembuatan GRG tidak ada atau parameter tidak valid. Harap pastikan input horizontal dan vertikal sel berisi nilai valid.\x3c/p\x3e",
drawPointToolTip:"Klik untuk menambahkan titik asal GRG",missingLayerNameMessage:"Anda harus memasukkan nama layer yang valid sebelum publikasi dapat dilakukan",parseCoordinatesError:"Tidak dapat mengurai koordinat. Harap periksa input Anda.",grgPolarRegionError:"Jangkauan GRG dalam wilayah kutub. Sel yang berada di dalam wilayah kutub tidak akan dibuat.",grgPolarOriginError:"Titik asal GRG tidak boleh berada di dalam wilayah kutub saat membuat GRG menurut Sistem Referensi.",deleteBtn:"Hapus",DD:"DD",
DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Derajat Desimal - Garis Lintang/Garis Bujur",DDLongLatNotation:"Derajat Desimal - Garis Bujur/Garis Lintang",DDMLatLongNotation:"Menit Derajat Desimal - Garis Lintang/Garis Bujur",DDMLongLatNotation:"Menit Derajat Desimal - Garis Bujur/Garis Lintang",DMSLatLongNotation:"Detik Derajat Desimal - Garis Lintang/Garis Bujur",DMSLongLatNotation:"Detik Derajat Desimal - Garis Bujur/Garis Lintang",
GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - Band Letter",UTMHemNotation:"UTM - Hemisfer (N/S)",_localized:{}}});