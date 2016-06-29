import React from 'react';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/lib/raised-button';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/lib/toolbar';

export default class CreditCardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }


  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <RaisedButton label="Sampath" primary={true} />
          <ToolbarSeparator />
          <RaisedButton label="Amex" primary={true} />
          <ToolbarSeparator />
          <RaisedButton label="Comatial" primary={true} />
          <ToolbarSeparator />
          <RaisedButton label="BOC" primary={true} />
            <ToolbarSeparator />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
