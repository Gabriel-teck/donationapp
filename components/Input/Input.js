import PropTypes from 'prop-types';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import style from './style';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        keyboardType={props.keyboardType}
        placeholder={props.placeholder ? props.placeholder : null}
        secureTextEntry={props.secureTextEntry}
        style={style.input}
        value={value}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool
};

export default Input;
