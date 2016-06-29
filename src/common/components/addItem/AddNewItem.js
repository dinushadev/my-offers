import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import AddItemForm from './AddItemForm';
import {connect} from 'react-redux';

export default class AddNewItem extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      item :Object.assign({},this.props.item),
        errors:{},
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);

    this.saveItem = this.saveItem.bind(this);
    this.updateItemState = this.updateItemState.bind(this);
  }

  handleOpen ()  {
    this.setState({open: true});
  }

  handleClose () {
    this.setState({open: false});
  }


  saveItem(event){
    event.preventDefault();
  }

  updateItemState(event){
      const field = event.target.name;
      let item = this.state.item;
      item[field] = event.target.value;
      return this.setState({item:item});
    }


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
          onClick={this.handleClose}
        />,
      <FlatButton
        label="Submit"
        primary={true}
          onClick={this.handleClose}
        onTouchTap={this.handleClose} />
    ];

    return (
      <span>
        <RaisedButton label="New Item" onClick={this.handleOpen} onTouchTap={this.handleOpen} />
        <Dialog
          title="Add new Item"
          actions={actions}
          modal={false}
          open={this.state.open}>

          <AddItemForm
            item ={this.props.item}
            categories ={this.props.categories}
              errors={this.state.errors}
              loading={false}
              onChange={this.updateItemState}
              onSave={this.saveItem}
          />
        </Dialog>
      </span>
    );
  }
}
function mapStateToProps(state,ownProps){
  let item ={title:'', id:''};

  return{
    item: item,
    categories :[]
  };
}

export default connect(mapStateToProps)(AddNewItem);
