import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { Alert, Image, Text, View } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar, IconText } from "../component";
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

moment.locale('ko')

export type PersonIconProps = {
  person: D.IPerson
  setPerson: Dispatch<SetStateAction<D.IPerson>>
}

const PersonIcons: FC<PersonIconProps> = ({person, setPerson}) => {

  const commentPressed = useCallback(() =>
    setPerson((person) => {
        const {comment} = person.counts
        return {
          ...person,
          counts: {
            ...person.counts,
            comment: comment + 1,
          }
        }
      }), [])

  const retweetPressed = useCallback(() =>
      setPerson((person) => {
        const {retweet} = person.counts
        return {
          ...person,
          counts: {
            ...person.counts,
            retweet: retweet + 1
          },
        }
      }), [])

  const heartPressed = useCallback(() =>
      setPerson((person) => {
        const {heart} = person.counts
        return {
          ...person,
          counts: {
            ...person.counts,
            heart: heart + 1
          },
        }
      }), [])

  return (
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
  );
}

export default PersonIcons
