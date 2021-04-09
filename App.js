import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarCenter}>注文画面</Text>
          <StatusBar style="light" />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.header}>もも肉</Text>
        <StatusBar style="light" />
      </View>
      <View style={styles.header}>
        <Text style={styles.header}>もも肉</Text>
        <StatusBar style="light" />
      </View>
      <View style={styles.header}>
        <Text style={styles.header}>せせり</Text>
        <StatusBar style="light" />
      </View>
      <View style={styles.header}>
        <Text style={styles.header}>ねぎま</Text>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  appBar: {
    width : '100%',
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#222',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  header: {
    flex: 1,
    fontSize: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
