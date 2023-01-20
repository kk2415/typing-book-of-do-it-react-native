import React from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView, Text, TopBar, View } from '../theme/navigation';

const title = 'SignUp';
const SignUp = () => {
  return (
      <SafeAreaView>
        <View style={[styles.view]}>
          <TopBar />
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
          </View>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default SignUp;
