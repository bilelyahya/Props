import React from 'react'

const Footer = ({children,facture}) => {
    return (
        <div>
            {children}
            Facture : {facture}
        </div>
    )
}
Footer.defaultProps={
    facture : "200000 dt"
}
export default Footer
