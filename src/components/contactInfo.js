import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Profile Links</h2>
           

            <div className="profile-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton',color: 'black'}}>
                  <a href="https://github.com/Tejass9922" target = "_blank"> <i class="fa fa-github-square"></i></a>
                  GitHub
                  </ListItemContent>
                </ListItem>

                

                <ListItem>
                <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton',color: 'black'}}>
                <a href="https://linkedin.com/in/Tejass9922" target = "_blank"> <i class="fa fa-linkedin-square"></i></a>
               LinkdIn
                  </ListItemContent>
                </ListItem>

              
              </List>
            </div>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
          

            <div className="contact-list">
              <List>
                <ListItem>
                <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton',color: 'black'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                   
                   (732)-397-5818
                  </ListItemContent>
                </ListItem>

                

                <ListItem>
                <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton',color: 'black'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ts880@scarletmail.rutgers.edu
                  </ListItemContent>
                </ListItem>

              
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;