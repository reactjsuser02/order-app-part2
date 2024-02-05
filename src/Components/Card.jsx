import '../App.css';

function Card(props) {
return (
    <div className='h-[110%] text-center p-6 bg-[#1F1D2B] rounded-3xl cursor-pointer'>
        <img className='relative top-[-60px] mb-[-60px] w-10/12 m-auto' src={props.image} alt="" />
        <div className='pt-4'>
            <h4 className='mb-2'>{props.name}</h4>
            <p className='mb-2'>$ {props.price}</p>
            <p className='text-[#ABBBC2]'>{props.available} Bowls available</p>
        </div>
    </div>
);
}

export default Card;


