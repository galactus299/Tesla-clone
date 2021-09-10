import React from 'react'
import styled from 'styled-components'
function Section({title,description,leftBtnText,rightBtnText,backgroungImage}) {
    return (
        <Wrap bg={backgroungImage}>
            <ItemText>
                <h1>{title}</h1>
                <p1>{description}</p1>
            </ItemText>
            <Button>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    { rightBtnText &&
                          <RightButton>
                          {rightBtnText}
                      </RightButton>
                    
                    }
                              
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
                </Button>
        </Wrap>


            
    )
}
export default Section;
const Wrap =styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props =>`url("/images/${props.bg}")`}
`

const ItemText=styled.div`
    padding:15vh;
    text-align:center;
`
const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:30px;
    @media only screen and (max-width: 768px){
        flex-direction:column;
    }
`

const LeftButton=styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:capitalize;
    fontsize:15px;
    color:white;
    cursor:pointer;
    margin:8px;

`
const RightButton=styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;

`


const DownArrow=styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animatedown infinite 1.5s;
`
const Button=styled.div`

`

  