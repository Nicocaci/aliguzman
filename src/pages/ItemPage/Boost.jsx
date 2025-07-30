import React from 'react';
import { Link } from 'react-router-dom';

const Boost = () => {
    return (
        <div>
            <div className='seccion-collagen'>
                <div>
                    <img className='' src="/boostSinfONDO.png" alt="colagen" />
                </div>
                <div>
                    <h1>ageLOC Boost</h1>
                    <strong>
                        <ul>
                            <li>GYM FACIAL estimula al musculo facial, dándole VOLUMEN Y DENSIDAD. No es Abrasivo.</li>
                            <li>Resultados similares al BOTOX FACIAL.</li>
                            <li>Genera RENOVACIÓN CELULAR.</li>
                            <li>Da Glow a la vez que Hidrata la piel.</li>
                            <li>Sale del baño, lo llevas en la cartera.</li>
                            <li>Tiempo de uso 2' todos los dias</li>
                        </ul>
                    </strong>
                    <Link to={"/contacto"}>
                        <button className='btn-inicio'>Hacé tu pedido</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Boost