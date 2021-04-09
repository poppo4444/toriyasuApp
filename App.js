import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarCenter}>注文画面</Text>
          <StatusBar style="light" />
        </View>
      </View>
      <View style={styles.menu}>
        <View style={styles.items}>
          <Image style={styles.itemImage} source={require('./reactlogo.png')}></Image>
          <View style={styles.itemRight}>
            <Text style={styles.itemText}>もも肉</Text>
            <Text style={styles.itemText}>100円</Text>
            <Text style={styles.itemText}>個数</Text>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
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
    backgroundColor: 'red',
  },
  itemText: {
    flex: 1,
    fontSize: 22,
    alignItems: 'center',
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
