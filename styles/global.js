import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

const Container = styled(LinearGradient)`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: #128cd0;
  text-align: right;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  border-color: #90fff2;
  border-width: 1px;
  border-radius: 5px;

  height: 50px;
  margin: 5px 0;
  padding: 10px;
`;
const DisplayFlexRow = styled.View`
  display: flex;
  flex-direction:row;
`;


export {Container, Input, DisplayFlexRow, Title};
