// Функция открытия модального окна
function openOrderModal(itemName, itemPrice) {
    const modal = document.getElementById('orderModal');
    const selectedItem = document.getElementById('selectedItem');
    selectedItem.textContent = `Вы выбрали: ${itemName} (${itemPrice})`;
    modal.style.display = 'flex';
}

// Функция закрытия модального окна
function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + document.querySelector('header').offsetHeight; // Учёт высоты хедера
    const menuLinks = document.querySelectorAll('header nav ul li a');

    menuLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Проверка: активная ссылка соответствует видимой секции
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                menuLinks.forEach(l => l.classList.remove('active')); // Убираем класс у всех ссылок
                link.classList.add('active'); // Добавляем класс только текущей
            }
        }
    });
});
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + document.querySelector('header').offsetHeight; // Учёт высоты хедера
    const menuLinks = document.querySelectorAll('header nav ul li a');

    menuLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Останавливаем стандартный переход по ссылке
        const targetId = this.getAttribute('href'); // Получаем ID целевой секции
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight; // Высота заголовка
            const targetPosition = targetElement.offsetTop - headerHeight; // Корректируем позицию

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Плавный скроллинг
            });
        }
    });
});
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
var header = document.querySelector('header');
if (window.pageYOffset > 50) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
};
document.addEventListener('scroll', function() {
const scrollPosition = window.scrollY;
const menuLinks = document.querySelectorAll('header nav ul li a');

menuLinks.forEach(link => {
const section = document.querySelector(link.getAttribute('href'));
const sectionTop = section.offsetTop - 200; 
const sectionBottom = sectionTop + section.offsetHeight;

if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
    link.style.color = '#ff5722'; 
} else {
    link.style.color = 'white'; 
}
});
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
const menu = document.querySelector('header nav ul');
menu.classList.toggle('show');
});
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Функция открытия модального окна
function openOrderModal(itemName, itemPrice) {
    const modal = document.getElementById('orderModal');
    const selectedItem = document.getElementById('selectedItem');
    selectedItem.textContent = `Вы выбрали: ${itemName} (${itemPrice})`;
    modal.style.display = 'flex';
}

// Функция закрытия модального окна
function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
