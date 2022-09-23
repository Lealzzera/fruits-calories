import React from 'react'
import CardFruits from '../../components/CardFruits/CardFruits'
import './Home.css'
import { Api } from '../../api/api';

const Home = () => {

  const [fruitsData, setFruitsData] = React.useState<any>([]);

  React.useEffect(() => {
    fetchFruits()
  }, []);

  const clickCard = (event: any) => {
    console.log(event);
  }

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
            <CardFruits openCard={clickCard} name={name} calories={calories} protein={protein} carbo={carbohydrates} fiber={fiber} fat={blubber} portion={portion} image={photo} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home