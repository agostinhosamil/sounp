import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    svg {
      width: 100%;
      max-width: 634px;
    }

    svg.offRoadLeme {
      width: 200px;
      background: rgba(251, 182, 149, .61);
      z-index: 0;
    }

    strong {
      color: #ff6366;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-transform: uppercase;
      letter-spacing: 12px;
      word-spacing: 5px;
      line-height: 54px;
      text-align: center;
      display: block;
      position: relative;
      z-index: 1;
    }

    h1 {
      font-size: 70px;
      display: block;
      max-width: 700px;
      line-height: 57px;
      text-align: center;
      position: relative;
      z-index: 1;
    }
  }

  @media (max-width: 800px) {
    background-color: #f5ebeb;
    margin-top: 15px;
    display: none;

    div {      
      svg.offRoadLeme {
        background-color: transparent;
      }

      h1 {
        font-size: 40px;
        line-height: 31px;
      }
    }
  }
`

export const UndrawOffRoadReLemeContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100px;

  svg {
    position: absolute;
    top: -332%;
    left: 0px;
    right: 0px;
    margin: auto;

    &:after {
      content: "";
      width: 100%;
      height: 80px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
  }
`

export const HeaderCoverImageContainer = styled.div`
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`
