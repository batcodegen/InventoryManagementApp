import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DropDownFile from '../common/DropDown';
import string from '../helpers/strings.json';
import TableView from '../common/TableView';
import DeliverTable from '../common/DeliverTable';
import CollectTable from '../common/CollecteTable';
import Ionicon from 'react-native-vector-icons/Ionicons';
import NewUser from '../common/NewUser';
import {useGetApi} from '../services/useApi';
import Loader from '../common/Loader';
import BottomSheetComponent from '../common/BottomSheetComponent';

export function CylinderDelivery({navigation}) {
  // bottom sheet vars
  const parentBottomSheetRef = useRef(null);

  const handlePresentModalPress = () => parentBottomSheetRef.current.focus();

  // init states
  const [items, setItems] = useState([
    {id: 1, quantity: '', weight: '', rate: '0'},
  ]);
  const [collectItems, setCollectItems] = useState([
    {id: 1, quantity: '', weight: ''},
  ]);

  // apis
  const {data, error, isLoading} = useGetApi('/customers');
  const {
    data: deliverydata,
    error: deliverydataError,
    isLoading: deliverydataLoading,
  } = useGetApi('/deliverydata');
  const {
    data: weightsData,
    isLoading: isLoadingWeights,
    error: fetchWeightError,
  } = useGetApi('/weights');

  const handleAdd = () => {
    setItems([
      ...items,
      {id: items.length + 1, quantity: '', weight: '', rate: '0'},
    ]);
  };

  const handleRemove = index => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleUpdate = (index, newData) => {
    const updatedItems = [...items];
    updatedItems[index] = {...updatedItems[index], ...newData};
    setItems(updatedItems);
  };

  const handleAddCollect = () => {
    setCollectItems([
      ...collectItems,
      {id: collectItems.length + 1, quantity: '', weight: ''},
    ]);
  };
  const handleCollectUpdate = (index, newData) => {
    const updatedItems = [...collectItems];
    updatedItems[index] = {...updatedItems[index], ...newData};
    setCollectItems(updatedItems);
  };
  const handleCollectRemove = index => {
    const updatedItems = collectItems.filter((_, i) => i !== index);
    setCollectItems(updatedItems);
  };

  const getTotalValue = () => {
    return items.reduce(
      (accumulator, item) => accumulator + parseFloat(item.rate),
      0,
    );
  };

  const HeaderTitleView = useCallback(
    ({style, title}) => (
      <View style={style}>
        <Text>{title}</Text>
      </View>
    ),
    [],
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>{string.deliveryTitle}</Text>
      <View style={styles.dataContainer}>
        <View style={styles.titleContainer}>
          <Text>{string.customerName}</Text>
          <Pressable
            style={styles.plusContainer}
            onPress={() => {
              handlePresentModalPress();
            }}>
            <Ionicon
              name={'add-circle-outline'}
              size={20}
              color={'dodgerblue'}
            />
          </Pressable>
        </View>
        <View style={styles.valueContainer}>
          <DropDownFile
            data={data}
            labelField={'name'}
            valueField={'name'}
            onSelect={item => console.log(item)}
          />
        </View>
      </View>
      <TableView
        title={string.pendingPayment}
        value={deliverydata?.[0]?.pendingpayment}
      />
      <TableView
        title={string.cylinderHeld}
        value={deliverydata?.[0]?.cylinderHeld}
      />
      <TableView
        title={string.discount}
        value={`${deliverydata?.[0]?.discount}%`}
      />

      {/* Delivered view */}
      <View>
        <View style={styles.deliveredContainer}>
          <View style={styles.deliveredTopContainer}>
            <Text style={{fontWeight: 'bold'}}>{string.delivered}</Text>
            <Pressable style={styles.plusContainer} onPress={handleAdd}>
              <Ionicon
                name={'add-circle-outline'}
                size={20}
                color={'dodgerblue'}
              />
            </Pressable>
          </View>
          <View style={styles.titleContainer1}>
            <HeaderTitleView style={styles.weightContainer} title={'Weight'} />
            <HeaderTitleView
              style={styles.quantityContainer}
              title={'Quantity'}
            />
            <HeaderTitleView style={styles.rateTextContainer} title={'Rate'} />
            {items?.length > 1 ? (
              <View style={styles.emptyView}>
                <Text>{''}</Text>
              </View>
            ) : null}
          </View>
          {items.map((_, index) => (
            <View style={styles.tableContainer} key={_.id}>
              <DeliverTable
                data={weightsData}
                index={index}
                itemsLength={items.length}
                updateData={handleUpdate}
                onRemove={handleRemove}
              />
            </View>
          ))}
        </View>
      </View>

      {/* Collected view */}
      <View style={styles.collectContainer}>
        <View style={styles.collectHeaderContainer}>
          <Text>{''}</Text>
          <Text style={{marginTop: 20, fontWeight: 'bold'}}>{'Collected'}</Text>
          <Pressable style={styles.plusContainer} onPress={handleAddCollect}>
            <Ionicon
              name={'add-circle-outline'}
              size={20}
              color={'dodgerblue'}
            />
          </Pressable>
        </View>
        <View style={styles.collectTableContainer}>
          <View style={styles.bottomCollectView}>
            <HeaderTitleView title={'Weight'} style={styles.weightContainer} />
            <HeaderTitleView
              title={'Quantity'}
              style={styles.weightContainer}
            />
            {collectItems?.length > 1 ? (
              <View style={styles.emptyView}>
                <Text>{''}</Text>
              </View>
            ) : null}
          </View>
          {collectItems.map((_, index) => (
            <View style={styles.tableContainer} key={_.id}>
              <CollectTable
                index={index}
                data={weightsData}
                itemsLength={collectItems.length}
                updateData={handleCollectUpdate}
                onRemove={handleCollectRemove}
              />
            </View>
          ))}
        </View>
      </View>

      {/* bottom view */}
      <View style={styles.bottomContainer}>
        <TableView title={string.paymentToCollect} value={getTotalValue()} />
        <TableView title={string.securityDeposit} value={'1600'} />
        <TableView title={string.paymentCollected} value={'700'} />
        <TableView title={string.balance} value={'1700'} />
      </View>

      {/* button */}
      <Pressable style={styles.button}>
        <Text style={{fontWeight: 'bold'}}>Submit</Text>
      </Pressable>
      <BottomSheetComponent ref={parentBottomSheetRef}>
        <NewUser />
      </BottomSheetComponent>
      <Loader isLoading={isLoading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10, paddingBottom: 20, flex: 1},
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  dataContainer: {flexDirection: 'row', marginBottom: 5},
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  valueContainer: {flex: 1},
  rate: {alignSelf: 'flex-end', marginHorizontal: 10},
  titleContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weightContainer: {flex: 1, alignItems: 'center'},
  quantityContainer: {flex: 1, alignItems: 'center'},
  rateTextContainer: {flex: 0.8, alignItems: 'center'},
  deliveredContainer: {marginVertical: 20},
  deliveredTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  plusContainer: {paddingHorizontal: 10},
  emptyView: {flex: 0.2},
  tableContainer: {flexDirection: 'row', marginBottom: 15},
  collectContainer: {flexDirection: 'row'},
  collectHeaderContainer: {flex: 0.3},
  collectTableContainer: {flex: 0.7},
  bottomCollectView: {flexDirection: 'row', marginBottom: 10},
  bottomContainer: {marginVertical: 20},
  button: {
    backgroundColor: 'lightblue',
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
