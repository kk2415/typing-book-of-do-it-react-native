import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import {LayoutChangeEvent, Platform, StyleSheet, Text, View} from 'react-native';

import {MD2Colors} from 'react-native-paper';
import useLayout from "react-native-paper/lib/typescript/utils/useLayout";
const title = 'LifeCycle';

const LifeCycle = () => {
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
    console.log(Platform.OS, 'render start')

  return (
      <View onLayout={onLayout} style={[styles.view]}>
        <Text style={[styles.title]}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', padding: 5, backgroundColor: MD2Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'},
});

export default LifeCycle;
