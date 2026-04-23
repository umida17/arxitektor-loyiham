// Lucide ikonlarini ishga tushirish
lucide.createIcons();

// Asosiy Grafika (Chart.js)
const ctx = document.getElementById('mainAnalyticsChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan', 'Yak'],
        datasets: [{
            label: 'Sotuvlar ($)',
            data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { grid: { display: false }, ticks: { color: '#94a3b8' } },
            x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
        }
    }
});

// Tranzaksiyalar ro'yxatini dinamik yaratish
const activities = [
    { name: "Apple Store Buy", time: "2 soat avval", amount: "-$199.00", icon: "shopping-bag" },
    { name: "Freelance Payment", time: "5 soat avval", amount: "+$2,500.00", icon: "arrow-down-left" },
    { name: "Netflix Sub", time: "Kecha", amount: "-$15.00", icon: "tv" }
];

const activityContainer = document.getElementById('activityList');

activities.forEach(item => {
    const li = document.createElement('li');
    li.className = 'activity-item';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.padding = '15px 0';
    li.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    
    li.innerHTML = `
        <div style="display: flex; gap: 15px; align-items: center;">
            <div class="icon-box" style="background: var(--glass); padding: 10px; border-radius: 12px">
                <i data-lucide="${item.icon}" style="width: 20px; height: 20px; color: var(--accent)"></i>
            </div>
            <div>
                <p style="font-weight: 600; font-size: 0.9rem">${item.name}</p>
                <small style="color: var(--text-dim)">${item.time}</small>
            </div>
        </div>
        <span style="font-weight: 700; color: ${item.amount.startsWith('+') ? '#4ade80' : '#f87171'}">${item.amount}</span>
    `;
    activityContainer.appendChild(li);
});

// Ikonlarni qayta yuklash (dinamik qo'shilganlar uchun)
lucide.createIcons();