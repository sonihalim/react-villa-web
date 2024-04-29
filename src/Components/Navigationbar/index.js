import { useNavigate } from "react-router-dom"

function Navigationbar3 () {
    const navigate = useNavigate()

    return (
        <div>
        <header className='mx-16'>
          <nav className='flex justify-between items-cente w-full p-5'>
            <h1 className='text-lg font-bold 2xl:text-4xl'>The Kata Villa</h1>
            <ul className='invisible 2xl:visible 2xl:flex 2xl:items-center 2xl:gap-4 2xl:text-lg'>
                <button onClick={() => navigate('/')} >Home</button>
                <button>Galery</button>
                <button onClick={() => navigate('/about')} >About Us</button>
                <li>Contact</li>
            </ul>
          </nav>
  
        </header>
      </div>
    )
}

export default Navigationbar3