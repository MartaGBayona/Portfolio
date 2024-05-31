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
const email = "marta.g.bayona@gmail.com";
const copyEmailButton = document.getElementById('copy-email-btn');
const notification = document.getElementById('notification');
const emailAddress = document.getElementById('email-address');
emailAddress.textContent = email;
copyEmailButton.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 2000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
});
