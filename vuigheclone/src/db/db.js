const films = [
  {
    id: 1,
    name: "Lupin III:Part 6",
    alias: "lupin-3-part-6",
    type: "anime",
    image: "/public/img/lupin3viendancuoicung.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 2,
    name: "MIERUKO-CHAN",
    alias: "mieruko-chan",
    type: "anime",
    image: "/public/img/merukochan.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 3,
    name: "SEKAI SAIKOU NO ANSATSUSHA, ISEKAI KIZOKU NI TENSEI SURU",
    alias: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    type: "anime",
    image: "/public/img/3.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 4,
    name: "Sakura",
    alias: "sakugan",
    type: "anime",
    image: "/public/img/4.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 5,
    name: "Kimetsu no Yaiba",
    alias: "kimetsu-no-yaiba",
    type: "anime",
    image: "/public/img/5.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 6,
    name: "BORUTO: NARUTO NEXT GENERATIONS",
    alias: "boruto-naruto-next-generations",
    type: "anime",
    image: "/public/img/6.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 7,
    name: "World Trigger",
    alias: "world-trigger",
    type: "anime",
    image: "/public/img/7.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 8,
    name: "Taishou Otome Otogibanashi",
    alias: "Taishou-Otome-Otogibanashi",
    type: "anime",
    image: "/public/img/8.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 9,
    name: "Vua Hải Tặc",
    alias: "vua-hai-tac",
    type: "anime",
    image: "/public/img/9.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 10,
    name: "Shiroi Suna no Aquatope",
    alias: "shiroi-suna-no-aquatope",
    type: "anime",
    image: "/public/img/10.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 11,
    name: "Deji Meets Girl",
    alias: "deji-meets-girl",
    type: "anime",
    image: "/public/img/11.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
  {
    id: 12,
    name: "Build Divine: Code Black",
    alias: "build-divine-code-black",
    type: "anime",
    image: "/public/img/12.jpg",
    src: "https://youtu.be/lyxGLKQogfU",
  },
];
const tinAnime = [
  {
    id: 1,
    src: "https://tinanime.com/he-lo-hinh-anh-moi-cho-anime-the-heike-story",
    image: "/public/img/tinanime/1.jpg",
    content: "Hé lọ hình ảnh mới cho anime The Heike Story",
  },
  {
    id: 2,
    src: "https://tinanime.com/hanh-trinh-diet-quy-trong-anime-orient",
    image: "/public/img/tinanime/2.jpg",
    content: "Hành trình diệt quỷ trong anime Orient",
  },
  {
    id: 3,
    src: "https://tinanime.com/healer-girl-bai-hat-chua-lanh-tam-hon",
    image: "/public/img/tinanime/3.jpg",
    content: "Healer girl - Bài hát chữa lành tâm hồn",
  },
  {
    id: 4,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/4.jpg",
    content:
      "Câu chuyện bi đát 'Stand by Me:Doraemon 2' sẽ chiếu rạp cận dịp giáng sinh",
  },
  {
    id: 5,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/5.jpg",
    content: "Karakai Jozu no Takagi-san - Cô bạn thân ranh ma ",
  },
  {
    id: 6,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/6.jpg",
    content:
      "Hé lộ các hình ảnh mới trong Genjitsushugi Yusha no Okoku Saikenki ",
  },
  {
    id: 7,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/7.jpg",
    content: "Câu chuyện về các golf thủ trong anime Birdie Wing ",
  },
  {
    id: 8,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/8.jpg",
    content:
      "Kenja no Deshi o Nanoru Kenja - Trở thành chiến binh trong Thế Giới...Game? ",
  },
  {
    id: 9,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/9.jpg",
    content: "Quần đùi Kimetsu no Yaiba có giá gần... 800 nghìn đồng!",
  },
  {
    id: 10,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/10.jpg",
    content:
      "'Kịch trường của Takemichi' sẵn sàng ra rạp tại Việt Nam trong tuần này",
  },
  {
    id: 11,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/11.jpg",
    content: "Gunjou no Fanfare - Câu chuyện tại học viện đua ngựa",
  },
  {
    id: 12,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/public/img/tinanime/12.jpg",
    content: "Đón chờ cuộc đối đầu giữa Thám tử lừng danh Conan và Rei Furuya",
  },
];

export const getAllFilms = () => films;
export const searchFilmsByChar = (char) =>
  films.filter((f) => toUppercase(f.name).indexOf(toUppercase(char)) > -1);
export const getFilmsById = (id) => films.find((f) => f.id == id);
export const getFilmsByAlias = (alias) => films.find((f) => f.alias == alias);
export const getAllTinAnime = () => tinAnime;
