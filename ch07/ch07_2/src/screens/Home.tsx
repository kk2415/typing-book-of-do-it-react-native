import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Keyboard, StyleSheet } from 'react-native';
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts/ScrollEnabledContext';

import * as D from '../data'
import { SafeAreaView, TopBar, UnderlineText, View } from '../theme/navigation';
import Person from './Person';

export default function Home() {
	const navigation = useNavigation()
	const goLeft = useCallback(() => navigation.navigate('HomeLeft'), [])
	const goRight = useCallback(() => navigation.navigate('HomeRight', {name: 'Jack', age: 32}), [])

	const [scrollEnabled] = useScrollEnabled()
	const [people, setPeople] = useState<D.IPerson[]>([])

	const addPerson = useCallback(() => {
		setPeople((people) => [D.createRandomPerson(), ...people])
	}, [])
	const removeAllPersons = useCallback(() => {
		setPeople((notUsed) => [])
	}, [])
	
	const deletePerson = useCallback(
		(id: string) => 
			setPeople((people) => people.filter((person) => person.id != id)),
		[]
	)

	useEffect(() => D.makeArray(5).forEach(addPerson), [])

	return (
		<SafeAreaView>
			<ScrollEnabledProvider>
				<View style={[styles.view]}>
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
					<FlatList
						scrollEnabled={scrollEnabled}
						data={people}
						renderItem={({item}) => (
							<Person person={item} deletePressed={() => deletePerson(item.id)} />
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</ScrollEnabledProvider>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {flex: 1},
	text: {marginRight: 10, fontSize: 20},
})