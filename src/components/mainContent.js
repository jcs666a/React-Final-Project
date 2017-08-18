import React from 'react';
import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	ListView,
	Text,
	TextInput,
	View
} from 'react-native';
import Button from 'react-native-button';

const spotifyApis= require('../apis/spotifyApis');

const {
  APP_IP,
  CLIENT_ID
} = require('../constants/index');

class MainContent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			spotifyAccessToken: this.props.mainState.spotifyAccessToken
		}
	}

	searchAnArtist = () => {
		const { mainState } = this.props;
		const searchTerm=this.state.searchText.trim();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.setState({isLoading:true});
		if(searchTerm){
			spotifyApis.searchArtist(this,ds);
		}
	}

	isLoading(){
		const { styles } = this.props;
		return (
			<View style={styles.flexRow}>
				<ActivityIndicator
					color='#fff'
					size='large'
				/>
			</View>
		);
	}

	isLoaded(){
		const { styles } = this.props;
		return (
			<View style={styles.searchResult}>
				<ListView
					style={styles.searchResultList}
					dataSource={this.state.searchArtistResponse}
					renderRow={(rowData) => <Text style={styles.textBlanco}>{rowData.name}</Text>}
				/>
			</View>
		);
	}

	render() {
		const {
			mainState,
			styles
		} = this.props;

		const renderLoader = this.state.isLoading ? this.isLoading() : null;
		const renderList = this.state.searchArtistResponse ? this.isLoaded() : null;

		return (
			<View style={styles.mainContent}>
				<Text style={styles.mainTitle}>
					Welcome to spotySearch!
				</Text>
				<Text style={styles.mainText}>
					Search an artist
				</Text>
				<View style={styles.searchBar}>
					<TextInput
						onChangeText={(searchText) => this.setState({searchText})}
						style={styles.searchText}
						underlineColorAndroid="transparent"
						value={this.state.searchText}
					/>
					<Button
						onPress={this.searchAnArtist}
						style={styles.searchButton} >
						Search
					</Button>
				</View>
				{renderLoader}
				{renderList}
			</View>
		);
	}
}

MainContent.propTypes = {
	mainState: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
};

module.exports = MainContent;