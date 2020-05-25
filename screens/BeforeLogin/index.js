// import React, {useState} from 'react';
// import {Title, ViewC, TouchableWithoutFeedback} from './styles';
// import {Image} from 'react-native';
// import GradientContainer from '../../components/GradientContainer/index.js';
// import MenuContainer from '../../components/Menu/index.js';
// import img1 from '../../assets/medical.png';
// import img2 from '../../assets/patient.png';
// import img3 from '../../assets/pharma.png';
// import {Actions} from 'react-native-router-flux';
// import {MenuProvider} from 'react-native-popup-menu';
// const BeforeLogin = () => {
//   return (
//     <GradientContainer>
//       <MenuProvider>
//         <MenuContainer/>
//       </MenuProvider>

//         <TouchableWithoutFeedback onPress={() => Actions.loginUser()}>
//           <ViewC>
//             <Image source={img1} />
//             <Title>Лікар</Title>
//           </ViewC>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback onPress={() => Actions.loginPatient()}>
//           <ViewC>
//             <Image source={img2} />
//             <Title>Пацієнт</Title>
//           </ViewC>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback onPress={() => Actions.loginUser()}>
//           <ViewC>
//             <Image source={img3} />
//             <Title>Фармацевт</Title>
//           </ViewC>
//         </TouchableWithoutFeedback>
//     </GradientContainer>
//   );
// };

// export default BeforeLogin;

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Menu from '../../components/Menu';
import Login from '../Login';

export default class BeforeLogin extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Menu>
          <Login />
        </Menu>
      </View>
    );
  }
}
