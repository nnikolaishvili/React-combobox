import React, { Component } from 'react';
import Combobox from './Combobox';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Type...',
      arrayOfData: [
        {
          valueField: 1,
          textField: 'Georgia'
        },
        {
          valueField: 2,
          textField: 'Germany'
        },
        {
          valueField: 3,
          textField: 'France'
        },
        {
          valueField: 4,
          textField: 'Spain'
        },
        {
          valueField: 5,
          textField: 'USA'
        },
        {
          valueField: 6,
          textField: 'Hungary'
        },
        {
          valueField: 7,
          textField: 'Poland'
        },
        {
          valueField: 8,
          textField: 'Italy'
        },
        {
          valueField: 9,
          textField: 'Switzerland'
        },
        {
          valueField: 10,
          textField: 'Norway'
        },
      ]
    };
  }

  handleSelectChange = (valueField, textField) => {
    alert(valueField + " - " + textField)
  };

  render() {
    return (
      <div id="main-container">
        <Combobox
          data={this.state.arrayOfData}
          onSelectedItemChange={this.handleSelectChange}
          valueField={1}
          textField={'Georgia'}
          placeholder={this.state.placeholder}
        />
      </div>
    );
  }
}

export default App;
