import React, { useEffect, useState } from 'react';
import { Ionicons, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  DetailContainer,
  DetailInfo,
  DetailRow,
  EditContainer,
  IconContainer,
  ScreenTitle,
  Wrapper,
} from './profile.style';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

const DETAIL = [
  {
    label: 'Full name',
    field: 'name',
    icon: <Ionicons name="person" color="#D17842" size={28} />,
  },
  {
    label: 'Birthday',
    field: 'birthday',
    icon: <MaterialIcons name="cake" color="#D17842" size={28} />,
  },
  {
    label: 'Phone number',
    field: 'phone',
    icon: <Ionicons name="phone-portrait" color="#D17842" size={28} />,
  },
  {
    label: 'Email',
    field: 'email',
    icon: <MaterialCommunityIcons name="email" color="#D17842" size={28} />,
  },
  {
    label: 'Address',
    field: 'address',
    icon: <Ionicons name="location" color="#D17842" size={28} />,
  },
];

export const Profile = ({ route }) => {
  const { user } = route.params;
  const [editable, setEditable] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    let tmpData = {};
    DETAIL.forEach((ele) => {
      tmpData[ele.field] = user[ele.field];
    });
    setData(tmpData);
  }, [user]);

  useEffect(() => {
    const falseArray = new Array(DETAIL.length).fill(false);
    setEditable(falseArray);
  }, []);

  const detailArray = Array.from(DETAIL);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper>
        <Container>
          <ScreenTitle>PROFILE</ScreenTitle>

          {detailArray.map((ele, index) => (
            <DetailRow key={index}>
              <IconContainer>{ele.icon}</IconContainer>
              <DetailContainer>
                <DetailInfo
                  label={ele.label}
                  value={data[ele.field]}
                  onChangeText={(text) =>
                    setData((prev) => ({
                      ...prev,
                      [ele.field]: text,
                    }))
                  }
                  placeholder={ele.label}
                  cursorColor="#D17842"
                  textColor="#D17842"
                  editable={editable[index]}
                  underlineColor="#D8CBA5"
                  activeUnderlineColor="#D17842"
                  numberOfLines={1}
                  multiline={false}
                />
              </DetailContainer>
              <EditContainer
                onPress={() => {
                  if (editable[index]) {
                    user[ele.field] = data[ele.field];
                  }
                  const tmp = [...editable];
                  tmp[index] = !tmp[index];
                  setEditable(tmp);
                }}
              >
                <Feather name={editable[index] ? 'save' : 'edit'} color="#D17842" size={28} />
              </EditContainer>
            </DetailRow>
          ))}
        </Container>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
