import React from 'react';
import './FruitsDetails.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

const FruitsDetails = () => {
  const navigate = useNavigate();

  const fruit = useAppSelector(state => state.fruits);

  return (
    <div className='content-details'>
      <h1 className='details-title'>{fruit.name}</h1>
      <img className='details-image' src={fruit.image} alt="" />
      <div className='content-details-description'>
        <div className='divs-description '>
          <p>Calorias: {fruit.calories}</p>
          <p>Proteínas: {fruit.protein}</p>
          <p>Carboidratos: {fruit.carbo}</p>
        </div>
        <div className='divs-description '>
          <p>Fibras: {fruit.fiber}</p>
          <p>Gordura: {fruit.fat}</p>
          <p>Porção: {fruit.portion} </p>
        </div>
      </div>
      <Button handleClick={() => navigate('/')} text='Voltar' />
    </div>
  )
}

export default FruitsDetails