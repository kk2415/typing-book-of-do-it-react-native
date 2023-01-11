import React, { useCallback, useState, useRef, useEffect, useMemo } from "react";
import type {FC} from 'react'
import { Alert, Image, Text, View, Animated, Easing } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar, IconText } from "../component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}

const PersonMonitor: FC<PersonProps> = ({person, deletePressed}) => {
  const animeValue = useRef(new Animated.Value(0)).current
  const [realAnimeValue, setRealAnimeValue] = useState<number>(0)
  const [animationEnd, setAnimationEnd] = useState<boolean>(false)

  useEffect(() => {
    const id = animeValue.addListener((state: {value: number}) => {
      setRealAnimeValue(state.value)
    })
    return () => animeValue.removeListener(id)
  }, [])

  const avatarPressed = useCallback(
    () =>
    Animated.timing(animeValue, {
      useNativeDriver: true,
      toValue: 1,
      duration: 3000,
      easing: Easing.ease
    }).start(() => setAnimationEnd((notUsed) => true)), [])

  const rightViewAnimeStyle = {opacity: animeValue}

  return (
    <View>
      <Text style={[{fontSize: 20, color: MD2Colors.black}]}>
        realAnimeValue: {realAnimeValue}
      </Text> 
      <Text style={[{fontSize: 20, color: MD2Colors.black}]}>
        animationEnd: {animationEnd ? 'true' : 'false'}
      </Text>
      <View style={[styles.view]}>
        <View style={[styles.leftView]}>
          <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed}  />
          <Text style={[styles.text]}>Press Me</Text>
        </View>

        <Animated.View style={[styles.rightView, rightViewAnimeStyle]}>
          <Text style={[styles.name]}>{person.name}</Text>
          <Text style={[styles.email]}>{person.email}</Text>
          <View style={[styles.dateView]}>
            <Text style={[styles.text]}>
              {moment(person.createdDate).startOf('day').fromNow()}
            </Text>
            <Icon name='trash-can-outline' size={26} color={MD2Colors.lightBlue500} onPress={deletePressed}></Icon>
          </View>
          <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
          <Image style={[styles.image]} source={{uri: person.image}}></Image>
          <View style={[styles.countsView]}>
            <Icon name="comment" size={24} color={MD2Colors.blue500} />
            <Icon name="comment" size={24} color={MD2Colors.purple500} />
            <Icon name="heart" size={24} color={MD2Colors.red500} />
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

export default PersonMonitor
