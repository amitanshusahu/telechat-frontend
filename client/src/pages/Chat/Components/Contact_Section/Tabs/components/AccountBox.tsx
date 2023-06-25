import { useEffect, useState } from "react";
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
    clickHandler: VoidFunction
}

export default function AccountBox(props: Props): JSX.Element {

    const [imgsrc, setImgSrc] = useState<string>()

    useEffect(() => {

        if(props.type.chat && props.img == undefined){
            setImgSrc("https://img.freepik.com/free-icon/user_318-875902.jpg")
        }

        if(props.type.folder && props.img == undefined){
            setImgSrc("https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182288.jpg")
        }

        if(props.type.channel && props.img == undefined){
            setImgSrc("https://img.freepik.com/premium-vector/vector-cartoon-television-monitor-icon-comic-style-tv-screen-concept-illustration-pictogram-tv-show-business-splash-effect-concept_157943-4378.jpg")
        }

        if(props.type.group && props.img == undefined){
            setImgSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhnPr1G81_uAeV9gqpWXQdmCH7i0DGFV8w&usqp=CAU");
        }
    });

    return (
        <StyledDiv onClick={props.clickHandler}>
            <img src={ (imgsrc != undefined)? imgsrc : props.img} />
            <div className="details">
                <p>{props.name}</p>
            </div>
            <p className="bubble">{(props.count && props.count >= 99) ? "99" : props.count}</p>
        </StyledDiv>
    )
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