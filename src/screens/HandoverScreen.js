import React, {useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {StatusBar} from 'native-base';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    customerName: 'Alex',
    type: 'empty',
    category: '12kg',
    quantity: '2',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    customerName: 'Second',
    type: 'Filled',
    category: '17kg',
    quantity: '5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    customerName: 'Third',
    type: 'empty',
    category: '21kg',
    quantity: '2',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.customerName}</Text>
    <Text style={[styles.subTitle, {color: textColor}]}>
      {item.category} {item.type} : {item.quantity}
    </Text>
  </TouchableOpacity>
);
export function HandoverScreen() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 14,
  },
});
