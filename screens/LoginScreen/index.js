import React, {useState} from 'react';
import {Title, Input, Button} from '../../src/styles/global.js';
import GradientContainer from '../../components/GradientContainer/index.js';
import AsyncStorage from '@react-native-community/async-storage';

const Login = () => {
  const [value1, setvalue1] = useState('');
  const [value2, setvalue2] = useState('');

  const saveValueFunction = () => {
    if (value1) {
      AsyncStorage.setItem('access_token', value1);
      setvalue1('');
    } else {
      alert('Please fill data');
    }
  };

  return (
    <GradientContainer>
      <Title>Loading Screen</Title>
      <Input onChangeText={(text) => setvalue1(text)} value={value1} />
      <Input onChangeText={(text) => setvalue2(text)} value={value2} />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => saveValueFunction()}
      />
    </GradientContainer>
  );
};

export default Login;
