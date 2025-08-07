import '../css/Inicio.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Inicio = () => {
    const [mostrarMas, setMostrarMas] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <div data-aos="fade-up">
                <img className='img-banner center' src="/bannerhd2.png" alt="banner" />
            </div>
            <div className='titulo-container center' data-aos="zoom-in">
                <h1 className='center titulo-inicio'>Sobre NuSkin...</h1>
            </div>
            <div className='grid-inicio'>
                <div className='center' data-aos="fade-right">
                    <img className='logo-nuskin' src="/fondonu.png" alt="colagen" />
                </div>
                <div className='text-container'>
                    <div className='pruebaNu' data-aos="fade-left">
                        <p className='texto-inicio'>
                            Nu Skin es una compañía global de belleza y bienestar, reconocida por combinar lo mejor de la ciencia, la tecnología y la naturaleza para ofrecer soluciones innovadoras que transforman vidas.
                            Con más de 35 años de trayectoria y presencia en más de 50 países, Nu Skin ha revolucionado el mercado del cuidado personal a través de productos respaldados por investigaciones científicas y desarrollados con los más altos estándares de calidad.
                        </p>

                        <p className={`texto-inicio extra-texto ${mostrarMas ? 'mostrar' : ''}`}>
                            Su línea estrella, ageLOC®, incorpora tecnología patentada que actúa desde el origen del envejecimiento, logrando resultados visibles y duraderos. Dispositivos inteligentes como el LumiSpa iO® y el WellSpa iO® han llevado el cuidado de la piel y el bienestar a un nuevo nivel, gracias a su conectividad con la app Nu Skin Vera™ que permite personalizar rutinas, recibir recomendaciones y hacer un seguimiento detallado del progreso.
                            Además de sus productos, Nu Skin ofrece una oportunidad única de emprendimiento digital, permitiendo a miles de personas alrededor del mundo generar ingresos, desarrollar su marca personal y construir un negocio desde cualquier lugar.
                        </p>

                        <button className='ver-mas-btn' onClick={() => setMostrarMas(!mostrarMas)}>
                            {mostrarMas ? 'Ver menos' : 'Ver más'}
                        </button>
                    </div>
                </div>
            </div>
            <div className='titulo-container center' data-aos="zoom-in">
                <h1 className='center titulo-inicio'>Productos</h1>
            </div>
            <div className='grid-inicio'>
                <div className='text-container' >
                    <div className='' data-aos="fade-right" >
                        <h4 className='center'>✨ Omega-3 ✨</h4>
                        <p className='texto-inicio'>¿A tu dieta le falta Omega-3? Hay un motivo por el que estos ácidos grasos se llaman "esenciales". Optimum Omega es uno de nuestros mejores suplementos de aceite de pescado que aumenta de forma segura y conveniente tu ingesta de ácidos grasos Omega-3.</p>
                    </div>
                </div>
                <div className='foto-omega' data-aos="fade-left">
                    <img className='omega' src="/omegafondo.png" alt="colagen" />
                </div>
            </div>
            <div className='grid-inicio'>
                <div className='center foto-rutina' data-aos="fade-right">
                    <img className='omega' src="/fondorutina.png" alt="colagen" />
                </div>
                <div className='text-container' data-aos="fade-left">
                    <div >
                        <h4 className='center'>✨ Kit Piel Radiante ✨</h4>
                        <p className='texto-inicio'>
                            Este kit de skincare está diseñado para renovar, proteger e hidratar la piel, logrando un rostro luminoso, uniforme y saludable desde el primer uso. Gracias a la acción del AHA glicólico, exfolia suavemente eliminando células muertas y mejorando visiblemente la textura y el tono. La niacinamida aporta una poderosa acción calmante, antiinflamatoria y antioxidante, ayudando a prevenir irritaciones y a reforzar la barrera cutánea. Por último, la combinación de ácido hialurónico y vitamina A garantiza una hidratación profunda y duradera, con un efecto antiage que deja la piel suave, fresca y con un glow natural que se mantiene todo el día.</p>
                    </div>
                </div>
            </div>
            <div className='grid-inicio'>
                <div className='text-container' data-aos="fade-left">
                    <div>
                        <h4 className='center'>✨ Beauty Focus Collagen+ ✨</h4>
                        <p className='texto-inicio'>Beauty Focus Collagen+ es un suplemento que te ayuda a mejorar la producción de colágeno y elastina, contribuyendo a aumentar la luminosidad, a reducir visiblemente las líneas de expresión y las arrugas, y a mejorar la hidratación de la piel. Además, Collagen+ es una fórmula única y clínicamente probada. Prepara la piel para obtener mejores beneficios complementarios de los regímenes de cuidado tópico de Nu Skin® y cuenta con certificación SCS de nivel I.</p>
                    </div>
                </div>
                <div className='center' data-aos="fade-right">
                    <img className='logo-nuskin' src="/collagensinfondo.png" alt="colagen" />
                </div>
            </div>
            <div className='center ver-mas' data-aos="zoom-in">
                <Link to={"/productos"}>
                    <button className='btn-inicio'>Ver Más Productos...</button>
                </Link>
            </div>
            <div data-aos="zoom-in">
                <div className='titulo-container center'>
                    <h1 className='center titulo-inicio'>Quien Soy?</h1>
                </div>
                <div className='grid-inicio'>
                    <div className='center ali' >
                        <img className='foto-ali' src="/alifoto.png" alt="colagen" />
                    </div>
                    <div className='text-container'>
                        <div>
                            <p className='texto-inicio'>Me encanta sentirme bien por dentro y por fuera, y eso lo logré gracias a los productos de Nu Skin.
                                En esta página comparto mis favoritos: los que me ayudan a cuidar mi piel, mi bienestar y potenciar mi mejor versión todos los días.
                                Te invito a explorar, descubrir y probar lo que a mí me cambió la rutina.
                                💙 Si necesitás ayuda o tenés dudas, estoy para asesorarte.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Inicio