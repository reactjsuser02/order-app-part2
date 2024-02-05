import '../App.css';

import trash from '../icons/trash.svg';

function Item(props) {
return (
    <div className='mb-6'>
        <div className='grid grid-cols-8 gap-2 mb-4'>
            <div className='col-span-1 h-[40px] pt-1'>
                <img className='' src={props.image} alt="" />
            </div>
            <div className='col-span-4 h-[40px]'>
                <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{props.name}</p>
                <span className='text-[#ABBBC2]'>$ {props.price}</span>
            </div>
            <input className='h-[40px] py-1 rounded-lg bg-[#2D303E] text-center' value="2">
            </input>
            <div className='h-[40px] pt-2 col-span-2 text-center'>
                $ 4.58
            </div>
        </div>
        <div className='grid grid-cols-8 gap-2'>
            <div className='col-span-6'>
                <input className='w-full py-2 px-4 rounded-lg bg-[#2D303E] text-[#E0E6E9]' type="text" placeholder='Order Note...' />
            </div>
            <div className='col-span-2 m-auto w-fit'>
                <button className='rounded-lg border border-[#FF7CA3]'>
                    <img className='p-2 inline-block' src={trash} alt="" />
                </button>
            </div>
        </div>
    </div>
);
}

export default Item;


