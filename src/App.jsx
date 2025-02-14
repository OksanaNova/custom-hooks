import './App.css'
import image from './assets/react.svg'

import { useToggle } from './hooks/useToggle'

function App() {

  const [isVisible, toggleVisible] = useToggle(true);


  return (
    <div className='container'>
      <button onClick={toggleVisible}>our toogle</button>
       
       {isVisible && <img src={image} alt='react' />}

    </div>
  )
}

export default App
