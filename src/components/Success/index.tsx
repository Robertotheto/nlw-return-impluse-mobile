import React from 'react';
import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { Container, Image, Button, Title, ButtonTitle } from './styles';

interface Props {
  onSentAnotherFeedback: () => void;
}

export function Success({ onSentAnotherFeedback }: Props) {
  return (
    <Container>
      <Image
        source={successImg}
      />
      <Title>
        Agradecemos o feedback
      </Title>
      <Button
        onPress={onSentAnotherFeedback}
      >
        <ButtonTitle>
          Quero enviar outro
        </ButtonTitle>
      </Button>
      <Copyright />
    </Container>
  );
}