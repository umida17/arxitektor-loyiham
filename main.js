// 1. Mouse harakatiga qarab fonga "Glow" berish
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    const x = e.clientX;
    const y = e.clientY;
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, #1e1b4b 0%, #030712 100%)`;
});

// 2. Scroll Animation (Elementlar sekin chiqishi)
const reveal = () => {
    const cards = document.querySelectorAll('.f-card');
    cards.forEach(card => {
        const windowHeight = window.innerHeight;
        const elementTop = card.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', reveal);

// 3. Inputlarni tekshirish (AI Logic Simulyatsiyasi)
const form = document.getElementById('aiForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = "Tahlil qilinmoqda...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        btn.innerHTML = "Muvaffaqiyatli!";
        btn.style.background = "#10b981";
    }, 2000);
});