import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Productitem = ({items,click}) => {
    return (
        
            <tr>
                <td><Button onClick={()=>click(items.name)}  variant="info">Info</Button>{' '}</td>
                <td>{items.name}</td>
                <td><img src={items.imgSrc} alt="" /></td>
                <td>{items.price}</td>
            </tr>
        
    )
}

export default Productitem
