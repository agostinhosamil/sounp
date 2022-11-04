import styled from 'styled-components'

export const SearchBoxContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0px 0px 700px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 760px;
  align-self: center;
  margin: auto;
  text-align: center;
`

export const SearchBoxTitle = styled.h1`
  width: 100%;
  display: block;
  font-size: 42px;
  color: #cd7c57;
  padding-bottom: 12px;

  span {
    margin-left: 15px;
    font-size: 50px;
  }
`

export const SearchBoxSubTitle = styled.h3`
  width: 100%;
  display: block;
  color: #909090;
  font-size: 31px;
  font-weight: 400;
  text-transform: uppercase;
`

export const SearchBoxTextFieldContainer = styled.div`
  width: 100%;
  display: block;
  padding: 12px 17px;
  border: 1px solid #b9b5b5;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .16) 0px 0px 8px;
  display: flex;
  margin: 40px 0px 0px;
  position: relative;
`

export const SearchBoxTextField = styled.input.attrs({
  spellCheck: false,
  autoCapitalize: 'off',
  autoCorrect: 'off',
  type: 'text',
  minLength: 1
})`
  width: 100%;
  display: block;
  font-size: 32px;
  background-color: transparent;
  font-family: "Roboto Thin", "Arial Narrow", "Arial", "Helvetica", sans-serif;
  color: #333333;
  border: 0px;
  outline: 0px;
`

export const SearchIconContainer = styled.div`
  font-size: 32px;
  width: 49px;
  display: flex;
  align-items: center;
  color: #909090;
`

export const SearchResultsContainer = styled.div`
  width: 100%;
  padding: 0px 120px 80px;
  max-width: 1100px;

  @media (max-width: 1000px) {
    padding: 0px 70px 80px;
  }

  @media (max-width: 800px) {
    padding: 0px 20px 80px;
  }
`

export const SearchResultsCount = styled.div`
  width: 100%;
`

export const SearchResultsList = styled.div`
  width: 100%;
  padding: 40px 0px;
  margin: 0px;
`
