import styled from 'styled-components';
import {StyleSheet} from 'react-native';

const Title = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: #128cd0;
  text-align: right;
  text-transform: uppercase;
`;

const Image = styled.Image`
  height: 30px;
  width: 50px;
  margin-bottom: 10px;
`;
const AccountImage = styled.Image`
  height: 90px;
  width: 90px;
`;

const styles = StyleSheet.create({
  animatedBox: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: 'white',

    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    marginLeft: 50,
    fontFamily: 'Kailasa',
    color: '#083B58',
  },
  name: {
    fontSize: 18,
    fontWeight: '900',
    fontFamily: 'Kailasa',
    color: '#083B58',
    textAlign: 'center',
  },
  withImage: {
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    paddingTop: 60,
  },
  button: {
    fontSize: 21,
    fontWeight: '900',
    fontFamily: 'Iowan Old Style',
    color: '#252525',
    padding: 20,
    borderBottomWidth: 3,
    backgroundColor: 'white',
    borderBottomColor: '#24A0BD',
    textAlign: 'center',
  },
  buttonBottom: {
    marginBottom: 10,
    marginTop: 'auto',
    borderBottomColor: 'white',
  },
});

export {Title, Image, AccountImage, styles};
