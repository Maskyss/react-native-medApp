import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import {Text} from 'react-native';
import gql from 'graphql-tag';
import {useLazyQuery} from '@apollo/react-hooks';
import GradientContainer from '../../components/GradientContainer/index.js';
import ButtonCustom from '../../components/ButtonCustom/index.js';
import {Title, Input} from '../../styles/global.js';

// const GET_USER = gql`
//   query {
//     users(where: {login: "grgrAa78", password: "123123"}) {
//       id
//       name
//       role
//     }
//   }
// `;

const GET_USER = gql`
  query getUser($login: String!, $password: String!) {
    users(where: {login: $login, password: $password}) {
      id
      name
      surname
      middleName
      sex
      role
      login
      password
      record {
        id
      }
      patients {
        id
        name
        surname
        middleName
        sex
        role
      }
    }
  }
`;

const Login = () => {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');

  const [getuser, {data, loading, error, called}] = useLazyQuery(GET_USER);

  useEffect(() => {
    AsyncStorage.getItem('data').then((value) => {
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
      }
    });
  }, []);
  const saveValueFunction = () => {
    if (login !== '' && password !== '') {
      getuser({variables: {login: login, password: password}});
      if (data !== undefined) {
        if (data.users.length !== 0) {
          const {id, role} = data.users[0];
          console.log(data.users[0]);
          AsyncStorage.setItem('id', id);
          AsyncStorage.setItem('data', JSON.stringify(data));

          if (role === 'patient') {
            Actions.medicalCard();
          } else {
            Actions.listPatients();
          }
        }
      } else {
        console.log(data);
      }
    } else {
      alert('Будь ласка заповніть всі поля');
    }
  };

  if (loading) return <Text>Loading ...</Text>;

  return (
    <GradientContainer>
      <Title>Вхід до кабінету</Title>
      <Input
        onChangeText={(text) => setlogin(text)}
        value={login}
        placeholderTextColor="#90FFF2"
        placeholder="Логін"
      />
      <Input
        onChangeText={(text) => setpassword(text)}
        value={password}
        placeholderTextColor="#90FFF2"
        placeholder="Пароль"
      />
      <ButtonCustom title={'Вхід'} func={saveValueFunction} />
    </GradientContainer>
  );
};

export default Login;
