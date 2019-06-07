import React from 'react';
import axios from 'axios';

class Zip extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value }; //Tag for zip
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //For when input is being placed
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //For when search field is empty 
    handleSubmit(event) {
        event.preventDefault();
    }

    search = () => {
        console.log(this.state)
        axios.get('http://ctp-zip-api.herokuapp.com/zip/' + this.state.value)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                //Error Text
            })
    }

    render() {
        return (
            <div>
                <h2>Enter a New York Zip Code below:</h2>
                <input type="search" placeholder="Zipcode" value={this.state.value} onChange={this.handleChange}></input>
                <input type="submit" onClick={this.search}></input>
            </div>
        )
    }
}

export default Zip;