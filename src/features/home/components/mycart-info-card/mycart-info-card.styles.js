import { TouchableOpacity } from 'react-native';
import { styled } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

export const DeleteButton = styled(TouchableOpacity)`
  background-color: #ffe5e5;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 80px;
`;

export const DeleteIcon = styled(AntDesign)`
  transform: ${(props) => props.scale};
`;
