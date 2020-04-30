import styled from 'styled-components';

import search from '../../images/search.svg';

export const Header = styled.header`
    height: 46px;
    background: #FFF;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
`;

export const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    font-size: 13px;
    color: #667580;
    font-weight: bold;
    display: flex;
    align-items: center;

    margin-left: 30px;
    
    &:first-child {
      margin-left: 0;
    }
  }

  img {
    margin-right: 7px;
  }
`

export const Side = styled.div`
  display: flex;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }

  input {
    background: #f5f8fa;
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    background: #f5f8fa url(${search}) no-repeat 190px center;
    width: 220px;
  }

  button {
    background: #3bb9e3;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: bold;
    width: 90px;
    color: #fff;
    border-radius: 16px;
    border: 0;
  }
`

export const Banner = styled.div`
    height: 380px;
    width: 100%;
    background: #33b9e3;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF
`

export const Bar = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`

export const ContentBar = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 310px;
  height: 100%;

  ul {
    list-style: none;
    display: flex;
    height: 100%;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    position: relative;

    &:first-child::after {
      content: '';
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #3bb9e3;
    }

    &:first-child strong {
      color: #3bb9e3;
    }

    span {
      color: #667580;
      font-size: 12px;
      font-weight: bold;
    }

    strong {
      color: #667580;
      font-size: 18px;
      font-weight: bold;
      margin-top: 2px;
    }

  }
`

export const Actions = styled.div`
  display: flex;

  button {
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: bold;
    width: 90px;
    color: #3bb9e3;
    border-radius: 16px;
    border: 1px solid #3bb9e3;
    margin-right: 20px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
  justify-content: space-between;
  height: 100%;

  aside {
    width: 260px;

    h1 {
      font-size: 21px;
      color: #1f2226;
      margin-top: 10px;
    }

    span {
      font-size: 14px;
      color: #1f2226; 
    }

    p {
      font-size: 14px;
      color: #1f2226;
      margin-top: 15px;
    }

    ul {
      margin-top: 20px;
      list-style: none;

      li {
        font-size: 14px;
        color: #657786;
        display: flex;
        align-items: center;
        margin-top: 5px;

        &:first-child {
          margin-top: 0px;
        }

        img {
          margin-right: 10px
        }
      }
    }
  }
  `
  
export const AvatarAside = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin-top: -150px;
`

export const WidgetFollowers = styled.div`
  margin-top: 20px;

  strong {
    font-weight: normal;
    color: #3bb9e3;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 5px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
    
    li {
      width: 45px;
      height: 45px;
      background: #d0d5d9;
      border-radius: 50%;
      flex: 1 0 auto;
      margin-right: 5px;
      margin: 0 5px 5px 0;
      margin-top: 0px !important;
    }
  }
`


export const WidgetImages = styled.div`
  margin-top: 20px;

  strong {
    font-weight: normal;
    color: #3bb9e3;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 5px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
    
    li {
      width: 80px;
      height: 80px;
      background: #d0d5d9;
      border-radius: 8px;
      flex: 1 0 auto;
      margin-right: 5px;
      margin: 0 5px 5px 0;
      margin-top: 0px !important;
    }
  }
`

export const Timeline = styled.div`
  flex: 1;
  background: #fff;
  margin: 10px 20px 0px;

  nav {
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 15px;

    a {
      text-decoration: none;
      color: #3bb9e3;
      font-size: 18px;
      font-weight: bold;
      margin-left: 20px;

      &:first-child {
        margin-left: 0px;
        color: #1f2226;
      }
    }
  }
`

export const Tweets = styled.ul`
  list-style: none;

  li {
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 15px;
    display: flex;

    > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
`

export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    color: #1f2226;

    span {
      font-size: 13px;
      color: #7b8b9a;
      font-weight: normal;
    }
  }

  p {
    font-size: 14px;
    color: #1f2226;
    margin-top: 5px;
  }
`

export const ActionsTweets = styled.div`
  display: flex;    
  align-items: center;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #667580;
    font-weight: bold;
    margin-left: 30px;
    font-size: 12px;

    &:first-child {
      margin-left: 0px;
    }

    img {
      margin-right: 5px;
    }
  }
`

export const Widgets = styled.div`
  width: 290px !important;
  margin-top: 10px;

  ul {
    list-style: none;
    margin-top: 10px;
  }

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccd6dd;
    padding-bottom: 10px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border: none;
    }
  }
`

export const WidgetFollow = styled.div`
  background: #fff;
  padding: 15px;

  ul {
    li {
      > a {
        color: #ccd6dd;
        text-decoration: none;
        font-size: 16px;
      }
    }
  }
`

export const WidgetTitle = styled.div`
  display: flex;
  align-items: baseline;

  strong {
    font-size: 18px;
    color: #1f2226;
  }

  a {
    font-size: 12px;
    color: #33b9e3;
    text-decoration: none;
    position: relative;
    padding-left: 10px;

    &::before {
      content: '';
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: #222;
      position: absolute;
      left: 4px;
      top: 6px;
    }
  }
`

export const Profile = styled.div`
  display: flex;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 14px;
    color: #1f2226;
  }

  span {
    font-weight: normal;
    color: #9a9a9a;
    font-size: 14px;
  }

  button {
    height: 27px;
    margin-top: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: bold;
    width: 90px;
    color: #3bb9e3;
    border-radius: 16px;
    border: 1px solid #3bb9e3;
  }
`