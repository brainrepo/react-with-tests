import React from 'react';
import {connect} from "react-redux";    
import { addLang, removeLang } from '../redux/actions/language';

class AddClassLanguage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 10}
        this.tick = this.tick.bind(this)
    }

    componentDidMount(){}

    componentWillUnmount(){}

    tick() {
        this.setState((state, props) => ({count: state.count + 1}))
    }

    render() {
        return <div>
            HELLO WORLD {this.state.count} 
            <button onClick={this.tick}>ADD</button>
            <button onClick={() => this.props.addLang('Za', 'ZAZZA')}>ADD ZAZZA</button>
            <button onClick={() => this.props.removeLang('Za')}>REM ZAZZA</button>
            </div>
    }
}

const mapStateToProps = (state) => ({
    languages: state.languages
});

const mapDispatchToProps = (dispatch) => ({
    addLang: (name, value) => dispatch(addLang(name, value)),
    removeLang: (name) => dispatch(removeLang(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddClassLanguage);

