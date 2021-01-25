import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom';



//components
import Posts from './components/posts';
import Profile from './components/profile';
import About from './components/about';
import PostItem from './components/post_item_details';
import NotFound from './components/page-not-found';

class App extends Component{
  render(){
    return (
      <div> Home Page </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/posts">Posts</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/profile">Profile</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>
        <hr/>
      </header>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/posts" component={Posts}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/posts/:id" component={PostItem}></Route>
        <Route exact path="*" component={NotFound}></Route>
      </Switch>
     
      
    </div>
     
  </BrowserRouter>
  ,document.querySelector('#root'))