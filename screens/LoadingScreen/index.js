import React, {useState, useEffect} from 'react';
import {Title, Image} from './styles.js';
import {Animated} from 'react-native';
import GradientContainer from '../../components/GradientContainer/index.js';
import Logo from '../../assets/logo.png';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

const Loading = () => {
  const logoAnima = new Animated.Value(0);
  const logoText = new Animated.Value(0);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    animationSetting();

    const k = AsyncStorage.getItem('data').then((value) => {
      if (value !== null) {
        const newValue = JSON.parse(value);

        if (newValue.users.length !== 0) {
          const {role} = newValue.users[0];
          if (role === 'patient') {
            Actions.medicalCard();
          } else {
            Actions.listPatients();
          }
        }
      } else {
        Actions.login();
      }
    });


  }, []);
  const animationSetting = () => {
    Animated.parallel([
      Animated.spring(logoAnima, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }),
    ]).start();
    Animated.timing(logoText, {
      toValue: 1,
      duration: 2000,
    }).start();

    setTimeout(() => {}, 2000);
  };

  return (
    <GradientContainer>
      <Animated.View
        style={{
          opacity: logoAnima,
          top: logoAnima.interpolate({
            inputRange: [0, 1],
            outputRange: [80, 0],
          }),
        }}>
        <Image source={Logo} />
      </Animated.View>
      <Animated.View style={{opacity: logoText}}>
        <Title>Офіційна медична картка громадянина України</Title>
      </Animated.View>
    </GradientContainer>
  );
};

export default Loading;
