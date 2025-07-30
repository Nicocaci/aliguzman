import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ItemPage/KitFacial.css';

const KitFacial = () => {
    return (
        <div>
            <div className='seccion-collagen'>
                <div>
                    <img className='foto-producto' src="/nuevarutina.png" alt="colagen" />
                </div>
                <div>
                    <h1 className='titulo-detalle'>RUTINA PIEL RADIANTE</h1>
                    <strong>
                        <ul className='text-detalle'>
                            <li>El primer paso es un limpiador con AHA glicólico.
                                El AHA glicólico es un activo derivado de fuentes naturales como la caña de azúcar, y es uno de los ingredientes más utilizados y efectivos tanto en la cosmetología como en la dermatología.
                            </li>
                            <li>El segundo paso es un suero fluido y ligero que se absorbe rapidísimo.
                            </li>
                            <li>El tercer paso es una hidratación profunda que ayuda a retener el agua en la piel durante todo el día.</li>
                            <li>Uno de sus ingredientes principales es la niacinamida, un derivado de la vitamina B3 que también está presente en muchos alimentos.
                            </li>
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

export default KitFacial;