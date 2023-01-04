import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import {LayoutChangeEvent, Platform, StyleSheet, Text, View} from 'react-native';

import {MD2Colors} from 'react-native-paper';
import { useLayout } from '../hooks/useLayout';

const title = 'LifeCycle';

const LifeCycle = () => {
  const [layout, setLayout] = useLayout()

  useEffect(() => {
      console.log(Platform.OS, 'useEffect called')
      return () => console.log(Platform.OS, 'useEffect finished')
  })

  useLayoutEffect(() => {
      console.log(Platform.OS, 'useLayoutEffect called')
      return () => console.log(Platform.OS, 'useLayoutEffect finished')
  })

  const onLayout = useCallback((e: LayoutChangeEvent) => {
      const {layout} = e.nativeEvent
      console.log(Platform.OS, 'onLayout called', layout)
  }, [])

  return (
      <View onLayout={setLayout} style={[styles.view]}>
        <Text style={[styles.title]}>layout: {JSON.stringify(layout, null, 2)}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', padding: 5, backgroundColor: MD2Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'},
});

export default LifeCycle;
