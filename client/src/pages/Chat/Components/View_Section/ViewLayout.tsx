import styled from "styled-components"
import ChatLayout from "./ChatLayout"

let selected: string = "chat";

export default function ViewLayout() {
    if( selected == "chat"){
        return(
            <StyledDiv>
                <ChatLayout />
            </StyledDiv>
        )
    }
    if( selected == "channel"){
        return(
            <StyledDiv>
                <div>Channel</div>
            </StyledDiv>
        )
    }
    if( selected == "group"){
        return(
            <StyledDiv>
                <div>group</div>
            </StyledDiv>
        )
    }
}

const StyledDiv = styled.div`
    margin: 15px;
    border-radius: 15px;
    background-attachment: fixed;
    background-size: cover;
    border: 2px solid var(--bg-light-200);
    overflow: hidden;

`