import styled from "styled-components"
import { Compass, Settings, Contacts } from "../../../../../assets/Icons"

export default function NavLayout() {
    return (
        <StyledNav>
            <menu>
                <li title="Profile">
                    <img id="profile" src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="img" />
                </li>
                <li title="Contacts">
                    <Contacts />
                </li>
                <li title="Explore">
                    <Compass />
                </li>
                <li title="Settings">
                    <Settings />
                </li>
            </menu>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    background-color: var(--primary);
    width: fit-content;
    border-bottom-right-radius: 15px;
    
    menu{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: fit-content;

        li{
        list-style: none;
        padding: 3px;
        margin: 12px;
        border-radius: 5px;
        transition: all 0.3s ease;
        cursor: pointer;
        display: flex;
        align-items:center;
        outline: 2px solid transparent;
        justify-content: center;

        &:hover{
            outline-color: var(--bg-light);
        }

        #profile{
            width: 35px;
            border: 2px solid lightgreen ;
            overflow: hidden;
            border-radius: 999px;
        }

        .icon{
            color: #5a5a5a;
        }

        p{
            font-size: 0.5em;
        }

    }
    }
`