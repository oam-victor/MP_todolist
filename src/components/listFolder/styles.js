import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 15px;
    flex: 0 0 320px;
    border: ${(props) => props.isOver === true ? "1px dashed rgba(0, 0, 0, 0.2)" : ""};
    z-index: 0;

    & + div{    //all div's with previous div's
        border-left: ${(props) => props.isOver === true ? "1px dashed rgba(0, 0, 0, 0.2)" : "1px solid rgba(0,0,0,0.1)"};
    }

    header{
        display:  flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2{
            font-weight: bold;
            font-size: 16px;
            padding: 0 10px;
        }
    }

    ul{
        margin-top: 30px;
    }

    @media screen and (max-width: 992px) {
        flex: 1 1;
    }
`;