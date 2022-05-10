import styled from 'styled-components'

export const PortfolioSection = styled.div `
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const PortfolioTitle =styled.h2 `

    text-align: center;
    font-size: 35px
`
export const PortflioTitelSpan =styled.span `

    font-weight: normal
`
export const PortfolioList = styled.ul `
    list-style: none;
    text-align: center;
    margin: 20px 0
`
export const PortfolioItem = styled.li `
    display: inline-block;

`
export const Anchor =styled.a `
    display: block;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    background : ${props => props.active ? '#red' : ''}
    color: ${props => props.active ? 'yellow' : ''}

`

export const ImageWrapper =styled.div `
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > div {
        opacity: 1
    }
`
export const BoxImg = styled.img `
    width: 100%
`
export const Overlay =styled.div `
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(235,84,36 , 0.5);
        font-size: 15px;
        opacity: 0;
        margin:0
`
export const OverlaySpan =styled.span `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
        display: block;
        padding: 10px 20px;
        cursor: pointer;
        border: 2px solid #eb5424;
`



