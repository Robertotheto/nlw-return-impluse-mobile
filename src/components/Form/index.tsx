import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';
import { captureScreen } from 'react-native-view-shot';
import { FeedbackType } from '../Widget';
import * as FileSystem from 'expo-file-system';
import {
  Container,
  Header,
  Footer,
  Image,
  Input,
  Title,
  Text
} from './styles';
import { api } from '../../libs/api';
import { useTheme } from 'styled-components'

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
  const theme = useTheme()
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
      .then(uri => setScreenshot(uri))
      .catch(err => console.error(err));
  }
  function handleScreenshotRemove() {
    setScreenshot(null);
  }
  async function handleSentFeedback() {
    if (isSendingFeedback) {
      return;
    }
    setIsSendingFeedback(true);
    const screenshotBase64 = screenshot &&
      await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });
    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      });
      onFeedbackSent();
    } catch (err) {
      console.error(err);
      setIsSendingFeedback(false);
    }
  }
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <Title>
          <Image
            source={feedbackTypeInfo.image}
          />
          <Text>
            {feedbackTypeInfo.title}
          </Text>
        </Title>
      </Header>
      <Input
        multiline
        placeholder="Algo não está funcionando bem? Queremos corrigir. 
      Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />
      <Footer>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
        />
        <Button
          onPress={handleSentFeedback}
          isLoading={isSendingFeedback}
        />
      </Footer>
    </Container>
  );
}