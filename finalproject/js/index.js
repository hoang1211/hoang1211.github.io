//Demo
let product = [
  {
    id: 1,
    houseName: "Căn Hộ Ven Biển",
    square: 45,
    bedRom: 1,
    price: 3.5,
    region: 2,
    type: 1,
  },
  {
    id: 2,
    houseName: "Chung Cư Cao Cấp Quận 9",
    square: 30,
    bedRom: 2,
    price: 4.5,
    region: 3,
    type: 2,
  },
  {
    id: 3,
    houseName: "The Sang Residence Đà Nẵng",
    square: 62,
    bedRom: 1,
    price: 6.5,
    region: 2,
    type: 2,
  },
  {
    id: 4,
    houseName: "Sun 69 Thụy Khuê",
    square: 152,
    bedRom: 3,
    price: 18.1,
    region: 1,
    type: 3,
  },
  {
    id: 5,
    houseName: "Vinhome Ocean Park",
    square: 70,
    bedRom: 3,
    price: 11.5,
    region: 1,
    type: 3,
  },
  {
    id: 6,
    houseName: "Căn Hộ Mặt Tiền Đường Tên Lửa",
    square: 53,
    bedRom: 2,
    price: 2.4,
    region: 3,
    type: 1,
  },
];
// Slick slide partner mobile
$(".partner__list--mobile").slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
  ],
});
//----------------------
// about onclick
$(".about--desktop__content__wrap").click(function () {
  window.location.href = "about.html";
});
// Render index mobile
let renderProduct = (pd) => {
  for (let i = 0; i < 6; i++) {
    let deskIndex = `<div class="product--desktop__item">
                <img
                  src="assest/product/${pd[i].id}/1.jpg"
                  alt=""
                  class="product--desktop__item__img"
                />
                <a href="productitem.html?productId=${pd[i].id}" class="product--desktop_item_link"
                  ><div
                    class="
                      product--desktop__item__content
                      product--desktop__item__content__scaleX
                    "
                  >
                    <div class="product--desktop__item__content__header">
                      Mở bán ${pd[i].houseName}
                    </div>
                    <div
                      class="content-font"
                      style="margin-top: 5px !important"
                    >
                      Diện tích: ${pd[i].square} m2 - ${pd[i].bedRom} Phòng Ngủ
                    </div>
                  </div></a
                >
              </div>`;
    let indexProductDesk = $("#product_data--desktop");
    indexProductDesk.append(deskIndex);
  }
};
renderProduct(product);
// valied form
