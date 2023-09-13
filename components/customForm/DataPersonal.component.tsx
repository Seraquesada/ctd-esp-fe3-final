import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import { CustomTextField } from './customInput/CustomTextField';

const DataPersonal = () => {

    const {control, formState:{errors} }  = useFormContext();

    return (
        <>
            <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
                Datos Personales
            </Typography>

            <CustomTextField
                name="name"
                control={control}
                defaultValue=""
                type="text"
                label="Nombre"
            />

            <CustomTextField
                name="lastname"
                label="Apellido"
                type="text"
                control={control}
                defaultValue=""
            />

            
            <CustomTextField
                name="email"
                label="E-Mail"
                type="email"
                control={control}
                defaultValue=""
            />

        </>
    )
}

export default DataPersonal