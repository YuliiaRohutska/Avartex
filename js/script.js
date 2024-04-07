    
// Після завантаження сторінки прибрати лоадер
window.addEventListener('load', function() {
    setTimeout(function() {
    document.querySelector('.loader-wrapper').style.display = 'none';
    }, 1000); 
});



// Функція прокрутки наверх
function scrollToTop() {
    window.scrollTo({
     top: 0,
     behavior: 'smooth'
     });
}


// Функція зміни кольору header
window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var header = document.querySelector("header");
    if (scrollPosition > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
      }
});


// Анімація числа
document.addEventListener("DOMContentLoaded", function() {
  var counterElement = document.querySelector('.counter');
  var targetNumber = 12; 
  var currentNumber = 1; 
  var animationStarted = false; // Флаг для перевірки, чи анімація вже запущена

  // Функція для анімації збільшення числа
  function animateCounter() {
    if (currentNumber <= targetNumber) {
      counterElement.textContent = currentNumber;
      currentNumber++;
      setTimeout(animateCounter, 200);
    }
  }

  // Обробник події прокрутки
  function handleScroll() {
    if (!animationStarted && isElementInViewport(counterElement)) {
      animateCounter();
      animationStarted = true; // Встановлюємо флаг, що анімація вже запущена
    }
  }

  // Функція, яка перевіряє, чи елемент стає видимим на екрані
  function isElementInViewport(el) {
     var rect = el.getBoundingClientRect();
     return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }


  // Викликаємо обробник події прокрутки при прокрутці сторінки
  window.addEventListener('scroll', handleScroll);
});


// Акордеон
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.wrapper-accordion h3');

    accordionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            this.classList.toggle('opened'); 
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
 const filters = document.querySelectorAll(".project-list a");
 const projects = document.querySelectorAll(".single-project");
 const modal = document.getElementById("myModal");
 const modalImg = document.getElementById("modalImg");
 const closeBtn = document.querySelector(".modal-content .close");

    // Обробник кліку на фільтрах
    filters.forEach(function(filter) {
        filter.addEventListener("click", function () {
            const category = this.getAttribute("data-filter");
            filterProjects(category);
            // Встановлюємо клас "active" для активного елемента фільтра
            filters.forEach(filter => filter.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Функція фільтрації проектів
    function filterProjects(category) {
        projects.forEach(function(project) {
            const projectCategory = project.getAttribute("data-category");
            if (category === "all" || projectCategory === category) {
                project.classList.remove("hid-project");
            } else {
                project.classList.add("hid-project");
            }
        });
    }

    // Відкриття модального вікна при кліку на зображення
    projects.forEach(function(project) {
        project.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.querySelector("img").src;
        });
    });

    // Закриття модального вікна
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закриття модального вікна при кліку на фон
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});


function toggleMenu() {
    var menu = document.querySelector('.burger-menu .menu');
    var openIcon = document.getElementById('openmenu');
    var closeIcon = document.getElementById('closemenu');
    
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
    } else {
        openIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
    }
}


$.validator.addMethod("phoneWithPlus", function(value, element) {
    var phoneRegex = /^\+\d{11,12}$/;
     
    return phoneRegex.test(value);
});

$(document).ready(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            lastname: {
                required: true,
                minlength: 3
            },
            phone: {
                required: true,
                phoneWithPlus: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 3 characters long"
            },
            lastname: {
                required: "Please enter your last name",
                minlength: "Last name must be at least 3 characters long"
            },
            phone: {
                required: "Please enter your phone number",
                phoneWithPlus: "Please enter a valid phone number starting with '+' and containing only digits"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            }
        },
        errorPlacement: function(error, element) {
            $('.error-message').html(error); 
        },
        submitHandler: function(form) {
            $('.res-send').text("Form submitted successfully!");
            form.reset();
        }
    });
});


