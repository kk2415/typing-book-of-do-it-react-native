import { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts/ScrollEnabledContext';
import { SafeAreaView, TopBar, UnderlineText, View } from '../theme/navigation';

import Person from './Person';
import { AppState } from '../store';
import * as P from '../store/people'
import * as D from '../data'

export default function People() {
	const [scrollEnabled] = useScrollEnabled()
	const people = useSelector<AppState, P.State>(({people}) => people)
	const dispatch = useDispatch()

	const addPerson = useCallback(() => {
		dispatch(P.addAction(D.createRandomPerson()))
	}, [])
	const removeAllPersons = useCallback(() => {
		dispatch(P.deleteAllAction())
	}, [])
	
	const deletePerson = useCallback(
		(id: string) => 
			dispatch(P.deleteAction(id)),
		[]
	)

	useEffect(() => D.makeArray(5).forEach(addPerson), [])

	return (
		<SafeAreaView>
			<ScrollEnabledProvider>
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
			</ScrollEnabledProvider>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {flex: 1},
	text: {marginRight: 10, fontSize: 20},
})