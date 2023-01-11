import React, { useCallback, useState, useRef, useEffect, useMemo } from "react";
import type {FC} from 'react'
import { Alert, Image, Text, View, Animated, Easing } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar, IconText } from "../component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAnimatedValue, useMonitorAnimatedValue } from '../hooks';
import { useToggle } from '../hooks/useToggle';

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}

const PersonMonitor: FC<PersonProps> = ({person, deletePressed}) => {
  const animeValue = useAnimatedValue(0)
  const realAnimeValue = useMonitorAnimatedValue(animeValue)
  const [started, toggleStarted] = useToggle(false)

  const avatarPressed = useCallback(
    () =>
    Animated.timing(animeValue, {
      toValue: started ? 0 : 1,
      useNativeDriver: true,
      duration: 1000,
      easing: Easing.bounce
    }).start(toggleStarted), [started])

  const rightViewAnimeStyle = {opacity: animeValue}

  return (
    <View>
      <Text style={[{fontSize: 20, color: MD2Colors.black}]}>
        realAnimeValue: {realAnimeValue}
      </Text> 
      <Text style={[{fontSize: 20, color: MD2Colors.black}]}>
        started: {started ? 'true' : 'false'}
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
