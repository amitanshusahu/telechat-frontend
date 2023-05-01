import styled from "styled-components"
import { Add } from "../../../../../../assets/Icons"
import AccountBox from "./AccountBox"
import { useState } from "react"

export default function ChatView(props: {setRenderViewLayout: Function}): JSX.Element{

    const [isFolderSelected, setIsFolderSelected] = useState<boolean>(false);

    // runs if user selects a folder from chat tab (ChatView.tsx)
    const showContactAccounts: VoidFunction = () => {
        setIsFolderSelected(true);
    }

    // if folder is selected, show user accounts else show folders
    if(isFolderSelected){
        return (
            <StyledDiv>
                <button id="folder" onClick={() => setIsFolderSelected(false) }> Back to folders</button>
                <AccountBox 
                type={{chat: true}} 
                name="Amitanshu Sahu" 
                clickHandler={() => props.setRenderViewLayout({chat: true})}/>
            </StyledDiv>
        )
    }
    else{
        return(
            <StyledDiv>
                <AccountBox 
                type={{folder: true}} 
                name={"Contacts"} count={2} 
                clickHandler={showContactAccounts}/>

                <AccountBox 
                type={{folder: true}} 
                name={"Non-contacts"} count={23} 
                clickHandler={showContactAccounts}/>

                <AccountBox 
                type={{folder: true}} 
                name={"Channels"} 
                clickHandler={showContactAccounts}/>
                <AccountBox type={{folder: true}} name={"Groups"} count={100} clickHandler={showContactAccounts}/>
    
                <div className="add-holder">
                    <Add />
                    <p>Add Folder</p>
                </div>
            </StyledDiv>
        )
    }

}

// Style
const StyledDiv = styled.div`
    width: 100%;
    height: calc(100vh - 135px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 15px;
  
  .add-holder{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed var(--bg-light);
    padding: 15px;
    border-radius: 10px;
    transition: all 0.3s ease;
    cursor: cell;

    p{
        color: grey;
        font-weight: bold;
        margin-left: 15px;
    }

    .feather{
        color: grey;
    }

    &:hover{
        background-color: #f6fcff;
    }

    button{
        background-color: lightgrey;
    }
  }
`