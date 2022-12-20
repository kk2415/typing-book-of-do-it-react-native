import React from "react";
import {
  Dimensions,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { useClock } from "./src/hooks/useClock";
import Cache from "./src/screens/Cache";
import Memo from "./src/screens/Memo";
import Fibo from "./src/screens/Fibo";

const {width} = Dimensions.get('window')
const numberOfComponents = 3

const App = () => {
  const time = useClock()

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
      <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]} >
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  contentContainerStyle: {width: width * numberOfComponents},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50},
});

export default App;
