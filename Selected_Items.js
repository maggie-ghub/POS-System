import React, { useContext, useEffect, useState } from 'react'
import { View, Text , StyleSheet, Button, TouchableOpacity} from 'react-native'
import { HomeContext } from './HomeContext';
import Price from './components/Price'
import { Row, Rows, Table } from 'react-native-table-component';  
// import firebase from 'expo-firebase-app'    
// //import 'firebase/firestore'    
    
// const db =  firebase.firestore()    
// const usersRef = db.collection('users')


const Selected_Items = () => {
  const tableHead =  ['Name:', 'Quantity', 'Price', 'Total($)', 'Delete'];
  // const addUser = async ()=>{
  //   try{
  //     await usersRef.add({
  //       name: 'mearg',
  //       email: 'meagmage@gmail.com'
  //     });
  //     console.log('user added successfuly');
  //   }
  //   catch(error){
  //     console.log('error: when adding a user');
  //   }
  // };
  
  const {selectedItem,setSelectedItem, showComponent, setShowComponent, totalPrice, setTotalPrice, showPrice, setShowPrice , 
     setNumber, setNumber2, setNumber3, setNumber4, setNumber5, setNumber6, setNumber7, setNumber8, setNumber9, setNumber10, setNumber11, setNumber12 
    } = useContext(HomeContext);

    const handlePrintSelectedItems = () => {
      setSelectedItem([])
      setTotalPrice(0)
      setShowPrice(false)
      setNumber('0'), setNumber2('0'),setNumber3('0'), setNumber4('0'),setNumber5('0'), setNumber6('0'),setNumber7('0'), setNumber8('0'),setNumber9('0'), setNumber10('0'),setNumber11('0'), setNumber12('0')
  }  
  const handleResetItems = () => {
    setSelectedItem([])
    setTotalPrice(0)
    setNumber('0'), setNumber2('0'),setNumber3('0'), setNumber4('0'),setNumber5('0'), setNumber6('0'),setNumber7('0'), setNumber8('0'),setNumber9('0'), setNumber10('0'),setNumber11('0'), setNumber12('0')
  }
   const handleRemoveItem = (item) =>{
    setSelectedItem(selectedItem.filter((i)=>  i !== item))
    setTotalPrice(totalPrice- item.price * item.quantity)
     } 
    // useEffect(()=>{
    //   addUser();
    // }, [])
    //  const handlePrint = async () => {
    //   try {
    //     await ThermalPrinter.connectPrinter(); // Connect to the thermal printer
  
    //     // Customize your receipt content
    //     const receiptContent = `
    //       COMPANY NAME
    //       Address Line 1
    //       Address Line 2
  
    //       Date: ${new Date().toLocaleDateString()}
    //       Time: ${new Date().toLocaleTimeString()}
  
    //       Items:
    //       - Item 1: $9.99
    //       - Item 2: $14.99
    //       - Item 3: $19.99
  
    //       Subtotal: $44.97
    //       Tax: $4.50
    //       Total: $49.47
  
    //       Thank you for your purchase!
    //     `;
  
    //     await ThermalPrinter.printText(receiptContent); // Print the receipt content
  
    //     await ThermalPrinter.printSeparator(); // Print a separator or line break
  
    //     await ThermalPrinter.printQRCode('https://example.com'); // Print a QR code if needed
  
    //     await ThermalPrinter.disconnectPrinter(); // Disconnect from the thermal printer
    //   } catch (error) {
    //     console.error('Printing error:', error);
    //   }
    // };
   
  return (
    <View  style={styles.containerP} >      
            {/* <Button title="Add Item" onPress={handleAddItem} /> */}
                <Text style={{ color: 'white' }}>List of items</Text>
                  <Table borderStyle={styles.tableBorderP}>
                      <Row data={tableHead} style={styles.headP} textStyle={styles.headTextPP} />
                      <Rows
                          data={selectedItem.map((item, index) => [
                            item.name,
                            item.quantity.toString(),
                            '$' + (item.price).toString(),  
                            '$' + (item.price * item.quantity).toString(),
                            <TouchableOpacity onPress={() => handleRemoveItem(item)} style={[styles.removecontainer, { marginTop: 20 }]}  >
                              <Text style={styles.remove}>Remove</Text>
                            </TouchableOpacity>,
                          ])} textStyle={styles.rowTextP} />
                  </Table>
            
          <Price showPrice={showPrice} totalPrice={totalPrice} />
          <View  style={styles.footer}>
            <Button style={{ color: 'white' }} title='Reset' onPress={handleResetItems} />
            <Button style={{ color: 'white' }} title='Print'  />
                          
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 30,
      // gap: 10,
      // backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
      marginTop: 40,backgroundColor: '#eee'
      // marginBottom: 30,
    },
    containerTrue: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#eee',
      marginTop: 10,
    },
    text: {
      fontSize: 30,
    },
    foods: {
      flex: .25,
      flexDirection: 'row',
      gap: 5,backgroundColor: '#454545', 
      marginLeft: 5,
      marginRight: 5,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginVertical: 10,
      
    },
    image: {
      width: 120,
      height: 80,
    },
    button:{
      width: 10,
      height: 40,
      fontSize: 5,
    },
    buttonText:{
      width: 120,
      height: 30,
      fontSize: 18,
      textAlign: 'center',
      // justifyContent: 'center',
      backgroundColor: 'blue',       
      borderRadius: 10,       
    },
    row: {
      gap: 7,
      flexDirection: 'column',
    },
   remove: {   
      
      fontSize: 15,backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',marginTop: -17,borderRadius: 10,textAlign: 'center',
   },    
  removecontainer:  {
   gap: 28, 
   } ,
  ForInput : {
    height: 30, 
    
    backgroundColor: 'green', 
    borderColor: 'white', 
    borderWidth: 0, 
    color:'#595959', 
    fontSize:20, 
    marginHorizontal:5,
  },
    lists :{
      flex: .07,
      flexWrap: 'nowrap',
      flexDirection: 'row',
      gap:  62,
      // paddingTop: 10,
    },
    itemHeader: {
      flex: .07,
      
      flexDirection: 'row',
      gap:  42,
      // paddingTop: 10,
    },   
      
      
    footer: {
      flex: 1,
      gap: 100,
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
      flex: 1.5,
      marginTop: 40,
      alignItems: 'center',
      backgroundColor: '#454545',
      fontWeight: 600,
      
    },
  
  
    
      containerP: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      tableBorderP: { borderWidth: 1, borderColor: '#000' },
      headP: { height: 40, backgroundColor: '#f1f8ff' },
      headTextPP: { margin: 6, fontWeight: 'bold' },
      rowTextP: { margin: 6 },
    }
  
  );
export default Selected_Items