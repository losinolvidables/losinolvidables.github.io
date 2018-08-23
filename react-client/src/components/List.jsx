import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className="list">
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;
