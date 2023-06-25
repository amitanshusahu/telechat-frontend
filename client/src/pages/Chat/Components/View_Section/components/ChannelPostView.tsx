import styled from "styled-components"
import { Share, ThumbsDown, ThumbsUp } from "../../../../../assets/Icons"

export default function ChannelPostView() {
    return (
        <StyledDiv>

            <div className="img-post">
                {/* 500 x 281 */}
                <img src="https://img.freepik.com/premium-photo/beautiful-fantasy-magical-forest-scenery-anime-art-style_492154-6150.jpg?w=2000" />

                <div className="interactions">
                    <div className="icons">
                        <span id="like">1k</span> <ThumbsUp />
                        <span id="dislike">10</span> <ThumbsDown />
                    </div>
                    <span className="share"><Share /></span>
                </div>

                <div className="desc">
                    <h4>Post Heading</h4>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, cumque nemo. Omnis minus sit sapiente illo ratione neque quas aspernatur rem qui eveniet provident laudantium, at esse hic quis eaque?
                </div>
            </div>


            <div className="img-post">
                <img src="https://img.freepik.com/premium-photo/digital-painting-forest-with-large-tree-with-door-middle_170984-8421.jpg" />

                <div className="interactions">
                    <div className="icons">
                        <span id="like">1k</span> <ThumbsUp />
                        <span id="dislike">10</span> <ThumbsDown />
                    </div>
                    <span className="share"><Share /></span>
                </div>

                <div className="desc">
                    <h4>Post Heading</h4>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, cumque nemo. Omnis minus sit sapiente illo ratione neque quas aspernatur rem qui eveniet provident laudantium, at esse hic quis eaque?
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    height: 100%;
    overflow-y: scroll;

    .img-post{
        padding: 15px;
        border-radius: 10px;
        background-color: #ffffff;
        margin: 15px auto;
        width: 500px;
        height: fit-content;
        overflow:hidden;

        img{
            width: 100%;
            border-radius: 10px;
        }

        .desc{
            h4{
                margin: 5px 0;
            }
        }

        .interactions{
            margin-top: 5px;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;

            .feather{
                color: grey;
            }
            
            .icons{
                display:flex;
                justify-content: center;
                gap: 10px;
                
                span{
                    padding-top: 3px;
                    color: grey;
                }
                .feather{
                    padding-right: 10px;
                }
            }
        }
    }
`