// Before I add the Bottom Navigation and divide them into Multiple components



// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Dimensions, TextInput, ScrollView  } from 'react-native';
// import Price from './components/Price'
// import { Row, Rows, Table } from 'react-native-table-component';


// export default function App() {
//   const tableHead =  ['Name:', 'Quantity', 'Price', 'Total($)', 'Delete'];
//   const windowWidth =  Dimensions.get('window').width;
//   const itemWidth = (windowWidth/3) - 5;
//   const [number, setNumber] = useState('');
//   const [number2, setNumber2] = useState('');
//   const [number3, setNumber3] = useState('');
//   const [number4, setNumber4] = useState('');
//   const [number5, setNumber5] = useState('');
//   const [number6, setNumber6] = useState('');
//   const [number7, setNumber7] = useState('');
//   const [number8, setNumber8] = useState(''); 
//   const [number9, setNumber9] = useState('');  
//   const [number10, setNumber10] = useState('');           
//   const [number11, setNumber11] = useState('');           
//   const [number12, setNumber12] = useState('');            
           
//   const [selectedItem, setSelectedItem] = useState([])
//   const [totalPrice, setTotalPrice] = useState(0)
//   const [showComponent, setShowComponent] = useState(true)
//   const [showPrice, setShowPrice] = useState(false)
//   // const [buttonBackground, setButtonBackground] = useState('blue')
//   const [isBlurred, setIsBlurred] = useState(false);
  
//   const handlePress = () => {
//     setIsBlurred(!isBlurred);
//   };
//    //Handle Input Change for all images 
//   const handleInputChange = (text) => {
//     setNumber(text);
//   };
//   const handleInputChange2 = (text) => {
//     setNumber2(text);
//   }; 
//   const handleInputChange3= (text) => {
//     setNumber3(text);
//   }; 
//   const handleInputChange4 = (text) => {
//     setNumber4(text);
//   };
//   const handleInputChange5 = (text) => {
//     setNumber5(text);
//   };
//   const handleInputChange6 = (text) => {
//     setNumber6(text);
//   };
//   const handleInputChange7 = (text) => {
//     setNumber7(text);
//   };
//   const handleInputChange8 = (text) => {
//     setNumber8(text);
//   };
//   const handleInputChange9 = (text) => {
//     setNumber9(text);
//   };
//   const handleInputChange10 = (text) => {
//     setNumber10(text);
//   };  
//   const handleInputChange11 = (text) => {
//     setNumber11(text);
//   }; 
//   const handleInputChange12 = (text) => {
//     setNumber12(text);
//   }; 
    
//   const handleSelectItem = (item) =>{
//     if(item.quantity >0 ){
//    setSelectedItem([...selectedItem, item])     
   
    
//     setTotalPrice(totalPrice + item.price * item.quantity)
//     setShowPrice(true)
//     }else{
//        alert("Quantity must be greater than zero");
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
// const handleResetItems = () => {
//   setSelectedItem([])
//   setTotalPrice(0)
  
// }
//  const handleRemoveItem = (item) =>{
//   setSelectedItem(selectedItem.filter((i)=>  i !== item))
//   setTotalPrice(totalPrice- item.price * item.quantity)
//    } 
   
//    const [value, setValue] = React.useState(0);
   
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       {showComponent ? (
//         <View style={styles.containerTrue}>
//           <Text style={styles.text}>Select Food Items :</Text>
          
//           <View style={styles.foods}>
          
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:0 ,name: 'CaseyLee',price: 30, quantity: number})}>
//               <View >
//                 <Text style={styles.buttonText }>Casey - $30 </Text>
//               </View>
//               <Image source={require('./images/casey-lee.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number} onChange={(event)=>handleInputChange(event.nativeEvent.text)} keyboardType='number-pad' />
              
//               {/* <NumberInput value={value} onChange={setValue} minValue= {1} maxValue={10} /> */}
//             </TouchableOpacity>
          
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:1,name: 'Grill', price: 20, quantity: number2})}>
//               <View >
//                 <Text style={styles.buttonText }>Grill - $20</Text>
//               </View>
//               <Image source={require('./images/fresh-grill.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number2} onChange={(event)=>handleInputChange2(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
          
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:2,name: 'Kosar', price: 30, quantity: number3})}>
//               <View >
//                 <Text style={styles.buttonText }>Kosar - $30</Text>
//               </View>
//               <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number3} onChange={(event)=>handleInputChange3(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
            
