import React, { FC } from 'react'
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { CustomTextField } from './customInput/CustomTextField';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCard } from 'rules';

interface Props {
  handlerCard: (data: any) => void

}


const DataDelPago: FC<Props> = ({ handlerCard, }) => {

  const {
    getValues,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schemaCard) })

  const onSubmit = (data: any) => {
    handlerCard(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
        Datos del Pago
      </Typography>

      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="number" />
      </Typography>

      <CustomTextField
        required={true}
        name="number"
        label="Número de tarjeta"
        type="text"
        control={control}
        defaultValue=""
      />

      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="nameOnCard" />
      </Typography>

      <CustomTextField
        required={true}
        name="nameOnCard"
        label="Nombre como aparece en la tarjeta"
        type="text"
        control={control}
        defaultValue=""
      />

      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="expDate" />
      </Typography>

      <CustomTextField
        required={true}
        name="expDate"
        label="Fecha de expiración"
        type="text"
        control={control}
        defaultValue=""
      />

      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="cvc" />
      </Typography>

      <CustomTextField
        required={true}
        name="cvc"
        label="Código de seguridad"
        type="password"
        control={control}
        defaultValue=""
      />


      {<Button variant="contained" type="submit"> Siguiente</Button>}
    </form>
  )
}

export default DataDelPago