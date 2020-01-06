import React, { Component } from 'react';

class Combobox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      enabled: false,
      value: ''
    }
  }

	handleSearch = ({ target }) => {
		this.setState({ value: target.value });
		const data = target.value
			? this.props.data.filter(item =>
					item.textField.toLowerCase().includes(target.value.toLowerCase())
			  ) || []
			: this.props.data;
		this.setState({ data });
  };
  
  handleCheck = () => {
		if (!this.props.disabled) {
			this._input.focus();
			this.setState({ enabled: !this.state.enabled });
		}
	};

	handleSelectItem = (item, index) => {
		this.setState({ value: item.textField, enabled: false });
		this.props.onSelectedItemChange(item.valueField, item.textField);
	};

  render() {
    return (
      <div id="container">
				<div onClick={this.handleCheck} id="input-div">
					<input
            type="text"
						placeholder={this.props.placeholder}
            value={this.state.value}
						disabled={this.props.disabled}
						ref={ref => (this._input = ref)}
						onChange={this.handleSearch}
					/>
				</div>
				{this.state.enabled && (
						<ul>
							{this.state.data.map((item, index) => (
								<li key={item.valueField}
									onClick={e => this.handleSelectItem(item, index)}>
									{item.textField}
								</li>
							))}
						</ul>
				  )}
			</div>
    )
  }
}

export default Combobox;
