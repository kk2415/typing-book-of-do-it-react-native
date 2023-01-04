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

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}

const PersonUsingObjectState: FC<PersonProps> = ({person: initialPerson}) => {

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
        <View style={[styles.countsView]}>
          <IconText viewStyle={[styles.touchableIcon]}
                    onPress={commentPressed}
                    name="comment" size={24} color={MD2Colors.blue500}
                    textStyle={[styles.iconText]} text={person.counts.comment} />
          <IconText viewStyle={[styles.touchableIcon]}
                    onPress={retweetPressed}
                    name="comment" size={24} color={MD2Colors.purple500}
                    textStyle={[styles.iconText]} text={person.counts.retweet} />
          <IconText viewStyle={[styles.touchableIcon]}
                    onPress={heartPressed}
                    name="heart" size={24} color={MD2Colors.red500}
                    textStyle={[styles.iconText]} text={person.counts.heart} />
        </View>
      </View>
    </View>
  );
}

export default PersonUsingObjectState
