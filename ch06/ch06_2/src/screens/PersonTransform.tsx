import React, { useCallback, useState } from "react";
import type {FC} from 'react'
import { Alert, Image, Text, View, Animated, Easing } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar } from "../component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAnimatedValue, useStyle } from '../hooks';
import { useToggle } from '../hooks/useToggle';
import { interpolate } from '../utils';

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}

const PersonTransform: FC<PersonProps> = ({person: initialPerson, deletePressed}) => {
  const [person, setPerson] = useState<D.IPerson>(initialPerson)

  const [started, toggleStarted] = useToggle(false)
  const animValue = useAnimatedValue(0)
  const nameAnimStyle = useStyle({
    transform: [
      {
        translateX: interpolate(animValue, [0, 500])
      }
    ]
  })

  const emailAnimStyle = useStyle({
    marginTop: started ? 20 : 0,
    transform: [
      {
        rotate: interpolate(animValue, ['0deg', '180deg'])
      },
    ]
  })

  const commentsAnimStyle = useStyle({
    transform: [
      {
        translateY: interpolate(animValue, [0, 200])
      },
      {
        rotate: interpolate(animValue, ['0deg', '45deg'])
      },
      {
        scale: interpolate(animValue, [1, 2])
      }
    ]
  })

  const avatarPressed = useCallback(
      () => {
        Animated.timing(animValue, {
          useNativeDriver: false,
          toValue: started ? 0 : 1,
          easing: Easing.bounce
        }).start(toggleStarted)
      },
      [started]
  )

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed} />
        <Text style={[styles.text]}>Press Me</Text>
      </View>

      <View style={[styles.rightView]}>
        <Animated.Text style={[styles.name, nameAnimStyle]}>
          {person.name}
        </Animated.Text>
        <Animated.Text style={[styles.email, emailAnimStyle]}>
          {person.email}
        </Animated.Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon name='trash-can-outline' size={26} color={MD2Colors.lightBlue500} onPress={deletePressed}></Icon>
        </View>
        <Animated.Text numberOfLines={3} ellipsizeMode="tail" style={[styles.comments, commentsAnimStyle]}>
          {person.comments}
        </Animated.Text>
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

export default PersonTransform
