import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Menu />
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

function Menu(){
  const [count, setCount] = useState(0)

  return(
    <View style={styles.menu}>
      <View style={styles.items}>
        <Image style={styles.itemImage} source={require('./reactlogo.png')}></Image>
        <View style={styles.itemRight}>
          <Text style={styles.itemText}>もも肉</Text>
          <Text style={styles.itemText}>100円</Text>
          <Text style={styles.itemText}>個数</Text>
          <Text style={styles.itemText}>{count}</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={ () => setCount(count + 1) } >
              <AntDesign style={styles.plusbutton} name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={  () => setCount(count - 1) } >
              <AntDesign name="minuscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
