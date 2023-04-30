import styled from "styled-components";

export default function InputView() {
    return (
        <StyledDiv>
            <input type="text" placeholder="Type Message here..."/>
            <button> Send </button>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding: 15px;
    bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 15px; */
    background-color: #ffffff5a;
    box-shadow: 0 0 50px rgba(0, 85, 64, 0.1);

    input{
        width: 100%;
        border: none;
        outline: 2px solid #e0f5ffd1;
    }

    button{
        all:unset;
        padding: 10px;
        cursor: pointer;
        background-color: var(--bg-light);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        outline: 2px solid #e0f5ffd1;
    }
`