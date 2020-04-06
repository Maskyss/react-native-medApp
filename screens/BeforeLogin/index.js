import React, {useState} from 'react';
import {Title, ViewC} from './styles';
import {Image} from 'react-native';
import GradientContainer from '../../components/GradientContainer/index.js';
import img1 from '../../assets/medical.png';
import img2 from '../../assets/patient.png';
import img3 from '../../assets/pharma.png';

const BeforeLogin = () => {
  return (
    <GradientContainer>
      <ViewC>
        <Image source={img1} />
        <Title>Лікар</Title>
      </ViewC>
      <ViewC>
        <Image source={img2} />
        <Title>Пацієнт</Title>
      </ViewC>

      <ViewC>
        <Image source={img3} />
        <Title>Фармацевт</Title>
      </ViewC>
    </GradientContainer>
  );
};

export default BeforeLogin;
