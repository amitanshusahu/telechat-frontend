import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Login(){
    return (
        <StyledDiv>
            <div className="form-holder">
                <h1>Welcome Back!</h1>
                <form>
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="Username"/>
                    <input 
                    type="password"
                    name="password"
                    placeholder="Password" />
                    <button>Login</button>
                    <Link to="/signup">Don't have an account?</Link>
                </form>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .form-holder{
        padding: 20px;
        h1{
            text-align: center;
        }

        form{
            min-width: 320px;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;

            a{
                text-align: center;
                color: gray;
                cursor: pointer;
            }
        }
    }
`