import HorizontalLinearStepper from 'dh-marvel/components/customStepper/CustomStepper.component'
import React from 'react'
import Box from '@mui/material/Box';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';

const ConfirmacionCompra = ({ }) => {
    //Esto es checkout hasta que funcione la ruta
    return (
        <LayoutCheckout>
            <Box sx={{ width:"100%",display: "flex",alignContent:"center", justifyContent: "center" }}>
                
                <HorizontalLinearStepper />
            </Box>
        </LayoutCheckout>
    )
}

export default ConfirmacionCompra