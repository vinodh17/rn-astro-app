

import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getRandomAstroid, searchById } from '../Redux/Actions/action';

export const Home = (props:any) => {
const [id, setId] = useState('');

	const nav = () => {
		props.getRandomAstroid()
		props.navigation.navigate('Details')
	}

	const search = () => {
// console.log(id);
props.searchById(id, props.navigation);
		// props.navigation.navigate('Details')
	}

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(val) => setId(val)} placeholder="Search By Id" />

<View style={styles.btns}>
			<Button  title="Search" onPress={() => search()}></Button>

<View style={styles.randomBtn}>
				<Button
								title="Random Id" 
								onPress={() => props.getRandomAstroid(props.navigation)}>
				 </Button>
</View>
</View>
    </View>
  );
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	},
	input: {
		borderColor: '#333',
		borderWidth: 1,
		width: '75%',
		height: 40,
		paddingLeft: 20,
		marginBottom: 20,
		color: '#000',
		fontSize: 20,
		borderRadius: 8
	},
	randomBtn: {
		marginTop: 30,
		// height: 100,
		backgroundColor: '#333'
	},
	btns: {
		height: 200,
		width: '50%',
		// display: 'flex',
		// flex: 1,
		flexDirection: "column"
	}
});

export default connect(null,{getRandomAstroid, searchById})(Home); 