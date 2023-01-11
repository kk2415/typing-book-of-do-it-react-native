import React, { useState } from "react";
import {StyleSheet, Text, View} from 'react-native';

import { BottomNavigation, MD2Colors } from "react-native-paper";
import Basic from './Basic';
import Interpolate from './Interpolate';
import Monitor from './Monitor';
import Toggle from './Toggle';

const MainNavigator = () => {
  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([
    {key: 'basic', title: 'Basic', icon: 'alpha-b-box'},
    {key: 'monitor', title: 'Monitor', icon: 'eye-circle'},
    {key: 'toggle', title: 'Toggle', icon: 'file-eye'},
    {key: 'interpolate', title: 'Interpolate', icon: 'bullseye'},
  ])

  const renderScene = BottomNavigation.SceneMap({
    basic: Basic,
    monitor: Monitor,
    toggle: Toggle,
    interpolate: Interpolate
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
