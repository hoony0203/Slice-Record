const musicQuotes = [
  {
    quote: `One good thing about music, when it hits you, you feel no pain.`,
    artist: "Bob Marley",
  },
  {
    quote: `I think music in itself is healing.`,
    artist: "Billy Joel",
  },
  {
    quote: `Music doesn't lie.`,
    artist: "Jimi Hendrix",
  },
  {
    quote: `I was born with music inside me. Music was one of my parts. `,
    artist: "Ray Charles",
  },
  {
    quote: `I don't make music for eyes. I make music for ears.`,
    artist: "Adele",
  },
  {
    quote: `I don't know anything about music. In my line you don't have to.`,
    artist: "Elvis Presley",
  },
  {
    quote: `Music is only love looking for words.`,
    artist: "Lawrence Durrell",
  },
  {
    quote: `True music must repeat the thought and inspirations of the people and the time.`,
    artist: "George Gershwin",
  },
];

const artistInfo = [
  {
    name: "Yoasobi",
    genre: "JPop",
    handle: "Ayase_YOASOBI",
    channelId: "UCvpredjG93ifbCP1Y77JyFA",
    playlistId: "PLR48NTfP0M0Nv3uFq7ka52rndi7_KJE41",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_nMWGqyr97pm_Gwii1PfkXIYJd4QYOiMP779zRdYQh49II=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Houshou Marine",
    genre: "JPop",
    handle: "HoushouMarine",
    channelId: "UCCzUftO8KOVkV4wQG1vkUvg",
    playlistId: "OLAK5uy_ku6e_FfhepWPldUoOKGGNEasOg64S9Iuo",
    imgUrl:
      "https://yt3.googleusercontent.com/Z2QpYUZ4-jKoFR7Ms330gRQzjI2gZ4CB_uVP6f39YysxUe1u8icrtE07ffpRxCtpu9U65MWNDA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ado",
    genre: "JPop",
    handle: "Ado1024",
    channelId: "UCln9P4Qm3-EAY4aiEPmRwEA",
    playlistId: "PLaxauk3chSWgwI1W0yo5Bv9GAn1O1cwKB",
    imgUrl:
      "https://yt3.googleusercontent.com/I3ckNVLPQq04aQklOnRctTEnBjf7pkppVLV7WYe4Nb4g3sge1h-2IlXAvLnRGgrMkMfL4NadPQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Kenshi Yonezu",
    genre: "JPop",
    handle: "KenshiYonezu",
    channelId: "08yakari",
    playlistId: "PLb02MaZXm5_OGFGXSV-6U2_9f2MqnDBbm",
    imgUrl:
      "https://yt3.googleusercontent.com/ZvIhv4vPntCa1gA857E4hF014HSUZ4fHeUpNLaSTOkh-X4AndfoXiM1Koi0rotix2ddYAYLYGQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Fall out boy",
    genre: "Rock",
    handle: "falloutboy",
    channelId: "UC2qWxZHgnlwDvcmLqP23jrA",
    playlistId: "PLB43607A7266FA847",
    imgUrl:
      "https://yt3.googleusercontent.com/y6fIXMuN-XSn3s7CHB-uKCX_hVu3q8Wp_3IYJ6AcNOI7Y6okvX7v0yeU3tGt7eWp9rVg-J0nOA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Bon Jovi",
    genre: "Rock",
    handle: "falloutboy",
    channelId: "UCkBwnm7GOfYHsacwUjriC-w",
    playlistId: "PLFaewo-QNq7McBMtUCLUYQAePZ5eb6fjH",
    imgUrl:
      "https://yt3.googleusercontent.com/bKcjkZOD7EI5g6QUjjWedB6xIovkj_FNYQCJ6KrEOt4DCwp0nqAFe8qGG0HJNjoIIq3PGk8_aA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Linkin Park",
    genre: "Rock",
    handle: "LinkinPark",
    channelId: "UCZU9T1ceaOgwfLRq7OKFU4Q",
    playlistId: "PLlqZM4covn1FbNvE8hdc9ft4EY7reWaoi",
    imgUrl:
      "https://yt3.googleusercontent.com/ghibhu46qxFz2WJtl9qYgPASaaqb6U5WuZ0xQySouKEqamkSDTMKZZcPRqkXC833hWlS0RiYGg=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Jazz Music Korea",
    genre: "Jazz",
    handle: "jazzmusickorea1",
    channelId: "UCsfYd7AVFk_ASiMudok6_sQ",
    playlistId: "UULPsfYd7AVFk_ASiMudok6_sQ",
    imgUrl:
      "https://yt3.googleusercontent.com/Ux3pXv1zNxdnSi5iyModcNJhm43Rr7giYQy-2oShG9wHMeKSNzdBIzQEtgm7LNKKM4w97EuH=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Parkjuwon",
    genre: "Jazz",
    handle: "parknpd",
    channelId: "UCJVryV6vgzZVMKMKIjvRgjg",
    playlistId: "UULPJVryV6vgzZVMKMKIjvRgjg",
    imgUrl:
      "https://yt3.googleusercontent.com/W4owJggmOvmrNEVD14WbA-ZviNXQky6IeV5QDZBNeZrkN8EGCtVm87ROk_CfQQ2FHiJy7EbVhOQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Miki Matsubara",
    genre: "CityPop",
    handle: "staywithme_miki",
    channelId: "UCz2w1NbLL_hUphhsZRAFljg",
    playlistId: "OLAK5uy_nmJDdZFsKwzG-zHuYskLFFT0VQTcnE-uc",
    imgUrl:
      "https://yt3.googleusercontent.com/MtFV_QufFGuwSFisaxUSA5tcDEuy05731pwD9ySJEPVEx25Msx_3lCpLMZMJE4buYYyfXuauOw=s160-c-k-c0x00ffffff-no-rj",
  },

  {
    name: "Official髭男dism",
    genre: "JPop",
    handle: "officialhigedandism",
    channelId: "UC3vg17IZ1IV73xx069jG44w",
    playlistId: "OLAK5uy_mrRXl9TQqb9_hDLXJXJpDMk9KYoOtCQxo",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_nREVbjTmMmK1220aC-95bDevzasIhVkImOBPeEWgfTZIw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Green Day",
    genre: "Rock",
    handle: "GreenDay",
    channelId: "UCqC_GY2ZiENFz2pwL0cSfAw",
    playlistId: "PL5150F38E402FACE8",
    imgUrl:
      "https://yt3.googleusercontent.com/M7_OChLj3zb_SR61TY08A4SVZFmIdY56pJyuKVF1HTWUwwxvdAtbO4n_Eh29ittLVUwTo7M=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "André Rieu",
    genre: "Classic",
    handle: "andrerieu",
    channelId: "UCAaX9NjMCos_Qwz3n41eUgg",
    playlistId: "PLbv4mtcyLmhKdUwH-nth1qD2asaJD3rTH",
    imgUrl:
      "https://yt3.googleusercontent.com/WON0-Y-iE_J-wkjIGSdZvCeSMhXGEQebj_M0GwlcH3lpYf411GQyeWIieAGaG5-tLA_NV1rr6w=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Maroon 5",
    genre: "Pop",
    handle: "Maroon5",
    channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
    playlistId: "OLAK5uy_n155KdavVSixiZeaadYjePl5_QxTCXxA0",
    imgUrl:
      "https://yt3.googleusercontent.com/S_jTelpAHOdADumYkZAtwyLydEkqtv39s3T-Rmif0v1WCDb8pZit-Vlo43pR1jBEn0Tmcpkx=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "중식이",
    genre: "Rock",
    handle: "GagRocker",
    channelId: "UC0VF24Tfg83nyjB9WDD7Aiw",
    playlistId: "PLwT8eIPZsY9WbaRuXNutA0Pc6suXng7G1",
    imgUrl:
      "https://yt3.googleusercontent.com/bkARTcAUZybTCWpDb6u0eQEW8G_nJaDJ942bZEKpivHDrSYjQl5AcROT8suW9fwGmo_23kbgLoc=s160-c-k-c0x00ffffff-no-rj",
  },

  {
    name: "Mrs. GREEN APPLE",
    genre: "JPop",
    handle: "MrsGREENAPPLE_Official",
    channelId: "UCpFgmZm65yOU5X-hmWkWjuw",
    playlistId: "PLBYwzo4wlAc-P2Vj-t-yLpuBEdc6eFelp",
    imgUrl:
      "https://yt3.googleusercontent.com/sW0HoMRO7s44moVDqfiDRXzLGK0eIujv-8RTFli6OA7lhjc-h4qKadOCeWhoZq2YslRP66TfnQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "ナノ / NANO",
    genre: "JPop",
    handle: "nano_official",
    channelId: "UCyzbm53iOR_o_PY43-7zpCA",
    playlistId: "PLzgm5o1Lu3jDVcT50pl9GKUSXcpPIGPwG",
    imgUrl:
      "https://yt3.googleusercontent.com/gt829H1GXsllfmbUY9O3Vb50xdmYHgeVnCf2wT0ZiDW9PUTvyK_kFhHlLZeq5IB8eCHEAS2ObUc=s160-c-k-c0x00ffffff-no-rj",
  },

  {
    name: "Travis",
    genre: "Rock",
    handle: "travistheband",
    channelId: "UCfOY7DHgcXBp2drfyFJQvaw",
    playlistId: "PLnHBMhgJ3B6CCiVp5TRfZw7u2BiS86Hag",
    imgUrl:
      "https://yt3.googleusercontent.com/z0Z7UPvhnKP9u7AP6gJuuyyn4ES5QnNcpgXxEnQbLK8ZqRCaf0iR3EtLCodJpzGHgYBSP9oX9w=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Coldplay",
    genre: "Rock",
    handle: "coldplay",
    channelId: "UCDPM_n1atn2ijUwHd0NNRQw",
    playlistId: "PLsvoYlzBrLFAJd4hNQSHw1lYjDKeQB_iU",
    imgUrl:
      "https://yt3.googleusercontent.com/Q0t5zTKg2h9IS5NvbK4RMNCsT0Z7U9pUiRfODNJVjuBmhz7kDaPinRnCzPvgh9eWXhDqD7vK4E0=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Robbie Williams",
    genre: "Pop",
    handle: "robbiewilliamsvideos",
    channelId: "UC3Nho5FPo__hIFbg_UlaCgA",
    playlistId: "PLGBhV9l7OidKZfYxOvXKx9jRwNTBg6iyY",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_lrzsu3s4bfNMkmCEaFKIT3E5OCscUA5PvvBZdw53Htwg=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Bruno Mars",
    genre: "Pop",
    handle: "brunomars",
    channelId: "UCoUM-UJ7rirJYP8CQ0EIaHA",
    playlistId: "OLAK5uy_m0ApIZblcRk9r_9DXSyf69qfT6RhNmy0U",
    imgUrl:
      "https://yt3.googleusercontent.com/vE1ESBld6LqHBv7339FuPAn1WBKJR5PFnZRzwqQ78Gp3zxB7seqCw6HfQLJIMTaz-iIjUj72=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "My Chemical Romance",
    genre: "Rock",
    handle: "mychemicalromance",
    channelId: "UCCZGYab5SpD0I7Z5JqJZgww",
    playlistId: "OLAK5uy_llJhEF1cplpmcREPfQV3TNvrL_mBFYXLg",
    imgUrl:
      "https://yt3.googleusercontent.com/fSHgmpqFhGzzwRbGgQXFNeFKb-DO5CoN9jk4NCNTCwRLnN-CtIr7sVliFuzQrmlgHhq_dx5W=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "YUKIKA",
    genre: "CityPop",
    handle: "yukikaofficial2149",
    channelId: "UCM4d2cYzD0haAcSMGDlTlXA",
    playlistId: "PLyeAJtlPAN4TntM7OHJYTyCKiy8DrhSZc",
    imgUrl:
      "https://yt3.googleusercontent.com/lXT6vx6SIvA9tsysHoGSYN9EkicXzI3BpoSIqu0WPKtnUV1GCeBT4DYzsEnFKSBtpIlBBp_4Rw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "ANRI",
    genre: "CityPop",
    handle: "anriofficial3041",
    channelId: "UCJ3s5YZx4WE6CKr6cUeVo4g",
    playlistId: "OLAK5uy_m1kZ6DqWGQ0EEUQvl_DaGaTWUfII87Hu4",
    imgUrl:
      "https://yt3.googleusercontent.com/hNSKPoi9dA0hEQRZXBrlqM8hu2TW6r38B8fbViSldKfc02hEFIB3luInLF37SDBhJGZBEqec=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "RUBYTUBE",
    genre: "CityPop",
    handle: "RUBYTUBE",
    channelId: "UCDS_M8a7A9k6BKZJNkTXsJQ",
    playlistId: "PLR-joPJQvjbvpK4nnR3DtEuPCQ_NNRLG-",
    imgUrl:
      "https://yt3.googleusercontent.com/rWY2b8a3927B-RuhR9r78lGMZ0VXl4i0QwnjJs0ef2gD0xsTTlyfn88tJtMr6e311BMC-oajww=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Frank Sinatra",
    genre: "Jazz",
    handle: "FrankSinatra",
    channelId: "UCJtvg6ZFwzdFdtcHBqetvwg",
    playlistId: "PL4X0crpaJ94UK9iL_IFKcgpQkjwoP_TG5",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_kc8nuSFzg4zkG_u0xG5n5lbYn3q1WLqgElEciJX8scwA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Christina Aguilera",
    genre: "Pop",
    handle: "ChristinaAguilera",
    channelId: "UCgBN6eQyZPnsApiL1QW44Hg",
    playlistId: "PLT3Y-E0TdXsxPWckmgX65i6SrMnsIjg_W",
    imgUrl:
      "https://yt3.googleusercontent.com/He4-deR6YO8Mb4j6XHeROfyjQ3GDjN8U-K4OYsHiU4osWwk3R2b0NNpDjQAhg3dUZaQ-dy-8pg=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Luis Fonsi",
    genre: "Pop",
    handle: "LuisFonsiVEVO",
    channelId: "UCLp8RBhQHu9wSsq62j_Md6A",
    playlistId: "OLAK5uy_m96IkKx09JXVVIjyinQhPRttapR8eoawg",
    imgUrl:
      "https://yt3.googleusercontent.com/c-TEErg6GIyeUaD_BM5Xm9P1PI7lHV1XvnmGyK-Cc_fEwDUT-p3TfIsy64xtg392U2dAP11IfQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Taylor Swift",
    genre: "Pop",
    handle: "TaylorSwift",
    channelId: "UCqECaJ8Gagnn7YCbPEzWH6g",
    playlistId: "OLAK5uy_kOjcMYd-zFhGK7iPzOb1m2-3ituAZSNe0",
    imgUrl:
      "https://yt3.googleusercontent.com/wp-YrJ2bHsq4jKC1CLqzMRmaUhb8Iuk1V1REPTBUwxhchHpPrHCIO27bhQrzFzusHLRarepJQg=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "David Bowie",
    genre: "Pop",
    handle: "davidbowie",
    channelId: "UC8YgWcDKi1rLbQ1OtrOHeDw",
    playlistId: "PLkRzqIoq7yc3A5-7E6bDlk5PLeJMNfZIi",
    imgUrl:
      "https://yt3.googleusercontent.com/gbVK5gVDPckapgCD_42vz8pojuUadni8qhNxpqj39s1cjZu87GoDxpwrZnjY31RAI0qy_0Iw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Radiohead",
    genre: "Rock",
    handle: "Radiohead",
    channelId: "UCq19-LqvG35A-30oyAiPiqA",
    playlistId: "OLAK5uy_n2tLf8_EM3eVW5m0JDl9JjJKmF8C72M0M",
    imgUrl:
      "https://yt3.googleusercontent.com/iGWTxAf6tokq9e2cVapQL6D1qgbtD-oFkVLqcUGF24WjUwX68qCm-iN4mMqqJEz_4eRSi-EyEQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Luke Howard",
    genre: "Classic",
    handle: "lukehowardmusic",
    channelId: "UCIFmkiz9BhfayWsdxET3-iQ",
    playlistId: "OLAK5uy_kmPgB1BTI40KqLB25U67BdF10P2w09ak4",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_koqRzIkI5fIcX7vBMl5tvRpd3Cx3Cqv9refKHupGdc7g=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "OLIVIA BELLI",
    genre: "Classic",
    handle: "oliviabelli3912",
    channelId: "UC6XxHV2x3D9eZrxtCp7ncPA",
    playlistId: "OLAK5uy_m2d35UAesRfq_Jk7dCUmtDCqR41ibHI10",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_m2ysAXmqrzr-pIUTnM2TyPumNPc8zd_XSEwQpZNSSBl1c=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Dmitry Evgrafov",
    genre: "Classic",
    handle: "evgrafov-music",
    channelId: "UClTdqURv9EgnX40gS6ViEpg",
    playlistId: "OLAK5uy_mDJXlY127HV25cd6B06KBsEQf1oIaMNiM",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_mOyovPyAa4cj6eCsbhBkMj3O8aza85vQI6ST-imefQ-FA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Jim Perkins",
    genre: "Classic",
    handle: "JimPerkinscomposer",
    channelId: "UCbMkGr4bR8Is21azrHpZ76w",
    playlistId: "OLAK5uy_maxq1dlnV-ApbBgFXHI0V8YrG2d4y1hyo",
    imgUrl:
      "https://yt3.googleusercontent.com/FqF98cyjXX1aLAKPJfCUCNPWHeWkPCw_1vdyzeyS3w0tl_d56cukPB8esaPJCaytNWJI4pGT=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "David García Díaz",
    genre: "Classic",
    handle: "David García Díaz",
    channelId: "UCtnJtHW04Nq0QuzirGKxrZQ",
    playlistId: "OLAK5uy_ljed27S8rUGqq2mcR5RJEW-k9y_iFGGbE",
    imgUrl:
      "https://yt3.googleusercontent.com/z3a9B87gqeQ9b1vhVplaIgYRR593Uv4ZJ8_bu_oaN1fECGVUkTxdB8dNlAHbkEhepri1fRZDEw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Jurrivh",
    genre: "Classic",
    handle: "Jurrivh",
    channelId: "UCLh10hzbQJPg0Hho1VdGXwA",
    playlistId: "PLkNHs3fTChWKHqmtSoht6M0aVtnR08MU-",
    imgUrl:
      "https://yt3.googleusercontent.com/MBkyUMszBAKilBEzGusRfxaAx49pSCDsmVTrfL34IxXJsuxfjM0uEHTdhEEkJwKUQ-cDI5dT8A=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Sebastian Plano",
    genre: "Classic",
    handle: "SebastianPlanoOfficial",
    channelId: "UCy1luuCWfL56LfSRQeC-R8g",
    playlistId: "OLAK5uy_krMpNYDYkLZpO5X7rXE2J9wAyx5z-IVrY",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_n9M2KeXGWO4HuSiGyeGkIcwPB2C9m5QuQl-JWUHc9vj7A=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Piotr Wiese",
    genre: "Classic",
    handle: "PiotrWiese",
    channelId: "UCdC5X4Q5vUmat5PqfUiLRPg",
    playlistId: "OLAK5uy_l5J_h7XEau3kOhtiLubuRMtqhTYQiFdHY",
    imgUrl:
      "https://yt3.googleusercontent.com/6tqTYQu41ufRgCaMF9ElM9XbQL5xzjWmpMmjbadSNcxDoLDviDcW36VRjzlcAlqJZvxceY9i=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Mike Lazarev",
    genre: "Classic",
    handle: "mikelazarev5833",
    channelId: "UCwg9fPTD_ryP2BHmexNs0HQ",
    playlistId: "OLAK5uy_nIjJqEzNmmxcYvVtrwIoQ4R8fjYoXs2DQ",
    imgUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/d10b98be2db655144a452a33ca5dc616.jpg#d10b98be2db655144a452a33ca5dc616",
  },
  {
    name: "Garth Stevenson",
    genre: "Classic",
    handle: "Garth Stevenson",
    channelId: "UCoNQ29hWMneLPREP-ioO58Q",
    playlistId: "OLAK5uy_nnjSdhv7dJz2EPB6rBaLB8khPUJLdVrR0",
    imgUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/01f400ad1dc145eca6631199171d8321.jpg#01f400ad1dc145eca6631199171d8321",
  },
  {
    name: "Snorri Hallgrímsson",
    genre: "Classic",
    handle: "snorrihallgrimsson",
    channelId: "UC2-0PHwDdJMGcl9O7OH8tPA",
    playlistId: "OLAK5uy_mUntWww1254MA8icCUJLUTd2ml-h8aHqo",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_k5e7J_lxxL3xp36hBTZ2Cj_9V8cLnz6E4_1wFrZiTJJIg=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ian Wong",
    genre: "Classic",
    handle: "Ian Wong",
    channelId: "UCxXUhQ4k7wa31UFRtSUYzdw",
    playlistId: "OLAK5uy_nAmCxdzh6bZp5BrlFAFNGD6b1l_TX1qp0",
    imgUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e73a1cac3fcfe4a181fe9b3b5d565b3d.jpg#e73a1cac3fcfe4a181fe9b3b5d565b3d",
  },
  {
    name: "Carlos Marquez",
    genre: "Classic",
    handle: "Carlos Marquez",
    channelId: "UCR3DA10Iat-cftZonqXf6CQ",
    playlistId: "OLAK5uy_ldihG1EAvF6O8VWMvfFlbjpmCUVZslrKY",
    imgUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/8754028742f56953ef3b49f116a6fadc.jpg#8754028742f56953ef3b49f116a6fadc",
  },
  {
    name: "Otto A. Totland",
    genre: "Classic",
    handle: "Otto A. Totland",
    channelId: "UCc_EJSlABOXHRTywWnBuTQw",
    playlistId: "OLAK5uy_nQs4Y9emkLqo2udmIScUtrMKVSPgZCQ8E",
    imgUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/6214712ed137cb32fb62a065a07ec582.jpg#6214712ed137cb32fb62a065a07ec582",
  },
  {
    name: "Norah Jones",
    genre: "Jazz",
    handle: "norahjones",
    channelId: "UCBJtGODWGrM3fdQ0G5E9uAQ",
    playlistId: "OLAK5uy_m4aeBv7OLavcgGfMsrrocn1fg-hnXCgK4",
    imgUrl:
      "https://yt3.googleusercontent.com/Wy5dyiHKjefu-zyRidZJ4b6Ny2F0rQieb1DXOKYUXbHAJKUXdq3yvKDbFerR-io9AoqVbS3RLA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Billie Holiday",
    genre: "Jazz",
    handle: "billieholidayofficial",
    channelId: "UCwO6O7HAOHQ7_FgI28QWtvQ",
    playlistId: "OLAK5uy_niDQ_0u3a5oK5VG3ymaI6_url-ys_RmwU",
    imgUrl:
      "https://yt3.googleusercontent.com/F2BFqDFqkCVZ7SDyF3urkhn03-HL60auUJeHdnumyomsUMA2EN1fD3t_YnXMpOZZhS1_R2J0hw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "The Cinematic Orchestra",
    genre: "Jazz",
    handle: "cinematic_orchestra",
    channelId: "UC4IpV5hKYMP5dBqsKRrXjOA",
    playlistId: "OLAK5uy_lFWGeD637GWQg4HgKHFzHep4yAsv3WHw4",
    imgUrl:
      "https://yt3.googleusercontent.com/qXIn1Qz8XZ_Lljqhp4RvQTHBRWtm7EpnREqZ6j4GJMvT1mzbTWMdLZTNPBC0dInQVRewZ1cBdl8=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "John Coltrane",
    genre: "Jazz",
    handle: "johncoltrane",
    channelId: "UCGiKlUaxFFNXkEYIW6mfbBQ",
    playlistId: "PLGUJd_6WZDWsSj43DtFTpna2bLkcd0N3R",
    imgUrl:
      "https://yt3.googleusercontent.com/z2Jsv74Vh0XSACiDbfcny1AybKpHLtEb6_vzP-n6p9Gn3hkCYOvUszU9xWrLekC_66Y26roL4Q=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ray Charles",
    genre: "Jazz",
    handle: "raycharlestv",
    channelId: "UCuDb3PN8JzDZLY-TUosFkgw",
    playlistId: "PL1a1FcevWP181NNFzcIAK8JC8zYeF7dvN",
    imgUrl:
      "https://yt3.googleusercontent.com/CCi8_PVD-0cEWApO1xlTJbBaBzcOyG5xMHp0v1_E8UiJsp3fzoYqKZvJkx6SK2zKEab2hNkGcw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Katie Melua",
    genre: "Pop",
    handle: "katiemelua",
    channelId: "UCeZI3rELje_CcLaZmXnsrwg",
    playlistId: "OLAK5uy_nsha_ZhMsk10m1kgBkQ7F8nFtVnNH1Tx4",
    imgUrl:
      "https://yt3.googleusercontent.com/G_-pu-boa_JoODArRKvuFmUETEbYn6Fl2xzc9WgqtvGaaS8rVbIO9LPvt0eHNKUnJelmbZ-D=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Diana Krall",
    genre: "Jazz",
    handle: "OfficialDianaKrall",
    channelId: "UCmDuTCSihguNvttBVS_Yu0A",
    playlistId: "OLAK5uy_mHQdVrJR1ed9Xraxi452AE41jWchlk4yM",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_nVGnEnbVrLhbjHwcqgoJ_RzS3McgwsB0BBwB5FLBvhGA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Jamie Cullum",
    genre: "Pop",
    handle: "jamiecullum_official",
    channelId: "UCOrI5RFAhBgAGcOzCUVbeNQ",
    playlistId: "OLAK5uy_nSR0RnVWDpJ80DxqoGbEDlbNuMysBCkOU",
    imgUrl:
      "https://yt3.googleusercontent.com/KG40Rv-qOW973qC1B-gestnjQcvZIb89SpKPVxjUzrtste2SwlgTGA2VFSMp0LJzr1CXBCkZzA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Herbie Hancock",
    genre: "Jazz",
    handle: "herbiehancock",
    channelId: "UCOrI5RFAhBgAGcOzCUVbeNQ",
    playlistId: "OLAK5uy_kwT9a_rgOmD5kKo9hWnzYrpq2jU96Zmfk",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_ksvtoY73jFXu6RUg172KJeraBSxX02OehPLSlsUVv8jQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Zaz Official",
    genre: "Jazz",
    handle: "ZazOfficial",
    channelId: "UCmQZ7aYY8YH6HHhY2Jx2a9Q",
    playlistId: "PLGpfjoJVRqU4guesWbHD6SW6EvQCeL__R",
    imgUrl:
      "https://yt3.googleusercontent.com/EqAlyNiZ9z9XGD9dKj3KuH7XB-1E-U9Vp_nKx2fZnRnJIYW2HY1tQ7wRhHOoQ06Op3KeNHSjdeg=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Dhruv",
    genre: "Pop",
    handle: "dhruv",
    channelId: "UCGqoKUzBhSu87BOtqWapGFQ",
    playlistId: "OLAK5uy_lmdx4mMwyducnRhPbm-oXZsu5WyGd7AfE",
    imgUrl:
      "https://yt3.googleusercontent.com/GIyjt3tBJYfUDBjuaRdW6HZmCTwmwdfILaN-azoDzcolAL95t0R2-UMdeb_ln0huDrDnNU_GEw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Melody Gardot",
    genre: "Jazz",
    handle: "MelodyGardotOfficial",
    channelId: "UC6FaEzX8vrnrir6XaIIdQSw",
    playlistId: "OLAK5uy_lVgO-NyurbBkS6TALE917wqInFXjTBvmw",
    imgUrl:
      "https://yt3.googleusercontent.com/ZWkVhN1CVSGeg2d9YZVLByVrwkzg9TPh2Xcwmb5kd2JLABTlDqaU6oDykYVdK1vd8carGW2R1A=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Charles Mingus",
    genre: "Jazz",
    handle: "Charles Mingus",
    channelId: "UCXSaOCck3oVxhB4W_4Ca3MQ",
    playlistId: "OLAK5uy_llZiTtBCHCEqAgf3qMu4H8IKGjNImL_wY",
    imgUrl:
      "https://yt3.googleusercontent.com/ThIJ2rHTZ4EH5435JirjqDzWaI788dLe2P-lFz6a1kg60aGCQsTe9IA6r9Dzuzcr1JCAPmbT4Ag=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "ATARASHII GAKKO!",
    genre: "JPop",
    handle: "ATARASHIIGAKKO",
    channelId: "UCp0iCvHGMwyfPHpYq7n2sPw",
    playlistId: "PLPDNGE_KSi5R2Wjcu1kypaFyTv6M1D1Ua",
    imgUrl:
      "https://yt3.googleusercontent.com/JNzydOvJG_LI5cHqGd2LcbAAYClvwoi6RnggQtrLIHyIhqPH7UlqdBCgXgrc4VtBJkXbRRcJy1U=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Madeleine Peyroux",
    genre: "Jazz",
    handle: "MadeleinePeyrouxmusic",
    channelId: "UCuw3IsM_h_eVWxH3dHwz3Ng",
    playlistId: "OLAK5uy_kSS-qD46WVfR22zk4ybc7iKQBmScceS3c",
    imgUrl:
      "https://yt3.googleusercontent.com/yqknA3q_iduUMrn0GLyFSMhakcXefTzg3IIa6V053TXN5nCIzDuytM6Adou0D_cfh5jDDpfp-Q=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Wes Montgomery",
    genre: "Jazz",
    handle: "WesMontgomeryMusic",
    channelId: "UCmr_ZV6kjCf7EKO-VDcriVw",
    playlistId: "OLAK5uy_m9EVubxTyPKKTpQsw2qiDdVomp9kw0WNo",
    imgUrl:
      "https://yt3.googleusercontent.com/g0JyImrwlohlAUc1OqVTzW_dfZRa-sb1IfD2CPEdDNhzJ8m6btIXxzXq4MNzVw5tRlLMEv1ybQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "George Benson",
    genre: "Jazz",
    handle: "officialgeorgebenson",
    channelId: "UChrbSeE9HULE3VBPAMr2dtw",
    playlistId: "OLAK5uy_kHswpKgS-lkCimPSR-IRmuycg_1Yl1leM",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_l9M7V-Gcf0QaLexkCh-dKHgnEvPstP_SdT7PIUnPKo0eM=s160-c-k-c0x00ffffff-no-rj",
  },
];

export { artistInfo, musicQuotes };
