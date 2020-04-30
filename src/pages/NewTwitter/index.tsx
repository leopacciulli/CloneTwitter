import React from 'react'

import avatar from '../../images/avatar.png'
import me from '../../images/me.png'
import notification from '../../images/notificationwhite.svg'
import message from '../../images/messagewhite.svg'
import more from '../../images/morewhite.svg'
import followers from '../../images/followerswhite.svg'
import comments from '../../images/comments.svg'
import retweet from '../../images/retweet.svg'
import like from '../../images/like.svg'
import upload from '../../images/upload.png'

import {
  Container,
  SideBar,
  Perfil,
  Aside,
  Logo,
  Home,
  Ul,
  Timeline,
  Widgets,
  Search,
  WidgetFollow,
  WidgetTitle,
  ProfileFollow,
  WidgetTrends,
  Trend,
  ShowMore,
  Terms,
  HomeHeader,
  ProfileHome,
  BarHome,
  FooterHome,
  Tweets,
  Info,
  ActionsTweets,
  Gallery,
  Gif,
  Chart,
  Smile
} from './styles'

const NewTwitter: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <Aside>
          <Logo />
          <ul>
            <li>
              <Home />
              <span>Home</span>
            </li>
            <li>
              <img src={notification} alt="notification"/>
              <span>Notifications</span>
            </li>
            <li>
              <img src={message} alt="message"/>
              <span>Messages</span>
            </li>
            <li>
              <img src={followers} alt="followers"/>
              <span>Profile</span>
            </li>
            <li>
              <img src={more} alt="more"/>
              <span>More</span>
            </li>
          </ul>
          <button>Tweet</button>
        </Aside>

        <Ul>
          <li>
            <Perfil>
              <img src={me} alt="avatar" />
              <div>
                <strong>Leonardo Pacciulli</strong>
                <span>@LeoPacciulli</span>
              </div>
            </Perfil>
            <a href="x"> > </a>
          </li>
        </Ul>
      </SideBar>

      <Timeline>
        <HomeHeader>
          <h2>Home</h2>
        </HomeHeader>

        <ProfileHome>
          <img src={me} alt="me" />
          <BarHome>
            <textarea placeholder="What's happening?" />
            <FooterHome>
              <div>
                <Gallery />
                <Gif />
                <Chart />
                <Smile />
              </div>
              <button>Tweet</button>
            </FooterHome>
          </BarHome>
        </ProfileHome>

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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
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
                <a href="x">
                  <img src={upload} alt="upload" />
                </a>
              </ActionsTweets>
            </Info>
          </li>
        </Tweets>
      </Timeline>

      <Widgets>
        <Search>
          <input type="text" placeholder="Search Twitter" />
        </Search>

        <WidgetTrends>
            <WidgetTitle>
              <strong>Trends for you</strong>
            </WidgetTitle>

            <ul>
              <li>
                <Trend>
                  <div>Pop Trending</div>
                  <strong>Brasil</strong>
                  <div>622K Tweets</div>
                </Trend>
                <a href="/"> > </a> 
              </li>
              <li>
                <Trend>
                  <div>Mundial</div>
                  <strong>Coronavirus</strong>
                  <div>530K Tweets</div>
                </Trend>
                <a href="/"> > </a> 
              </li>
              <li>
                <Trend>
                  <div>Futebol</div>
                  <strong>Volta logo</strong>
                  <div>432K Tweets</div>
                </Trend>
                <a href="/"> > </a> 
              </li>
              <li>
                <Trend>
                  <div>Trabalho remoto</div>
                  <strong>Foco</strong>
                  <div>80K Tweets</div>
                </Trend>
                <a href="/"> > </a> 
              </li>
            </ul>
            <ShowMore>Show more</ShowMore>
        </WidgetTrends>

        <WidgetFollow>
            <WidgetTitle>
              <strong>Who to follow</strong>
            </WidgetTitle>

            <ul>
              <li>
                <ProfileFollow>
                  <img src={avatar} alt="avatar" />
                  <div className="info">
                    <strong>Spade</strong>
                    <span>@spade_be</span>
                  </div>
                </ProfileFollow>
                <button>Follow</button>
              </li>
              <li>
                <ProfileFollow>
                  <img src={avatar} alt="avatar" />
                  <div className="info">
                    <strong>Spade</strong>
                    <span>@spade_be</span>
                  </div>
                </ProfileFollow>
                <button>Follow</button>
              </li>
              <li>
                <ProfileFollow>
                  <img src={avatar} alt="avatar" />
                  <div className="info">
                    <strong>Spade</strong>
                    <span>@spade_be</span>
                  </div>
                </ProfileFollow>
                <button>Follow</button>
              </li>
            </ul>
            <ShowMore>Show more</ShowMore>
        </WidgetFollow>

        <Terms>Terms Privacy policy Cookies Ads info More © 2020 Léo Pacciulli, Inc.</Terms>
      </Widgets>
    </Container>
  )
}

export default NewTwitter