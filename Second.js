// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
// import Price from './components/Price'


// export default function App() {
//   const [selectedItem, setSelectedItem] = useState([])
//   const [totalPrice, setTotalPrice] = useState(0)
//   const [showComponent, setShowComponent] = useState(true)
//   const [showPrice, setShowPrice] = useState(false)
//   // const [buttonBackground, setButtonBackground] = useState('blue')
//   const [itemIndex0, setItemIndex0] = useState(null)
//   const [itemIndex1, setItemIndex1] = useState(null)
//   const [itemIndex2, setItemIndex2] = useState(null)
//   const [itemIndex3, setItemIndex3] = useState(null)
//   const [itemIndex4, setItemIndex4] = useState(null)
//   const [itemIndex5, setItemIndex5] = useState(null)
//   const [itemIndex6, setItemIndex6] = useState(null)
//   const [itemIndex7, setItemIndex7] = useState(null)
//   const [itemIndex8, setItemIndex8] = useState(null)
//   const [itemIndex9, setItemIndex9] = useState(null)
//   const [itemIndex10, setItemIndex10] = useState(null)
//   const [itemIndex11, setItemIndex11] = useState(null)
  
//   const handleSelectItem = (item, index) =>{
//     setSelectedItem([...selectedItem, item])
//     setTotalPrice(totalPrice + item.price)
//     setShowPrice(true)    
//     if(index === 0){ 
//     setItemIndex0(index)
//     }  // setButtonBackground('green')
//     if(index === 1){ 
//       setItemIndex1(index)
//     }
//     if(index === 2){ 
//       setItemIndex2(index)
//     }
//     if(index === 3){ 
//       setItemIndex3(index)
//     }
//     if(index === 4){ 
//       setItemIndex4(index)
//     }
//     if(index === 5){ 
//       setItemIndex5(index)
//     }
//     if(index === 6){ 
//       setItemIndex6(index)
//     }
//     if(index === 7){ 
//       setItemIndex7(index)
//     }
//     if(index === 8){ 
//       setItemIndex8(index)
//     }
//     if(index === 9){ 
//       setItemIndex9(index)
//     }
//     if(index === 10){ 
//       setItemIndex10(index)
//     }
//     if(index === 11){ 
//       setItemIndex11(index)
//     }     
//   }
    
//   const handleShowSelectedItems = () =>{
//     setShowComponent(!showComponent)
    
// }
// const handleBackToSelectedItems = () =>{
  
//   setShowComponent(!showComponent)
 
// }
// const handlePrintSelectedItems = () => {
//     setSelectedItem([])
//     setTotalPrice(0)
//     setShowPrice(false)
// }  

// // const handleAddItem = () => {
// //   setSelectedItem([...selectedItem, 'New Item']);
// // };
//  const handleRemoveItem = (item) =>{
//   setSelectedItem(selectedItem.filter((i)=>  i !== item))
//   setTotalPrice(totalPrice-item.price)
  
//  }          
//   return (
//     <View style={styles.container}>
//       {showComponent ? (
//         <View style={styles.containerTrue}>
//           <Button style={styles.text} title='Add Table' />
//           <Text style={styles.text}>Select Food Items :</Text>
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'CaseyLee', price: 30, color: 'green', },0)}>
//               <Image source={require('./images/casey-lee.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, { backgroundColor:itemIndex0 ===0 ? 'green': 'transparent'}]}>Casey - $30</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Grill', price: 20, color: 'green', },1)}>
//             <Image source={require('./images/fresh-grill.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex1 ===1 ? 'green': 'transparent'}]}>Grill - $20</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Kosar', price: 30, color: 'green', },2)}>
//             <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex2 ===2 ? 'green': 'transparent'}]}>Kosar - $30</Text>
//               </View>
//             </TouchableOpacity>
            
//           </View>
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Eugene', price: 25, color: 'green', },3)}>
//             <Image source={require('./images/eugene.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex3 ===3 ? 'green': 'transparent'}]}>Eugene - $25</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Skewers', price: 15, color: 'green', },4)}>
//             <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex4 ===4 ? 'green': 'transparent'}]}>Skewers-$15</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Macey', price: 50, color: 'green', },5)}>
//             <Image source={require('./images/deryn-macey.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex5 ===5 ? 'green': 'transparent'}]}>Macey - $50</Text>
//               </View>
//             </TouchableOpacity>
            
