import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {MD2Colors} from 'react-native-paper';
import * as D from '../data'
import {Avatar} from "../component";

type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>
const title = 'Interval';

const Interval = () => {
    const [avatars, setAvatars] = useState<IdAndAvatar[]>([])
    const [start, setStart] = useState(true)
    const toggleStart = useCallback(() => setStart((start) => !start), [])
    const clearAvatars = useCallback(() => setAvatars((notUsed) => []), [])

    useEffect(() => {
        const id = setInterval(() => {
            if (start) {
                setAvatars((avatars) => {
                    return [...avatars, {id: D.randomId(), avatar: D.randomAvatarUrl()}]
                })
            }
        }, 1000)
        return () => clearInterval(id)
    }, [start])

    const children = avatars.map(({id, avatar}) => (
        <Avatar key={id} uri={avatar}  size={50}/>
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
    contentContainerStyle: {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'},
    avatarViewStyle: {padding: 5},
});

export default Interval;
