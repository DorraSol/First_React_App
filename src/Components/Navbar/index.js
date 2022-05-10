import React from 'react'
import {Link} from 'react-router-dom'
import './style.js'
import {NavbarSection,Logo, Anchor, ListItem, LogoText, UlList } from './style.js'

const Navbar = () => {
    return (
        <NavbarSection>
            
        <div className="container">
            
            <Logo>
                <LogoText>Dorra Profile</LogoText>
            </Logo>
            
            <UlList>
                <ListItem><Link to="/">Home</Link></ListItem>
                <ListItem><Anchor href="#">Work</Anchor></ListItem>
                <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                <ListItem><Anchor href="#">About</Anchor></ListItem>
                <ListItem><Anchor href="#">SocialMedia</Anchor></ListItem>
                <ListItem><Link to="./contact">Contact</Link></ListItem>
            </UlList>
            
        </div>
        
    </NavbarSection>
         
    )
}


export default Navbar