import styled from 'styled-components'

import logo from '../../images/logo.svg'
import home from '../../images/home.svg'
import search from '../../images/search.svg';
import gallery from '../../images/gallery.svg';
import gif from '../../images/gif.svg';
import chart from '../../images/chart.svg';
import smile from '../../images/smile.svg';

export const Container = styled.div`
  display: flex;
  max-width: 1220px;
  margin: 0 auto;  
`

export const Gallery = styled.div`
  mask: url(${gallery}) no-repeat center;
  mask-size: 23px;
  background: #1C81C1;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`

export const Gif = styled.div`
  mask: url(${gif}) no-repeat center;
  mask-size: 23px;
  background: #1C81C1;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`

export const Chart = styled.div`
  mask: url(${chart}) no-repeat center;
  mask-size: 23px;
  background: #1C81C1;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`

export const Smile = styled.div`
  mask: url(${smile}) no-repeat center;
  mask-size: 23px;
  background: #1C81C1;
  width: 40px;
  height: 40px;
`

export const SideBar = styled.div`
  width: 275px;
  padding: 0px 20px 0px;
  display: flex;
  flex-direction: column;
`

export const Logo = styled.div`
  mask: url(${logo}) no-repeat center;
  mask-size: 35px;
  background: #FFF;
  width: 47px;
  height: 47px;
  padding-top: 2px;
  padding-bottom: 2px;
`

export const Home = styled.div`
  mask: url(${home}) no-repeat center;
  mask-size: 30px;
  background: #1da1f2;
  height: 30px;
  width: 47px;
  padding-top: 2px;
  padding-bottom: 2px;
`

export const Aside = styled.aside`
  box-align: start;
  align-items: flex-start;

  img {
    width: 47px;
    height: 30px;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  ul {
    list-style: none;
    
    li {
      height: 60px;
      margin-bottom: 7px;
      margin-top: 7px;
      display: flex;
      align-items: center;
      
      span {
        color: #fff;
        font-size: 19px;
        font-weight: bold;
        margin-left: 10px
      }

      &:first-child span {
        color: #1da1f2;
      }
    }
  }

  button {
    background: #1da1f2;
    height: 49px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    font-weight: bold;
    width: 90%;
    color: #fff;
    border-radius: 9999px;
    border: 0;
    margin-top: 20px;
  }
`

export const Ul = styled.ul`
  list-style: none;
  margin-top: 50px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
  }

  a {
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    transform: rotate(90deg);
  }
`

export const Perfil = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-right: 10px
  }

  strong, span {
    color: #FFF;
  }

  span {
    font-size: 14px;
  }
`

export const Timeline = styled.div`
  width: 600px;
  flex: 1;
  margin: 0;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
`

export const Widgets = styled.div`
  width: 350px;
  padding-left: 20px;
  padding-top: 10px;

  ul {
    list-style: none;
    margin-top: 10px;
  }

  li {
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

export const Search = styled.div`

  input {
    background: #253241;
    border: 1px solid #253241;
    height: 38px;
    padding: 0 30px 0 12px;
    border-radius: 9999px;
    color: #FFF;
    font-size: 16px;
    background: #253241 url(${search}) no-repeat 300px center;
    width: 100%;

    &:focus {
      border: 1px solid #ff0;
    }
  }
`

export const WidgetTrends = styled.div`
  background: #fff;
  margin-top: 20px;
  padding-top: 10px;
  border-radius: 14px;
  background: #182634;

  ul {
    margin-top: 0px;
  }
  
  li {
    padding: 7px 20px !important;
    border-bottom: 1px solid #999;
    display: flex;
    align-items: flex-start;
    margin-bottom: 0px !important;
  }

  a {
    text-decoration: none;
    color: #999;
    cursor: pointer;
    transform: rotate(90deg);
  }
`

export const Trend = styled.div`
  strong {
    color: #FFF;
    margin: 3px 0px;
    display: block;
  }

  div {
    &:first-child {
      font-size: 14px;
    }

    color: #8899A6;
  }
`

export const WidgetFollow = styled.div`
  background: #fff;
  margin-top: 20px;
  padding-top: 10px;
  border-radius: 14px;
  background: #182634;

  ul {
    margin-top: 0px;
  }
  
  li {
    padding: 15px 20px !important;
    border-bottom: 1px solid #999;
    display: flex;
    align-items: center;
    margin-bottom: 0px !important;
  }

  button {
    background: transparent;
    height: 30px;
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: bold;
    color: #3bb9e3;
    border: 1px solid #3bb9e3;
    border-radius: 9999px;
  }
`

export const WidgetTitle = styled.div`
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid #999;
  padding: 0 15px 10px;

  strong {
    font-size: 21px;
    color: #FFF;
  }
`

export const ProfileFollow = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 14px;
    color: #FFF;
  }

  span {
    font-weight: normal;
    color: #FFF;
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

export const ShowMore = styled.div`
  color: #3bb9e3;
  padding: 15px 20px;
  border-top: 1px solid #999;
  cursor: pointer;
`

export const Terms = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  color: rgb(136, 153, 166);
  font-size: 14px;
`

export const HomeHeader = styled.div`
  height: 53px;
  padding: 15px;
  border-bottom: 1px solid #999;

  h2 {
    color: #fff;
    font-size: 19px;
    font-weight: 800;
  }
`

export const ProfileHome = styled.div`
  display: flex;
  min-height: 100px;
  padding: 10px 15px;
  border-bottom: 10px solid #253241;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`
export const BarHome = styled.div`
  flex: 1;

  textarea {
    padding: 0 10px;
    font-size: 21px;
    color: #fff;
    border: none;
    background: transparent;
    resize: none;
    width: 100%;
  }
`

export const FooterHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  img {
    width: 21px;
    height: 21px;
    margin-right: 10px;
    border-radius: 0px;
  }

  button {
    width: 76px;
    height: 39px;
    margin-top: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border-radius: 999px;
    border: 1px solid #3bb9e3;
    background: #3bb9e3;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Tweets = styled.ul`
  list-style: none;

  li {
    border-bottom: 1px solid #999;
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
  margin-left: 15px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 16px;
    color: #FFF;

    span {
      font-size: 14px;
      color: #7b8b9a;
      font-weight: normal;
    }
  }

  p {
    font-size: 14px;
    color: #FFF;
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
    margin-left: 100px;
    font-size: 12px;

    &:first-child {
      margin-left: 0px;
    }

    img {
      margin-right: 5px;
    }

    &:last-child {
      img {
        width: 24px;
      }
    }
  }
`