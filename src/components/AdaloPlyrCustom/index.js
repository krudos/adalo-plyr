import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Plyr from 'plyr-react'

/*
	source={
	   
	  }
	  options={
	   
	  }
	   */
const AdaloPlyrCustom = (props) => {
	const { color, text } = props

	return (
		<View style={styles.wrapper}>
			<Text style={{ color }}>{text} xx</Text>
			<Plyr

			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default AdaloPlyrCustom
