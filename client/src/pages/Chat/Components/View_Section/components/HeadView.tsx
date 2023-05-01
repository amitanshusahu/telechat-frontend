import styled from "styled-components"

export default function HeadView(){
    return(
        <StyledDiv>
                <img id="contact-profile" src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="" />

                <h3>Amitanshu Sahu</h3>
            </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background-color: #ffffff;
    width: calc(100% - 30px);
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    border-radius: 15px;
    box-shadow: 0 0 50px rgba(0, 85, 64, 0.1);
    /* top: 0; */

    #contact-profile{
        width: 50px;
        border-radius: 999px;
    }
`