import './App.css'
import image from './assets/react.svg'
import {data} from './data'
import {Books} from './Books'

import { useToggle } from './hooks/useToggle'
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {

  const [isVisible, toggleVisible] = useToggle(true);

  const [order, setOrder] = useLocalStorage([], 'orderKey');

  const addToOrder = (id) => {
    const newItem = data.find(item => item.id === id);
    setOrder([...order, newItem]);
  }

  return (
    <>

      <Books items={data} addToOrder={addToOrder}/>

    <div className='container'>
      <button onClick={toggleVisible}>our toogle</button>
       
       {isVisible && <img src={image} alt='react' />}

    </div>
    </>
  )
}

export default App
