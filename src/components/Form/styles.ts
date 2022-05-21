import styled from "styled-components/native";

export const Container = styled.View`
padding: 0 24px;
align-items: center;
`;
export const Header = styled.View`
flex-direction: row;
margin: 16px 0;
`;
export const Title = styled.View`
flex: 1;
flex-direction: row;
justify-content: center;
align-items: center;
padding-right: 24px;
`;
export const Text = styled.Text`
font-size: 20px;
color: ${({ theme }) => theme.colors.text_primary};
font-family: ${({ theme }) => theme.fonts.medium};
`;
export const Image = styled.Image`
width: 24px;
height: 24px;
margin-right: 8px;
`;
export const Input = styled.TextInput`
height: 112px;
padding: 12px;
margin-bottom: 8px;
border-radius: 4px;
border-width: 1px;
border-color: ${({ theme }) => theme.colors.stroke};
color: ${({ theme }) => theme.colors.text_primary};
font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Footer = styled.View`
flex-direction: row;
margin-bottom: 16px;
`;