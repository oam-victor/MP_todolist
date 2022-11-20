import styled from "styled-components";

export const Container = styled.div`
  position: relative; //relative to manage header position
  background-color: var(--cardBG);
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px var(--cardBoxShadow);
  border-top: 20px solid var(--cardBorderTop);
  opacity: ${(props) => (props.status === "DONE" ? 0.6 : 1)};
  border: ${(props) =>
    props.isDragging === true ? "2px dashed rgba(0, 0, 0, 0.2)" : ""};
  padding-top: ${(props) => (props.isDragging === true ? "31px" : "")};
  background: ${(props) => (props.isDragging === true ? "transparent" : "")};
  cursor: grab;
  max-width: 300px;

  &:active {
    cursor: grabbing;
  }

  header {
    position: absolute;
    top: -22px;
    left: 15px;
    opacity: ${(props) => (props.isDragging === true ? "0" : "")};

    max-width: 260px;
    width: 70vw;
    max-height: 30px;

    button {
      border: 0;
      background: transparent;
      margin: 0 auto 0 5px;
      padding-right: 5px;
      overflow: hidden;
      cursor: pointer;

      .card-title {
        font-weight: bold;
        transition: .2s;
        &:hover{
          font-size: .88rem;
          opacity: .9;
        }
      }
    }
  }

  .footer {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    opacity: ${(props) => (props.isDragging === true ? "0" : "")};

    button {
      display: inline;
      background: transparent;
      border: 0px;
      cursor: pointer;
      transition: .2s;
      &:hover{
        opacity: .8;
      }
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 2px;
      margin-top: 5px;
      margin-left: 90%;
    }
  }

  p {
    font-weight: 500;
    line-height: 20px;
    padding-top: 5px;
    opacity: ${(props) => (props.isDragging === true ? "0" : "")};
    overflow-wrap: break-word;
  }

  @media screen and (max-width: 992px) {
    max-width: 100vw;
    header {
      max-width: 70vw;
    }
  }
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
