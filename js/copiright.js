document.addEventListener('DOMContentLoaded', (event) => {
    const startYear = 2017;
    const currentYear = new Date().getFullYear();
    const yearText = (currentYear > startYear) ? `${startYear} - ${currentYear}` : `${startYear}`;
    document.getElementById('copyright-year').textContent = yearText;
});