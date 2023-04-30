import styled from "styled-components"
import { Add } from "../../../../../../assets/Icons"
import AccountBox from "./AccountBox"

export default function ChatView(){

    const showContactAccounts = () => {

    }

    return(
        <StyledDiv>
            <AccountBox type={{folder: true}} name={"Contacts"} count={2} clickHandler={showContactAccounts}/>
            <AccountBox type={{folder: true}} name={"Non-contacts"} count={23} clickHandler={showContactAccounts}/>
            <AccountBox type={{folder: true}} name={"Channels"} clickHandler={showContactAccounts}/>
            <AccountBox type={{folder: true}} name={"Groups"} count={100} clickHandler={showContactAccounts}/>

            <div className="add-holder">
                <Add />
                <p>Add Folder</p>
            </div>
            
        </StyledDiv>
    )
}

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
  }
`