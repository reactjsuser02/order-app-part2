import '../App.css';

import Card from './Card';

import card1 from '../images/card1-min.png';
import card2 from '../images/card2-min.png';
import card3 from '../images/card3-min.png';
import card4 from '../images/card4-min.png';
import card5 from '../images/card5-min.png';
import card6 from '../images/card6-min.png';
import card7 from '../images/card7-min.png';

function Cards(props) {
return (
    <div className='grid grid-cols-3 gap-10 pb-20'>
        <Card
        name="Spicy seasoned seafood noodles"
        price="2.29"
        available="20"
        image={card1}
        />
        <Card
        name="Salted Pasta with mushroom sauce"
        price="2.69"
        available="11"
        image={card2}
        />
        <Card
        name="Beef dumpling in hot and sour soup"
        price="2.99"
        available="16"
        image={card3}
        />
        <Card
        name="Healthy noodle with spinach leaf"
        price="3.29"
        available="22"
        image={card4}
        />
        <Card
        name="Hot spicy fried rice with omelet"
        price="3.49"
        available="13"
        image={card5}
        />
        <Card
        name="Spicy instant noodle with special omelette"
        price="3.59"
        available="17"
        image={card6}
        />
    </div>
);
}

export default Cards;


