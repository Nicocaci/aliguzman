import React from 'react';
import '../css/Productos.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Productos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className='titulo-productos'>Productos</h1>
      <div className='center'>
        <p><strong className='textme'>Si te interesa adquirir o saber mas informacion sobre algun producto, dejame tu mensaje <Link to={"/contacto"}><p>aqui</p></Link></strong></p>
      </div>
      <div>
        <div className='grid-inicio'>
          <div className='center' id='collagen'>
            <img className='foto-producto' src="/collagensinfondo.png" alt="colagen" />
          </div>
          <div className='text-container'>
            <h4 className='center'>✨ Beauty Focus Collagen+ ✨</h4>
            <p className='texto-inicio'>Beauty Focus Collagen+ es un suplemento que te ayuda a mejorar la producción de colágeno y elastina, contribuyendo a aumentar la luminosidad, a reducir visiblemente las líneas de expresión y las arrugas, y a mejorar la hidratación de la piel. Además, Collagen+ es una fórmula única y clínicamente probada. Prepara la piel para obtener mejores beneficios complementarios de los regímenes de cuidado tópico de Nu Skin® y cuenta con certificación SCS de nivel I. <Link to={'/beautyCollagen'}>Ver Más</Link></p>
          </div>
        </div>
        <div className='grid-inicio'>
          <div className='text-container' id='lumiSpa'>
            <h4 className='center'>✨ ageLOC LumiSpa iO ✨</h4>
            <p className='texto-inicio'>ageLOC LumiSpa iO te ayudará a tus objetivos de cuidado de la piel. En solo dos minutos, dos veces al día, conseguirás resultados instantáneos que podrás sentir. Además, LumiSpa iO ahora viene con tecnología inteligente IoT que te ayuda a personalizar tu rutina. <Link to={'/lumiSpa'}>Ver Más</Link> </p>
          </div>
          <div className='center wellSpa'>
            <img className='foto-producto' src="/lumifondo.png" alt="LumiSpa" />
          </div>
        </div>
        <div className='grid-inicio'>
          <div className='center wellSpa' id='boost'>
            <img className='foto-producto' src="/boostfondo.png" alt="boost" />
          </div>
          <div className='text-container'>
            <h4 className='center'>✨ ageLOC Boost ✨</h4>
            <p className='texto-inicio'>Deja que tu piel luzca radiante con la más reciente innovación de Nu Skin. Presentamos ageLOC Boost un innovador dispositivo que cuenta con tecnología de microcorriente de pulso variable que activa la piel para que se vea más luminosa, con tono más uniforme y mayor volumen. <Link to={'/boost'}>Ver Más</Link> </p>
          </div>
        </div>
        <div className='grid-inicio'>
          <div className='text-container' id='faceSpa'>
            <h4 className='center'>✨ Kit Galvanic Face Spa ✨</h4>
            <p className='texto-inicio'>Revitaliza tu piel en sólo 5 minutos con 2 sencillos pasos. Con el Kit Galvanic Face Spa Essentials tienes todo lo que necesitas para tu rutina facial en casa. Las corrientes galvánicas de la Galvanic Spa impulsan los ingredientes de los Geles Faciales de manera profunda en tu piel, ayudando a reducir las líneas de expresión y arrugas para revelar una apariencia más firme, levantada, contorneada y luminosa. <Link to={'/galvanic'}>Ver Más</Link></p>
          </div>
          <div className='center wellSpa' >
            <img className='foto-producto' src="/facefondo.png" alt="facespa" />
          </div>
        </div>
        <div className='grid-inicio'>
          <div className='center wellSpa' id='wellSpa'>
            <img className='foto-producto' src="/wellspafondo.png" alt="colagen" />
          </div>
          <div className='text-container' >
            <h4 className='center'>✨ WellSpa ✨</h4>
            <p className='texto-inicio'>¿Quieres verte y sentirte de la mejor manera? Restablece esa sensación de bienestar general. Recupera tu cuerpo antes y después del entrenamiento. Todo el ageLOC WellSpa iO: el primer sistema de bienestar y belleza completamente integrados de Nu Skin. <Link to={'/wellSpa'}>Ver Más</Link></p>
          </div>
        </div>
        <div className='grid-inicio'>
          <div className='text-container' >
            <h4 className='center'>✨ Omega-3 ✨</h4>
            <p className='texto-inicio'>¿A tu dieta le falta Omega-3? Hay un motivo por el que estos ácidos grasos se llaman "esenciales". Optimum Omega es uno de nuestros mejores suplementos de aceite de pescado que aumenta de forma segura y conveniente tu ingesta de ácidos grasos Omega-3. <Link to={'/omega'}>Ver Más</Link></p>
          </div>
          <div className='center foto-omega' id='omega'>
            <img className='foto-producto' src="/omegafondo.png" alt="colagen" />
          </div>
        </div>
        <div className='grid-inicio'>
          <div className='center foto-rutina' >
            <img className='' src="/fondorutina.png" alt="colagen" />
          </div>
          <div className='text-container' >
            <div >
              <h4 className='center'>✨ Kit Piel Radiante ✨</h4>
              <p className='texto-inicio'>
                Este kit de skincare está diseñado para renovar, proteger e hidratar la piel, logrando un rostro luminoso, uniforme y saludable desde el primer uso. Gracias a la acción del AHA glicólico, exfolia suavemente eliminando células muertas y mejorando visiblemente la textura y el tono. La niacinamida aporta una poderosa acción calmante, antiinflamatoria y antioxidante, ayudando a prevenir irritaciones y a reforzar la barrera cutánea. Por último, la combinación de ácido hialurónico y vitamina A garantiza una hidratación profunda y duradera, con un efecto antiage que deja la piel suave, fresca y con un glow natural que se mantiene todo el día. <Link to={'/kitFacial'}>Ver Más</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productos