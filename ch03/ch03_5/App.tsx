import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import * as D from './src/data'
import { MD2Colors } from "react-native-paper";
import Person from "./src/copy/Person";

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <FlatList data={people}
                renderItem={({item}) => <Person person={item} />}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {borderWidth: 1, borderColor: MD2Colors.grey500},
});

export default App;
