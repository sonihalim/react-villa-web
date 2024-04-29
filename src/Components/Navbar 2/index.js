import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";
import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
// Responsive
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="px-10 2xl:px-32">
	 		<span>
				<button onClick={() => navigate('/')} >
                	<img className="w-20 md:w-36" src="./katavillalogo.png" alt='logo'></img>
				</button>
            </span>
			<nav ref={navRef}>
				<a onClick={() => navigate('/')} >Home</a>
				<a onClick={() => navigate('/galery')}>Galery</a>
				<a onClick={() => navigate('/about')} >About Us</a>
				<a href="/#">Contact</a>    			    
			</nav>
			<label  className="lg:hidden p-0 bg-transparent border-none btn swap swap-rotate">
				{/* this hidden checkbox controls the state */}
				<input onClick={showNavbar} type="checkbox" />
				
				{/* hamburger icon */}
				<svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
				
				{/* close icon */}
				<svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
				
				</label>
				
		</header>
	);
}

export default Navbar;
