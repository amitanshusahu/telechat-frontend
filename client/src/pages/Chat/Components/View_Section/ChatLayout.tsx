import styled from "styled-components"
import HeadView from "./components/HeadView"
import MessageView from "./components/MessageView"
import InputView from "./components/InputView"

export default function ChatLayout() {
    return (
        <StyledDiv>
            <HeadView />
            <MessageView />
            <InputView />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display:grid;
    height: 100%;
    grid-template-rows: 1fr 6fr 1fr;
    background-color: #D5FFF2;
    background-image: var(--bg-grad);
    background-attachment: fixed;
    background-size: cover;
`