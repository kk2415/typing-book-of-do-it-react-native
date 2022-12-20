import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MD2Colors} from 'react-native-paper';
const title = 'CopyMe';

const CopyMe = () => {
  return (
      <View style={[styles.view]}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: MD2Colors.blue900},
  text: {fontSize: 20, color: 'white'},
});

export default CopyMe;
