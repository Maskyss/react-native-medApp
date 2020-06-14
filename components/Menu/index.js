import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import {Image, AccountImage, styles} from './styles';
import MenuImg from '../../assets/menu.png';
import {imageMan} from '../../consts';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';

import close from '../../assets/close.png';

import {DisplayFlexRow} from '../../styles/global';

const menuText = {
  doctor: ['Пацієнти', 'Журнал', 'Декларації', 'Запити'],
  patient: [
    'Медична картка',
    'Календар',
    'Загальні відомості',
    'Останній візит',
  ],
};

class Menu extends React.Component {
  state = {
    open: false,
    currentUser: menuText.doctor,
    name: '',
    surname: '',
    middleName: '',
    image: imageMan.doctorwoman,
  };
  componentDidMount = () => {
    AsyncStorage.getItem('data').then((value) => {
      if (value !== null) {
        const newValue = JSON.parse(value);
        if (newValue.users.length !== 0) {
          const {name, middleName, surname, sex, role} = newValue.users[0];
          this.setState({name, middleName, surname});

          if (sex === 'man' && role === 'doctor') {
            this.setState({image: imageMan.doctorman});
          } else if (sex === 'man' && role === 'patient') {
            this.setState({image: imageMan.patientMan});
          } else if (sex === 'woman' && role === 'doctor') {
            this.setState({image: imageMan.doctorwoman});
          } else if (sex === 'woman' && role === 'patient') {
            this.setState({image: imageMan.patientWoman});
          }
        }
      }
    });
  };
  toggleOpen = () => {
    this.setState({open: !this.state.open});
  };

  logOut = () => {
    AsyncStorage.removeItem('data');
    Actions.login();
    this.setState({open: !this.state.open});
  };

  drawerContent = () => {
    const {currentUser, surname, middleName, name, image} = this.state;
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <DisplayFlexRow style={styles.withImage}>
          <AccountImage source={image} />
          <TouchableOpacity
            onPress={this.toggleOpen}
            style={{
              position: 'absolute',
              right: 30,
              top: 60,
            }}>
            <Image source={close} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        </DisplayFlexRow>
        <Text style={styles.name}>{surname}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{middleName}</Text>
        <View style={{marginTop: 50}}>
          {currentUser.map((item) => {
            return (
              <TouchableOpacity style={styles.button} onPress={this.toggleOpen}>
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={styles.button} onPress={this.toggleOpen}>
          <Text style={styles.text}>Особисті дані</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.toggleOpen}>
          <Text style={styles.text}>Допомога</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonBottom]}
          onPress={this.logOut}>
          <Text style={styles.text}>Вихід</Text>
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
export default Menu;
