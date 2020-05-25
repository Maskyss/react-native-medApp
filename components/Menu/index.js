import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import {Image, AccountImage} from './styles';
import MenuImg from '../../assets/menu.png';
import doctorWoman from '../../assets/doctorWoman.png';

class Menu extends React.Component {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({open: !this.state.open});
  };

  drawerContent = () => {
    return (
      <View>
        <AccountImage source={doctorWoman} />

        <TouchableOpacity onPress={this.toggleOpen}  >
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <MenuDrawer
        open={this.state.open}
        drawerContent={this.drawerContent()}
        drawerPercentage={100}
        animationTime={250}
        overlay={true}
        opacity={0.4}>
        <View style={styles.body}>
          <TouchableOpacity onPress={this.toggleOpen}>
            <Image source={MenuImg} />
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        {this.props.children}
      </MenuDrawer>
    );
  }
}
const styles = StyleSheet.create({
  animatedBox: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    marginLeft: 50,
    fontFamily: 'Iowan Old Style',
    color: '#083B58',
  },
});

export default Menu;
