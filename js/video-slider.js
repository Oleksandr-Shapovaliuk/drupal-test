const videoSlider = new Swiper(".video__slider", {
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
    position + 1
  }-й в очереди`;
}

const messages = [];

for (let i = 0; i < orders.length; i += 1) {
  messages.push(composeMessage.call(orders[i], i));
}

console.log(messages);
