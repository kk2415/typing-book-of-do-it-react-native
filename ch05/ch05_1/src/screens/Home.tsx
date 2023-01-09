import React from 'react';
<<<<<<< HEAD
import {StyleSheet, Text, View} from 'react-native';

import {MD2Colors, Switch, useTheme} from 'react-native-paper';
import { useToggleTheme } from '../contexts/ToggleThemeContext';

const Home = () => {
  const {dark, colors, fonts} = useTheme()
=======
import {StyleSheet, Text, View, Switch} from 'react-native';
import {MD2Colors, useTheme} from 'react-native-paper';
import { useToggleTheme } from '../contexts';

const Home = () => {
  const {dark, fonts, colors} = useTheme()
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
  const toggleTheme = useToggleTheme()

  return (
      <View style={[styles.view, {backgroundColor: colors.background}]}>
        <View style={[styles.bar, {backgroundColor: colors.primary}]}>
<<<<<<< HEAD
          <Text style={[styles.text, fonts.bodyMedium]}>
=======
          <Text style={[styles.text, {color: colors.tertiary}, fonts.labelMedium]}>
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
            TopBar
          </Text>
          <View style={[{flex: 1}]} />
          <Switch value={dark} onValueChange={toggleTheme} />
        </View>
<<<<<<< HEAD
        <View style={styles.content}>
          <Text style={[styles.text, {color: MD2Colors.blue100}, fonts.bodyMedium]}>
            Welcome to Context world!
          </Text>
        </View>
        <View style={[styles.bar, {backgroundColor: colors.onPrimary}]}>
          <Text style={[styles.text, {color: MD2Colors.blue100}, fonts.bodySmall]}>
=======
        <View style={[styles.content]}>
          <Text style={[styles.text, {color: colors.surface}, fonts.bodyMedium]}>
            Welcome to Content world!
          </Text>
        </View>
        <View style={[styles.bar, {backgroundColor: colors.secondary}]}>
          <Text style={[styles.text, {color: colors.tertiary}, fonts.labelSmall]}>
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
            BottomBar
          </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
<<<<<<< HEAD
  bar: {height: 50, flexDirection: 'row', padding: 5, alignItems: 'center'},
=======
  bar: {height: 0, flexDirection: 'row', padding: 5, alignItems: 'center'},
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, textAlign: 'center'},
});

export default Home;
