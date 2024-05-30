
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    dropdown?.addEventListener('mouseenter', () => {
        dropdownContent?.classList.add('show');
    });

    dropdown?.addEventListener('mouseleave', () => {
        dropdownContent?.classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        const cvButton = document.getElementById('cv-btn');
        if (cvButton && window.innerWidth <= 768) {
            cvButton.textContent = 'CV';
        } else if (cvButton) {
            cvButton.textContent = 'Descargar CV';
        }
    });
});