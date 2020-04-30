import React, {Component} from 'react';
import { render } from '@testing-library/react';
import { Grid, Cell } from 'react-mdl';
import Typing from 'react-typing-animation';
class Landing extends Component{

   
    render(){
        
        return(
            
            <div style = {{width: '100%',margin: 'auto'}}>
              
                <Grid className = "landing-grid">
                 <Cell col ={12}>
                    <div className = "intro-text">
                     
                       <h1 destroy>
                    
                        <Typing speed={.1}>
                        HELLO! MY NAME IS TEJAS SAMEERA. Test
                            <Typing.Delay ms = {2000}/>
                            <Typing.Backspace speed = {1} count = {32}/>
                            <Typing.Delay ms = {500}/>
                            <Typing speed={50}></Typing>
                            WELCOME TO MY PERSONAL PORTFOLIO PAGE!
                            <Typing.Delay ms = {2000}/> 
                            <Typing.Backspace speed = {1} count = {40}/>
                            <Typing.Delay ms = {500}/>
                            <Typing speed={50}></Typing>
                            IF YOU'D LIKE TO KNOW MORE ABOUT ME AND THE PROJECTS THAT I'VE COMPLETED IN MY SPARE TIME, CLICK ANY OF THE LINKS ABOVE OR THE SIDEBAR! 
                            <Typing.Delay ms = {2500}/>
                            <Typing.Backspace speed = {.01} count = {135}/>
                            <Typing.Delay ms = {500}/>
                            <Typing speed={50}></Typing>
                            I LOOK FORWARD TO HEARING FROM YOU!
                        </Typing>
                    </h1>

                    </div>

                 </Cell>
                </Grid>
            
            </div>
            )
    
    }

}
export default Landing;