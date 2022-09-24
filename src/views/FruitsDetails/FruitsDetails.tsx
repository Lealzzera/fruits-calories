import React from 'react';
import './FruitsDetails.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

type Props = {
  image?: string,
  name?: string,
  calories?: string,
  protein?: string,
  carbo?: string,
  fiber?: string,
  fat?: string,
  portion?: string
}

const FruitsDetails = ({ image, name, calories, protein, carbo, fiber, fat, portion }: Props) => {
  const navigate = useNavigate();

  return (
    <div className='content-details'>
      <h1 className='details-title'>Banana</h1>
      <img className='details-image' src="http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits/abacaxi.jpg" alt="" />
      <div className='content-details-description'>
        <div className='divs-description '>
          <p>Calorias: {calories}</p>
          <p>Proteínas: {protein}</p>
          <p>Carboidratos: {carbo}</p>
        </div>
        <div className='divs-description '>
          <p>Fibras: {fiber}</p>
          <p>Gordura: {fat}</p>
          <p>Porção:{portion} </p>
        </div>
      </div>
      <Button handleClick={() => navigate('/')} text='Voltar' />
    </div>
  )
}

export default FruitsDetails