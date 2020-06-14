import styled from 'styled-components';

const BorderPatient = styled.View`
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  margin: 5px;
`;
const Name = styled.Text`
  color: black;
  font-weight: bold;
  font-family: Kailasa;
`;
const Date = styled.Text`
  color: black;
  font-family: Iowan Old Style;
`;
const SubTextDate = styled.Text`
  font-weight: bold;
  color: black;
  font-family: Iowan Old Style;
`;
const PatientImage= styled.Image`
  height:65px;
  width:65px;
  margin-right:10px;
`

export {BorderPatient, Name, Date, SubTextDate,PatientImage };
