function setTheme(mode) {
    const lightBtn = document.querySelectorAll('#theme-light-btn');
    const darkBtn = document.querySelectorAll('#theme-dark-btn');
    const systemBtn = document.querySelectorAll('#theme-system-btn');
    // Remove active class from all
    [...lightBtn, ...darkBtn, ...systemBtn].forEach(btn => btn.classList.remove('active'));
    if (mode === 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        document.getElementById('theme-light-btn').classList.add('active');
    } else if (mode === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        document.getElementById('theme-dark-btn').classList.add('active');
    } else {
        localStorage.removeItem('theme');
        document.getElementById('theme-system-btn').classList.add('active');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}
// Init Theme
if (localStorage.theme === 'dark') {
    setTheme('dark');
} else if (localStorage.theme === 'light') {
    setTheme('light');
} else {
    setTheme('system');
}
// WhatsApp Form Generator
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const date = document.getElementById('formDate').value;
    const event = document.getElementById('formEvent').value;
    const message = `Hola Producciones B & D, deseo información sobre ${event} para la fecha ${date}. Mi nombre es ${name}`;
    const whatsappUrl = `https://wa.me/51936649213?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});