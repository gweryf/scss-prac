import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles/app.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='appnav'>
        <div className='apphead'>Lmao</div>
        <div className='applinks'>
          <div className='home'><a href='/'>Home</a></div>
          <div className='profile'><a href='/profile'>Profile</a></div>
        </div>
      </nav>
      <svg id='svg' width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 1" clip-path="url(#clip0_0_1)">
          <rect width="120" height="100" fill="white"/>
          <g id="lightGroup">
            <path id="light1" d="M44 50.5L9.5 69.9856L9.5 31.0144L44 50.5Z" fill="#77C1F6" fill-opacity="0.6"/>
          </g>
          <g id="darkGroup">
            <path id="dark1" d="M44 50.5L9.5 69.9856L9.5 31.0144L44 50.5Z" fill="#8460EA" fill-opacity="0.6"/>
            <path id="dark2" d="M57 50.5L22.5 69.9856L22.5 31.0144L57 50.5Z" fill="#8460EA" fill-opacity="0.6"/>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect width="120" height="100" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

export default App
