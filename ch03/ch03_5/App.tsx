import React, {type PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
