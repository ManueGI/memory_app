import { useState } from 'react'
import Card from './Card'

export default function Cards() {

  const [cards, setCards] = useState([
    { id: 0, name: 'galaxy', status: '', img: '/images/01.png'},
    { id: 0, name: 'galaxy', status: '', img: '/images/01.png'},
    { id: 1, name: 'blackhole', status: '', img: '/images/02.jpg'},
    { id: 1, name: 'blackhole', status: '', img: '/images/02.jpg'},
    { id: 2, name: 'pillars of creation', status: '', img: '/images/03.jpg'},
    { id: 2, name: 'pillars of creation', status: '', img: '/images/03.jpg'},
    { id: 3, name: 'earth', status: '', img: '/images/04.jpg'},
    { id: 3, name: 'earth', status: '', img: '/images/04.jpg'},
    { id: 4, name: 'moon', status: '', img: '/images/05.jpg'},
    { id: 4, name: 'moon', status: '', img: '/images/05.jpg'},
    { id: 5, name: 'space cloud', status: '', img: '/images/06.jpg'},
    { id: 5, name: 'space cloud', status: '', img: '/images/06.jpg'},
    { id: 6, name: 'nebula', status: '', img: '/images/07.jpg'},
    { id: 6, name: 'nebula', status: '', img: '/images/07.jpg'},
    { id: 7, name: 'red green galaxy', status: '', img: '/images/08.jpg'},
    { id: 7, name: 'red green galaxy', status: '', img: '/images/08.jpg'},
  ])

  return (
    <div className="container">
      {cards.map((card, index) => {
        return <Card card={card} />
      })}

    </div>
  );
}
