import React from 'react';
import '../../css/ItemPage/LumiSpa.css';
import { Link } from 'react-router-dom';

const LumiSpa = () => {
    return (
        <div>
            <div className='seccion-collagen'>
                <div>
                    <img className='foto-producto' src="/LUMISPA.png" alt="colagen" />
                </div>
                <div>
                    <h1 className='titulo-detalle' >ageLOC LumiSpa iO</h1>
                    <strong>
                        <ul className='text-detalle'>
                            <li>LIMPIEZA profunda por movimiento de doble oscilación que promueve la producción de COLAGENO  y ELASTINA</li>
                            <li>Remueve CELULAS MUERTAS, retira el maquillaje, la suciedad.</li>
                            <li>Minimiza los POROS VISIBLES</li>
                            <li>A diferencia de los cepillos NO ROMPE LA PIEL</li>
                            <li>ES UN DISPOSITIVO INTELIGENTE CON BLUETOOTH</li>
                            <li>Trata ACNE, elimina PUTNOS NEGROS, HIDRATA e ILUMINA  dejando la PIEL SUAVE Y TERSA.</li>
                            <li>No RESECA la PIEL. Sino que mantiene su balance natural de humectación</li>
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

export default LumiSpa;