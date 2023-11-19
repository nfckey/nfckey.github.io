document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".menu__wrap-button")
    .addEventListener("click", toggleMenu);

  document
    .querySelectorAll(".faq__content__question")
    .forEach(function (question) {
      question.addEventListener("click", () => toggleQuestion(question));
    });

  enableSmoothScrolling();
});

function toggleMenu() {
  const menuImage = document.querySelector(".menu__wrap-button__image");

  if (menuImage.src.endsWith("menu.svg")) {
    menuImage.src = "images/chevron-up.svg";
  } else {
    menuImage.src = "images/menu.svg";
  }

  const menu = document.querySelector(".menu");
  menu.classList.toggle("menu-padding");
  menu.classList.toggle("active");

  document.querySelector("header").classList.toggle("header-whitebg");
}

function toggleQuestion(question) {
  let answer = question.nextElementSibling;
  let icon = question.querySelector(".chevron");

  if (icon.src.endsWith("chevron-down.svg")) {
    icon.src = "images/chevron-up.svg";
  } else {
    icon.src = "images/chevron-down.svg";
  }

  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

function enableSmoothScrolling() {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(link.getAttribute("href"));

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function onEmailFormSubmitted() {
  document.getElementById('notifications-form').classList.remove('notifications__form');
  document.getElementById('notifications-form').classList.add('d-none');
  document.querySelector('.notifications__content__text').innerHTML = '<span class="notifications__content__text-span ws-none">Спасибо за проявленный интерес!</span><br> Мы уведомим вас заранее при <br>выходе нашего замка на рынок';
  document.querySelector('.notifications__content__text').classList.add('text-center');
}

function onFormSubmitted() {
  document.getElementById('confirm').classList.remove('d-none');
  document.getElementById('confirm').classList.add('cta__column');
  document.getElementById('cta-form').classList.remove('cta__form');
  document.getElementById('cta-form').classList.add('d-none');
}

function onSupFormSubmitted() {
  document.getElementById('cta-form-sup').classList.remove('cta__form');
  document.getElementById('cta-form-sup').classList.add('d-none');
  document.getElementById('supFormTitle').innerHTML = 'Спасибо за ваш отзыв!';
  document.getElementById('supFormText').innerHTML = 'Мы будем держать вас в курсе событий';
}