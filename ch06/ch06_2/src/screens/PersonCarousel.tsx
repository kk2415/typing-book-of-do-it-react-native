import React, { useCallback, useState, useRef, useEffect, useMemo } from "react";
import type {FC} from 'react'
import { Alert, Image, Text, View, Animated, Easing } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar, IconText, ImageSlider } from "../component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLayout } from '../hooks/useLayout';
import { useToggle } from '../hooks/useToggle';

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}

const avatarPressed = () => Alert.alert('avatar pressed')
const deletePressed = () => Alert.alert('avatar pressed')
const countIconPressed = (name: string) => () => Alert.alert('${name} pressed')

const PersonCarousel: FC<PersonProps> = ({person, deletePressed}) => {
  const imageUrls = useMemo(() => D.makeArray(D.random(2, 6 + 1)).map(D.randomImage), [])
  const [layout, setLayout] = useLayout()
  const [showThumbnails, toggleShowThumbnails] = useToggle(true)

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed} />
        <Text style={[styles.text]}>Press Me</Text>
      </View>

      <View style={[styles.rightView]} onLayout={setLayout}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}]}>
          <Text style={[styles.text]}>imageUrls.length: {imageUrls.length}</Text>
          <Text style={[styles.email]} onPress={toggleShowThumbnails}>
            show thumbnails
          </Text>
        </View>
      </View>
      <ImageSlider imageUrls={imageUrls} imageWidth={layout.width} showThumbnails={showThumbnails} />
    </View>
  );
}

export default PersonCarousel
