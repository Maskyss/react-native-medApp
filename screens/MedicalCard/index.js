import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Menu from '../../components/Menu';
import {imageMan,returnImage} from '../../consts';
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

         setImage(returnImage(sex, role))
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
