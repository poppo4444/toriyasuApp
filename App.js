import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [sum, setSum] = useState(0)
  const data = {
    1: ['ねぎま', '120', require('./negima.jpeg')],
    2: ['もも肉', '110', require('./momo.jpeg')],
    3: ['豚バラ', '150', require('./butabara.jpeg')],
  }
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      { Object.keys(data).map((key, value) => <Menu index={key} item={data[key][0]} price={data[key][1]} image={data[key][2]} setSum={setSum} sum={sum}/>) }
      <Sum sum={ sum } />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

function AppBar(){
  return(
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarCenter}>注文画面</Text>
        <StatusBar style="light" />
      </View>
    </View>
  )
}

function Menu(props){
  const {
    index,
    item,
    price,
    image,
    sum,
    setSum,
  } = props

  return(
    <View style={styles.menu}>
      <View style={styles.items}>
        <Image style={styles.itemImage} source={image}></Image>
        <Item index={index} item={item} price={price} setSum={setSum} sum={sum} />
      </View>
    </View>
  )
}

function Item(props){
  const [count, setCount] = useState(0)

  const {
    index,
    item,
    price,
    setSum,
    sum,
  } = props

  const setAddCount = () => {
    setCount(count + 1)
    setSum(sum + +price)
  }

  const setRemoveCount = () => {
    setCount(count - 1)
    setSum(sum - +price)
  }

  return(
    <View style={ styles.itemRight }>
      <Text style={ styles.itemText }>{ item }</Text>
      <Text style={ styles.itemText }>{ price }円</Text>
      <Text style={ styles.itemText }>個数: { count }個</Text>
      <Text style={ styles.itemText }>金額: { count * price }円</Text>
      <View style={ styles.button }>
        <TouchableOpacity onPress={ setAddCount } >
          <AntDesign style={styles.plusbutton} name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={ setRemoveCount } >
          <AntDesign name="minuscircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Sum(props){
  const { sum } = props
  return (
    <View>
      <Text>{ sum }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 100,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appBarInner:{
    alignItems: 'center',
  },
  appBarCenter: {
    alignItems: 'center',
    fontSize: 32,
    marginBottom: 8,
    lineHeight: 32,
    color: '#ffffff'
  },
  container: {
    backgroundColor: '#fff',
  },
  menu:{
    height: 200,
    width: '100%',
  },
  items:{
    width: '100%',
    height: 150,
    flexDirection: 'row',
  },
  itemImage: {
    flex: 1,
    height: 150,
    width: 150,
    justifyContent: 'flex-start',
  },
  itemRight: {
    flex: 2,
  },
  itemText: {
    flex: 1,
    fontSize: 22,
    alignItems: 'center',
  },
  button:{
    flex: 1,
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#222',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
