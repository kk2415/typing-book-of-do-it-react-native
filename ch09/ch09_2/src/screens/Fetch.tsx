import React, { useCallback, useEffect, useState } from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView, Text, TopBar, View, MaterialCommunityIcons as Icon, UnderlineText } from '../theme';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

// prettier-ignore
const Fetch = () => {
  const [humorText, setHumorText] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const getHumor = useCallback(() => {
    setHumorText('')
    setErrorMessage('')
    setLoading(true)
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((result) => {
        setHumorText(result.value)
        setLoading(false)
      })
      .catch((e) => {
        setErrorMessage(e.message)
        setLoading(false)
      })
  }, [])
  useEffect(getHumor, [])

  return (
      <SafeAreaView>
        <TopBar>
          <UnderlineText style={[styles.text]} onPress={getHumor}>
            get humor
          </UnderlineText>
        </TopBar>
        {loading && (
          <ActivityIndicator size="large" color={MD2Colors.lightBlue500} />
        )}
        <View style={[styles.content]}> 
          <Text style={[styles.text]}>{humorText}</Text>
          {errorMessage.length > 0 && (
            <Text style={[styles.text]}>{errorMessage}</Text>
          )}
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 30, textAlign: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Fetch;
