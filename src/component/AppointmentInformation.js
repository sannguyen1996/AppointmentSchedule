import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const screens = Dimensions.get('screen');
import {checkColor, shortenTheName, shortenTheWord} from '../utils/utils';
const AppointmentInformation = ({item}) => {
  return (
    <View style={item ? styles.containerItem : styles.containerItemNull}>
      <View style={styles.lineVertical} />
      {item?.map((e, i) => {
        return (
          <View style={styles.containerItem2} key={e?.appointment_id}>
            <View
              style={[styles.lineColor, {backgroundColor: e?.color_code}]}
            />
            <View style={styles.viewColumn}>
              <Image source={{uri: e?.avatar}} style={styles.avatar} />
              <Text style={styles.txtName}>
                {shortenTheName(e.requester, item?.length == 1 ? 1 : 2)}
              </Text>

              <View style={styles.viewRow}>
                <View
                  style={[
                    styles.cirleColor,
                    {borderColor: checkColor(e?.status)},
                  ]}
                />
                <Text numberOfLines={1} style={styles.txtContent}>
                  {item?.length == 1
                    ? shortenTheWord(e?.symptom, 1)
                    : item?.length == 2
                    ? shortenTheWord(e?.symptom, 2)
                    : shortenTheWord(e?.symptom, 3)}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default AppointmentInformation;

const styles = StyleSheet.create({
  containerItem: {
    width: screens.width - 70,
    minHeight: screens.height / 10,
    flexDirection: 'row',
    marginLeft: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },

  containerItemNull: {
    width: screens.width - 70,
    minHeight: screens.height / 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    marginLeft: 60,
  },

  containerItem2: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
  },
  lineVertical: {
    marginTop: '-3%',
    height: '140%',
    width: 1,
    backgroundColor: 'gray',
    marginLeft: -10,
  },
  lineColor: {
    height: '100%',
    width: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    zIndex: 99,
    marginLeft: 8,
  },
  viewColumn: {
    marginLeft: 5,
  },
  viewRow: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
  },
  txtName: {
    fontWeight: 'bold',
    marginTop: 5,
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
