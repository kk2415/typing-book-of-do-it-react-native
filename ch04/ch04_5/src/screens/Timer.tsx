import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';

import {MD2Colors} from 'react-native-paper';
import {useTimeout} from '../hooks/useTimeout';
import {useToggle} from '../hooks/useToggle';

const Timer = () => {
    const [loading, toggleLoading] = useToggle(true)
    useTimeout(() => loading && toggleLoading(), 3000, [loading])

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Timer</Text>
            <Text>Loading: {loading.toString()}</Text>
            <Button onPress={toggleLoading} 
                title={loading ? 'stop loading' : 'start loading'} />
            {loading && (
                <ActivityIndicator size='large' color={MD2Colors.deepPurple700} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', padding: 5, backgroundColor: MD2Colors.yellow300},
    title: {fontSize: 30, fontWeight: '600'},
});

export default Timer;
