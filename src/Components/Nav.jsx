import '../App.css';

function Nav(props) {
return (
    <div className={'bg-[#1F1D2B] p-3 cursor-pointer '  + props.radius + ' ' + 'bg-[' + props.background + ']'}>
        <img className={'p-4 ' + 'bg-[' + props.imageBackground + '] ' + props.imageRadius} src={props.image} alt="" />
    </div>
);
}

export default Nav;


