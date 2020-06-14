import styled from 'styled-components';

const Tab = styled.View`
  border: 1px solid #dddddd;
  background-color: #ffffff;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TabText = styled.Text`
  text-align: center;
  font-size: 18px;
`;
const ChooseTabText = styled(TabText)`
  color: #bbbbbb;
  font-size: 20px;
`;

const ListTabs = styled(Tab)`
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

const SubMenu = styled.View`
  position: absolute;
  background-color: #ffffff;
  right: 0;
  width: 50%;
  border-radius: 10px;
`;

export {SubMenu, Tab, ChooseTabText, TabText, ListTabs};
