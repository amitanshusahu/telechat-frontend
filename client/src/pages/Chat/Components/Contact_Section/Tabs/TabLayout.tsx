import styled from "styled-components"
import SearchBox from "./components/SearchBox"
import ChatView from "./components/ChatView"
import {useState } from "react"
import StatusView from "./components/StatusView";
import ExploreView from "./components/ExplorerView";

export default function TabLayout(props : {setRenderViewLayout: Function}){

    // ChatView.tsx will be rendered on tab layout by default
    const [renderView, setRenderView] = useState<JSX.Element>(
        <ChatView setRenderViewLayout={props.setRenderViewLayout}/>
    );
    
    // highlight the selected tab on click
    const showTab = (e: any) => {
        //adds highlight style
        if(e.target.className != "active"){
            e.target.classList.add("active");
        }

        document.querySelectorAll("#tabs button").forEach(element => {
            if(element != e.target){
                element.className = "";
            }
        });
    }

    return(
        <StyledSection>

            <SearchBox />

            <div className="tabs" id="tabs">
                <button 
                className="active"
                onClick={showTab} 
                onMouseDown={() => setRenderView(<ChatView setRenderViewLayout={props.setRenderViewLayout}/>)}>
                    Chat
                </button>

                <button 
                onClick={showTab}
                onMouseDown={() => setRenderView(<StatusView />)}>
                    Status
                </button>

                <button 
                onClick={showTab} 
                onMouseDown={() => setRenderView(<ExploreView />)}>
                    Explore
                </button>
            </div>

            <div className="tab-view">
                {renderView}
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
        .active{
            color: grey;
        }
    }

    .tab-view{
        padding: 0 15px;
    }
`