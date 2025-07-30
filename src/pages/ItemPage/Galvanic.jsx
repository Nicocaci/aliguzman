import React from 'react';
import { Link } from 'react-router-dom';

const Galvanic = () => {
    return (
        <div>
            <div className='seccion-collagen'>
                <div>
                    <img className='' src="/facespa.png" alt="colagen" />
                </div>
                <div>
                    <h1>Kit Galvanic Face Spa Essentials</h1>
                    <strong>
                        <ul>
                            <li>Es la más completa. Trabaja signos de ENVEJECIMIENTO</li>
                            <li>Trata LINEAS DE EXPRESION, ARRUGAS, TONIFICA Y NUTRE LA PIEL. Da FIRMEZA. Efecto Lifting.</li>
                            <li>Trabaja con tu corriente GALVANICA. Y SE USA CON GELES QUE ESTA IONIZADOS que nutren las células porque van a la tercera capa de la dermis.</li>
                            <li>Tiempo de uso, 10' tres veces por semana o dia por medio.</li>
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

export default Galvanic