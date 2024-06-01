"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browser_1 = __importDefault(require("@emailjs/browser"));
browser_1.default.init('5RTx4klgch8wLyCNR');
const form = document.getElementById('contactForm');
const status = document.getElementById('status');
form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const formData = new FormData(form);
    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    try {
        const response = yield browser_1.default.send('service_nwz9a7f', 'template_9lple6c', templateParams); // Reemplaza con tus IDs
        status.textContent = 'Mensaje enviado exitosamente';
        status.style.color = 'green';
    }
    catch (error) {
        status.textContent = 'Error al enviar el mensaje';
        status.style.color = 'red';
    }
}));
