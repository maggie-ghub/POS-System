import React from 'react'
import {View, Text} from 'react-native'

export default function Price ({showPrice, totalPrice}) {
  return (
    <View>
        {showPrice &&(
            <View>
                <Text style={{ color: 'red', fontSize: 20, backgroundColor: '#333', borderRadius: 2, }}> Total Price: ${totalPrice}</Text>
                
            </View>
        )}
    </View>
  )
}