//           </View>
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'CaseyLee', price: 30, color: 'green', },6)}>
//               <Image source={require('./images/casey-lee.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex6 ===6 ? 'green': 'transparent'}]}>Casey - $30</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Grill', price: 20, color: 'green', },7)}>
//             <Image source={require('./images/fresh-grill.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex7 ===7 ? 'green': 'transparent'}]}>Grill - $20</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Kosar', price: 30, color: 'green', },8)}>
//             <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex8 ===8 ? 'green': 'transparent'}]}>Kosar - $30</Text>
//               </View>
//             </TouchableOpacity>
            
//           </View>
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Eugene', price: 25 },9)}>
//             <Image source={require('./images/eugene.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex9 ===9 ? 'green': 'transparent'}]}>Eugene - $25</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Skewers', price: 15 },10)}>
//             <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex10 ===10 ? 'green': 'transparent'}]}>Skewers-$15</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.row} onPress={() => handleSelectItem({ name: 'Macey', price: 50 },11)}>
//             <Image source={require('./images/deryn-macey.png')} style={styles.image} />
//               <View >
//                 <Text style={[styles.buttonText, {backgroundColor: itemIndex11 ===11 ? 'green': 'transparent'}]}>Macey - $50</Text>
//               </View>
//             </TouchableOpacity>
            
//           </View>
          
//           <Button  style={styles.printbutton} title="Show Selected Items" onPress={handleShowSelectedItems} />
            
//       </View>
//       ) : (
//         <View style={styles.printable}  >
          
//             {/* <Button title="Add Item" onPress={handleAddItem} /> */}
//             <Text style={{ color: 'white' }}>List of items</Text>
//             {selectedItem.map((item, index) => (
//               <View style={styles.lists} key={index}>
//                 <Text style={{ color: 'white', fontSize: 16 }}>{item.name}</Text>
//                 <Text style={{color: 'white', fontSize: 16}}>${item.price}</Text>
//                 <TouchableOpacity onPress={() => handleRemoveItem(item)} style={[styles.removecontainer, { marginTop: 20 }]}  >
//                   <Text style={styles.remove}>Removes</Text>
//                 </TouchableOpacity>
                
//               </View>
//             ))}
          
//           <Price showPrice={showPrice} totalPrice={totalPrice} />
//           <View  style={styles.footer}>
//             <Button style={{ color: 'white', borderRadius:20 }} title='Back' onPress={handleBackToSelectedItems} />
//             <Button style={{ color: 'white' }} title='Print' onPress={handlePrintSelectedItems} />
//           </View>
//         </View>
//       )}

//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: 30,
//     // gap: 10,
//     // backgroundColor: '#fff',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     marginTop: 40,backgroundColor: '#eee'
//     // marginBottom: 30,
//   },
//   containerTrue: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     marginTop: 30,
//   },
//   text: {
//     fontSize: 30,
//   },
//   foods: {
//     flex: .25,
//     flexDirection: 'row',
//     gap: 10,backgroundColor: '#454545',
//   },
//   image: {
//     width: 120,
//     height: 100,
//   },
//   button:{
//     width: 10,
//     height: 40,
//     fontSize: 5,
//   },
//   buttonText:{
//     width: 120,
//     height: 30,
//     fontSize: 18,
//     textAlign: 'center',
//     // justifyContent: 'center',
//   },
//   row: {
//     gap: 7,
//     flexDirection: 'column',
//   },
//  remove: {   
//     width: 90,height: 30,
//     fontSize: 16,backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'space-between',  gap: 33,borderRadius: 16,
//  },    
// removecontainer:  {
//  gap: 28, 
//  } ,
//   lists: {
//     flex: .07,
//     flexWrap: 'nowrap',
//     flexDirection: 'row',
//     gap:  12,
//     // paddingTop: 10,
//   },
//   footer: {
//     flex: 1,
//     gap: 280,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'flex-end',
//     left: 0,
//     marginBottom: 5,
//   },
//   printbutton: {
//     fontSize: 16,
//     marginLeft: 5,
//     borderRadius: 10,
//     gap:60,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//   },
//   printable: {
//     flex: 1.5,
//     marginTop: 40,
//     alignItems: 'center',
//     backgroundColor: '#454545',
//     fontWeight: 600,
    
//   },
// });
