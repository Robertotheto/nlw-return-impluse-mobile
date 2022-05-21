import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { ButtonWidget } from './styles';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Success } from '../Success';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {

  const theme = useTheme();

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }
  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }
  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <ButtonWidget
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </ButtonWidget>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={{
          backgroundColor: theme.colors.surface_primary,
          paddingBottom: getBottomSpace() + 16,
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.text_primary,
          width: 56,
          padding: 0,
        }}
      >
        {
          feedbackSent ?
            <Success onSentAnotherFeedback={handleRestartFeedback} />
            :
            <>
              {
                feedbackType ?
                  <Form
                    feedbackType={feedbackType}
                    onFeedbackSent={handleFeedbackSent}
                    onFeedbackCanceled={handleRestartFeedback}
                  />
                  :
                  <Options onFeedbackTypeChanged={setFeedbackType} />
              }
            </>
        }
      </BottomSheet>
    </>
  );
}
export default gestureHandlerRootHOC(Widget);