//           </View>
          
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:3,name: 'Eugene', price: 25, quantity: number4})}>
            
//               <View >
//                 <Text style={styles.buttonText }>Eugene - $25</Text>
//               </View>
//               <Image source={require('./images/eugene.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number4} onChange={(event)=>handleInputChange4(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:4, name: 'Skewers', price: 15, quantity: number5})}>       
//               <View >
//                 <Text style={styles.buttonText }>Skewers-$15</Text>
//               </View>
//               <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number5} onChange={(event)=>handleInputChange5(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:5, name: 'Macey', price: 50, quantity: number6})}>
//               <View >
//                 <Text style={styles.buttonText }>Macey - $50</Text>
//               </View>
//               <Image source={require('./images/deryn-macey.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number6} onChange={(event)=>handleInputChange6(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
            
//           </View>
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:6,name: 'CaseyLee', price: 30, quantity: number7})}>
              
//               <View >
//                 <Text style={styles.buttonText }>Casey - $30</Text>
//               </View>
//               <Image source={require('./images/casey-lee.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number7} onChange={(event)=>handleInputChange7(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:7, name: 'Grill', price: 20, quantity: number8})}>
            
//               <View >
//                 <Text style={styles.buttonText }>Grill - $20</Text>
//               </View>
//               <Image source={require('./images/fresh-grill.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number8} onChange={(event)=>handleInputChange8(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:8, name: 'Kosar', price: 30, quantity: number9})}>
            
//               <View >
//                 <Text style={styles.buttonText }>Kosar - $30</Text>
//               </View>
//               <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number9} onChange={(event)=>handleInputChange9(nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
            
//           </View>
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:9, name: 'Eugene', price: 25 , quantity: number10})}>
            
//               <View >
//                 <Text style={styles.buttonText}>Eugene - $25</Text>
//               </View>
//               <Image source={require('./images/eugene.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-20,} ]} value={number10} placeholder='quantity' onChange={(event)=>handleInputChange10(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:10,name: 'Skewers', price: 15 , quantity: number11})}>
            
//               <View >
//                 <Text style={styles.buttonText }>Skewers-$15</Text>
//               </View>
//               <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]}  value={number11} onChange={(event)=>handleInputChange11(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:11, name: 'Macey', price: 50 , quantity: number12})}>
            
//               <View >
//                 <Text style={styles.buttonText}>Macey - $50</Text>
//               </View>
//               <Image source={require('./images/deryn-macey.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number12} onChange={(event)=>handleInputChange12(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
            
//           </View>
          
//           <Button  style={styles.printbutton} title="Show Selected Items" onPress={handleShowSelectedItems} />
            
//       </View>
    
//       ) : (
//             <View  style={styles.containerP} >      
//             {/* <Button title="Add Item" onPress={handleAddItem} /> */}
//                 <Text style={{ color: 'white' }}>List of items</Text>
//                   <Table borderStyle={styles.tableBorderP}>
//                       <Row data={tableHead} style={styles.headP} textStyle={styles.headTextP} />
//                       <Rows
//                           data={selectedItem.map((item, index) => [
//                             item.name,
//                             item.quantity.toString(),
//                             '$' + (item.price).toString(),  
//                             '$' + (item.price * item.quantity).toString(),
//                             <TouchableOpacity onPress={() => handleRemoveItem(item)} style={[styles.removecontainer, { marginTop: 20 }]}  >
//                               <Text style={styles.remove}>Remove</Text>
//                             </TouchableOpacity>,
//                           ])} textStyle={styles.rowTextP} />
//                   </Table>

            
//           <Price showPrice={showPrice} totalPrice={totalPrice} />
//           <View  style={styles.footer}>
//             <Button style={{ color: 'white', borderRadius:20 }} title='Back' onPress={handleBackToSelectedItems} />
//             <Button style={{ color: 'white' }} title='Print' onPress={handlePrintSelectedItems} />
//             <Button style={{ color: 'white' }} title='Reset' onPress={handleResetItems} />              
//           </View>
//         </View>
//       )}

