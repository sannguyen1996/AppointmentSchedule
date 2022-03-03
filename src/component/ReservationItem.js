import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import AppointmentInformation from './AppointmentInformation';
const screens = Dimensions.get('screen');

const ReservationItem = ({item, index, length}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.txtTime}>{`${index + 8}:00`}</Text>
        <View style={styles.line} />
      </View>
      <AppointmentInformation item={item} length={length} />
      {index == length && (
        <View>
          <View style={styles.row}>
            <Text style={styles.txtTime}>{`${17}:00`}</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.line1px} />
          <View style={styles.line2px} />
          <View style={styles.viewContainer}>
            <View style={styles.viewContent}>
              <View style={[styles.itemContent, {marginLeft: 4}]}>
                <View style={[styles.cirleColor, {borderColor: colors.grey}]} />
                <Text style={styles.txtContent}>Passed</Text>
              </View>
              <View style={[styles.itemContent, {marginLeft: 8}]}>
                <View style={[styles.cirleColor, {borderColor: colors.pink}]} />
                <Text style={styles.txtContent}>Pendding</Text>
              </View>
              <View
                style={[styles.itemContent, , {marginLeft: 8, marginRight: 8}]}>
                <View
                  style={[styles.cirleColor, {borderColor: colors.green}]}
                />
                <Text style={styles.txtContent}>Approved</Text>
              </View>
            </View>
          </View>
          <View style={styles.line2px} />
          <View style={styles.line2px} />
        </View>
      )}
    </View>
  );
};

export default ReservationItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  txtTime: {
    fontWeight: 'bold',
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: screens.width - 50,
    height: 1,
    backgroundColor: 'gray',
  },
  lineBottom: {
    marginTop: 10,
  },
  line1px: {
    height: 1,
    backgroundColor: colors.lightGray,
    marginTop: '1%',
  },
  line2px: {
    height: 2,
    backgroundColor: colors.lightGray,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContent: {
    flexDirection: 'row',
    borderColor: colors.green,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 5,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cirleColor: {
    width: 8,
    height: 8,
    borderRadius: 10,
    borderWidth: 3,
  },
  txtContent: {
    color: 'gray',
    marginLeft: 5,
    fontSize: 11,
  },
});
