import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Menu from '../../components/Menu';
import {imageMan} from '../../consts';
import AsyncStorage from '@react-native-community/async-storage';

import {BorderPatient, Name, Date, SubTextDate, PatientImage} from './styles';
import {DisplayFlexRow} from '../../styles/global';

const MedicalCard = () => {
  const [person, setPerson] = useState({surname: '', name: '', middleName: ''});
  const [image, setImage] = useState(imageMan.doctorman);
  useEffect(() => {
    AsyncStorage.getItem('data').then((value) => {
      if (value !== null) {
        const newValue = JSON.parse(value);
        if (newValue.users.length !== 0) {
          const item = newValue.users[0];
          const {sex, role} = newValue.users[0];
          setPerson(item);

          if (sex === 'man' && role === 'doctor') {
            setImage(imageMan.doctorman);
          } else if (sex === 'man' && role === 'patient') {
            setImage(imageMan.patientMan);
          } else if (sex === 'woman' && role === 'doctor') {
            setImage(imageMan.doctorwoman);
          } else if (sex === 'woman' && role === 'patient') {
            setImage(imageMan.patientWoman);
          }
        }
      }
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#EFEFEF'}}>
      <Menu text={'Медична картка'}>
        <View>
          <BorderPatient>
            <DisplayFlexRow>
              <PatientImage source={image} />
              <View>
                <Name>{`${person.surname} ${person.name} ${person.middleName}`}</Name>
                {/* <Date>{person.birth}</Date> */}
                <Date>
                  <SubTextDate>Останній візит: </SubTextDate>
                  10.10.2020
                </Date>
              </View>
            </DisplayFlexRow>
          </BorderPatient>
        </View>
      </Menu>
    </View>
  );
};

export default MedicalCard;
