import styled from "styled-components";

interface Props {
    type: {
        folder?: boolean, 
        chat?: boolean, 
        channel?: boolean, 
        group?: boolean
    }, 
    name: string, 
    count?: number, 
    img?: string, 
    clickHandler: Function
}

export default function AccountBox(props: Props) {
    return (
        <StyledDiv>
            <img src={props.img} />
            <div className="details">
                <p>{props.name}</p>
            </div>
            <p className="bubble">{(props.count && props.count >= 99) ? "99" : props.count}</p>
        </StyledDiv>
    )
}

// Defalut props
AccountBox.defaultProps = {
    count: "",
    img: "https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182288.jpg"
}

// Css in Js
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: var(--bg-light-200);
    padding: 15px;
    border-radius: 10px;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background-color: var(--bg-light);
    }

    .bubble{
        background-color: lightgreen;
        padding: 0 5px;        
        border-radius: 999px;
        position: absolute;
        top: 15px;
        left: 55px;
    }

    img{
        height: 50px;
        border: 2px solid white;
        border-radius: 999px;
    }
`