import React from 'react'
import './CardFruits.css'

type Props = {
  openCard?: any,
  image: string,
  name: string,
  calories: string,
  protein: string,
  carbo: string,
  fiber: string,
  fat: string,
  portion: string
}

const CardFruits = ({ openCard, image, name, calories, protein, carbo, fiber, fat, portion }: Props) => {
  return (
    <div onClick={openCard} className='fruits-card'>
      <img className='img-fruit' src={image} alt="" />
      <div>
        <h2 className='title'>{name}</h2>
        <div className='description'>
          <div className='content-description'>
            <p>Calorias: {calories}</p>
            <p>Proteína: {protein}</p>
            <p>Carboidratos: {carbo}</p>
          </div>
          <div className='content-description'>
            <p>Fibra: {fiber}</p>
            <p>Gordura: {fat}</p>
            <p>Porção: {portion}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFruits