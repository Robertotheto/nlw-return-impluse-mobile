import React from 'react';
import {
  TouchableOpacityProps,
  ImageProps,
} from 'react-native';

import { Container, Image, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...rest }: Props) {
  return (
    <Container
      {...rest}
    >
      <Image
        source={image}
      />
      <Title>
        {title}
      </Title>

    </Container>
  );
}