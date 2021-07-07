import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
width: ${({ width }) => width - 40}px;
height: 60px;
margin: 3px 0;
padding: 15px 20px;
border-radius: 10px;
font-size: 25px;
background-color: ${({ theme }) => theme.itemBackground};
color: ${({ theme }) => theme.text};
`;


const Input = ({
  placeholder,value,onChangeText,onSubmitEditing
}) => {
  // const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none"
      // 자동 대문자 기능 off
      autoCorrect={false}
      // 자동 오타 수정 off
      returnKeyType="done" 
      // 리턴키의 타입을 done으로 지정 https://eloquence-developers.tistory.com/137
      keyboardAppearance="dark"
      // 아이폰의 키보드 색상을 지정해줄 수 있다.
      value={value}
      onChangeText={onChangeText}
      // 텍스트가 생성이 되면 실행되는 함수
      onSubmitEditing={onSubmitEditing}
      // 제출버튼 누르면 생성되는 함수
      />
  );
};

Input.propTypes = {
  // prop의 타입을 정해줄수있다.
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  // isRequired : 필수로 들어와야 한다.
  onSubmitEditing: PropTypes.func.isRequired,
};


export default Input;