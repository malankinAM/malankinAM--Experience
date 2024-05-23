// Убедитесь, что библиотека GSAP подключена к вашему проекту

// Анимация текста по буквам
const text = document.querySelector("h1");
const splitText = text.textContent.split("");
text.textContent = "";
splitText.forEach(char => {
    text.innerHTML += `<span>${char}</span>`;
});

gsap.fromTo("h1 span", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "back.out(1.7)"
});

// Создание дождевых капель
const rainContainer = document.querySelector(".rain");

for (let i = 0; i < 100; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
    rainContainer.appendChild(drop);
}
