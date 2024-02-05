import '../App.css';

import Nav from './Nav';

import logo from '../icons/logo.svg';
import home from '../icons/home.svg';
import discount from '../icons/discount.svg';
import graph from '../icons/graph.svg';
import messages from '../icons/messages.svg';
import notifications from '../icons/notifications.svg';
import settings from '../icons/settings.svg';
import logout from '../icons/logout.svg';

function Sidebar() {
return (
    <div className='Sidebar fixed left-0 h-full w-[100px] bg-[#1F1D2B] pl-2'>
        <div className='relative right-[-12px]'>
            <div className='bg-[#1F1D2B] rounded-br-xl p-3 cursor-pointer'>
                <img src={logo} alt="" />
            </div>
            <Nav
            image={home}
            radius="rounded-l-xl"
            background="#252836"
            imageBackground="#EA7C69"
            imageRadius="rounded-lg"
            />
            <Nav
            image={discount}
            radius="rounded-tr-xl"
            background="#1F1D2B"
            imageBackground="#1F1D2B"
            imageRadius=""
            />
            <Nav
            image={graph}
            radius=""
            background="#1F1D2B"
            imageBackground="#1F1D2B"
            imageRadius=""
            />
            <Nav
            image={messages}
            radius=""
            background="#1F1D2B"
            imageBackground="#1F1D2B"
            imageRadius=""
            />
            <Nav
            image={notifications}
            radius=""
            background="#1F1D2B"
            imageBackground="#1F1D2B"
            imageRadius=""
            />
            <Nav
            image={settings}
            radius=""
            background="#1F1D2B"
            imageBackground="#1F1D2B"
            imageRadius=""
            />
            <Nav
            image={logout}
            radius=""
            background="#1F1D2B"
            imageBackground="#1F1D2B"
            imageRadius=""
            />
        </div>

    </div>
);
}

export default Sidebar;


