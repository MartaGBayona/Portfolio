import emailjs from '@emailjs/browser';

emailjs.init('5RTx4klgch8wLyCNR');

const form = document.getElementById('contactForm') as HTMLFormElement;
const status = document.getElementById('status') as HTMLElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const templateParams = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string
    };

    try {
        const response = await emailjs.send('service_nwz9a7f', 'template_9lple6c', templateParams); // Reemplaza con tus IDs
        status.textContent = 'Mensaje enviado exitosamente';
        status.style.color = 'green';
    } catch (error) {
        status.textContent = 'Error al enviar el mensaje';
        status.style.color = 'red';
    }
});