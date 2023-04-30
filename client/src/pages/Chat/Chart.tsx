import styled from "styled-components"
import NavLayout from "./Components/Contact_Section/Side_Navigation/NavLayout";
import TabLayout from "./Components/Contact_Section/Tabs/TabLayout";
import ViewLayout from "./Components/View_Section/ViewLayout";

export default function Chart(){
    return(
        <StyledLayout>
            <div className="contact-section">
                <NavLayout />
                <TabLayout />
            </div>

            <ViewLayout />
        </StyledLayout>
    )
}

const StyledLayout = styled.aside`
    width: 100vw;
    height:100vh;
    overflow:hidden;
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 1444px;
    margin: auto;

    .contact-section{
        display: flex;
        overflow: hidden;
    }

    @media only screen and (max-width:1000px){
        grid-template-columns: 1fr 0fr;

        .contact-section{
            width: 100vw;
        }
    }
`