import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Alert,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const onPress = () => Alert.alert('home pressed', 'message')

const App = () => {
  return (
    <SafeAreaView>
      <Button title="home" color="blue" onPress={() => console.log('home pressed.')}></Button>
      <Button title="Alert" color="blue" onPress={() => Alert.alert('home pressed.', 'message')}></Button>
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <Text onPress={onPress}>Press Me</Text>

      <TextInput placeholder="텍스트를 입력해주세요" 
                  onChangeText={(text: string) => console.log(text)}
                  onFocus={() => console.log('onFocus')}
                  onBlur={() => console.log('onBlur')}
                  onEndEditing={() => console.log('onEndEditing')}
                  >
      </TextInput>
    </SafeAreaView>
  );
};

export default App;
