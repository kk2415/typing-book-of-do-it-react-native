import { useCallback, useEffect, useState } from 'react';
import { FlatList, Keyboard, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useToggleTheme } from '../contexts';

import * as D from '../data'
import { SafeAreaView, TopBar, UnderlineText, View } from '../theme/navigation';
import Person from './Person';

export default function People() {
	const [scrollEnabled] = useScrollEnabled()
	const [people, setPeople] = useState<D.IPerson[]>([])

	const theme = useTheme()
	const toggleTheme = useToggleTheme()
	
	const addPerson = useCallback(() => setPeople((people) => [D.createRandomPerson(), ...people]), [])
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
			<View style={[styles.view]}>
				<TopBar>
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
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {flex: 1},
	text: {marginRight: 10, fontSize: 20},
})