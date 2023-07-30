import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styled } from 'styled-components/native';

export const Wrapper = styled(ScrollView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.secondary};
`;

export const Container = styled.View`
  margin: 70px 12px 0 12px;
  border-radius: 24px;
  padding: 16px 12px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.background};
`;

export const ScreenTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.description};
`;

export const DetailRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const IconContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const EditContainer = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled.View`
  flex: 6;
`;

export const DetailLabel = styled.Text`
  color: gray;
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export const DetailInfo = styled(TextInput)`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
  background-color: ${(props) => props.theme.colors.ui.background};
  opacity: ${(props) => (props.editable ? 1 : 0.6)};
  width: 100%;
`;
