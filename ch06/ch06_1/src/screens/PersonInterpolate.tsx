import React, { useCallback } from "react";
import type {FC} from 'react'
import { Image, Text, View, Animated, Easing } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar } from "../component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAnimatedValue, useStyle } from '../hooks';
import { useToggle } from '../hooks/useToggle';

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}

const PersonInterpolate: FC<PersonProps> = ({person, deletePressed}) => {
  const animeValue = useAnimatedValue(0)
  const [started, toggleStarted] = useToggle(false)

  const avatarPressed = useCallback(
    () => Animated.timing(animeValue, {
        toValue: started ? 0 : 1,
        useNativeDriver: true,
        duration: 1000,
        easing: Easing.bounce
      }).start(toggleStarted),
    [started]
  )

  const textAnimStyle = useStyle({
    fontSize: animeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 30],
    }),
    color: animeValue.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [MD2Colors.lightBlue900, MD2Colors.lime500, MD2Colors.blue900],
    }),
  })

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed}  />
        <Text style={[styles.text]}>Press Me</Text>
      </View>

      <View style={[styles.rightView]}>
        <Animated.Text style={[styles.name, textAnimStyle]}>{person.name}</Animated.Text>
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
      </View>
  </View>
  );
}

export default PersonInterpolate