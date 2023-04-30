import styled from "styled-components"

export default function MessageView() {
    return (
        <StyledDiv>
            <div className="messages">

                <div className="message left">
                    thsi is a message 1
                </div>

                <div className="message left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam facilis dolore assumenda reiciendis odio quis, dolor nostrum adipisci, atque, voluptatibus nesciunt asperiores similique eius accusantium eos porro quo quod!
                </div>

                <div className="message left">
                    thsi is a message 1
                </div>

                <div className="message left">
                    last
                </div>

                <div className="message right">
                    last
                </div>

            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    margin:  15px;
    height:100%;
    overflow-y:scroll;
    scroll-snap-type: y mandatory;
    
    .messages{
        display: flex;
        flex-direction: column;
        height: fit-content;
        padding-bottom: 30px;

        .message{
            background-color: var(--primary);
            padding: 15px;
            width: fit-content;
            max-width: 70%;
            border-radius: 10px;
            margin-top: 15px;
            scroll-snap-align: start;
        }

        .left{
            border-bottom-left-radius: 0;
        }

        .right{
            border-bottom-right-radius: 0;
            align-self: end;
            background-color: var(--bg-pop);
        }
    }

`