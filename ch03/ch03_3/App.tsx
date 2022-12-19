import React from 'react';
import {
    Image,
    ImageBackground, Platform,
    SafeAreaView,
    StyleSheet, Text, View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {MD2Colors} from "react-native-paper";

const avatarUrl = 'url';
const avatarSize = 50;
const onIconPressed = () => console.log('icon pressed')

const App = () => {
  return (
    <SafeAreaView style={[styles.flex]}>
        <ImageBackground
            style={[styles.flex]}
            source={require('./src/assets/images/sadpepe.png')}
        >
            <Image source={{uri: avatarUrl}} style={[styles.image]} />
            <View style={[styles.flex, styles.padding10]}>
                <Text style={[styles.text, styles.regular]}>some text here1</Text>
                <Text style={[styles.text, styles.medium]}>some text here2</Text>
                <Text style={[styles.text, styles.semiBold]}>some text here3</Text>
                <Text style={[styles.text, styles.bold]}>some text here3</Text>
            </View>
            {/*<Icon name="home" size={50} color="red" onPress={onIconPressed} />*/}
        </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    flex: {flex: 1},
    imageBackground: {padding: 10},
    image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
    text: {textAlign: 'center'},
    padding10: {padding: 10},

    regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
    medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
    semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},
    bold: {
        fontFamily: 'DancingScript-Bold',
        fontWeight: Platform.select({ios: '700', android: '600'}),
    },
});

export default App;
