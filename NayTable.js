(<View style={styles.printable}  >
          
    {/* <Button title="Add Item" onPress={handleAddItem} /> */}
    <Text style={{ color: 'white' }}>List of items</Text>
    <View  style={styles.containerP} >
          <Table borderStyle={styles.tableBorderP}>
              <Row data={tableHead} style={styles.headP} textStyle={styles.headTextP} />
          </Table>
    </View>
    {selectedItem.map((item, index) => (
      <View>
        <View style={styles.lists} key={index}>
          <Text style={{ color: 'white', fontSize: 16 }}>{item.name}</Text>
            <Text style={{color: 'white', fontSize: 16}}>{item.quantity}</Text>
            <Text style={{color: 'white', fontSize: 16}}>{item.price}</Text>
            <Text style={{color: 'white', fontSize: 16}}>{item.price * item.quantity}</Text>
          
          </View>
          <View>
            <TouchableOpacity onPress={() => handleRemoveItem(item)} style={[styles.removecontainer, { marginTop: 20 }]}  >
              <Text style={styles.remove}>Removes</Text>
            </TouchableOpacity>
          </View>
          

        </View>
    ))}
  
  <Price showPrice={showPrice} totalPrice={totalPrice} />
  <View  style={styles.footer}>
    <Button style={{ color: 'white', borderRadius:20 }} title='Back' onPress={handleBackToSelectedItems} />
    <Button style={{ color: 'white' }} title='Print' onPress={handlePrintSelectedItems} />
  </View>
</View>
)