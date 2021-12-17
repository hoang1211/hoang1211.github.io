const films = [
  {
    id: 1,
    name: "Lupin III:Part 6",
    alias: "lupin-3-part-6",
    type: "anime",
    image: "/img/lupin3viendancuoicung.jpg",
    src: "https://youtu.be/61hP7JZwibA",
    like: 61,
    follow: 20,
  },
  {
    id: 2,
    name: "MIERUKO-CHAN",
    alias: "mieruko-chan",
    type: "anime",
    image: "/img/merukochan.jpg",
    src: "https://youtu.be/Tttpv5NP4dE",
    like: 21,
    follow: 120,
  },
  {
    id: 3,
    name: "SEKAI SAIKOU NO ANSATSUSHA",
    alias: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    type: "anime",
    image: "/img/3.jpg",
    src: "https://youtu.be/i4r0VbB94u0",
    like: 37,
    follow: 10,
  },
  {
    id: 4,
    name: "Sakugan",
    alias: "sakugan",
    type: "anime",
    image: "/img/4.jpg",
    src: "https://youtu.be/v_fCZijSfhw",
    like: 12,
    follow: 21,
  },
  {
    id: 5,
    name: "Kimetsu no Yaiba",
    alias: "kimetsu-no-yaiba",
    type: "anime",
    image: "/img/5.jpg",
    src: "https://youtu.be/8iwLtxDol7A",
    like: 68,
    follow: 65,
  },
  {
    id: 6,
    name: "BORUTO: NARUTO NEXT GENERATIONS",
    alias: "boruto-naruto-next-generations",
    type: "anime",
    image: "/img/6.jpg",
    src: "https://youtu.be/OwOhNEkOTlg",
    like: 53,
    follow: 40,
  },
  {
    id: 7,
    name: "World Trigger",
    alias: "world-trigger",
    type: "anime",
    image: "/img/7.jpg",
    src: "https://youtu.be/bmq8riwRvCE",
    like: 51,
    follow: 20,
  },
  {
    id: 8,
    name: "Taishou Otome Otogibanashi",
    alias: "Taishou-Otome-Otogibanashi",
    type: "anime",
    image: "/img/8.jpg",
    src: "https://youtu.be/hE0vyAK6d1A",
    like: 41,
    follow: 23,
  },
  {
    id: 9,
    name: "Vua Hải Tặc",
    alias: "vua-hai-tac",
    type: "anime",
    image: "/img/9.jpg",
    src: "https://youtu.be/YetDQebJTJs",
    like: 61,
    follow: 30,
  },
  {
    id: 10,
    name: "Shiroi Suna no Aquatope",
    alias: "shiroi-suna-no-aquatope",
    type: "anime",
    image: "/img/10.jpg",
    src: "https://youtu.be/7iDXptzbNRc",
    like: 231,
    follow: 25,
  },
  {
    id: 11,
    name: "Deji Meets Girl",
    alias: "deji-meets-girl",
    type: "anime",
    image: "/img/11.jpg",
    src: "https://youtu.be/6KflpqtrKSI",
    like: 31,
    follow: 32,
  },
  {
    id: 12,
    name: "Build Divine: Code Black",
    alias: "build-divine-code-black",
    type: "anime",
    image: "/img/12.jpg",
    src: "https://youtu.be/Kt-x7zTIxwg",
    like: 23,
    follow: 23,
  },
];
const tinAnime = [
  {
    id: 1,
    src: "https://tinanime.com/he-lo-hinh-anh-moi-cho-anime-the-heike-story",
    image: "/img/tinanime/1.jpg",
    content: "Hé lọ hình ảnh mới cho anime The Heike Story",
  },
  {
    id: 2,
    src: "https://tinanime.com/hanh-trinh-diet-quy-trong-anime-orient",
    image: "/img/tinanime/2.jpg",
    content: "Hành trình diệt quỷ trong anime Orient",
  },
  {
    id: 3,
    src: "https://tinanime.com/healer-girl-bai-hat-chua-lanh-tam-hon",
    image: "/img/tinanime/3.jpg",
    content: "Healer girl - Bài hát chữa lành tâm hồn",
  },
  {
    id: 4,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/4.jpg",
    content:
      "Câu chuyện bi đát 'Stand by Me:Doraemon 2' sẽ chiếu rạp cận dịp giáng sinh",
  },
  {
    id: 5,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/5.jpg",
    content: "Karakai Jozu no Takagi-san - Cô bạn thân ranh ma ",
  },
  {
    id: 6,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/6.jpg",
    content:
      "Hé lộ các hình ảnh mới trong Genjitsushugi Yusha no Okoku Saikenki ",
  },
  {
    id: 7,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/7.jpg",
    content: "Câu chuyện về các golf thủ trong anime Birdie Wing ",
  },
  {
    id: 8,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/8.jpg",
    content:
      "Kenja no Deshi o Nanoru Kenja - Trở thành chiến binh trong Thế Giới...Game? ",
  },
  {
    id: 9,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/9.jpg",
    content: "Quần đùi Kimetsu no Yaiba có giá gần... 800 nghìn đồng!",
  },
  {
    id: 10,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/10.jpg",
    content:
      "'Kịch trường của Takemichi' sẵn sàng ra rạp tại Việt Nam trong tuần này",
  },
  {
    id: 11,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/11.jpg",
    content: "Gunjou no Fanfare - Câu chuyện tại học viện đua ngựa",
  },
  {
    id: 12,
    src: "https://tinanime.com/cau-chuyen-bi-dat-stand-by-me-doraemon-2-se-chieu-rap-can-dip-giang-sinh",
    image: "/img/tinanime/12.jpg",
    content: "Đón chờ cuộc đối đầu giữa Thám tử lừng danh Conan và Rei Furuya",
  },
];
const comments = [
  {
    id: 1,
    name: "Lê An",
    content: "funimation hay làm phìm theo hướng hành động game giả tưởng nhở",
  },
  {
    id: 2,
    name: "Mr gecko",
    content: "Một thời game Nintendo",
  },
  {
    id: 3,
    name: "Oh Hilla",
    content: "bóc temm",
  },
  {
    id: 4,
    name: "Quân Baka",
    content:
      "Phim không buồn đến phát khóc nhưng mang lại những cảm xúc lắng đọng! Khiến mình trầm tư hơn cả những bộ làm mình khóc",
  },
  {
    id: 5,
    name: "Duc phat Can",
    content: "Hóng ss2",
  },
  {
    id: 6,
    name: "best Hacker",
    content: "Ok xem thôi",
  },
  {
    id: 7,
    name: "Hoàng Linh Lê",
    content: "Để định cư ở đây đợi ss2 :33",
  },
];
const comics = [
  {
    id: 1,
    src: "/img/comic/1.jpg",
    name: "Bộ Thiên Ca",
    detail:
      "Trong vầng sáng kỳ dị, đế vương hạ sinh một cặp song sinh long phương, bé trai mang nốt ruồi chu sa, bé gái mang bàn tay sáu ngón.",
    link: "https://truyentranh24z.com/bo-thien-ca",
  },
  {
    id: 2,
    src: "img/comic/2.jpg",
    name: "Ayakashi Triangle",
    detail:
      "Truyện kể về một thanh niên kế nghiệp ông mình làm nhẫn giả diệt quỷ, và có một cô bạn thuở nhỏ là một Ayakashi Miko emo Mọi chuyện sẽ",
    link: "https://truyentranh24z.com/ayakashi-triangle",
  },
  {
    id: 3,
    src: "img/comic/3.jpg",
    name: "Jujutsu Kaisen - Chú Thuật Hồi Chiến",
    detail:
      "Yuuji Itadori là một thiên tài có tốc độ và sức mạnh, nhưng cậu ấy muốn dành thời gian của mình trong Câu lạc bộ Tâm Linh. Một ngày sau",
    link: "https://truyentranh24z.com/jujutsu-kaisen-chu-thuat-hoi-chien",
  },
  {
    id: 4,
    src: "img/comic/4.jpg",
    name: "Trinity Seven: 7 Nin no Mahoutsukai",
    detail:
      "Kasuga Arata,Một HS bình thường thức dậy trong ngôi nhà của mình ở một buổi sáng khá là “bình thường”. Tuy nhiên anh lại nhanh chóng",
    link: "https://truyentranh24z.com/trinity-seven-7-nin-no-mahoutsukai",
  },
  {
    id: 5,
    src: "img/comic/5.jpg",
    name: "One Piece",
    detail:
      "One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu",
    link: "https://truyentranh24z.com/one-piece",
  },
  {
    id: 6,
    src: "img/comic/6.jpg",
    name: "Souzai Saishuka no Isekai Ryokouki",
    detail:
      "Takeru Kamishiro là một người làm công ăn lương bình thường đã được thượng đế chọn để tái sinh vào một thế giới giả tưởng trong thân",
    link: "https://truyentranh24z.com/souzai-saishuka-no-isekai-ryokouki",
  },
];

export const getAllFilms = () => films;
export const searchFilmsByChar = (char) =>
  films.filter((f) => {
    const text = f.name;
    return text.toUpperCase().indexOf(char.toUpperCase()) > -1;
  });
export const getFilmsById = (id) => films.find((f) => f.id == id);
export const getFilmsByAlias = (alias) => films.find((f) => f.alias == alias);
export const getAllTinAnime = () => tinAnime;
export const getAllComments = () => comments;
export const getAllComic = () => comics;
