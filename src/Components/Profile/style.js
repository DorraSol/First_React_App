import styled from 'styled-components'

export const ProfileSkillsSection =styled.div `
padding: 50px 0;
overflow: hidden;
`
export const ProfileSkills =styled.div `
width: 50%;
float: left;
`

export const ProfileTitle =styled.h2 `

text-align: center;
font-size: 35px
`

export const ProfileList =styled.ul `
list-style: none
`
export const ProfileItem =styled.li `
margin-bottom: 8px
`

export const ProfileSpan =styled.span `
display: inline-block;
    width: 100px;
    font-weight: bold
`
export const ProfileSpanWeb =styled.span `
font-weight: normal;
    color: #eb5424
`

export const ProfileSkillsSkills =styled.div `
width: 50%;
float: left;
`
export const ProfileSkillsDesc =styled.p `
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px
`

export const ProfileSkillsBar =styled.div `
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px;

`

export const ProfileSkillsBarDesc =styled.span `
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px
`


export const ProfileSkillsBarTitle =styled.span `
float: left;
font-size: 20px; 
margin-bottom: 20px

`
export const ProfileSkillsBarPerc =styled.span `
float: right;
margin-right: 100px;
color :red
`

export const ProfileSkillsBarParent =styled.div `
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px

`
export const ProfileSkillsBarParentSpan =styled.span `


`
export const SpanSp =styled.span `

position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0
background : ${props => props.Sp === 1 ? '#eb5424' : '#f8f8f8'}

`
export const SpanSp1 =styled.span `
width: 70%;
position: absolute;
background: #eb5424;
display: block;
top: 0;
left: 0;
bottom: 0

`
export const SpanSp2 =styled.span `
width: 90%;
position: absolute;
background: #eb5424;
display: block;
top: 0;
left: 0;
bottom: 0
`
export const SpanSp3 =styled.span `
width: 80%;
position: absolute;
background: #eb5424;
display: block;
top: 0;
left: 0;
bottom: 0
`



