import React from 'react';
import '../../css/ItemPage/Collagen.css';
import { Link } from 'react-router-dom';

const BeautyCollagen = () => {
  return (
    <div>
      <div className='seccion-collagen'>
        <div>
          <img className='img-detalle' src="/collagensinfondo.png" alt="colagen" />
        </div>
        <div>
          <h1 className='titulo-detalle'>Beauty Collagen+</h1>
          <strong>
            <ul className='text-detalle'>
              <li>El colágeno N1 del mercado. Importado de USA. Del laboratorio PHARMANEX de NUSKIN, líder mundial en nutrición</li>
              <li>Doble hidrolizado</li>
              <li>Absorción mayor al  99%</li>
              <li>Con péptidos bioactivos que estimulan la regeneración de colágeno un 65%</li>
              <li>Resultados GARANTIZADOS de 1 a 4 meses</li>
              <li>Estudios clínicos que lo demuestran</li>
              <li>PLUS: Luteína y Fitoceramidas (protección antioxidante + hidratación) </li>
              <li>Sin containdicaciones y recomendado por médicos</li>
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

export default BeautyCollagen;