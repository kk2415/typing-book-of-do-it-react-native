import React, { FC, useMemo } from "react";
import {
  Dimensions, FlatList,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text, View,
} from "react-native";
import { useClock } from "./src/hooks/useClock";
import Cache from "./src/screens/Cache";
import Memo from "./src/screens/Memo";
import Fibo from "./src/screens/Fibo";
import PersonUsingValueState from "./src/screens/PersonUsingValueState";
import PersonUsingObjectState from "./src/screens/PersonUsingObjectState";
import PersonUsingPassingState from "./src/screens/PersonUsingPassingState";
import * as D from './src/data'
import { MD2Colors } from "react-native-paper";

const {width} = Dimensions.get('window')

type PersonInformation = {
  title: string,
  Component: FC<any>
}

const personInformations: PersonInformation[] = [
  {title: 'PersonUsingValueState', Component: PersonUsingValueState},
  {title: 'PersonUsingObjectState', Component: PersonUsingObjectState},
  {title: 'PersonUsingPassingState', Component: PersonUsingPassingState},
]
const numberOfComponents = personInformations.length

const App = () => {
  const time = useClock()
  const people = useMemo(() => D.makeArray(10).map(D.createRandomPerson), [])
  let children = useMemo(() =>
    personInformations.map(({title, Component}: PersonInformation) => (
      <View style={{flex: 1}} key={title}>
        <Text style={[styles.text]}>{title}</Text>
        <FlatList data={people}
                  renderItem={({item}) => <Component person={item} />}
                  keyExtractor={(item, index) => item.id}
                  ItemSeparatorComponent={() => <View style={styles.itemSeparator} />} />
      </View>)),
    []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
      {/*<ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]} >*/}
      {/*  <Cache />*/}
      {/*  <Memo />*/}
      {/*  <Fibo />*/}
      {/*</ScrollView>*/}
      <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]} >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {borderWidth: 1, borderColor: MD2Colors.grey500},
  horizontalScrollView: {width: width * numberOfComponents},
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  contentContainerStyle: {width: width * numberOfComponents},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50},
  text: {fontSize: 24, textAlign: 'center'},
});

export default App;
