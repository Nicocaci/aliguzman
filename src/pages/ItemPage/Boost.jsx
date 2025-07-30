import React from 'react';
import { Link } from 'react-router-dom';

const Boost = () => {
    return (
        <div>
            <div className='seccion-collagen'>
                <div>
                    <img className='foto-producto' src="/boostSinfONDO.png" alt="colagen" />
                </div>
                <div>
                    <h1 className='titulo-detalle'>ageLOC Boost</h1>
                    <strong>
                        <ul className='text-detalle'>
                            <li>GYM FACIAL estimula al musculo facial, dándole VOLUMEN Y DENSIDAD. No es Abrasivo.</li>
                            <li>Resultados similares al BOTOX FACIAL.</li>
                            <li>Genera RENOVACIÓN CELULAR.</li>
                            <li>Da Glow a la vez que Hidrata la piel.</li>
                            <li>Sale del baño, lo llevas en la cartera.</li>
                            <li>Tiempo de uso 2' todos los dias</li>
                        </ul>
                    </strong>
                    <Link to={"/contacto"}>
                        <div className='btn-container'><button className='btn-detalle'>Hacé tu pedido</button></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Boost