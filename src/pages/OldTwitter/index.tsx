import React from 'react'

import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.png'
import me from '../../images/me.png'
import home from '../../images/home.svg'
import notification from '../../images/notification.svg'
import message from '../../images/message.svg'
import more from '../../images/more.svg'
import place from '../../images/place.svg'
import url from '../../images/url.svg'
import joined from '../../images/joined.svg'
import born from '../../images/born.svg'
import followers from '../../images/followers.svg'
import images from '../../images/images.svg'
import comments from '../../images/comments.svg'
import retweet from '../../images/retweet.svg'
import like from '../../images/like.svg'

import { 
  Header, 
  Content, 
  Side, 
  Banner, 
  Bar, 
  ContentBar, 
  Actions,
  Wrapper,
  AvatarAside,
  WidgetFollowers,
  WidgetImages,
  Timeline,
  Tweets,
  Info,
  ActionsTweets,
  Widgets,
  WidgetFollow,
  WidgetTitle,
  Profile
} from './styles';

const OldTwitter: React.FC = () => {
  return (
    <div>
      <Header>
        <Content>
          <nav>
            <ul>
              <li>
                <img src={home} alt="Home"/> 
                Home
              </li>
              <li>
                <img src={notification} alt="Notifications"/> 
                Notifications
              </li>
              <li>
                <img src={message} alt="Messages"/> 
                Messages
              </li>
            </ul>
          </nav>
          <img src={logo} alt="Logo twitter" />
          <Side>
            <input type="text" placeholder="Search on Twitter" />
            <img src={me} alt="Avatar" />
            <button>Tweet</button>
          </Side>
        </Content>
      </Header>

      <Banner>
        <h1>Twitter - feito por 💙 Leonardo Pacciulli</h1>
      </Banner>

      <Bar>
        <ContentBar>
          <ul>
            <li>
              <span>Tweets</span>
              <strong>3931</strong>
            </li>
            <li>
              <span>Followings</span>
              <strong>123</strong>
            </li>
            <li>
              <span>Followers</span>
              <strong>93</strong>
            </li>
            <li>
              <span>Favorites</span>
              <strong>98</strong>
            </li>
          </ul>
          
          <Actions>
            <button>Follow</button>
            <img src={more} alt="Dropdown" />
          </Actions>
        </ContentBar>
      </Bar>

      <Wrapper>
        <aside>
          <AvatarAside src={me} alt="Avatar" className="avatar" />
          <h1>Leonardo Pacciulli</h1>
          <span>@leopacciulli</span>
          <p>Web developer, front-end developer, back-end developer, fullstack developer</p>

          <ul className="list">
            <li>
              <img src={place} alt="Place" />
              Bragança Paulista - SP
            </li>
            <li>
              <img src={url} alt="Ur" />
              https://leonardopacciulli.netlify.com/
            </li>
            <li>
              <img src={joined} alt="Joined" />
              Joined June 2007
            </li>
            <li>
              <img src={born} alt="Born" />
              Born the 11th of May 1995
            </li>
          </ul>

          <WidgetFollowers>
            <strong>
              <img src={followers} alt="Followers" />
              74 followers that you know
            </strong>

            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </WidgetFollowers>

          <WidgetImages>
            <strong>
              <img src={images} alt="Images" />
              206 photos and videos
            </strong>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </WidgetImages>
        </aside>

        <Timeline>
          <nav>
            <a href="x">Tweets</a>
            <a href="x">Tweets and replies</a>
            <a href="x">Medias</a>
          </nav>

          <Tweets>
            <li>
              <img src={avatar} alt="avatar" />
              <Info>
                <strong>Marcos Cardoso <span>@marcodoso</span></strong>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
                <ActionsTweets>
                  <a href="x">
                    <img src={comments} alt="comments" /> 3
                  </a>
                  <a href="x">
                    <img src={retweet} alt="retweet" /> 4
                  </a>
                  <a href="x">
                    <img src={like} alt="like" /> 10
                  </a>
                </ActionsTweets>
              </Info>
            </li>
            <li>
              <img src={avatar} alt="avatar" />
              <Info>
                <strong>Marcos Cardoso <span>@marcodoso</span></strong>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
                <ActionsTweets>
                  <a href="x">
                    <img src={comments} alt="comments" /> 3
                  </a>
                  <a href="x">
                    <img src={retweet} alt="retweet" /> 4
                  </a>
                  <a href="x">
                    <img src={like} alt="like" /> 10
                  </a>
                </ActionsTweets>
              </Info>
            </li>
            <li>
              <img src={avatar} alt="avatar" />
              <Info>
                <strong>Marcos Cardoso <span>@marcodoso</span></strong>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
                <ActionsTweets>
                  <a href="x">
                    <img src={comments} alt="comments" /> 3
                  </a>
                  <a href="x">
                    <img src={retweet} alt="retweet" /> 4
                  </a>
                  <a href="x">
                    <img src={like} alt="like" /> 10
                  </a>
                </ActionsTweets>
              </Info>
            </li>
            <li>
              <img src={avatar} alt="avatar" />
              <Info>
                <strong>Marcos Cardoso <span>@marcodoso</span></strong>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
                <ActionsTweets>
                  <a href="x">
                    <img src={comments} alt="comments" /> 3
                  </a>
                  <a href="x">
                    <img src={retweet} alt="retweet" /> 4
                  </a>
                  <a href="x">
                    <img src={like} alt="like" /> 10
                  </a>
                </ActionsTweets>
              </Info>
            </li>
            <li>
              <img src={avatar} alt="avatar" />
              <Info>
                <strong>Marcos Cardoso <span>@marcodoso</span></strong>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
                <ActionsTweets>
                  <a href="x">
                    <img src={comments} alt="comments" /> 3
                  </a>
                  <a href="x">
                    <img src={retweet} alt="retweet" /> 4
                  </a>
                  <a href="x">
                    <img src={like} alt="like" /> 10
                  </a>
                </ActionsTweets>
              </Info>
            </li>
            <li>
              <img src={avatar} alt="avatar" />
              <Info>
                <strong>Marcos Cardoso <span>@marcodoso</span></strong>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
                <ActionsTweets>
                  <a href="x">
                    <img src={comments} alt="comments" /> 3
                  </a>
                  <a href="x">
                    <img src={retweet} alt="retweet" /> 4
                  </a>
                  <a href="x">
                    <img src={like} alt="like" /> 10
                  </a>
                </ActionsTweets>
              </Info>
            </li>
            <li>
              <img src={avatar} alt="avatar" />
              <Info>
                <strong>Marcos Cardoso <span>@marcodoso</span></strong>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
                <ActionsTweets>
                  <a href="x">
                    <img src={comments} alt="comments" /> 3
                  </a>
                  <a href="x">
                    <img src={retweet} alt="retweet" /> 4
                  </a>
                  <a href="x">
                    <img src={like} alt="like" /> 10
                  </a>
                </ActionsTweets>
              </Info>
            </li>
          </Tweets>
        </Timeline>

        <Widgets>
          <WidgetFollow>
            <WidgetTitle>
              <strong>Who to follow</strong>
              <a href="x">Refresh</a>
              <a href="x">View all</a>
            </WidgetTitle>

            <ul>
              <li>
                <Profile>
                  <img src={avatar} alt="avatar" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </Profile>
                <a href="x">x</a>
              </li>
            </ul>
          </WidgetFollow>
        </Widgets>
      </Wrapper>
    </div>
  )
}

export default OldTwitter