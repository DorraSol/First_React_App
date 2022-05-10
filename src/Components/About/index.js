import React from 'react'
import {Creative, CreativeDesc, CreativeDir, CreativeInfo, CreativeSpan, CreativeTitle, Anchor} from './Style'

const About = () => {
    return (
        <Creative>
        <div className="container">
            <CreativeInfo>
                <CreativeTitle><CreativeSpan>Hello</CreativeSpan> Wanda</CreativeTitle>
                <CreativeDir>scarlet witch</CreativeDir>
                <CreativeDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor>explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </CreativeDesc>
                <CreativeDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </CreativeDesc>
            </CreativeInfo>
        </div>
    </Creative>
    )
}


export default About