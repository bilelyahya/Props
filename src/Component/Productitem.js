import React from 'react';
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const Productitem = ({items,click}) => {
    return (
        <div>
            <tr>
                <td><Button onClick={()=>click(items.name)}  variant="info">Info</Button>{' '}</td>
                <td>{items.name}</td>
                <td><img src={items.imgSrc} alt="" /></td>
                <td>{items.price}</td>
            </tr>
        </div>
    )
}
Productitem.propTypes={
    click :PropTypes.function
  }
export default Productitem
