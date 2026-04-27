 document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    if(glow) {
        glow.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #1e1b4b 0%, #050810 100%)`;
    }
});

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
window.addEventListener('load', reveal);

 const form = document.getElementById('aiForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit');
        btn.innerHTML = "Yuborilmoqda...";
        btn.style.opacity = "0.6";

        setTimeout(() => {
            btn.innerHTML = "Muvaffaqiyatli yuborildi!";
            btn.style.background = "#10b981";
            btn.style.opacity = "1";
            form.reset();
        }, 1500);
    });
}


// Skills animatsiyasi uchun funksiya
const animateSkills = () => {
    const skillsSection = document.querySelector('.skills-section');
    const progressLines = document.querySelectorAll('.progress-line span');

    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos) {
        progressLines.forEach(line => {
            const parent = line.parentElement;
            const targetWidth = parent.getAttribute('data-percent');
            line.style.width = targetWidth;
        });
    }
};

// Scroll hodisasini kuzatish
window.addEventListener('scroll', animateSkills);