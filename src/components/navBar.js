import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  View
} from 'react-native';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      myName,
      styles
    } = this.props;

    return (
      <View style={styles.navBar}>
        <View style={styles.flexRow}>
          <Image
            source={require('../styles/img/logoNoText.png')}
            style={styles.navbBarImage}
          />
          <Text
            style={styles.textNavBar}
          >
            {myName}
          </Text>
        </View>
      </View>
    );
  }
}

NavBar.propTypes = {
    styles: PropTypes.object.isRequired,
    myName: PropTypes.string.isRequired
};

module.exports = NavBar;