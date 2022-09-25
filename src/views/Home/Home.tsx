import React from 'react';
import CardFruits from '../../components/CardFruits/CardFruits';
import './Home.css';
import { api } from '../../api/api';
import { Link } from 'react-router-dom';

type FruitsData = [
  {
    name: string,
    blubber: string,
    calories: string,
    carbohydrates: string,
    fiber: string,
    photo: string,
    portion: string,
    protein: string
  }
]



const Home = () => {

  const [fruitsData, setFruitsData] = React.useState<FruitsData | []>([]);
  const [loading, setLoading] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      await fetchFruits();
    })();
  }, []);

  const fetchFruits = async () => {
    setLoading('Carregando...');
    try {
      let response = await api.getFruits();
      response.sort((fruitA: any, fruitB: any) => (fruitA.name > fruitB.name) ? 1 : -1);
      setFruitsData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(null);
    }
  }

  if (loading !== null) return <div>{loading}</div>
  return (
    <div className='home'>
      <div className='content-home'>
        {fruitsData.map(({ name, calories, protein, carbohydrates, fiber, portion, photo, blubber }: any, index: number) => (
          <div key={index}>
            <Link style={{ textDecoration: 'none' }} to="/details">
              <CardFruits name={name} calories={calories} protein={protein} carbo={carbohydrates} fiber={fiber} fat={blubber} portion={portion} image={photo} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home