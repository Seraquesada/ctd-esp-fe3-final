import React from 'react'
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import { CustomTextField } from './customInput/CustomTextField';

const DataDelPago = () => {

  const {control, formState:{errors} }  = useFormContext();

  return (
    <>
      <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
        Datos del Pago
      </Typography>
      <CustomTextField
        name="number"
        label="Número de tarjeta"
        type="text"
        control={control}
        defaultValue=""
      />

      <CustomTextField
        name="nameOnCard"
        label="Nombre como aparece en la tarjeta"
        type="text"
        control={control}
        defaultValue=""
      />

      <CustomTextField
        name="expDate"
        label="Fecha de expiración"
        type="text"
        control={control}
        defaultValue=""
      />

      <CustomTextField
        name="cvc"
        label="Código de segurirar"
        type="password"
        control={control}
        defaultValue=""
      />

      
    </>
  )
}

export default DataDelPago