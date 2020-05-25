import React from 'react';
import {View} from 'react-native';
import Menu from '../../components/Menu';

import {BorderPatient, Name, Date, SubTextDate, PatientImage} from './styles';
import ButtonCustom from '../../components/ButtonCustom';
import Patient from '../../assets/patientFace.png';
import {DisplayFlexRow} from '../../styles/global';

const ListPatients = () => {
  const listOfPatients = [
    {
      name: 'Андрій',
      surname: 'Бровко',
      middleName: 'Миколаївна',
      birth: '24.05.1975',
      lastVisit: '19.12.2020',
    },
    {
      name: 'Андрій',
      surname: 'Бровко',
      middleName: 'Миколаївна',
      birth: '24.05.1975',
      lastVisit: '19.12.2020',
    },
    {
      name: 'Андрій',
      surname: 'Бровко',
      middleName: 'Миколаївна',
      birth: '24.05.1975',
      lastVisit: '19.12.2020',
    },
  ];

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
                      <SubTextDate>Останній візит: </SubTextDate>{' '}
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
                    func={console.log('')}
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
