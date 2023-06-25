import styled from "styled-components"
import ChannelPostView from "./components/ChannelPostView"
import HeadView from "./components/HeadView"

export default function ChannelLayout(){
    return(
        <StyledDiv>
            <HeadView />
            <ChannelPostView />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display:grid;
    height: 100%;
    grid-template-rows: 1fr 7fr;
    background-color: #D5FFF2;
    background-image: var(--bg-grad);
    background-attachment: fixed;
    background-size: cover;
`