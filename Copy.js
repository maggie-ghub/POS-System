import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Price from './components/Price'


export default function App() {
  const [selectedItem, setSelectedItem] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [showComponent, setShowComponent] = useState(true)
  const [showPrice, setShowPrice] = useState(false)
  const [counter, setCounter] = useState(1)
  const handleSelectItem = (item) =>{
    setSelectedItem([...selectedItem, item])
    setTotalPrice(totalPrice + item.price)
    setShowPrice(true)
    
    setCounter('0')
      
     
  }
    const buttonBackground = { 
     backgroundColor : counter === 1 ? 'green': 'black',
     
     }
  const handleShowSelectedItems = () =>{
    setShowComponent(!showComponent)
    
}
const handleBackToSelectedItems = () =>{
  
  setShowComponent(!showComponent)
 
}
const handlePrintSelectedItems = () => {
    setSelectedItem([])
    setTotalPrice(0)
    setShowPrice(fasle)
}  
// const handleAddItem = () => {
//   setSelectedItem([...selectedItem, 'New Item']);
// };
 const handleRemoveItem = (item) =>{
  setSelectedItem(selectedItem.filter((i)=>  i !== item))
  setTotalPrice(totalPrice-item.price)
  
 }          
  return (
    <View style={styles.container}>
      {showComponent ? (
        <View style={styles.containerTrue}>
          <Button style={styles.text} title='Add Table' />
          <Text style={styles.text}>Select Food Items :</Text>
          <View style={styles.foods}>
          
            <View style={styles.row}>
              <TouchableOpacity onPress={() => handleSelectItem({ name: 'CaseyLee', price: 30 })}>
                <View style={[styles.button, buttonBackground]}>
                  <Text style={styles.buttonText}>Casey - $30</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Image source={require('./images/casey-lee.png')} style={styles.image} />
              <Button title="Casey - $30" style={ buttonBackground} onPress={() => handleSelectItem({ name: 'CaseyLee', price: 30 })} />
                            
            </View>
            <View style={styles.row}>
              <Image source={require('./images/fresh-grill.png')} style={styles.image} />
              <Button title="grill - $20" style={styles.button} onPress={() => handleSelectItem({ name: 'Grill', price: 20 })} />
            </View>
            <View style={styles.row}>
              <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
              <Button title="kosar - $30" style={styles.button} onPress={() => handleSelectItem({ name: 'Kosar', price: 30 })} />
            </View>
          </View>

          <View style={styles.foods}>
            <View style={styles.row}>
              <Image source={require('./images/eugene.png')} style={styles.image} />
              <Button title="Eugene - $25" style={styles.button} onPress={() => handleSelectItem({ name: 'Eugene', price: 25 })} />
            </View>
            <View style={styles.row}>
              <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
              <Button title="Skewers - $15" style={styles.button} onPress={() => handleSelectItem({ name: 'Skewers', price: 15 })} />
            </View>
            <View style={styles.row}>
              <Image source={require('./images/deryn-macey.png')} style={styles.image} />
              <Button title="Macey - $50" style={styles.button} onPress={() => handleSelectItem({ name: 'Macey', price: 50 })} />
            </View>
          </View>
          <Button  style={styles.printbutton} title="Show Selected Items" onPress={handleShowSelectedItems} />
            
      </View>
      ) : (
        <View style={styles.printable}  >
          
            {/* <Button title="Add Item" onPress={handleAddItem} /> */}
            <Text style={{ color: 'white' }}>List of items</Text>
            {selectedItem.map((item, index) => (
              <View style={styles.lists} key={index}>
                <Text style={{ color: 'white', fontSize: 16 }}>{item.name}</Text>
                <Text style={{color: 'white', fontSize: 16}}>${item.price}</Text>
                <Button title='Removes' style={styles.remove} onPress={() => handleRemoveItem(item)} />
                <Button title='ok' />
              </View>
            ))}
          
          <Price showPrice={showPrice} totalPrice={totalPrice} />
          <View  style={styles.footer}>
            <Button style={{ color: 'white', borderRadius:20 }} title='Back' onPress={handleBackToSelectedItems} />
            <Button style={{ color: 'white' }} title='Print' onPress={handlePrintSelectedItems} />
          </View>
        </View>
      )}

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // gap: 10,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
    // marginBottom: 30,
  },
  containerTrue: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#fff',
    marginTop: 40,
  },
  text: {
    fontSize: 30,
  },
  foods: {
    flex: .25,
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 120,
    height: 100,
  },
  button:{
    width: 10,
    height: 40,
    fontSize: 5,
  },
  row: {
    gap: 7,
    flexDirection: 'column',
  },
 remove: {   
    width: 120,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',  
 },    
  lists: {
    flex: .07,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap:  12,
    // paddingTop: 10,
  },
  footer: {
    flex: 1,
    gap: 280,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    left: 0,
    marginBottom: 5,
  },
  printbutton: {
    fontSize: 16,
    marginLeft: 5,
    borderRadius: 10,
    gap:60,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  printable: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#454545',
    fontWeight: 600,
    
  },
});
