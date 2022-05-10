import React, { Component } from 'react'
import {WorkPart, WorkSection, WorkTitle, WorkSpan, Line, PartDesc,Icon, PartTitle } from './style.js'
import axios from 'axios'
class Work extends Component {
        state = {
            works : []
        }

        componentDidMount () {
         
            // axios.get('js/data.json').then (res => (console.log (res.data.works)))
            axios.get('js/data.json').then (res => {this.setState ({works:res.data.works})})
        }  




    render() {

           const {works}= this.state
           const ListWork = works.map ((itemWork) => {
            return (
         <WorkPart first={itemWork.id} key={itemWork.id}>
                <Icon className={itemWork.icon_name}></Icon>
                <PartTitle>{itemWork.title}</PartTitle>
                <Line/>
                <PartDesc>
                    {itemWork.body}
                </PartDesc>
            </WorkPart>
            )

            
        })

           

        return (
            <WorkSection>
            <div className="container">
                <WorkTitle><WorkSpan>My</WorkSpan> Work</WorkTitle>
                { ListWork}
           
            </div>
        </WorkSection>
        )
    }
    
}


export default Work