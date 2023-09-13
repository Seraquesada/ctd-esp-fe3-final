import React from 'react'
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import { CustomTextField } from './customInput/CustomTextField';

const DataDireccionEntrega = () => {

    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
                Direccion de Entrega
            </Typography>
            <CustomTextField
                name="address1"
                label="Dirección"
                type="text"
                control={control}
                defaultValue=""
            />
            <CustomTextField
                name="address2"
                label="Departamento, piso o altura"
                type="text"
                control={control}
                defaultValue=""
            />

            <CustomTextField
                name="city"
                label="Ciudad"
                type="text"
                control={control}
                defaultValue=""
            />

            <CustomTextField
                name="state"
                label="Provincia"
                type="text"
                control={control}
                defaultValue=""
            />

            <CustomTextField
                name="zipCode"
                label="Código postal"
                type="text"
                control={control}
                defaultValue=""
            />
        </>
    )
}

export default DataDireccionEntrega