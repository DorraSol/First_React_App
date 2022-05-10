import React from 'react'

import {HomeSection , HomeBtn, HomeDesc, HomeSpan, HomeInfomration, HomeTitle } from './style.js'

const Home = () => {
    return (
        <HomeSection>
        <div className="container">
            <HomeInfomration>
                <HomeTitle>LINA AZIZ</HomeTitle>
                <HomeInfomration>Creative Mum</HomeInfomration>
                <HomeDesc>
                    Iam a professional <HomeSpan>WEBDESIGNER</HomeSpan> and maybe Future Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together :) 
                </HomeDesc>
                <HomeBtn>Let's Begin</HomeBtn>
            </HomeInfomration>
        </div>
    </HomeSection>
    )
}


export default Home 