import './App.css';

import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Cart from './Components/Cart';

import logo from './icons/logo.svg';
import home from './icons/home.svg';
import discount from './icons/discount.svg';
import graph from './icons/graph.svg';
import messages from './icons/messages.svg';
import notifications from './icons/notifications.svg';
import settings from './icons/settings.svg';
import logout from './icons/logout.svg';
import search from './icons/search.svg';
import trash from './icons/trash.svg';

import card1 from './images/card1-min.png';
import card2 from './images/card2-min.png';
import card3 from './images/card3-min.png';
import card4 from './images/card4-min.png';
import card5 from './images/card5-min.png';
import card6 from './images/card6-min.png';
import card7 from './images/card7-min.png';

function App() {
return (
    <div className="App min-h-full text-white w-full bg-[#252836]">
        <Sidebar />
        <Main />
        <Cart />
    </div>
);
}

export default App;
