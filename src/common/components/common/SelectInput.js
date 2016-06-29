import React from 'react';
import SelectField from 'material-ui/lib/SelectField';
import MenuItem from 'material-ui/lib/menus/menu-item';

const items = [
  <MenuItem value={1} primaryText="new"/>,
  <MenuItem value={2} primaryText="Used"/>,
  <MenuItem value={3} primaryText="Other"/>,
];

export default class SelectInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: null};

       this.handleChange = (event, index, value) => this.setState({value});
  }


  render() {
    return (
      <SelectField value={this.state.value} onChange={this.handleChange}  floatingLabelText="Float Label Text">
        <MenuItem value={1} primaryText="Never"/>
        <MenuItem value={2} primaryText="Every Night"/>
        <MenuItem value={3} primaryText="Weeknights"/>
        <MenuItem value={4} primaryText="Weekends"/>
        <MenuItem value={5} primaryText="Weekly"/>
      </SelectField>
    );
  }
}
