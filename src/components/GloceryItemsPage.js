import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as itemActions from '../actions/itemActions';
import { bindActionCreators } from 'redux';
import AddGloceryItem from './AddGloceryItem';
import GloceryItemsList from './GloceryItemsList';

const styles = {
  container: {
    margin: '0 auto',
    paddingTop: 20,
    width: 800
  }
};

class GloceryItemsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // Note: here item is object!!!!
      //item: {title: ""}
      items: this.props.items,
      item: Object.assign({}, this.props.item)
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.itemSave = this.itemSave.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleItemPurchase = this.toggleItemPurchase.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.items != nextProps.items) {
  //     this.setState({items: Object.assign({}, nextProps.items)});
  //   }
  // }

  handleTitleChange(e) {
    const item = this.state.item;
    item.title = e.target.value;
    this.setState({item: item});
  }

  itemSave(e) {
    //alert(`Adding item! ${this.state.itemInput}`);
    this.props.actions.saveGloceryItem(this.state.item);
    const item = this.state.item;
    item.title = "";
    this.setState({item: item});
  }

  deleteItem(itemDelete) {
    this.props.actions.deleteGloceryItem(itemDelete);
  }

  toggleItemPurchase(item) {
    this.props.actions.togglePurchase(item);
  }

  render () {
    return (
      <div style={styles.container}>
        <h1>Glocery Store using react+redux+mongo+express</h1>
        <GloceryItemsList
          items={this.props.items}
          deleteItem={this.deleteItem}
          toggleItemPurchase={this.toggleItemPurchase} />
        <AddGloceryItem
          item = {this.state.item}
          handleTitleChange={this.handleTitleChange}
          itemSave={this.itemSave} />
      </div>
    );
  }
}

GloceryItemsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  items:  PropTypes.array.isRequired
};

function mapStateToProps (state, ownProps) {
  return {
    items: state.items // from rootReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GloceryItemsPage);
