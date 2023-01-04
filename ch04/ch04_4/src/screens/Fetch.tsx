import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import * as D from '../data'
import Country from "./Country";

const title = 'Fetch';

const Fetch = () => {
    const [countries, setCountries] = useState<D.ICountry[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        D.getCountries().then(setCountries).catch(setError)
    }, [])

    return (
      <View style={[styles.view]}>
        <Text style={[styles.title]}>{title}</Text>
          {error && <Text>{error.message}</Text>}
        <FlatList data={countries}
                  renderItem={({item}) => <Country country={item} />}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={() => <View style={styles.separator} /> } />
      </View>
    );
};

const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', padding: 5, backgroundColor: MD2Colors.blue100},
    title: {fontSize: 30, fontWeight: '600'},
    separator: {borderBottomColor: MD2Colors.blue50, borderBottomWidth: 1},
});

export default Fetch;