//     </View>
// </ScrollView>
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
//     marginTop: 10,
//   },
//   text: {
//     fontSize: 30,
//   },
//   foods: {
//     flex: .25,
//     flexDirection: 'row',
//     gap: 5,backgroundColor: '#454545', 
//     marginLeft: 5,
//     marginRight: 5,
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     marginVertical: 10,
    
//   },
//   image: {
//     width: 120,
//     height: 80,
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
//     backgroundColor: 'blue',       
//     borderRadius: 10,       
//   },
//   row: {
//     gap: 7,
//     flexDirection: 'column',
//   },
//  remove: {   
    
//     fontSize: 15,backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',marginTop: -17,borderRadius: 10,textAlign: 'center',
//  },    
// removecontainer:  {
//  gap: 28, 
//  } ,
// ForInput : {
//   height: 30, 
  
//   backgroundColor: 'green', 
//   borderColor: 'white', 
//   borderWidth: 0, 
//   color:'#595959', 
//   fontSize:20, 
//   marginHorizontal:5,
// },
//   lists :{
//     flex: .07,
//     flexWrap: 'nowrap',
//     flexDirection: 'row',
//     gap:  62,
//     // paddingTop: 10,
//   },
//   itemHeader: {
//     flex: .07,
    
//     flexDirection: 'row',
//     gap:  42,
//     // paddingTop: 10,
//   },   
    
    
//   footer: {
//     flex: 1,
//     gap: 100,
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


  
//     containerP: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//     tableBorderP: { borderWidth: 1, borderColor: '#000' },
//     headP: { height: 40, backgroundColor: '#f1f8ff' },
//     headTextP: { margin: 6, fontWeight: 'bold' },
//     rowTextP: { margin: 6 },
//   }

// );



                    //copy Home.js



// import { StatusBar } from 'expo-status-bar';
// import React, {createContext, useState} from 'react';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Dimensions, TextInput, ScrollView  } from 'react-native';
// import Price from './components/Price'
// import { Row, Rows, Table } from 'react-native-table-component';

// export const Home = createContext(null);

// const HomeProvider = () => {
//   const tableHead =  ['Name:', 'Quantity', 'Price', 'Total($)', 'Delete'];
//   const windowWidth =  Dimensions.get('window').width;
//   const itemWidth = (windowWidth/3) - 5;
//   const [number, setNumber] = useState('');
//   const [number2, setNumber2] = useState('');
//   const [number3, setNumber3] = useState('');
//   const [number4, setNumber4] = useState('');
//   const [number5, setNumber5] = useState('');
//   const [number6, setNumber6] = useState('');
//   const [number7, setNumber7] = useState('');
//   const [number8, setNumber8] = useState(''); 
//   const [number9, setNumber9] = useState('');  
//   const [number10, setNumber10] = useState('');           
//   const [number11, setNumber11] = useState('');           
//   const [number12, setNumber12] = useState('');            
           
//   const [selectedItem, setSelectedItem] = useState([])
//   const [totalPrice, setTotalPrice] = useState(0)
//   const [showComponent, setShowComponent] = useState(true)
//   const [showPrice, setShowPrice] = useState(false)
  
  
  
//    //Handle Input Change for all images 
//   const handleInputChange = (text) => {
//     setNumber(text);
//   };
//   const handleInputChange2 = (text) => {
//     setNumber2(text);
//   }; 
//   const handleInputChange3= (text) => {
//     setNumber3(text);
//   }; 
//   const handleInputChange4 = (text) => {
//     setNumber4(text);
//   };
//   const handleInputChange5 = (text) => {
//     setNumber5(text);
//   };
//   const handleInputChange6 = (text) => {
//     setNumber6(text);
//   };
//   const handleInputChange7 = (text) => {
//     setNumber7(text);
//   };
//   const handleInputChange8 = (text) => {
//     setNumber8(text);
//   };
//   const handleInputChange9 = (text) => {
//     setNumber9(text);
//   };
//   const handleInputChange10 = (text) => {
//     setNumber10(text);
//   };  
//   const handleInputChange11 = (text) => {
//     setNumber11(text);
//   }; 
//   const handleInputChange12 = (text) => {
//     setNumber12(text);
//   }; 
    
