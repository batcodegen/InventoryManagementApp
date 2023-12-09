import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const DropDownFile = ({
  data,
  labelField,
  valueField,
  onSelect,
  showSearch = true,
}) => {
  const [value, setValue] = useState(data[0][labelField]);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item[labelField]}</Text>
        {/* {item.value === value && (
              <AntDesign
                style={styles.icon}
                color="black"
                name="Safety"
                size={20}
              />
            )} */}
      </View>
    );
  };
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search={showSearch}
      maxHeight={300}
      labelField={labelField}
      valueField={valueField}
      placeholder="Select"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
        onSelect(item.value);
      }}
      // renderLeftIcon={() => (
      //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      // )}
      renderItem={renderItem}
    />
  );
};

export default DropDownFile;

const styles = StyleSheet.create({
  dropdown: {
    height: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
