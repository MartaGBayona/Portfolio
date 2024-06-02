"use strict";
window.addEventListener('load', () => {
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownButton && dropdownContent) {
        // Event listener para abrir/cerrar el dropdown al hacer clic en el botón
        dropdownButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el clic se propague al documento
            dropdownContent.classList.toggle('show');
            console.log('Dropdown toggled');
        });
        // Event listener para cerrar el dropdown cuando se hace clic fuera de él
        document.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove('show');
                console.log('Clicked outside dropdown');
            }
        });
    }
    else {
        console.error("El dropdownButton o dropdownContent es null. No se puede inicializar el dropdown.");
    }
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
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('contact-form') as HTMLFormElement;
//     form.addEventListener('submit', async (event: Event) => {
//         event.preventDefault();
//         const formData = new FormData(form);
//         try {
//             const response = await fetch('https://formsubmit.co/659bcf75fb1ab54b039df1954a7c86bd', {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 alert('Correo enviado con éxito!');
//                 form.reset();
//             } else {
//                 throw new Error('Error al enviar el correo. Intenta nuevamente.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Error al enviar el correo. Intenta nuevamente.');
//         }
//     });
// });
