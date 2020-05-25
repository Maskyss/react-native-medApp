import React, {useState} from 'react';
import {Title, Input} from '../../styles/global.js';
import GradientContainer from '../../components/GradientContainer/index.js';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import ButtonCustom from '../../components/ButtonCustom/index.js';

const Login = () => {
  const [value1, setvalue1] = useState('');
  const [value2, setvalue2] = useState('');

  const saveValueFunction = () => {
    if (value1) {
      AsyncStorage.setItem('access_token', value1);
      setvalue1('');
    } else {
      alert('Будь ласка заповніть всі поля');
      AsyncStorage.setItem('access_token', 1);

      Actions.listPatients();
    }
  };

  return (
    <GradientContainer>
      <Title>Вхід до кабінету</Title>
      <Input
        onChangeText={(text) => setvalue1(text)}
        value={value1}
        placeholderTextColor="#90FFF2"
        placeholder="Логін"
      />
      <Input
        onChangeText={(text) => setvalue2(text)}
        value={value2}
        placeholderTextColor="#90FFF2"
        placeholder="Пароль"
      />

      <ButtonCustom title={'Вхід'} func={saveValueFunction} />
    </GradientContainer>
  );
};

export default Login;
