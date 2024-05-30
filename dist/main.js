"use strict";
console.log('Antes de DOMContentLoaded');
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido cargado');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    console.log('Dropdown:', dropdown);
    console.log('Dropdown Content:', dropdownContent);
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.addEventListener('mouseenter', () => {
        console.log('El ratón ha entrado en el dropdown');
        dropdownContent === null || dropdownContent === void 0 ? void 0 : dropdownContent.classList.add('show');
    });
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.addEventListener('mouseleave', () => {
        console.log('El ratón ha salido del dropdown');
        dropdownContent === null || dropdownContent === void 0 ? void 0 : dropdownContent.classList.remove('show');
    });
});
