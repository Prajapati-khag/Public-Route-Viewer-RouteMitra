// main.js
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateDarkModeIcon(savedTheme);
}

darkModeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeIcon(newTheme);
});

function updateDarkModeIcon(theme) {
    const icon = darkModeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Refresh Nearby Stops
const refreshButton = document.getElementById('refreshLocation');

refreshButton.addEventListener('click', () => {
    refreshButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
    
    // Simulate API call
    setTimeout(() => {
        refreshButton.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
        alert('Nearby stops updated successfully!');
    }, 1500);
});

// Language Selector
const languageSelector = document.getElementById('language');

languageSelector.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    alert(`Language changed to ${selectedLanguage === 'en' ? 'English' : 'Hindi'}. This would update all text content.`);
});

// Initialize Map on Route Detail Page
if (document.querySelector('#map')) {
    const map = L.map('map').setView([22.9734, 81.6094], 8); // Center on Chhattisgarh
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add route markers
    const routes = [
        { name: "Jashpur to Bilaspur", coords: [22.8998, 82.1396] },
        { name: "Jashpur to Raipur", coords: [22.8998, 82.1396] },
        { name: "Jashpur to Ranchi", coords: [22.8998, 82.1396] },
        // Add more routes as needed
    ];
    
    routes.forEach(route => {
        L.marker(route.coords)
            .addTo(map)
            .bindPopup(route.name);
    });
}