import React, { FC, useCallback, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar, IconText } from "../component";
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IPerson } from "../data";
import PersonIcons from "./PersonIcons";

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}

const PersonUsingPassingState: FC<PersonProps> = ({person: initialPerson}) => {

  const avatarPressed = useCallback(() => Alert.alert('avatar pressed'), [])
  const deletePressed = useCallback(() => Alert.alert('delete pressed'), [])
  const countIconPressed = useCallback((name: string) => () => Alert.alert(`${name} pressed`), [])

  const [person, setPerson] = useState<IPerson>({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0},
  })
  const [comment, setComment] = useState<number>(0)
  const [retweet, setRetweet] = useState<number>(0)
  const [heart, setHeart] = useState<number>(0)

  const commentPressed = useCallback(() => setPerson((person) =>
    (
      {
        ...person,
        counts: {
          ...person.counts,
          comment: person.counts.comment + 1
        },
      }
    )
  ), [])
  const retweetPressed = useCallback(() => setPerson((person) =>
    (
      {
        ...person,
        counts: {
          ...person.counts,
          retweet: person.counts.retweet + 1
        },
      }
    )
  ), [])
  const heartPressed = useCallback(() => setPerson((person) =>
    (
      {
        ...person,
        counts: {
          ...person.counts,
          heart: person.counts.heart + 1
        },
      }
    )
  ), [])

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed} />
      </View>

      <View style={[styles.rightView]}>
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
        <PersonIcons person={person} setPerson={setPerson} />
      </View>
    </View>
  );
}

export default PersonUsingPassingState
