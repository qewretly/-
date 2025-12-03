// Счетчик лет с момента бана (с 2021 года)
const startYear = 2021;
const currentYear = new Date().getFullYear();
const yearsPassed = currentYear - startYear;

document.getElementById("counter").textContent = `${yearsPassed} лет`;

// Форма апелляции
document.getElementById("appealForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const message = document.getElementById("message").value;
    const response = document.getElementById("form-response");
    response.innerHTML = `<p style="color: #ffcc00;">Сообщение отправлено: "${message}"</p>`;
    document.getElementById("message").value = "";
});

// Кнопка "Показать рейтинг"
document.getElementById("chessBtn").addEventListener("click", function() {
    const rating = document.getElementById("chessRating");
    if (rating.classList.contains("hidden")) {
        rating.classList.remove("hidden");
    } else {
        rating.classList.add("hidden");
    }
});

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Добавляем hover-эффект для всех изображений в галерее
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        // Останавливаем анимации других фото
        document.querySelectorAll('.gallery-img').forEach(other => {
            if (other !== this) {
                other.style.animationPlayState = 'paused';
                other.style.transform = 'scale(1)';
                other.style.position = 'relative';
                other.style.width = '100%';
                other.style.height = '150px';
                other.style.margin = '0';
            }
        });

        // Запускаем анимацию текущего фото
        this.style.animationPlayState = 'running';
        this.style.zIndex = '9999';
        this.style.position = 'relative';
        this.style.transform = 'scale(1.5) rotate(360deg)';
        this.style.width = '225px';
        this.style.height = '225px';
        this.style.objectFit = 'cover';
        this.style.borderRadius = '0';
        this.style.boxShadow = '0 0 30px #ffcc00';
        this.style.background = 'rgba(0,0,0,0.9)';
        this.style.margin = '-37.5px 0 0 -37.5px'; // Центрируем относительно исходного положения
    });

    img.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'paused';
        this.style.transform = 'scale(1)';
        this.style.position = 'relative';
        this.style.width = '100%';
        this.style.height = '150px';
        this.style.borderRadius = '8px';
        this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.4)';
        this.style.background = 'none';
        this.style.zIndex = '2';
        this.style.margin = '0';
    });
});