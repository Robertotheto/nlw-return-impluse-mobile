import { Camera } from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components';
import { Trash } from "phosphor-react-native";
import { Container, Image } from './styles';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  const theme = useTheme();
  return (
    <Container
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot ?
          <>
            <Image
              source={{ uri: screenshot }}
            />
            <Trash
              size={22}
              color={theme.colors.text_secondary}
              weight="fill"
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
            />
          </> : <Camera
            size={24}
            color={theme.colors.text_secondary}
            weight="bold"
          />
      }
    </Container>
  );
}