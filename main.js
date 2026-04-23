gsap.registerPlugin(ScrollTrigger);

// 1. Custom Cursor
const cursor = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(blur, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.15 });
});

// 2. Magnetic Buttons
const btns = document.querySelectorAll('.magnetic-btn');
btns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const bound = btn.getBoundingClientRect();
        const x = e.clientX - bound.left - bound.width / 2;
        const y = e.clientY - bound.top - bound.height / 2;
        gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    });
});

// 3. Counter Animation (Increment)
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    ScrollTrigger.create({
        trigger: counter,
        onEnter: () => {
            const target = +counter.getAttribute('data-target');
            gsap.to(counter, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out"
            });
        }
    });
});

// 4. Reveal Animations
gsap.from(".reveal", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
});

// 5. Form Handling
document.getElementById('mainForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.querySelector('.submit-btn');
    btn.innerHTML = "Yuborildi ✓";
    btn.style.background = "#fff";
});