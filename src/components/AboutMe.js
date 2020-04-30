import React, {Component} from 'react';
import { render } from '@testing-library/react';
import { Grid } from 'react-mdl';

class About extends Component{
    render(){
        return(
    <Grid className="aboutme-grid">
        <div class = "aboutme-body">
        <h1>
          Hi! I'm Tejas and I'm a student at Rutgers University Studying Computer Science. Currently, I am employed as a Coding Instrutor at CodeNinjas where I teach children programming languages such as Python! In my spare time I've developed some cool side projects. Feel free to take a look at them on my GitHub!
          Outside of school, I am an executive board member of Delta Sigma Iota Fraternity Inc. I am very passionate about the service that we bring back to our comminuty! If you have any questions or would like to get to know me better, please feel free to contact me through any of the links provided. 
          I am looking forward to hearing from you!
        </h1>
        </div>
        </Grid>
        )

    }

}
export default About;