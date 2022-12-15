import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <Button title="home" color="blue" onPress={() => console.log('home pressed.')}></Button>
      <Button title="Alert" color="blue" onPress={() => Alert.alert('home pressed.', 'message')}></Button>
    </SafeAreaView>
  );
};

export default App;
