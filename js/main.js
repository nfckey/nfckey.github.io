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

  // const imageContainer = document.querySelector(".testimonial__image-container");
  // const zoomableImage = document.querySelector(".zoomable");
  // const overlay = document.getElementById("overlay");
  // const zoomedImage = document.querySelector(".zoomed-image");
  
  // imageContainer.addEventListener("click", () => {
  //     openImage();
  // });
  
  // overlay.addEventListener("click", () => {
  //     closeImage();
  // });
  
  // zoomedImage.addEventListener("click", () => {
  //     closeImage();
  // });
  
  // zoomedImage.addEventListener("gesturechange", (event) => {
  //     zoomedImage.style.transform = `scale(${event.scale})`;
  // });
  
  // function openImage() {
  //     overlay.style.display = "flex";
  //     zoomedImage.src = zoomableImage.src;
  //     document.body.style.overflow = "hidden";
  // }
  
  // function closeImage() {
  //     overlay.style.display = "none";
  //     zoomedImage.style.transform = "scale(1)";
  //     document.body.style.overflow = "auto";
  // }
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuImage = document.querySelector(".menu__wrap-button__image");

  if (menuImage.src.endsWith("menu.svg")) {
    menuImage.src = "images/chevron-up.svg";
  } else {
    menuImage.src = "images/menu.svg";
  }

  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
  }

  menu.classList.toggle("menu-padding");
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

function onFormSubmitted() {
  document.getElementById('confirm').classList.remove('d-none');
  document.getElementById('confirm').classList.add('cta__column');
  document.getElementById('cta-form').classList.remove('cta__form');
  document.getElementById('cta-form').classList.add('d-none');
}
