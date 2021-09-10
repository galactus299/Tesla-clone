import React from 'react'
import styled from "styled-components";
import Section from './Section';
export default function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for touchless delivery"
                backgroungImage="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"


            />
            <Section
                title="Model Y"
                description="Order online for touchless delivery"
                backgroungImage="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"


            />
            <Section
                title="Model 3"
                description="Order online for touchless delivery"
                backgroungImage="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"


            />
            <Section
                title="Model X"
                description="Order online for touchless delivery"
                backgroungImage="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroungImage="solar-panel.jpg"
                leftBtnText="ORDER NOW"
                rightBtnText="LEARN MORE"
            />
             <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroungImage="solar-roof.jpg"
                leftBtnText="ORDER NOW"
                rightBtnText="LEARN MORE"
            />
            <Section
                title="Accessories"
                description=""
                backgroungImage="accessories.jpg"
                leftBtnText="ORDER NOW"
                
            />

        </Container>
    )
}
const Container= styled.div`
    height:100vh;

`
