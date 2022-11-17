import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 15px;
    height: 75vh;
    flex: 0 0 320px;

    & + div{    //all div's with previous div's
        border-left: 1px solid rgba(0,0,0,0.05);
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