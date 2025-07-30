import React, { useRef, useState } from 'react';
import '../css/Contacto.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_3ko5ufx',
            'template_6ncoc2i',
            form.current,
            '4jyhGU7JBh3pL4j7T'
        )
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado con éxito!',
                    text:'En seguida me voy a estar comunicando con vos',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Aceptar'
                });

                setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    mensaje: ""
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error',
                    text: 'Intentá de nuevo.',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Cerrar'
                });

                console.error('Error al enviar el formulario:', error);
            });
    };

    return (
        <section>
            <div>
                <h1 className='titulo-contacto'>Contacto</h1>
                <div className='center contactoData'>
                    <div className='center wpp'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        <p className='text-contacto'>+5491159576857</p>
                    </div>

                    <div className='center wpp'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        <p className='text-contacto'>ali_40_guz@hotmail.com</p>
                    </div>

                    <p><strong className='textContacto'>Si te interesa saber más sobre algún producto, dejame tu mensaje que me voy a estar comunicando con vos.</strong></p>
                </div>
            </div>

            <div className='contacto-container'>
                <form ref={form} onSubmit={sendEmail} className="formulario-contacto">
                    <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
                    <textarea name="mensaje" placeholder="Mensaje" value={formData.mensaje} onChange={handleChange} required />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Contacto;
