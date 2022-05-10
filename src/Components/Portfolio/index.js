import React, {useState , useEffect} from "react";
import {PortflioTitelSpan , PortfolioList, PortfolioSection , PortfolioTitle, PortfolioItem, ImageWrapper, BoxImg, Overlay, OverlaySpan, Anchor} from'./style.js'
import axios from 'axios'
const Portfolio = () => {
    //      HOOKS   
    const [images , setImages] = useState ([])

    useEffect ( ()=> {
        axios.get ('js/data.json').then (res => { setImages (res.data.portfolio)})
    }, [])

    const PortfolioImages = images.map( (imageItem) => {
        return(   
            <ImageWrapper key={imageItem.id}>
                <BoxImg src={imageItem.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )

    })

    return (
        <PortfolioSection>
        <PortfolioTitle><PortflioTitelSpan>My</PortflioTitelSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem><Anchor href="#" active >All</Anchor></PortfolioItem>
                <PortfolioItem><Anchor  href="#">Photoshop</Anchor></PortfolioItem>
                <PortfolioItem><Anchor href="#">Wordpress</Anchor></PortfolioItem>
                <PortfolioItem><Anchor href="#">Mobile</Anchor></PortfolioItem>
            </PortfolioList>
        
        <div className="box">
                    { PortfolioImages }
        </div>
        
    </PortfolioSection>
    
    )
}


export default Portfolio