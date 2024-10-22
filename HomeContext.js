import React, { useState } from 'react'
import Home from './Home';
import Selected_Items from './Selected_Items';
import Navigation from './components/Navigation';
import Print from './components/Print';

export const HomeContext =  React.createContext();

const HomeProvider = ({children}) => {
    
    const [number, setNumber] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const [number5, setNumber5] = useState('');
    const [number6, setNumber6] = useState('');
    const [number7, setNumber7] = useState('');
    const [number8, setNumber8] = useState(''); 
    const [number9, setNumber9] = useState('');  
    const [number10, setNumber10] = useState('');           
    const [number11, setNumber11] = useState('');           
    const [number12, setNumber12] = useState('');            
             
    const [selectedItem, setSelectedItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [showComponent, setShowComponent] = useState(true)
    const [showPrice, setShowPrice] = useState(false)
   
     //Handle Input Change for all images 
    
    
   const data = {selectedItem,setSelectedItem, showComponent, setShowComponent, totalPrice, setTotalPrice, showPrice, setShowPrice , 
              number, setNumber,number2, setNumber2, number3, setNumber3, number4, setNumber4, number5, setNumber5, number6, setNumber6, number7, setNumber7, number8, setNumber8, number9, setNumber9, number10, setNumber10, number11, setNumber11, number12, setNumber12 ,
              }  
  return (
    <HomeContext.Provider value={data}>
        {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider;