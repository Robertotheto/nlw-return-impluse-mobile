
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
width: 40px;
height: 40px;
border-radius: 4px;
background-color: ${({ theme }) => theme.colors.surface_secondary};
justify-content: center;
align-items: center;
margin-right: 8px;
position: relative;
`;
export const Image = styled.Image`
width: 40px;
height: 40px;
`;