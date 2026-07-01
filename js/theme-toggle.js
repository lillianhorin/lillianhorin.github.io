// Define variables for icons
const sunIcon = '🌕';
const moonIcon = '🌑';
const splitIcon = '🌗';

const themeToggle = document.getElementById('theme-toggle');

// Initial theme setup based on saved preference or default to dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    themeToggle.textContent = sunIcon;
    themeToggle.setAttribute('data-tooltip', 'Toggle to light mode');
} else {
    themeToggle.textContent = moonIcon;
    themeToggle.setAttribute('data-tooltip', 'Toggle to dark mode');
}

// Event listener to toggle the theme on click
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const theme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    // Update the icon and tooltip text based on the theme
    if (theme === 'light') {
        themeToggle.textContent = moonIcon;
        themeToggle.setAttribute('data-tooltip', 'Toggle to dark mode');
    } else {
        themeToggle.textContent = sunIcon;
        themeToggle.setAttribute('data-tooltip', 'Toggle to light mode');
    }
});

// Hover effect to show split icon
themeToggle.addEventListener('mouseenter', () => {
    themeToggle.textContent = splitIcon;
});

themeToggle.addEventListener('mouseleave', () => {
    const theme = document.documentElement.classList.contains('dark-mode') ? sunIcon : moonIcon;
    themeToggle.textContent = theme;
});
