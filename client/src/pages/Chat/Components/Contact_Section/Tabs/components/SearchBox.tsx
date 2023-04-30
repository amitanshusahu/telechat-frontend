import styled from "styled-components"

export default function SearchBox(){
    return (
        <StyledDiv>
            <input type="search" placeholder="Search"/>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding: 15px;
    background-color: var(--primary);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

    input{
        width: calc(100% - 30px);
    }
`