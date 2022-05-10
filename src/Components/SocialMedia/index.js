import React, { Component } from 'react' ;
import{ Social, SocialIcon, SocialMediaa, SocialP, SocialSpan, SocialSpan2} from "./style.js"
import axios from 'axios'



class SocialMedia  extends Component {
    state = {
        social : []
    }
    
    componentDidMount () {
        axios.get('js/data.json').then (res => {this.setState({social : res.data.social})})
    }

    render () {
       const  {social} = this.state
       const socialList = social.map((socialItem ) => {
           return(
            <Social item = {socialItem.id}  key={socialItem.id}>
                   
            <SocialIcon className= {socialItem.icon}></SocialIcon>
            <SocialP>
               <SocialSpan>{socialItem.title}</SocialSpan>
               <SocialSpan2>{socialItem.body}</SocialSpan2>
            </SocialP>
            </Social>
               
           )
       })
        return(
            <SocialMediaa>
              {socialList}
           </SocialMediaa>
           )

    }
    
}

export default SocialMedia ;