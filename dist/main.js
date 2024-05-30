"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.addEventListener('mouseenter', () => {
        dropdownContent === null || dropdownContent === void 0 ? void 0 : dropdownContent.classList.add('show');
    });
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.addEventListener('mouseleave', () => {
        dropdownContent === null || dropdownContent === void 0 ? void 0 : dropdownContent.classList.remove('show');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        const cvButton = document.getElementById('cv-btn');
        if (cvButton && window.innerWidth <= 768) {
            cvButton.textContent = 'CV';
        }
        else if (cvButton) {
            cvButton.textContent = 'Descargar CV';
        }
    });
});
