import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

import { Styles } from './Button.styles';

const Button = ({
  text,
  loading,
  disabled,
  height,
  width,
  onPress
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled || loading}
    style={Styles.container(height, width, disabled, loading)}
  >
    {loading ? <ActivityIndicator /> : <Text style={Styles.text}>{text}</Text>}
  </TouchableOpacity>
);

export default Button;
