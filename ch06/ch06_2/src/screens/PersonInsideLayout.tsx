import React, { useCallback, useState } from "react";
import type {FC} from 'react'
import { Alert, Image, Text, View, Animated, Easing } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar } from "../component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAnimatedValue, useStyle, useTransformStyle } from '../hooks';
import { useToggle } from '../hooks/useToggle';
import { interpolate } from '../utils';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useLayout } from '../hooks/useLayout';

moment.locale('ko')

const AnimatedIcon = Animated.createAnimatedComponent(FontawesomeIcon)
const iconSize = 50

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}

const PersonInsideLayout: FC<PersonProps> = ({person, deletePressed}) => {
  const [started, toggleStarted] = useToggle(false)
  const animValue = useAnimatedValue(0)

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

  const [layout, setLayout] = useLayout()
  const iconAnimStyle = useTransformStyle(
    {
      translateX: interpolate(animValue, [0, layout.width - iconSize]),
      rotate: interpolate(animValue, ['0deg', '720deg'])
    }, 
    [layout.width]
  )

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed} />
        <Text style={[styles.text]}>Press Me</Text>
      </View>

      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]} onPress={avatarPressed} >{person.email}</Text>
        <View onLayout={setLayout} style={[{flexDirection: 'row', padding: 5}]}>
          <AnimatedIcon style={[iconAnimStyle]} name="soccer-ball-o" size={iconSize} color={MD2Colors.blue500} />
        </View>
      </View>
    </View>
  );
}

export default PersonInsideLayout
