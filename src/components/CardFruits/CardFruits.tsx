import React, { MouseEventHandler } from 'react'
import './CardFruits.css'

type Props = {
  image: string,
  name: string,
  calories: string,
  protein: string,
  carbo: string,
  fiber: string,
  fat: string,
  portion: string
}

const CardFruits = ({ image, name, calories, protein, carbo, fiber, fat, portion }: Props) => {

  return (
    <div className='fruits-card'>
      <img className='img-fruit' src={image} alt="" />
      <div>
        <h2 className='title'>{name}</h2>
        <div className='description'>
          <div className='content-description'>
            <p>Calorias: {calories}</p>
            <p>Proteínas: {protein}</p>
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