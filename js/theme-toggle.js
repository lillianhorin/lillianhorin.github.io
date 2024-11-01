// Define variables for icons
const sunIcon = '🌕';
const moonIcon = '🌑';
const splitIcon = '🌗';

const themeToggle = document.getElementById('theme-toggle');

// Initial theme setup based on saved preference or default to dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.documentElement.classList.add('light-mode');
    themeToggle.textContent = moonIcon; // Show moon icon for light mode
    themeToggle.setAttribute('data-tooltip', 'Toggle to dark mode');
} else {
    themeToggle.textContent = sunIcon; // Show sun icon for dark mode
    themeToggle.setAttribute('data-tooltip', 'Toggle to light mode');
}

// Event listener to toggle the theme on click
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    const theme = document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
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
    const theme = document.documentElement.classList.contains('light-mode') ? moonIcon : sunIcon;
    themeToggle.textContent = theme;
});
