import React,{Component} from 'react';

class Lifecycle extends Component{
    // 1.  Get the default state
    constructor(props){
        super(props)

    // 2.  Set the Initial State
    this.state={
        title:'This is Lifecycle process',
        body:'Dummy'
    }

    }

    // 3. Before GETS created / Before component Mounts
    componentWillMount(){
        console.log('Before the component gets created');
        
    }
    
    componentWillUpdate(){
        console.log('Before Component is Updated');
    }

    componentDidUpdate(){
        console.log('After component is Updated')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('Inside shouldComp Update',this.state.title);
        console.log('Inside shouldComp Update', nextState.title);
        if(nextState.title ===this.state.title){
            return false;
        }

        return true;
        
    }
    // 4. Render JSX/View/Layout
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
                <div onClick={()=>this.setState({title:'This is Lifecycle process'})}>Click to Updated State</div>
            </div>
        )
    }

    // 5. After comoponent is Mounted
    componentDidMount(){
        console.log('After component is Mounted');
        document.querySelector('h3').style.color = 'red';
    }

    componentWillUnmount(){
        console.log('Component Unmounted');
    }

}

export default Lifecycle;


// 1.  Get the default state
// 2.  Set the Initial State
// 3. Before GETS created / Before component Mounts
// 4. Render JSX/View/Layout
// 5. After comoponent is Mounted