import React from 'react';
import { Link } from 'react-router-dom';

const WellSpa = () => {
    return (
        <div>
            <div className='seccion-collagen'>
                <div>
                    <img className='foto-producto' src="/WALLSPA.png" alt="colagen" />
                </div>
                <div>
                    <h1 className='titulo-detalle'>ageLOC WellSpa iO</h1>
                    <strong>
                        <ul className='text-detalle'>
                            <li>Es una tecnología que integra SALUD y BIENESTAR.</li>
                            <li>REVITALIZA, RECUPERA, REACTIVA</li>
                            <li>Tratamiento estético corporal PIEL DE NARANJA, ADIPOSIDAD, CELULITIS, FLACIDEZ, ARAÑITAS.</li>
                            <li>BIENESTAR porque drena todas las TOXINAS.</li>
                            <li>Trata el musculo antes de entrenar y post entrenamiento</li>
                            <li>LA CORRIENTE SE ADAPTA A TUS NECESIDADES.</li>
                            <li>Trabaja con un serum para el tratamiento estético y con un gel para el bienestar.</li>
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

export default WellSpa