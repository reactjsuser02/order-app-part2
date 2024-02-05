import '../App.css';

import Items from './Items';

// import card1 from '../images/card1-min.png';
// import card2 from '../images/card2-min.png';
// import card3 from '../images/card3-min.png';
// import card4 from '../images/card4-min.png';
// import card5 from '../images/card5-min.png';
// import card6 from '../images/card6-min.png';
// import card7 from '../images/card7-min.png';

function Main() {
return (
    <div className='Cart fixed right-0 top-0 h-full w-[400px] px-3 bg-[#1F1D2B]'>
        <h4 className='text-xl mb-4'>Orders #34562</h4>
        <div className='flex'>
            <div className='mr-4 px-4 py-1 rounded-lg bg-[#EA7C69] cursor-pointer'>Dine In</div>
            <div className='mr-4 px-4 py-1 text-[#EA7C69] rounded-lg border border-[#393C49] cursor-pointer'>To Go</div>
            <div className='mr-4 px-4 py-1 text-[#EA7C69] rounded-lg border border-[#393C49] cursor-pointer'>Delivery</div>
        </div>
        <div className='grid grid-cols-8 py-4 border-b border-[#393C49]'>
            <p className='cols-span-5'>Item</p>
            <p className='col-start-6 m-auto w-fit'>Qty</p>
            <p className='col-start-7 col-span-2 m-auto w-fit'>Price</p>
        </div>

        <Items />

        <div className='absolute bottom-0 w-11/12'>
            <div className='mb-4'>
                <p className='inline-block text-[#ABBBC2]'>Discount</p>
                <p className='float-right inline-block text-['>$0</p>
            </div>
            <div className='mb-6'>
                <p className='inline-block text-[#ABBBC2]'>Sub total</p>
                <p className='float-right inline-block'>$ 21.03</p>
            </div>
            <div className='pb-4'>
                <button className='w-full px-10 py-4 rounded-lg bg-[#EA7C69]'>Continue to Payment</button>
            </div>
        </div>
    </div>
);
}

export default Main;


