import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './AboutMe';
import Contact from './contactInfo';
import Resume from './resume';
const Main = ()=>(
    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route  path = "/AboutMe" component = {AboutMe} />
        <Route  path = "/contactInfo" component = {Contact} />
        <Route  path = "/resume" component = {Resume} />
    </Switch>
)

export default Main;