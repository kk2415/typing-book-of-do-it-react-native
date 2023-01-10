import React, { useState } from "react";
import {StyleSheet, Text, View} from 'react-native';

import { BottomNavigation, MD2Colors } from "react-native-paper";
import Imperative from './Imperative';
import Themed from './Themed';

const MainNavigator = () => {
  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([
    {key: 'themed', title: 'Themed', icon: 'home'},
    {key: 'imperative', title: 'Imperative', icon: 'keyboard-settings'},
  ])

  const renderScene = BottomNavigation.SceneMap({
    themed: Themed,
    imperative: Imperative,
  })

  return (
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: MD2Colors.blue900},
  title: {fontSize: 20, color: 'white'},
});

export default MainNavigator;