//   const handleSelectItem = (item) =>{
//     if(item.quantity > 0 ){
//       setSelectedItem([...selectedItem, item])     
//       setTotalPrice(totalPrice + item.price * item.quantity)
//       setShowPrice(true)
//     }else{
//        alert("Quantity must be greater than zero");
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
//     setNumber('0'), setNumber2('0'),setNumber3('0'), setNumber4('0'),setNumber5('0'), setNumber6('0'),setNumber7('0'), setNumber8('0'),setNumber9('0'), setNumber10('0'),setNumber11('0'), setNumber12('0')
// }  
// const handleResetItems = () => {
//   setSelectedItem([])
//   setTotalPrice(0)
//   setNumber('0'), setNumber2('0'),setNumber3('0'), setNumber4('0'),setNumber5('0'), setNumber6('0'),setNumber7('0'), setNumber8('0'),setNumber9('0'), setNumber10('0'),setNumber11('0'), setNumber12('0')
// }
//  const handleRemoveItem = (item) =>{
//   setSelectedItem(selectedItem.filter((i)=>  i !== item))
//   setTotalPrice(totalPrice- item.price * item.quantity)
//    } 
   
   
   
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       {showComponent ? (
//         <View style={styles.containerTrue}>
//           <Text style={styles.text}>Select Food Items :</Text>
          
//           <View style={styles.foods}>
          
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:0 ,name: 'CaseyLee',price: 30, quantity: number})}>
//               <View >
//                 <Text style={styles.buttonText }>Casey - $30 </Text>
//               </View>
//               <Image source={require('./images/casey-lee.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number} onChange={(event)=>handleInputChange(event.nativeEvent.text)} keyboardType='number-pad' />
              
//               {/* <NumberInput value={value} onChange={setValue} minValue= {1} maxValue={10} /> */}
//             </TouchableOpacity>
          
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:1,name: 'Grill', price: 20, quantity: number2})}>
//               <View >
//                 <Text style={styles.buttonText }>Grill - $20</Text>
//               </View>
//               <Image source={require('./images/fresh-grill.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number2} onChange={(event)=>handleInputChange2(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
          
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:2,name: 'Kosar', price: 30, quantity: number3})}>
//               <View >
//                 <Text style={styles.buttonText }>Kosar - $30</Text>
//               </View>
//               <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number3} onChange={(event)=>handleInputChange3(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
            
//           </View>
          
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:3,name: 'Eugene', price: 25, quantity: number4})}>
            
//               <View >
//                 <Text style={styles.buttonText }>Eugene - $25</Text>
//               </View>
//               <Image source={require('./images/eugene.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number4} onChange={(event)=>handleInputChange4(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:4, name: 'Skewers', price: 15, quantity: number5})}>       
//               <View >
//                 <Text style={styles.buttonText }>Skewers-$15</Text>
//               </View>
//               <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number5} onChange={(event)=>handleInputChange5(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:5, name: 'Macey', price: 50, quantity: number6})}>
//               <View >
//                 <Text style={styles.buttonText }>Macey - $50</Text>
//               </View>
//               <Image source={require('./images/deryn-macey.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number6} onChange={(event)=>handleInputChange6(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
            
//           </View>
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:6,name: 'CaseyLee', price: 30, quantity: number7})}>
              
//               <View >
//                 <Text style={styles.buttonText }>Casey - $30</Text>
//               </View>
//               <Image source={require('./images/casey-lee.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number7} onChange={(event)=>handleInputChange7(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:7, name: 'Grill', price: 20, quantity: number8})}>
            
//               <View >
//                 <Text style={styles.buttonText }>Grill - $20</Text>
//               </View>
//               <Image source={require('./images/fresh-grill.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number8} onChange={(event)=>handleInputChange8(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:8, name: 'Kosar', price: 30, quantity: number9})}>
            
//               <View >
//                 <Text style={styles.buttonText }>Kosar - $30</Text>
//               </View>
//               <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number9} onChange={(event)=>handleInputChange9(nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
            
//           </View>
//           <View style={styles.foods}>
            
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:9, name: 'Eugene', price: 25 , quantity: number10})}>
            
