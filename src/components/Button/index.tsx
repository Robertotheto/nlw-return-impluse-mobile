import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonFeedback, Indicator, Title } from './styles';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button({ isLoading, ...rest }: Props) {
  return (
    <ButtonFeedback {...rest}>
      {isLoading
        ? <Indicator />
        : <Title>Enviar Feedback</Title>}
    </ButtonFeedback>
  );
}