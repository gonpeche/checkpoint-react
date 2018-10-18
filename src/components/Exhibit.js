import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';


export default class Exhibit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnimal: this.props.selectedAnimal
    }
    this.setAnimal = this.setAnimal.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  setAnimal(newAnimal) {
    this.setState({
      selectedAnimal: newAnimal
    })
  }

  handleChange(evt) {
    // evt.preventDefault()
    console.log('EVENTO: ',evt)
  }

  render () {
  	return (
      <div className="exhibit">
      <Cage selectedAnimal={this.state.selectedAnimal}/>
      <AnimalSelect 
      animals={this.props.animals} 
      submitAnimal={this.setAnimal} 
      />

	    </div>
  		)
  }
};