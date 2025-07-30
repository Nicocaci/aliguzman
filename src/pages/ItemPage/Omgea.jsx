import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ItemPage/Omega.css';

const Omgea = () => {
    return (
        <div>
            <div className='seccion-collagen'>
                <div>
                    <img className='foto-producto' src="/detalleomega.jpeg" alt="colagen" />
                </div>
                <div>
                    <h1 className='titulo-detalle'>Omega-3</h1>
                    <strong>
                        <ul className='text-detalle'>
                            <li>Nuestro OMEGA está orientado a la salud cardiovascular. Tiene estudios clínicos y es un producto libre de contaminantes y metales peados.</li>
                            <li>Reduce el nivel de triglicéridos</li>
                            <li>Reduce el nivel de colesterol LDL</li>
                            <li>Disminuye la placa arterial</li>
                            <li>Previene el desarrollo del Alzheimer</li>
                            <li>Repara el sistema hormonal</li>
                            <li>DOSIS RECOMENDADA: 2 cápsulas diarias 2 veces al dia</li>
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

export default Omgea