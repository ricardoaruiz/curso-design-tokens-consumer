import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;  
`

export const Title = styled.h1`
    ${({ theme }) => css`
        font-family: ${theme.FontFamilyPoppins};
        color: ${theme.ColorNeutralElements03};
        text-align: center;
    `};
`

export const SubTitlte = styled.h3`
    ${({ theme }) => css`
        font-family: ${theme.FontFamilyArchivo};
        color: ${theme.ColorNeutralElements03};
        text-align: center;
    `};
`

export const Box = styled.div`
    ${({ theme }) => css`
        max-width: 300px;
        margin: 50px auto 0 auto;
        padding: 1rem;
        box-shadow: 2px 4px 6px rgba(0,0,0,0.3);

        font-family: ${theme.FontFamilyPoppins};
        border-radius: ${theme.BorderRadiusSm};
        color: ${theme.ColorNeutralSurfacePure};
        background-color: ${theme.ColorBrandPure};
    `};
`

export const ThemeButton = styled.button`
    ${({ theme }) => css`
        margin-top: 5rem;
        width: 100%;
        max-width: 300px;
        border: none;
        border-radius: ${theme.BorderRadiusSm};
        background-color: ${theme.ColorFeedbackWarningPure};
        padding: 1rem;
        font-family: ${theme.FontFamilyPoppins};
        font-weight: ${theme.FontWeightBold};
        color: ${theme.ColorNeutralElements03};
        cursor: pointer;
    `};
`