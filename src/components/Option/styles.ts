import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
width: 104px;
height: 112px;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 8px;
margin: 0 8px;
background-color: ${({ theme }) => theme.colors.surface_secondary};
`;
export const Image = styled.Image`
width: 40px;
height: 40px;
`;
export const Title = styled.Text`
font-size: 18px;
margin-top: 8px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.text_primary};
`;