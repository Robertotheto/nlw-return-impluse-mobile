import styled from 'styled-components/native';

export const ButtonFeedback = styled.TouchableOpacity`
flex: 1;
height: 40px;
background-color: ${({ theme }) => theme.colors.brand};
justify-content: center;
align-items: center;
border-radius: 4px;
`;
export const Title = styled.Text`
font-size: 14px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.text_on_brand_color};
`;
export const Indicator = styled.ActivityIndicator.attrs(({
  theme }) => ({
    color: theme.colors.text_on_brand_color,
  }))`
`;