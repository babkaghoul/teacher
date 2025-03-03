// Показать/скрыть кнопку при прокрутке страницы
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

// Функция для прокрутки вверх
function scrollToTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE and Opera
}

// Плавная прокрутка к разделам
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50, // Вычитаем 50px, чтобы контент не прилипал к шапке
            behavior: "smooth"
        });
    }
}
// Функция для прокрутки вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}