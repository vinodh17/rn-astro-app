
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Details(props: any) {

  return (
    <View testID="details-wrapper" style={styles.container}>
     <View style={styles.card}>
				<Text>Is Potentially Hazardous: {props.route.params.is_potentially_hazardous_asteroid}</Text>
				<Text>Nasa Url: {props.route.params.nasa_jpl_url}</Text>
				<Text>Name: {props.route.params.name}</Text>
		 </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50,
		 color: '#000'
	},
	card: {
		display:'flex', 
		flexDirection:'column',
		justifyContent: 'center',
		height: 125,
		backgroundColor: '#fff',
	}
});
