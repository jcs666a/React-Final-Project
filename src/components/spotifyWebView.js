import React from 'react';
import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	View,
	WebView
} from 'react-native';

const utilities = require('../utilities/index');
const {
  APP_IP,
  CLIENT_ID
} = require('../constants/index');
const {
  AUTHORIZE
} = require('../constants/endpoints');

class SpotifyWebView extends React.Component {

	render() {
		const {
			loadWebView,
			styles
		} = this.props;
		const url=utilities.stringReplace(AUTHORIZE,[CLIENT_ID,APP_IP]);

		return loadWebView ? (
			<View style={styles.flexRow}>
				<WebView
					source={{uri: url}}
					style={styles.webViewLogin}
				/>
			</View>
		) : (
			<View style={styles.flexRow}>
				<ActivityIndicator
					color='#fff'
					size='large'
				/>
			</View>
		);
	}
}

SpotifyWebView.propTypes = {
	loadWebView: PropTypes.bool, 
    styles: PropTypes.object.isRequired
};

module.exports = SpotifyWebView;