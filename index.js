import { latestNews, reviewData } from "./mockData.js";

const swiper = new window.Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 20,

  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 4,
    },
  },
});

$(document).ready(function () {
  const $articleContainer = $(".latest-news__wrapper");

  latestNews.forEach(article => {
    const $article = $("<article/>", { class: "article swiper-slide" });
    $article.append(
      $("<img/>", {
        class: "article__img",
        src: article.image,
        alt: article.title,
      }),
      $("<h3/>", { class: "article__title", text: article.title }),
      $("<p/>", { class: "article__timestamp", text: article.date })
    );
    $article.appendTo($articleContainer);
  });
});

$(document).ready(function () {
  const $articleContainer = $(".reviews__wrapper");

  reviewData.forEach((article, index) => {
    const $article = $("<article/>", {
      class: "reviews__article swiper-slide",
    });
    $article.append(
      $("<svg/>", {
        class: "reviews__accent-vector",
        html: `
          <svg width="303" height="343" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.686759 62.38C3.72559 140.217 5.74523 182.622 12.3207 246.626C17.883 271.1 23.7669 281.227 42.8597 288.135C118.897 309.839 172.237 327.217 234.092 342.025C259.277 341.421 268.255 334.86 276.265 320.178C289.953 268.392 292.512 211.69 302.442 139.574C303.773 111.762 298.267 100.466 276.265 88.5968C195.658 54.7476 78.4886 8.49002 78.4886 8.49002C78.4886 8.49002 56.0918 -2.28648 42.8597 0.479346C27.3842 5.33233 20.6517 10.7058 12.3207 21.5984C2.70946 34.4509 0.192144 43.3878 0.686759 62.38Z" fill="#DF5E5E" />
          </svg>
        `,
      }),
      $("<svg/>", {
        class: "reviews__vector",
        html: ` 
        <svg width="303" height="343" viewBox="0 0 303 343" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.686759 62.38C3.72559 140.217 5.74523 182.622 12.3207 246.626C17.883 271.1 23.7669 281.227 42.8597 288.135C118.897 309.839 172.237 327.217 234.092 342.025C259.277 341.421 268.255 334.86 276.265 320.178C289.953 268.392 292.512 211.69 302.442 139.574C303.773 111.762 298.267 100.466 276.265 88.5968C195.658 54.7476 78.4886 8.49002 78.4886 8.49002C78.4886 8.49002 56.0918 -2.28648 42.8597 0.479346C27.3842 5.33233 20.6517 10.7058 12.3207 21.5984C2.70946 34.4509 0.192144 43.3878 0.686759 62.38Z" />
        </svg>
        `,
      }),
      $("<div/>", { class: "reviews__container" }).append(
        $("<img/>", {
          class: "reviews__img",
          src: "/images/book-icon.png",
          alt: "book icon",
        }),
        $("<h3/>", {
          class: "reviews__user",
          text: article.user,
        }),
        $("<img/>", {
          class: "reviews__icon",
          src: "/images/quotation-icon.png",
          alt: "quotation icon",
        }),
        $("<p/>", {
          class: "reviews__text",
          text: article.text,
        })
      )
    );
    $article.appendTo($articleContainer);
  });
});

$(document).ready(function () {
  const maxCharacters = 140;

  $("#generalText").on("keyup", function () {
    const text = $(this).val();
    const textLength = text.length;

    $("#generalTextIndicator").text(textLength + "/" + maxCharacters);

    if (textLength > maxCharacters) {
      $("#errorBox")
        .text("Prekoračenje ograničenja broja znakova (140)!")
        .show();
    } else {
      $("#errorBox").hide().text("");
    }
  });

  $("#submitButton").on("click", function (e) {
    const textLength = $("#generalText").val().length;
    if (textLength > maxCharacters) {
      e.preventDefault();
    }
  });
});
