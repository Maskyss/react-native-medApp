import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {ButtonC, TextC} from './styles';

const ButtonCustom = ({title, func}) => {
  return (
    <TouchableWithoutFeedback onPress={() => func()}>
      <ButtonC>
        <TextC> {title}</TextC>
      </ButtonC>
    </TouchableWithoutFeedback>
  );
};

export default ButtonCustom;
