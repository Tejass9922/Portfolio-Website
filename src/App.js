import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation, Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component{
  render(){
    return(
  <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title = {<a href = "https://tejass9922.github.io/Profile-Website/" style = {{color: 'white'}}>My Portfolio</a>} scroll>
            <Navigation>
                <Link to="/AboutMe">About Me</Link>
                <a href = "https://github.com/Tejass9922/Resume/blob/master/Sameera_Tejas_Resume.pdf" target = "_blank">Resume</a>
                <Link to="/contactInfo">Contact Information</Link>
                <a href = "http://github.com/Tejass9922" target = "_blank">GitHub</a>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
            <Link to="/AboutMe">About Me</Link>
            <a href = "https://github.com/Tejass9922/Resume/blob/master/Sameera_Tejas_Resume.pdf" target = "_blank">Resume</a>
                <Link to="/contactInfo">Contact Information</Link>
                <a href = "http://github.com/Tejass9922" target = "_blank">GitHub</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
