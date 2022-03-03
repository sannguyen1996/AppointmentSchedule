import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import Header from './component/Header';
import ReservationItem from './component/ReservationItem';
import {mapHourOfReservation, valueMapHourOfReservation} from './utils/utils';

const index = () => {
  const [data, setData] = useState(valueMapHourOfReservation);

  mapHourOfReservation();

  useEffect(() => {
    setData(valueMapHourOfReservation);
    return () => {};
  }, [data]);

  const renderItem = ({item, index}) => {
    return (
      <ReservationItem
        item={item}
        index={index}
        length={Array.from(data.values()).length - 1}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Lịch khám ngày 12/10/2020'} />

      <FlatList
        data={Array.from(data.values())}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + ''}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
