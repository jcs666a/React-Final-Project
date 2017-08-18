import React from 'react';
import { View } from 'react-native';

const spotifyApis     = require('./src/apis/spotifyApis');
const styles          = require('./src/styles/index');
const utilities       = require('./src/utilities/index');
// Components
const MainContent     = require('./src/components/mainContent');
const NavBar          = require('./src/components/navBar');
const SpotifyWebView  = require('./src/components/spotifyWebView');

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadWebView: false,
      text: ''
    }
  }

  getSpotifyProfile(){
    spotifyApis.myProfile(this);
  }

  okReturned(response){
//    console.log(response);
    const {
      spotifyAccessToken,
      spotifyTokenType
    } = utilities.getAccessToken(response);

    if(spotifyAccessToken){
      this.setState({
        spotifyAccessToken: spotifyAccessToken,
        spotifyTokenType: spotifyTokenType
      });
      this.getSpotifyProfile();
    } else {
      this.setState({
        loadWebView: true
      });
    }
  }

  errorReturned(error){
    console.log(error);
    this.setState({
      isLoading: false,
      dataSource: error
    }, function(){
    });
  }

  componentDidMount() {
    spotifyApis.authorizeMe(this);
  }

  loadingSpotify(){
    return (
      <View style={styles.loaderIndicator}>
        <SpotifyWebView loadWebView={this.state.loadWebView} styles={styles} />
      </View>
    );
  }

  loadedSpotify(){
    return (
      <View>
        <MainContent styles={styles} mainState={this.state} />
      </View>
    );
  }

  render() {

    const renderContent = this.state.isLoading ? this.loadingSpotify() : this.loadedSpotify();
    const myName = this.state.userName || '...ingresando';

    return (
      <View style={styles.mainContainer}>
        <NavBar styles={styles} myName={myName} />
        {renderContent}
      </View>
    );

  }
}
