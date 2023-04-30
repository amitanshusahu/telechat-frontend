import styled from "styled-components"
import SearchBox from "./components/SearchBox"
import ChatView from "./components/ChatView"

export default function TabLayout(){
    return(
        <StyledSection>
            <SearchBox />
            <div className="tabs">
                <button id="active">Chat</button>
                <button>Status</button>
                <button>Explore</button>
            </div>
            <div className="tab-view">
                <ChatView />
            </div>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    width: 100%;
    .tabs{
        display: flex;
        width:100%;
        gap: 10px;

        button{
            all: unset;
            width: 100%;
            text-align: center;
            padding: 10px;
            color: lightgray;
            font-weight: bold;
            cursor: pointer;
        }
        button[id="active"]{
            color: grey;
        }
    }

    .tab-view{
        padding: 0 15px;
    }
`