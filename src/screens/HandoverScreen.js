import React, {useState} from 'react';
import {
  View,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {StatusBar} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';

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
    <View style={styles.textContainer}>
      <Text style={[styles.title, {color: textColor}]}>
        {item.customerName}
      </Text>
      <Text style={[styles.subTitle, {color: textColor}]}>
        {item.category} {item.type} : {item.quantity}
      </Text>
    </View>
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.plusContainer}
        onPress={() => {
          onAcceptRequest();
        }}>
        <Ionicon name={'checkmark-circle-outline'} size={35} color={'green'} />
      </Pressable>
      <Pressable
        style={styles.plusContainer}
        onPress={() => {
          onAcceptRequest();
        }}>
        <Ionicon name={'close-circle-outline'} size={35} color={'#FF3333'} />
      </Pressable>
    </View>
  </TouchableOpacity>
);
const onAcceptRequest = async () => {};

export function HandoverScreen() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6495ED' : 'white';
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

  const onPressHandover = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      <TouchableOpacity
        onPress={() => onPressHandover()}
        style={styles.handoverBtn}>
        <Text style={styles.handoverText}>HandOver </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
  },
  handoverBtn: {
    width: '60%',
    backgroundColor: '#6495ED',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 70,
  },
  handoverText: {
    color: 'white',
  },
  textContainer: {
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});
