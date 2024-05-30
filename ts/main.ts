console.log('Antes de DOMContentLoaded');
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido cargado');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    console.log('Dropdown:', dropdown);
    console.log('Dropdown Content:', dropdownContent);
    
    dropdown?.addEventListener('mouseenter', () => {
        console.log('El ratón ha entrado en el dropdown');
        dropdownContent?.classList.add('show');
    });

    dropdown?.addEventListener('mouseleave', () => {
        console.log('El ratón ha salido del dropdown');
        dropdownContent?.classList.remove('show');
    });
});