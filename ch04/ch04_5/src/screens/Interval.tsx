import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {MD2Colors} from 'react-native-paper';
import * as D from '../data'
import {Avatar} from "../component";
import { useToggle } from '../hooks/useToggle';
import { useInterval } from '../hooks/useInterval';

type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>
const title = 'Interval';

const Interval = () => {
    const [avatars, setAvatars] = useState<IdAndAvatar[]>([])
    const [start, toggleStart] = useToggle(true)
    const clearAvatars = useCallback(() => setAvatars((notUsed) => []), [])

    useInterval(
        () => {
            if (start) {
                setAvatars((avatars) => [
                    ...avatars,
                    {id: D.randomId(), avatar: D.randomAvatarUrl()}
                ])
            }
    }, 1000, [start])

    const children = avatars.map(({id, avatar}) => (
        <Avatar key={id} uri={avatar} size={70} viewStyle={styles.avatarViewStyle} />
    ))

    return (
        <View style={[styles.view]}>
            <View style={styles.topBar}>
                <Text onPress={toggleStart} style={styles.topBarText}>
                    {start ? 'stop' : 'start'}
                </Text>
                <Text onPress={clearAvatars} style={styles.topBarText}>
                    clear avatars
                </Text>
            </View>
            <Text style={styles.title}>Interval</Text>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                {children}
            </ScrollView>
        </View>
    );
};

//prettier-ignore
const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', backgroundColor: MD2Colors.lime300},
    title: {fontSize: 30, fontWeight: '600'},
    topBar: {width: '100%', flexDirection: 'row', padding: 5, justifyContent: 'space-between', backgroundColor: MD2Colors.blue900},
    topBarText: {fontSize: 20, color: 'white'},
    contentContainerStyle: {flexDirection: 'row', flexWrap: 'wrap'},
    avatarViewStyle: {padding: 10},
});

export default Interval;
