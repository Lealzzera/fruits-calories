import React from 'react';
import CardFruits from '../../components/CardFruits/CardFruits';
import './Home.css';
import { Api } from '../../api/api';
import { Link } from 'react-router-dom';

const Home = () => {

  const [fruitsData, setFruitsData] = React.useState<any>([]);

  React.useEffect(() => {
    fetchFruits()
  }, []);

  const fetchFruits = async () => {
    let response = await Api.getFruits();
    response.sort((fruitA: any, fruitB: any) => (fruitA.name > fruitB.name) ? 1 : -1);
    setFruitsData(response);
  }
  return (
    <div className='home'>
      <div className='content-home'>
        {fruitsData.map(({ name, calories, protein, carbohydrates, fiber, portion, photo, blubber }: any, index: any) => (
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