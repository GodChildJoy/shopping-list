import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import {Table, TableBody, TableFooter, TableRow, TableRowColumn} from 'material-ui/Table';

const GloceryItemsList = ({items, deleteItem, toggleItemPurchase}) => {
  return (
    <div>
      <h2>Glocery List:</h2>
        <Table>
          <TableBody stripedRows displayRowCheckbox={false}>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableRowColumn>
                  <h4 className={item.purchased ? "strikethrough" : ""}>
                    {item.title}
                  </h4>
                </TableRowColumn>
                <TableRowColumn>
                  <RaisedButton
                    secondary
                    label={item.purchased ? "unbuy" : "buy"}
                    onClick={toggleItemPurchase.bind(this, item)}/>
                </TableRowColumn>
                <TableRowColumn>
                  <IconButton onClick={deleteItem.bind(this, item)}>
                    <HighlightOff />
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  );
};

GloceryItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleItemPurchase: PropTypes.func.isRequired
};

export default GloceryItemsList;
