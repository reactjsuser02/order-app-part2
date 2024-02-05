import '../App.css';

import Item from './Item';

import card1 from '../images/card1-min.png';
import card2 from '../images/card2-min.png';
import card3 from '../images/card3-min.png';
import card4 from '../images/card4-min.png';
import card5 from '../images/card5-min.png';
import card6 from '../images/card6-min.png';
import card7 from '../images/card7-min.png';

function Items(props) {
return (
    <div className='pt-6 overflow-y-scroll no-scrollbar h-[58%]'>
            <Item
            name='Spicy seasoned seafood noodles'
            price='2.29'
            quantity="2"
            image={card1}
            />
            <Item
            name='Salted Pasta with mushroom sauce'
            price='2.69'
            quantity="1"
            image={card2}
            />
            <Item
            name='Spicy instant noodle with special omelette'
            price='3.49'
            quantity="3"
            image={card4}
            />
            <Item
            name='Healthy noodle with spinach leaf'
            price='3.29'
            quantity="1"
            image={card7}
            />
        </div>
);
}

export default Items;


