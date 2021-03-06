import React, {useEffect, useState} from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import Menu from '../../components/Menu';
import QRCode from 'react-native-qrcode-generator';

const QrCode = () => {
  const [text, setText]= useState('ddddd')
  useEffect(() => {}, []);

  return (
    <View style={{flex: 1, backgroundColor: '#EFEFEF'}}>
      <Menu text={'Медична картка'}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={text}
        />
        <QRCode
          value={text}
          size={200}
          bgColor='purple'
          fgColor='white'/>
      </View>
      </Menu>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
  },

  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
      padding: 5,
  }
});

export default QrCode;

// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet} from 'react-native';
// import {
//   Text,
//   TouchableOpacity,
//   Linking
// } from 'react-native';
 
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

// const QrCode = () => {
//   const [text, setText] = useState('ddddd');
//   useEffect(() => {}, []);
//   const onSuccess = (e) => {
//     Linking.openURL(e.data).catch((err) =>
//       console.error('An error occured', err),
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <QRCodeScanner
//         onRead={onSuccess}
//         flashMode={RNCamera.Constants.FlashMode.torch}
//         topContent={
//           <Text style={styles.centerText}>
//             Go to{' '}
//             <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//             your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     margin: 10,
//     borderRadius: 5,
//     padding: 5,
//   },
// });

// export default QrCode;
