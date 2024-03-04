const burger = document.querySelector(".burger");
const burgerBtn = document.querySelector(".burger-btn");
const aboutMoreBtn = document.querySelector(".about__more");
const aboutDescr = document.querySelector(".about__descr");

document.addEventListener("click", (event) => {
  console.log(event.target, burgerBtn);
  if (event.target === burgerBtn) burger.classList.add("active");
  else burger.classList.remove("active");
});

aboutMoreBtn.addEventListener("click", () => {
  if (aboutDescr.classList.contains("about-descr-limit")) {
    aboutDescr.classList.remove("about-descr-limit");
    aboutMoreBtn.innerText = "Скрыть";
  } else {
    aboutDescr.classList.add("about-descr-limit");
    aboutMoreBtn.innerText = "Подробнее";
  }
});

let mainSwiper = new Swiper(".main-swiper", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".main-swiper-button-next",
    prevEl: ".main-swiper-button-prev",
  },
  scrollbar: {
    el: ".main-swiper-scrollbar",
    draggable: true,
  },
});

let productsSwiper = new Swiper(".products-swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  scrollbar: {
    el: ".products-swiper-scrollbar",
    draggable: true,
  },
});

let parntersSwiper = new Swiper(".partners-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});

const map = new mapgl.Map("warehousemap", {
  key: "c474a312-46f9-411d-bebf-1a07e0e9ce5f",
  center: [74.603701, 42.875969],
  zoom: 13,
});

const getMarker = (coordinates, city, address) => ({
  type: "html",
  coordinates,
  html: `<div class="marker">
            <div class="head">
              <img src="images/common/warehouse.svg" />
              <span>Склад</span>
            </div>
            <div class="body">
              <span>${city}</span>
              <br />
              <span>${address}</span>
            </div>
        </div>`,
  anchor: [22, 112],
});

const markers = [
  getMarker(
    [74.61839530270173, 42.87922529342752],
    "г Бишкек",
    "Ибраимова 106"
  ),
  getMarker(
    [74.61453816426004, 42.87601397162339],
    "г Бишкек",
    "проспект Чуй, 155"
  ),
];

const clusterer = new mapgl.Clusterer(map, {});
clusterer.load(markers);
