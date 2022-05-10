import React, {useState , useEffect} from 'react'
import {ProfileItem, ProfileList, ProfileSkills,SpanSp1,ProfileTitle,ProfileSkillsBarDesc, ProfileSkillsBar,ProfileSkillsBarParent, ProfileSkillsBarParentSpan,ProfileSkillsSkills, ProfileSpan, ProfileSkillsBarPerc, ProfileSkillsBarTitle, ProfileSkillsDesc, ProfileSkillsSection, ProfileSpanWeb, } from './style.js'
import axios from 'axios'
const Profile = () => {

const [donnees,setDonnees ] = useState ([])

useEffect (() => {
    axios.get('js/data.json').then (res => setDonnees (res.data.profile) )
}, [])

const donneesProfile = donnees.map ((donnee) => {
    return (
        <ProfileSkillsBar key={donnee.id}>
                        <ProfileSkillsBarTitle>{donnee.title}</ProfileSkillsBarTitle>
                        <ProfileSkillsBarPerc>{donnee.perc}</ProfileSkillsBarPerc>
                        <ProfileSkillsBarParent>
                            <ProfileSkillsBarParentSpan ><SpanSp1 Sp = {donnee.id}></SpanSp1></ProfileSkillsBarParentSpan>
                        </ProfileSkillsBarParent>
         </ProfileSkillsBar>
    )
})



    return (
        <ProfileSkillsSection>
            <div className="container">
                <ProfileSkills>
                    <ProfileTitle><span>My </span>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileSpan>Name</ProfileSpan>
                            DORRA
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Name</ProfileSpan>
                            LINA
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Name</ProfileSpan>
                            AZIZ
                        </ProfileItem>
                        
                        <ProfileItem>
                            <ProfileSpan>Website</ProfileSpan>
                            <ProfileSpanWeb> <a href="http://www.dorra-sediri-soltani.com/" target="_blank"> Click Portfolio </a></ProfileSpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSkills>
                
                <ProfileSkillsSkills>
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <ProfileSkillsBarDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </ProfileSkillsBarDesc>
                        {donneesProfile}
                    
                   
                </ProfileSkillsSkills>
                
            </div>
        </ProfileSkillsSection>
    )
}


export default Profile