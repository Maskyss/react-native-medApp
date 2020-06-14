import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Menu from '../../components/Menu';
import AsyncStorage from '@react-native-community/async-storage';

import {SubMenu, Tab, TabText, ChooseTabText, ListTabs} from './styles';
import {DisplayFlexRow} from '../../styles/global';

const subTabs = [
  {id: 0, title: 'Історія хвороби'},
  {id: 1, title: 'Первинний діагноз'},
  {id: 2, title: 'Скарги'},
  {id: 3, title: 'Призначення'},
  {id: 4, title: 'Аналізи'},
  {id: 5, title: 'Алергії'},
  {id: 6, title: 'Обстеження'},
];

const Record = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(false);


  return (
    <View style={{flex: 1, backgroundColor: '#EFEFEF'}}>
      <Menu text={'№19 ОРВІ'}>
        <View>
          <DisplayFlexRow style={{jalignItems: 'center'}}>
            <Tab style={{width: '80%'}}>
              <TabText>{subTabs[activeTab].title}</TabText>
            </Tab>
            <Tab style={{width: '20%'}}>
              <TouchableOpacity onPress={() => setActive(!active)}>
                <ChooseTabText>...</ChooseTabText>
              </TouchableOpacity>
            </Tab>
          </DisplayFlexRow>
          {active && (
            <SubMenu>
              <Tab>
                <TouchableOpacity onPress={() => setActive(!active)}>
                  <TabText style={{color: '#bbbbbb'}}>
                    Оберіть вкладинку
                  </TabText>
                </TouchableOpacity>
              </Tab>
              {subTabs.map((item, index) => {
                return (
                  item.id !== activeTab && (
                    <ListTabs key={index}>
                      <TouchableOpacity
                        onPress={() => {
                          setActiveTab(item.id);
                          setActive(false);
                        }}>
                        <TabText>{item.title}</TabText>
                      </TouchableOpacity>
                    </ListTabs>
                  )
                );
              })}
            </SubMenu>
          )}
          <View>
            
          </View>
        </View>
      </Menu>
    </View>
  );
};

export default Record;
