import React from 'react';
import './CardFruits.css';
import { useDispatch } from 'react-redux';
import { setName, setCalories, setCarbo, setFat, setFiber, setImage, setProtein, setPortion } from '../../redux/reducers/fruitsReducer'

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

  const dispatch = useDispatch()

  const saveInfosInStore = () => {
    dispatch(setName(name));
    dispatch(setImage(image));
    dispatch(setCalories(calories));
    dispatch(setProtein(protein));
    dispatch(setCarbo(carbo));
    dispatch(setFiber(fiber));
    dispatch(setFat(fat));
    dispatch(setPortion(portion));
  }

  return (
    <div onClick={saveInfosInStore} className='fruits-card'>
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