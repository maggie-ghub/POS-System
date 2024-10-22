import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Dimensions, TextInput, ScrollView  } from 'react-native';

import { HomeContext } from './HomeContext';
import { Ionicons } from '@expo/vector-icons';



const Home = () => {
  const {selectedItem,setSelectedItem, totalPrice, setTotalPrice, setShowPrice , 
      number, setNumber,number2, setNumber2, number3, setNumber3, number4, setNumber4, number5, setNumber5, number6, setNumber6, number7, setNumber7, number8, setNumber8, number9, setNumber9, number10, setNumber10, number11, setNumber11, number12, setNumber12
      } = useContext(HomeContext);  

    const [searchText, setSearchText] = useState('');
    const windowWidth =  Dimensions.get('window').width;
    const itemWidth = (windowWidth/3) - 5;

  const handleInputChange = (text) => {
    setNumber(text);
  };
  const handleInputChange2 = (text) => {
    setNumber2(text);
  }; 
  const handleInputChange3= (text) => {
    setNumber3(text);
  }; 
  const handleInputChange4 = (text) => {
    setNumber4(text);
  };
  const handleInputChange5 = (text) => {
    setNumber5(text);
  };
  const handleInputChange6 = (text) => {
    setNumber6(text);
  };
  const handleInputChange7 = (text) => {
    setNumber7(text);
  };
  const handleInputChange8 = (text) => {
    setNumber8(text);
  };
  const handleInputChange9 = (text) => {
    setNumber9(text);
  };
  const handleInputChange10 = (text) => {
    setNumber10(text);
  };  
  const handleInputChange11 = (text) => {
    setNumber11(text);
  }; 
  const handleInputChange12 = (text) => {
    setNumber12(text);
  }; 

  const handleSelectItem = (item) =>{
    if(item.quantity > 0 ){
      const overwrite= selectedItem.find((item1)=> item1.name === item.name)
      if(overwrite)
      {
        setTotalPrice(totalPrice + item.price * item.quantity -  overwrite.quantity* overwrite.price )
        overwrite.quantity= item.quantity;
        setSelectedItem([...selectedItem])
      }
      else{
      setSelectedItem([...selectedItem, item])     
      setTotalPrice(totalPrice + item.price * item.quantity)
      setShowPrice(true)
    }
    }else{
       alert("Quantity must be greater than zero");
    }    
  }
    
   const handleSearch = (text) => {
    setSearchText(text);
    const result = selectedItem.filter((item)=> item.name.toLowerCase().includes(text.toLowerCase()))
   }
   
   
  return (
    <ScrollView>
    <View style={styles.container}>
      
        <View style={styles.containerTrue}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Your Food"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
          <Text style={styles.text}>Popular Foods</Text>
          
           <View style={styles.foods}>
          
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:0 ,name: 'CaseyLee',price: 30, quantity: number})}>
              <View >
                <Text style={styles.buttonText }>Casey - $30 </Text>
              </View>
              <Image source={require('./images/casey-lee.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number} onChange={(event)=>handleInputChange(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
          
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:1,name: 'Grill', price: 20, quantity: number2})}>
              <View >
                <Text style={styles.buttonText }>Grill - $20</Text>
              </View>
              <Image source={require('./images/fresh-grill.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number2} onChange={(event)=>handleInputChange2(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
          
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:2,name: 'Kosar', price: 30, quantity: number3})}>
              <View >
                <Text style={styles.buttonText }>Kosar - $30</Text>
              </View>
              <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number3} onChange={(event)=>handleInputChange3(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.foods}>
            
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:3,name: 'Eugene', price: 25, quantity: number4})}>
              <View >
                <Text style={styles.buttonText }>Eugene - $25</Text>
              </View>
              <Image source={require('./images/eugene.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number4} onChange={(event)=>handleInputChange4(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:4, name: 'Skewers', price: 15, quantity: number5})}>       
              <View >
                <Text style={styles.buttonText }>Skewers-$15</Text>
              </View>
              <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number5} onChange={(event)=>handleInputChange5(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:5, name: 'Macey', price: 50, quantity: number6})}>
              <View >
                <Text style={styles.buttonText }>Macey - $50</Text>
              </View>
              <Image source={require('./images/deryn-macey.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number6} onChange={(event)=>handleInputChange6(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
            
          </View>
          <View style={styles.foods}>
            
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:6,name: 'CaseyLee', price: 30, quantity: number7})}>
              <View >
                <Text style={styles.buttonText }>Casey - $30</Text>
              </View>
              <Image source={require('./images/casey-lee.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number7} onChange={(event)=>handleInputChange7(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
              
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:7, name: 'Grill', price: 20, quantity: number8})}>
              <View >
                <Text style={styles.buttonText }>Grill - $20</Text>
              </View>
              <Image source={require('./images/fresh-grill.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number8} onChange={(event)=>handleInputChange8(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
              
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:8, name: 'Kosar', price: 30, quantity: number9})}>
              <View >
                <Text style={styles.buttonText }>Kosar - $30</Text>
              </View>
              <Image source={require('./images/jenn-kosar.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number9} onChange={(event)=>handleInputChange9(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
            
          </View>
          <View style={styles.foods}>
            
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({id:9, name: 'Eugene', price: 25 , quantity: number10})}>
              <View >
                <Text style={styles.buttonText}>Eugene - $25</Text>
              </View>
              <Image source={require('./images/eugene.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18 } ]} value={number10} placeholder='enter a quantity' onChange={(event)=>handleInputChange10(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
              
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:10,name: 'Skewers', price: 15 , quantity: number11})}>
              <View >
                <Text style={styles.buttonText }>Skewers-$15</Text>
              </View>
              <Image source={require('./images/chicken-skewers.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number11} onChange={(event)=>handleInputChange11(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
              
            <TouchableOpacity style={[styles.row, {width: itemWidth}]} onPress={() => handleSelectItem({ id:11, name: 'Macey', price: 50 , quantity: number12})}>
              <View >
                <Text style={styles.buttonText}>Macey - $50</Text>
              </View>
              <Image source={require('./images/deryn-macey.png')} style={styles.image} />
              <TextInput style={[styles.ForInput, {width: itemWidth-18,} ]} placeholder='enter a quantity' value={number12} onChange={(event)=>handleInputChange12(event.nativeEvent.text)} keyboardType='number-pad' />
            </TouchableOpacity>
          </View> 
   
      </View>
    </View>
</ScrollView>
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
    backgroundColor: '#eee'
    // marginBottom: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: .8,
    height: 40,
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
     

ForInput : {
  height: 30, 
  //#999
  backgroundColor: '#A9A9A9', 
  borderColor: 'white', 
  borderWidth: 0, 
  color:'#595959', 
  fontSize:20, 
  marginHorizontal:5, 
  fontSize: 14
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
 
  }

);
export default Home