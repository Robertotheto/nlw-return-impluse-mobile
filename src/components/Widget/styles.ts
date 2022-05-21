import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const ButtonWidget = styled.TouchableOpacity`
width: 48px;
height: 48px;
border-radius: 24px;
background-color: ${({ theme }) => theme.colors.brand};
justify-content: center;
align-items: center;
position: absolute;
right: 16px;
bottom: ${getBottomSpace() + 16}px;
`;