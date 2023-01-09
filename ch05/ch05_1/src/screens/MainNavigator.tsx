import React, { useMemo, useState } from "react";
import {StyleSheet, Text, View} from 'react-native';

import { BottomNavigation, MD2Colors } from "react-native-paper";
import Home from './Home';

const MainNavigator = () => {
  const [index, setIndex] = useState<number>(0)
  const routes = useMemo(() => [{key: 'home', title: 'Home', icon: 'home'}], [])
<<<<<<< HEAD

=======
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
  const renderScene = BottomNavigation.SceneMap({
    home: Home
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
