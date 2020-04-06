import React from 'react';
import {Container} from '../../src/styles/global.js';

const GradientContainer = ({children}) => {
  return (
    <Container
      colors={[
        'rgba(12, 252, 165, 1) ',
        'rgba(8, 216, 229, 0.95)',
        'rgba(6, 156, 220, 0.75)',
      ]}>
      {children}
    </Container>
  );
};
export default GradientContainer;
