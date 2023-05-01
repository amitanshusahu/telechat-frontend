import styled from "styled-components"
import ChatLayout from "./ChatLayout"

interface Props {
    renderLayout: {
        chat?: boolean,
        channel?: boolean,
        group?: boolean,
    }
}

export default function ViewLayout(props: Props): JSX.Element{

    if( props.renderLayout.chat ){
        return(
            <StyledDiv>
                <ChatLayout />
            </StyledDiv>
        )
    }
    if( props.renderLayout.channel ){
        return(
            <StyledDiv>
                <div>Channel</div>
            </StyledDiv>
        )
    }
    if( props.renderLayout.group ){
        return(
            <StyledDiv>
                <div>group</div>
            </StyledDiv>
        )
    }

    // Defalut return emply view box
    return(
        <StyledDiv style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f7fbff" }}>
            <h3 style={{padding: "15px", borderRadius: "10px", backgroundColor: "var(--primary)"}}>select chat and start messaging</h3>
        </StyledDiv>
    )
}

// Drfalut props
ViewLayout.defaultProps = {
    renderLayout: {
        chat: false,
        channel: false,
        group: false
    }
}

// Style
const StyledDiv = styled.div`
    margin: 15px;
    border-radius: 15px;
    background-attachment: fixed;
    background-size: cover;
    border: 2px solid var(--bg-light-200);
    overflow: hidden;

`