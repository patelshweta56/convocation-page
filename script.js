const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const body = document.body;

themeToggleCheckbox.addEventListener('change', () => {
  if (themeToggleCheckbox.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
  }
});

// Set initial theme based on user preference or default to light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  themeToggleCheckbox.checked = true;
  body.classList.add('dark-mode');
} else {
  body.classList.add('light-mode');
}
