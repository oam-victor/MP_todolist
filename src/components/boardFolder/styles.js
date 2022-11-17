import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;
    height: calc(100% - 80px); //100% of VP - header component

    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`;