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
  text-transform: uppercase;
`;

const Input = styled.TextInput`
  height: 40px;
  width:100%;
  border-color: gray;
  border-width: 1px;
  margin: 10px 0;
`;

const Button = styled.Button``;

export {Container,  Input, Button,Title};
