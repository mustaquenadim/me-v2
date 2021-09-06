import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Profile from './components/Admin/Profile/Profile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Manage from './components/Admin/Manage/Manage';
import AddProject from './components/Admin/AddProject/AddProject';
import WriteBlog from './components/Admin/WriteBlog/WriteBlog';
import UploadMedia from './components/Admin/UploadMedia/UploadMedia';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Menu} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/blogs' component={Blogs} />
                <Route path='/contact' component={Contact} />

                {/*** Admin Route ***/}
                <Route path='/admin/profile' component={Profile} />
                <Route path='/admin/dashboard' component={Dashboard} />
                <Route path='/admin/manage' component={Manage} />
                <Route path='/admin/addProject' component={AddProject} />
                <Route path='/admin/writeBlog' component={WriteBlog} />
                <Route path='/admin/uploadMedia' component={UploadMedia} />
            </Switch>
        </Router>
    );
};

export default App;
