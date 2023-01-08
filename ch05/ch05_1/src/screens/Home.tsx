import React from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {MD2Colors, useTheme} from 'react-native-paper';
import { useToggleTheme } from '../contexts';

const Home = () => {
  const {dark, fonts, colors} = useTheme()
  const toggleTheme = useToggleTheme()

  return (
      <View style={[styles.view, {backgroundColor: colors.background}]}>
        <View style={[styles.bar, {backgroundColor: colors.primary}]}>
          <Text style={[styles.text, {color: colors.tertiary}, fonts.labelMedium]}>
            TopBar
          </Text>
          <View style={[{flex: 1}]} />
          <Switch value={dark} onValueChange={toggleTheme} />
        </View>
        <View style={[styles.content]}>
          <Text style={[styles.text, {color: colors.surface}, fonts.bodyMedium]}>
            Welcome to Content world!
          </Text>
        </View>
        <View style={[styles.bar, {backgroundColor: colors.secondary}]}>
          <Text style={[styles.text, {color: colors.tertiary}, fonts.labelSmall]}>
            BottomBar
          </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  bar: {height: 0, flexDirection: 'row', padding: 5, alignItems: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, textAlign: 'center'},
});

export default Home;
