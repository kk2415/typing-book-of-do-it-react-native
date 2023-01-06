import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MD2Colors, Switch, useTheme} from 'react-native-paper';
import { useToggleTheme } from '../contexts/ToggleThemeContext';

const Home = () => {
  const {dark, colors, fonts} = useTheme()
  const toggleTheme = useToggleTheme()

  return (
      <View style={[styles.view, {backgroundColor: colors.background}]}>
        <View style={[styles.bar, {backgroundColor: colors.primary}]}>
          <Text style={[styles.text, fonts.bodyMedium]}>
            TopBar
          </Text>
          <View style={[{flex: 1}]} />
          <Switch value={dark} onValueChange={toggleTheme} />
        </View>
        <View style={styles.content}>
          <Text style={[styles.text, {color: MD2Colors.blue100}, fonts.bodyMedium]}>
            Welcome to Context world!
          </Text>
        </View>
        <View style={[styles.bar, {backgroundColor: colors.onPrimary}]}>
          <Text style={[styles.text, {color: MD2Colors.blue100}, fonts.bodySmall]}>
            BottomBar
          </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  bar: {height: 50, flexDirection: 'row', padding: 5, alignItems: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, textAlign: 'center'},
});

export default Home;
