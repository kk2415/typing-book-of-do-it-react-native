import { StyleSheet } from 'react-native';
import { MD2Colors } from "react-native-paper";

export const styles = StyleSheet.create({
  view: {backgroundColor: MD2Colors.lime100, padding: 5},
  avatar: {width: 50, height: 50, borderRadius: 25},
  nameEmailView: {flexDirection: 'row', alignItems: 'center'},
  name: {marginRight: 5, fontSize: 22, fontWeight: '500'},
  email: {},
  dateView: {},
  createdDate: {},
  text: {},
  image: {width: '100%', height: 150},
  countsView: {
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'space-around',
  },
  counts: {},
})
