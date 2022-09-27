import React from 'react';
import './FruitsDetails.css';
import Button from '../../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../api/api';

const FruitsDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [loading, setLoading] = React.useState<any>(false);
  const [apiData, setApiData] = React.useState<any>([]);

  const urlParam = params.name;

  const [obj] = React.useState<any>({});

  React.useEffect(() => {
    setLoading(true)
    apiData.map((valor: any) => {
      if (valor.name == urlParam) {
        obj.name = valor.name;
        obj.calories = valor.calories;
        obj.protein = valor.protein;
        obj.carbohydrates = valor.carbohydrates;
        obj.fiber = valor.fiber;
        obj.blubber = valor.blubber;
        obj.portion = valor.portion;
        obj.photo = valor.photo;
      }
      setLoading(false);
      return obj;
    })
  }, [apiData])

  React.useEffect(() => {
    (async () => {
      await fetchFruits();
    })();
  }, []);

  const fetchFruits = async () => {
    try {
      let response = await api.getFruits();
      response.sort((fruitA: any, fruitB: any) => (fruitA.name > fruitB.name) ? 1 : -1);
      setApiData(response);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  if (loading !== false) return <div>Carregando...</div>
  return (
    <div className='content-details'>
      <h1 className='details-title'>{obj.name}</h1>
      <img className='details-image' src={obj.photo} alt="" />
      <div className='content-details-description'>
        <div className='divs-description '>
          <p>Calorias: {obj.calories}</p>
          <p>Proteínas: {obj.protein}</p>
          <p>Carboidratos: {obj.carbohydrates}</p>
        </div>
        <div className='divs-description '>
          <p>Fibras: {obj.fiber}</p>
          <p>Gordura: {obj.blubber}</p>
          <p>Porção: {obj.portion} </p>
        </div>
      </div>
      <Button handleClick={() => navigate('/')} text='Voltar' />
    </div>
  )
}

export default FruitsDetails