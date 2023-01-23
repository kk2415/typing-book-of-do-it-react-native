import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts/ScrollEnabledContext';

import * as D from '../data'
import { SafeAreaView, TopBar, UnderlineText, View, MaterialCommunityIcons as Icon } from '../theme/navigation';
import { NavigationHeader } from '../theme';
import Person from './Person';
import { LeftRightNavigation, LeftRightNavigationMethods } from '../component';
import { useDispatch } from 'react-redux';
import * as L from '../store/login'

export default function Home() {
	const navigation = useNavigation()
	const dispatch = useDispatch()

	const goLeft = useCallback(() => navigation.navigate('HomeLeft'), [])
	const goRight = useCallback(() => navigation.navigate('HomeRight', {name: 'Jack', age: 32}), [])
	const open = useCallback(() => {navigation.dispatch(DrawerActions.openDrawer())}, [])
	const logout = useCallback(() => {
		dispatch(L.logoutAction())
		navigation.navigate('Login')
	}, [])

	const [scrollEnabled] = useScrollEnabled()
	const [people, setPeople] = useState<D.IPerson[]>([])

	const leftRef = useRef<LeftRightNavigationMethods | null>(null)
	const addPerson = useCallback(() => {
		setPeople((people) => [D.createRandomPerson(), ...people])
	}, [])
	const removeAllPersons = useCallback(() => {
		setPeople((notUsed) => [])
		leftRef.current?.resetOffset()
	}, [])
	
	const deletePerson = useCallback(
		(id: string) => () => {
			setPeople((people) => people.filter((person) => person.id != id))
			leftRef.current?.resetOffset()
			flatListRef.current?.scrollToOffset({animated: true, offset: 0})
		}, [])

	useEffect(() => D.makeArray(5).forEach(addPerson), [])
	
	const flatListRef = useRef<FlatList | null>(null)
	return (
		<SafeAreaView>
			<ScrollEnabledProvider>
				<View style={[styles.view]}>
					<NavigationHeader title="Home" 
						Left={() => <Icon name="menu" size={30} onPress={open} />}
						Right={() => <Icon name="logout" size={30} onPress={logout} />} />
					<TopBar>
						<UnderlineText onPress={goLeft} style={styles.text}>
							go Left
						</UnderlineText>
						<UnderlineText onPress={goRight} style={styles.text}>
							go Right
						</UnderlineText>
					</TopBar>
					<TopBar noSwitch>
						<UnderlineText onPress={addPerson} style={[styles.text]}>
							add
						</UnderlineText>
						<UnderlineText onPress={removeAllPersons} style={[styles.text]}>
							remove all
						</UnderlineText>
					</TopBar>
					<LeftRightNavigation ref={leftRef} distance={40} 
						flatListRef={flatListRef}
						onLeftToRight={goLeft} onRightToLeft={goRight}>
						<FlatList ref={flatListRef} scrollEnabled={scrollEnabled}
							data={people}
							renderItem={({item}) => (
								<Person person={item} deletePressed={() => deletePerson(item.id)} />
							)}
							keyExtractor={(item) => item.id} />
					</LeftRightNavigation>
				</View>
			</ScrollEnabledProvider>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {flex: 1},
	text: {marginRight: 10, fontSize: 20},
})