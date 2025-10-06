// type: app/service

const products = [
  {
    type: "app",
    name: "Alight Motion Pro",
    price: "Rp4.000",
    duration: "11-12 Bulan",
    warranty: "Garansi 28-30 Hari",
    info: "Akun Private Dari Owner, bisa dipindahkan ke akun pribadi user.",
    icon: "https://deposit.pictures/media/images/5f/fb/a2/5ffba215ceff49b18cb5cedcf99ef49e.jpg"
  },
  {
    type: "app",
    name: "Capcut Pro",
    price: "Rp9.000",
    duration: "28-30 Hari",
    warranty: "Garansi 24 Jam",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/7f/a1/a2/7fa1a2f4776f4954b7ef1bb581a96d6b.jpg"
  },
  {
    type: "app",
    name: "Pics Art Pro",
    price: "Rp7.000",
    duration: "28-30 Hari",
    warranty: "Full Garansi",
    info: "Akun Pribadi Pembeli.",
    icon: "https://deposit.pictures/media/images/08/6d/e8/086de8042e3b41c0a1798efb51bfa317.jpg"
  },
  {
    type: "app",
    name: "Canva Pro",
    price: "Rp10.000",
    duration: "11-12 Bulan",
    warranty: "Full Garansi",
    info: "Akun Pribadi Pembeli.",
    icon: "https://deposit.pictures/media/images/52/60/41/5260418175d8495b919e5b58bf3ed713.jpg"
  },
  {
    type: "app",
    name: "Wink",
    price: "Rp9.000",
    duration: "28-30 Hari",
    warranty: "Garansi 7 Hari",
    info: "Akun Pribadi Pembeli.",
    icon: "https://deposit.pictures/media/images/8c/8c/d3/8c8cd31d10b94db1b7f60b74f38d8a73.jpg"
  },
  {
    type: "app",
    name: "Microsoft 365",
    price: "Rp10.000",
    duration: "28-30 Hari",
    warranty: "Full Garansi",
    info: "Akun Pribadi Pembeli.",
    icon: "https://deposit.pictures/media/images/42/ff/0e/42ff0e66904d433b9cadb93dc3a678ab.jpg"
  },
  {
    type: "app",
    name: "Perplexity AI",
    price: "Rp25.000",
    duration: "28-30 Hari",
    warranty: "Garansi 7 Hari",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/1c/22/26/1c22263ffb47461cb28891468a48485b.jpg"
  },
  {
    type: "app",
    name: "ChatGPT Plus",
    price: "Rp20.000",
    duration: "28-30 Hari",
    warranty: "Garansi 24 Jam",
    info: "Akun Pribadi Pembeli.",
    icon: "https://deposit.pictures/media/images/9f/4d/da/9f4dda1ab4d24172a81addcbcd277c86.jpg"
  },
  {
    type: "app",
    name: "Gemini Advanced",
    price: "Rp15.000",
    duration: "28-30 Hari",
    warranty: "Garansi 7 Hari",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/b4/1d/1b/b41d1bb498384c528b7f4307410a2829.jpg"
  },
  {
    type: "app",
    name: "Blackbox AI",
    price: "Rp10.000",
    duration: "28-30 Hari",
    warranty: "Garansi 7 Hari",
    info: "Akun Sharing Dari Owner.",
    icon: "https://deposit.pictures/media/images/c4/a3/44/c4a34468f91449bc88378269e13283af.jpg"
  },
  {
    type: "app",
    name: "Spotify Premium",
    price: "Rp15.000",
    duration: "28-30 Hari",
    warranty: "Full Garansi",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/44/23/3b/44233b5c5f834b499cdd53d8734f2baa.jpg"
  },
  {
    type: "app",
    name: "Duolingo Plus",
    price: "Rp8.000",
    duration: "14 Hari",
    warranty: "Full Garansi",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/47/a9/ff/47a9ffa09a8549a09efd283e39a34f21.jpg"
  },
  {
    type: "app",
    name: "Get Contact Premium",
    price: "Rp9.000",
    duration: "28-30 Hari",
    warranty: "Garansi 24 Jam",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/b3/f0/8a/b3f08a70ffd64681a6a63647c32799b4.jpg"
  },
  {
    type: "app",
    name: "Fizzo Novel Premium",
    price: "Rp9.000",
    duration: "28-30 Hari",
    warranty: "Garansi 7 Hari",
    info: "Akun Sharing Dari Owner.",
    icon: "https://deposit.pictures/media/images/11/eb/04/11eb0467b80e4df9b62c8a01713c571b.jpg"
  },
  {
    type: "app",
    name: "VPN Premium",
    price: "Rp5.000 - Rp8.000",
    duration: "28-30 Hari",
    warranty: "Garansi 24 Jam",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/a3/c5/0b/a3c50b13ab75436a9d36a5232a7732b0.jpg"
  },
  {
    type: "app",
    name: "Grammarly Premium",
    price: "Rp10.000",
    duration: "28-30 Hari",
    warranty: "Full Garansi",
    info: "Akun Sharing Dari Owner.",
    icon: "https://deposit.pictures/media/images/56/d6/b5/56d6b566a2d6498daf3d0ec32e7f489b.jpg"
  },
  {
    type: "app",
    name: "Viu Premium",
    price: "Rp5.000",
    duration: "Lifetime",
    warranty: "Garansi 28-30 Hari",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/cd/6f/10/cd6f10c4d5ba4d47a96e0fb47c9aacd2.jpg"
  },
  {
    type: "app",
    name: "Bstation Premium",
    price: "Rp23.000",
    duration: "28-30 Hari",
    warranty: "Garansi 24 Jam",
    info: "Akun Private Dari Owner.",
    icon: "https://deposit.pictures/media/images/42/7f/ef/427fef13a4854f8db42cdeaf359fe8c0.jpg"
  },
  {
    type: "app",
    name: "Disney+ Hotstar",
    price: "Rp25.000",
    duration: "28-30 Hari",
    warranty: "Full Garansi",
    info: "Akun Pribadi Pembeli (1P1U).",
    icon: "https://deposit.pictures/media/images/34/54/63/3454637d5ab44fbd87e25b7510a374c2.jpg"
  },
  {
    type: "app",
    name: "Netflix Premium",
    price: "Rp27.000",
    duration: "28-30 Hari",
    warranty: "Full Garansi",
    info: "Akun Pribadi Pembeli (1P1U).",
    icon: "https://deposit.pictures/media/images/16/15/70/161570276f3f4ce8ab3759a555991d04.jpg"
  },
  {
    type: "app",
    name: "Prime Video",
    price: "Rp15.000",
    duration: "28-30 Hari",
    warranty: "Full Garansi",
    info: "Akun Private Dari Owner (5 profile).",
    icon: "https://deposit.pictures/media/images/1e/d5/bb/1ed5bb8bf5f040c5b5d805420ef06428.jpg"
  },
  {
    type: "app",
    name: "Vidio Premium",
    price: "Rp25.000",
    duration: "28-30 Hari",
    warranty: "Garansi 24 Jam",
    info: "Akun Private Dari Owner (Mobile).",
    icon: "https://deposit.pictures/media/images/09/cc/56/09cc562692ee498bb9c0b31a20986c53.jpg"
  },
  {
    type: "app",
    name: "YouTube Premium",
    price: "Rp4.000",
    duration: "28-30 Hari",
    warranty: "Garansi 24 Jam",
    info: "Akun Pribadi Pembeli.",
    icon: "https://deposit.pictures/media/images/64/42/5e/64425ed4a6ed4afb9c0786f9f9965593.jpg"
  },
  {
    type: "service",
    name: "Jasa Membuat Script Web",
    price: "Rp15.000",
    duration: "Pengerjaan 7 Hari",
    warranty: "Garansi Revisi 3x",
    info: "Jasa membuat script untuk website kamu, menggunakan teknologi ai untuk membuat nya.",
    icon: "https://deposit.pictures/media/images/f8/53/69/f85369fa2ca545f9b8191222bad5d773.jpg"
  },
  {
    type: "service",
    name: "Jasa Edit 3×",
    price: "Rp2.000",
    duration: "Pengerjaan 1 Jam",
    warranty: "Garansi Revisi 1×/Video",
    info: "Jasa edit video menggunakan preset am/template capcut, bebas req preset/template.",
    icon: "https://deposit.pictures/media/images/00/7a/7b/007a7b52c44c429984396566d92e4120.jpg"
  },
  {
    type: "service",
    name: "Jasa Membuat Pp Karakter",
    price: "Rp3.000",
    duration: "Pengerjaan 1 Hari",
    warranty: "Garansi Revisi 3x",
    info: "Jasa membuat foto profile menggunakan karakter yang kamu inginkan.",
    icon: "https://deposit.pictures/media/images/d2/d0/b2/d2d0b2ec6a8c428f9649272a1d763df4.jpg"
  },
  {
    type: "service",
    name: "Jasa Cek Tag Getcontact",
    price: "Rp1.000",
    duration: "Pengerjaan Secepatnya",
    warranty: "Tanpa Garansi",
    info: "Jasa mengecek tag orang orang di getcontact.",
    icon: "https://deposit.pictures/media/images/b8/e9/0a/b8e90ad8e8d44e13b33140f03a71b8ba.jpg"
  },
];

export default products;