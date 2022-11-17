import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    padding: 0 30px;
    background-color: var(--headerBG);
    color: var(--headerLetter);

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
            width: 36px;
            height: 36px;
            border-radius: 10%;
            background: var(--headerLetter);
            border: 0;
            cursor: pointer;
        }
`;