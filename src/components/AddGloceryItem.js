import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: orange500
  },
  underlineStyle: {
    borderColor: orange500
  },
  floatingLabelStyle: {
    color: orange500
  },
  floatingLabelFocusStyle: {
    color: blue500
  }
};

class AddGloceryItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // Note: here item is object!!!!
      item: this.props.item
    };
  }

  render () {
    return (
      <div>
        <h2>Add Glocery Item here:</h2>
        <TextField
          hintText = "Please input new glocery item."
          errorText = "This field is required."
          errorStyle = {styles.errorStyle}
          value={this.state.item.title}
          onChange={this.props.handleTitleChange}
        />
        <br /><br />
        <RaisedButton
          label="Add Item"
          primary
          onClick = {this.props.itemSave.bind(this)}/>
      </div>
    );
  }
}

AddGloceryItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemSave: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired
};

export default AddGloceryItem;
