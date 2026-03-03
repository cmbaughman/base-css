export const initTheme = () => {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', currentTheme);

  toggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
};

export const initDebug = () => {
  window.addEventListener('keydown', (e) => {
    // Toggle grid with Ctrl + Shift + G
    if (e.ctrlKey && e.shiftKey && e.key === 'G') {
      const isDebug = document.documentElement.getAttribute('data-debug') === 'true';
      document.documentElement.setAttribute('data-debug', !isDebug);
      console.log(`🛠 Bare-mod: Debug mode ${!isDebug ? 'ON' : 'OFF'}`);
    }
  });
};