//               <View >
//                 <Text style={styles.buttonText}>Eugene - $25</Text>
//               </View>
//               <Image source={require('./images/eugene.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-20,} ]} value={number10} placeholder='quantity' onChange={(event)=>handleInputChange10(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:10,name: 'Skewers', price: 15 , quantity: number11})}>
            
//               <View >
//                 <Text style={styles.buttonText }>Skewers-$15</Text>
//               </View>
//               <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]}  value={number11} onChange={(event)=>handleInputChange11(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:11, name: 'Macey', price: 50 , quantity: number12})}>
            
//               <View >
//                 <Text style={styles.buttonText}>Macey - $50</Text>
//               </View>
//               <Image source={require('./images/deryn-macey.png')} style={styles.image} />
//               <TextInput style={[styles.ForInput, {width: itemWidth-80,} ]} value={number12} onChange={(event)=>handleInputChange12(event.nativeEvent.text)} keyboardType='number-pad' />
//             </TouchableOpacity>
            
//           </View>
          
//           <Button  style={styles.printbutton} title="Show Selected Items" onPress={handleShowSelectedItems} />
            
//       </View>
    
//       ) : (
//             <View  style={styles.containerP} >      
//             {/* <Button title="Add Item" onPress={handleAddItem} /> */}
//                 <Text style={{ color: 'white' }}>List of items</Text>
//                   <Table borderStyle={styles.tableBorderP}>
//                       <Row data={tableHead} style={styles.headP} textStyle={styles.headTextPP} />
//                       <Rows
//                           data={selectedItem.map((item, index) => [
//                             item.name,
//                             item.quantity.toString(),
//                             '$' + (item.price).toString(),  
//                             '$' + (item.price * item.quantity).toString(),
//                             <TouchableOpacity onPress={() => handleRemoveItem(item)} style={[styles.removecontainer, { marginTop: 20 }]}  >
//                               <Text style={styles.remove}>Remove</Text>
//                             </TouchableOpacity>,
//                           ])} textStyle={styles.rowTextP} />
//                   </Table>
            
//           <Price showPrice={showPrice} totalPrice={totalPrice} />
//           <View  style={styles.footer}>
//             <Button style={{ color: 'white', borderRadius:20 }} title='Back' onPress={handleBackToSelectedItems} />
//             <Button style={{ color: 'white' }} title='Print' onPress={handlePrintSelectedItems} />
//             <Button style={{ color: 'white' }} title='Reset' onPress={handleResetItems} />              
//           </View>
//         </View>
//       )}

//     </View>
// </ScrollView>
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
//     marginTop: 10,
//   },
//   text: {
//     fontSize: 30,
//   },
//   foods: {
//     flex: .25,
//     flexDirection: 'row',
//     gap: 5,backgroundColor: '#454545', 
//     marginLeft: 5,
//     marginRight: 5,
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     marginVertical: 10,
    
//   },
//   image: {
//     width: 120,
//     height: 80,
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
//     backgroundColor: 'blue',       
//     borderRadius: 10,       
//   },
//   row: {
//     gap: 7,
//     flexDirection: 'column',
//   },
//  remove: {   
    
//     fontSize: 15,backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',marginTop: -17,borderRadius: 10,textAlign: 'center',
//  },    
// removecontainer:  {
//  gap: 28, 
//  } ,
// ForInput : {
//   height: 30, 
  
//   backgroundColor: 'green', 
//   borderColor: 'white', 
//   borderWidth: 0, 
//   color:'#595959', 
//   fontSize:20, 
//   marginHorizontal:5,
// },
//   lists :{
//     flex: .07,
//     flexWrap: 'nowrap',
//     flexDirection: 'row',
//     gap:  62,
//     // paddingTop: 10,
//   },
//   itemHeader: {
//     flex: .07,
    
//     flexDirection: 'row',
//     gap:  42,
//     // paddingTop: 10,
//   },   
    
    
//   footer: {
//     flex: 1,
//     gap: 100,
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


  
//     containerP: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//     tableBorderP: { borderWidth: 1, borderColor: '#000' },
//     headP: { height: 40, backgroundColor: '#f1f8ff' },
//     headTextPP: { margin: 6, fontWeight: 'bold' },
//     rowTextP: { margin: 6 },
//   }

// );
// export default HomeProvider