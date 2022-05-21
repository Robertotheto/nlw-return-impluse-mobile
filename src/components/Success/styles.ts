import styled from "styled-components/native";

export const Container = styled.View`
align-items: center;
`;
export const Image = styled.Image`
width: 36px;
height: 36px;
margin-top: 42px;
margin-bottom: 10px;
`;
export const Title = styled.Text`
font-size: 20px;
margin-bottom: 24px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.text_primary};
`;
export const Button = styled.TouchableOpacity`
height: 40px;
background-color: ${({ theme }) => theme.colors.surface_secondary};
border-radius: 4px;
justify-content: center;
align-items: center;
padding: 0 24px;
margin-bottom: 56px;
`;
export const ButtonTitle = styled.Text`
font-size: 14px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.text_primary};
`;