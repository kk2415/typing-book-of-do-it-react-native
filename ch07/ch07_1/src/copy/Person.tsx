import React, { useCallback, useState, useRef, useEffect, useMemo } from "react";
import type {FC} from 'react'
import { Alert, Image, Text, View, Animated, Easing } from "react-native";
import * as D from '../data'
import moment from 'moment-with-locales-es6'
import { MD2Colors } from "react-native-paper";
import {styles} from "./Person.style";
import { Avatar, IconText } from "../component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableView, UnderlineText } from '../theme/navigation';

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}

const Person: FC<PersonProps> = ({person: initialPerson, deletePressed}) => {
  const [person, setPerson] = useState<D.IPerson>(initialPerson)

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} />
      </View>

      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <UnderlineText style={[styles.email]}>{person.email}</UnderlineText>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon name='trash-can' size={30} color={MD2Colors.lightBlue500} onPress={deletePressed} />
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <TouchableView style={[styles.countsView]}>
            <Icon name="comment" size={24} color={MD2Colors.blue500} />
            <Text>{person.counts.comment}</Text>
          </TouchableView>
          <TouchableView style={[styles.countsView]}>
            <Icon name="comment" size={24} color={MD2Colors.purple500} />
            <Text>{person.counts.retweet}</Text>
          </TouchableView>
          <TouchableView style={[styles.countsView]}>
            <Icon name="heart" size={24} color={MD2Colors.red500} />
            <Text>{person.counts.heart}</Text>
          </TouchableView>
        </View>
      </View>
    </View>
  );
}

export default Person
