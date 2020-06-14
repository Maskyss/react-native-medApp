import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

import ButtonCustom from '../../components/ButtonCustom';
import Menu from '../../components/Menu';

import {BorderPatient, Name, Date, SubTextDate, PatientImage} from './styles';
import {DisplayFlexRow} from '../../styles/global';

import Patient from '../../assets/patientFace.png';

const ListPatients = () => {
  const [listOfPatients, setListOfPatients] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('data').then((value) => {
      if (value !== null) {
        const newValue = JSON.parse(value);
        if (newValue.users.length !== 0) {
          const {patients} = newValue.users[0];
          console.log(patients)
          setListOfPatients(patients);
        }
      }
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#EFEFEF'}}>
      <Menu text={'Список пацієнтів'}>
        <View>
          {listOfPatients.map((item, index) => {
            return (
              <BorderPatient key={index}>
                <DisplayFlexRow>
                  <PatientImage source={Patient} />

                  <View>
                    <Name>{`${item.surname} ${item.name} ${item.middleName}`}</Name>
                    <Date>{item.birth}</Date>
                    <Date>
                      <SubTextDate>Останній візит: </SubTextDate>
                      {item.lastVisit}
                    </Date>
                  </View>
                </DisplayFlexRow>
                <DisplayFlexRow
                  style={{
                    marginTop: 15,
                  }}>
                  <ButtonCustom
                    title={'Медична картка'}
                    func={() => Actions.medicalCard()}
                  />
                  <ButtonCustom title={'Новий запис'} func={console.log('')} />
                  <ButtonCustom title={'Декларація'} func={console.log('')} />
                </DisplayFlexRow>
              </BorderPatient>
            );
          })}
        </View>
      </Menu>
    </View>
  );
};

export default ListPatients;
