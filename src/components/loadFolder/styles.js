import styled from "styled-components";

export const Container = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;

    span{
        height: 10rem;
        animation: loading;
        animation-duration: .4s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        color: var(--headerBG);
    }

    span:nth-child(2){
        opacity: .9;
        animation-delay: 0.01s;
    }
    span:nth-child(3){
        opacity: .8;
        animation-delay: 0.02s;
    }
    span:nth-child(4){
        opacity: .7;
        animation-delay: 0.03s;
    }
    span:nth-child(5){
        opacity: .6;
        animation-delay: 0.04s;
    }

    @keyframes loading{
        from{font-size: 5rem;}
        to{font-size: 6rem;}
    }
`