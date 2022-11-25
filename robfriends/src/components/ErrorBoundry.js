 import React , {Component} from 'react';

 class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state ={ hasError:false}
    }
    componentDidCatch(error,info){
        this.setState({})
    }
    render(){
        if(this.state.hasErrors){
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.children 
    }
 }

 export default ErrorBoundry ;