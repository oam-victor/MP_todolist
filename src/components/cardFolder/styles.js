import styled from 'styled-components'

export const Container = styled.div`
    position: relative; //relative to manage header position
    background-color: var(--cardBG);
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px var(--cardBoxShadow);
    border-top: 20px solid var(--cardBorderTop);
    opacity: ${props => props.status === 'done' ? 0.6 : 1};
    border: ${props => props.isDragging === true ? '2px dashed rgba(0, 0, 0, 0.2)':''};
    padding-top: ${props => props.isDragging === true ? '31px':''};
    background: ${props => props.isDragging === true ? 'transparent':''};
    cursor: grab;

    &:active{
        cursor: grabbing;
    }
    
    header{
        position: absolute;
        top: -22px;
        left: 15px;
        opacity: ${props => props.isDragging === true ? '0':''};

        .card-title{
            margin-left: 5px;
            font-weight: bold;
        }
    }
    
    p{
        font-weight: 500;
        line-height: 20px;
        opacity: ${props => props.isDragging === true ? '0':''};
    }
    
    img{
        width: 24px;
        height: 24px;
        border-radius: 2px;
        margin-top: 5px;
        opacity: ${props => props.isDragging === true ? '0':''};
    }

`;

export const Label =styled.span`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${props => props.color}
`;