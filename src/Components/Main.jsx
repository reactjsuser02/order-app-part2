import '../App.css';

import Cards from './Cards';

import search from '../icons/search.svg';

import card1 from '../images/card1-min.png';
import card2 from '../images/card2-min.png';
import card3 from '../images/card3-min.png';
import card4 from '../images/card4-min.png';
import card5 from '../images/card5-min.png';
import card6 from '../images/card6-min.png';
import card7 from '../images/card7-min.png';

function Main() {
return (
    <div className='pl-[112px] pr-[400px]'>
        <div className='Main min-h-full px-3'>
            <div className='Header py-4 px-3'>
                <div className='inline-block'>
                    <h2 className='text-2xl'>Jaegar Resto</h2>
                    <p className='text-[#E0E6E9]'>Tuesday, 2 Feb 2021</p>
                </div>
                <div className='relative inline-block float-right w-2/6 mr-4'>
                    <input className='w-full py-2 px-2 pl-10 bg-[#2D303E]' type="text" placeholder='Search for food, coffee, etc..'/>
                    <img className='absolute left-3 top-[10px]' src={search} alt="" />
                </div>
            </div>

            <div className='border-b border-[#393C49] flex'>
                <div className='p-4 text-[#EA7C69] border-b border-[#EA7C69] cursor-pointer'>Hot Dishes</div>
                <div className='p-4 cursor-pointer'>Cold Dishes</div>
                <div className='p-4 cursor-pointer'>Soup</div>
                <div className='p-4 cursor-pointer'>Grill</div>
                <div className='p-4 cursor-pointer'>Appetizer</div>
                <div className='p-4 cursor-pointer'>Dessert</div>
            </div>

            <div>
                <div className='pt-6 mb-16'>
                    <h4 className='inline text-xl leading-[48px]'>Choose Dishes</h4>
                    <select className='float-right p-4 rounded-lg bg-[#1F1D2B] border border-[#393C49]' name="" id="">
                        <option value="dine in">Dine In</option>
                    </select>
                </div>

                <Cards />
            </div>
        </div>
    </div>
);
}

export default Main;


