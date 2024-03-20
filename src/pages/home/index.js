import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/Header';
import Balance from './components/Balance';
import Movements from './components/Movements';
import Actions from './components/Actions';

const list = [
  {
    id:1,
    label: 'Conta de Luz',
    value: '300,00',
    date: '19/03/2024',
    type: 0
  },
  {
    id:2,
    label: 'PIX - Marcia',
    value: '2.500,00',
    date: '20/03/2024',
    type: 1
  },
  {
    id:3,
    label: 'Cobasi',
    value: '90,00',
    date: '20/03/2024',
    type: 0
  },
  {
    id:4,
    label: 'Salário',
    value: '15.000,00',
    date: '22/03/2024',
    type: 1
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Tayná Lopes"/>
      <Balance saldo="9.250,90" gastos="-100,00"/>
      <Actions/>

      <Text style={styles.title}> Últimas Movimentações</Text>
      <FlatList style={styles.list} 
      data={list} 
      keyExtractor={(item) => String(item.id)} 
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movements data={item}/>}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title:{
    fontSize: 18,
    fontWeight:'bold',
    margin:14,
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }

});
