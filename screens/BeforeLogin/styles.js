import styled from 'styled-components';

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #128cd0;
  text-transform: uppercase;
`;
const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
  width: 90%;
`;
const ViewC = styled.View`
  border: 2px solid #128cd0;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  margin: 10px;
  align-items: center;
  justify-content: space-between;
  background: rgba(241, 241, 242, 0.8);
  padding: 10px;
`;

export {Title, ViewC, TouchableWithoutFeedback};
