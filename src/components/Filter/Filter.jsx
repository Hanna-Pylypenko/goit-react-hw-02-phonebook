import { nanoid } from 'nanoid';
import { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };
  filterId = nanoid();
  onSearchInputChange = evt => {
    console.log(evt.currentTarget.value);
    this.setState({ filter: evt.currentTarget.value });
    this.props.onChange(this.state.filter);
  };
  render() {
    return (
      <div>
        <label htmlFor={this.filterId}>Find contacts by name</label>
        <input
          value={this.state.filter}
          type="text"
          name="filter"
          id={this.filterId}
          onChange={this.onSearchInputChange}
        />
      </div>
    );
  }
}
