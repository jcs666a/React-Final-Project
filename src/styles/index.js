import React from 'react';
import {
	Dimensions,
	StyleSheet
} from 'react-native';

const colors = require('../constants/colors');
let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
	flexRow: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	loaderIndicator: {
		height: height - 64,
		backgroundColor: colors.BLACK
	},
	mainContainer: {
		height: height,
		backgroundColor: colors.BLACK_B
	},
	mainContent: {
		height: height - 69,
		marginTop: 5,
		marginLeft: 8,
		marginRight: 8
	},
	mainTitle: {
		color: colors.WHITE_C,
		fontFamily: 'notoserif',
		fontSize: 45,
		marginBottom: 20
	},
	mainText: {
		color: colors.WHITE,
		fontSize: 18
	},
	navBar: {
		marginTop: 24,
		height: 40,
		backgroundColor: colors.BLACK
	},
	navbBarImage: {
		height: 30,
		width: 30,
		marginTop: 5,
		marginRight: 10
	},
	searchBar:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20
	},
	searchButton: {
		color: colors.BLACK_B,
		backgroundColor: colors.WHITE,
		padding: 8,
		borderRadius: 4
	},
	searchResult:{
		height: height - 300
	},
	searchResultList:{
		flex: 1
	},
	searchText: {
		color: colors.BLACK_B,
		backgroundColor: colors.WHITE,
		borderColor: colors.GRAY_B,
		borderWidth: 2,
		marginRight: 10,
		fontSize: 18,
		height: 40,
		width: 250
	},
	textBlanco: {
		color: colors.WHITE
	},
	textNavBar: {
		color: colors.WHITE,
		marginTop: 10
	},
	webViewLogin: {
		marginTop: 0,
		height:500
	}
});

module.exports = styles;