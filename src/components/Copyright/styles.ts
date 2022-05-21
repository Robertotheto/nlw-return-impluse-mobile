import styled from 'styled-components/native';

export const CopyrightText = styled.Text`
font-size: 12px;
color: ${({ theme }) => theme.colors.text_secondary};
font-family: ${({ theme }) => theme.fonts.medium};
`;