import React, { FC } from 'react'

import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from 'react';
import { CheckoutInput } from 'dh-marvel/features/checkout/checkout.types';

interface Props {
    activeStep: number
}

const CustomForm: FC<Props> = ({ activeStep }) => {


    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<CheckoutInput>();

    const onSubmit = (data: any) => {
        console.log(data);
    };


    return (
        <Box sx={{ width: "80%", alignSelf: "center", marginTop: "2rem" }}>
            <Paper
                elevation={8}
                sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
            >

                <form onSubmit={handleSubmit(onSubmit)}>
                    {activeStep === 0 && (
                        <>
                            <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
                                Datos Personales
                            </Typography>
                            <Controller
                                name="customer.name"
                                control={control}
                                defaultValue={""}
                                // Objeto con las reglas de validación ejem: required: true, minLength: 2, maxLength: 10
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Nombre"
                                        variant="outlined"
                                        fullWidth
                                        // Impornte debe tener el name
                                        // name="name"
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />

                            {errors.customer?.name && <span>Este campo es requerido</span>}

                            <Controller
                                name="customer.lastname"
                                control={control}
                                defaultValue={""}
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Apellido"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            {errors.customer?.lastname && <span>Este campo es requerido</span>}
                        
                            <Controller
                                name="customer.email"
                                control={control}
                                defaultValue={""}
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            {errors.customer?.email && <span>Este campo es requerido</span>}
                        </>

                    )
                    }

                    {activeStep === 1 && (
                        <>
                            <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
                                Direccion de Entrega
                            </Typography>

                            <Controller
                                name="customer.address.address1"
                                control={control}
                                defaultValue={""}
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Dirección"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            {errors.customer?.address?.address1 && <span>Este campo es requerido</span>}
                            <Controller
                                name="customer.address.address2"
                                control={control}
                                defaultValue={""}
                                rules={{ required: false }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Dirección 2 "
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />

                            <Controller
                                name="customer.address.city"
                                control={control}
                                defaultValue={""}
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Ciudad"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            {errors.customer?.address?.city && <span>Este campo es requerido</span>}
                             {/* * Dirección `(requerido)`
                            * Departamento, piso, etc `(opcional)`
                            * Ciudad `(requerido)`
                            * Provincia `(requerido)`
                            * Código postal `(requerido)` */}
                                                        <Controller
                                name="customer.address.state"
                                control={control}
                                defaultValue={""}
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Provincia"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            {errors.customer?.address?.state && <span>Este campo es requerido</span>}
                            <Controller
                                name="customer.address.zipCode"
                                control={control}
                                defaultValue={""}
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Codigo Postal"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            {errors.customer?.address?.zipCode && <span>Este campo es requerido</span>}

                        </>

                    )
                    }

                    {/* {activeStep === 2 && (
                        <>
                            <Typography sx={{ paddingBottom: "1rem" }} variant="h4" align="center">
                                Datos del Pago
                            </Typography>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue={""}
                                
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Nombre"
                                        variant="outlined"
                                        fullWidth
                                        // Impornte debe tener el name
                                        // name="name"
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />

                            {errors.name && <span>Este campo es requerido</span>}

                            <Controller
                                name="lastName"
                                control={control}
                                defaultValue={""}
                                rules={{ required: true }}
                                render={({ field }: any) => (
                                    <TextField
                                        {...field}
                                        type="text"
                                        label="Apellido"
                                        variant="outlined"
                                        // Impornte debe tener el name
                                        // name="lastName"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            {errors.lastName && <span>Este campo es requerido</span>}
                        </>

                    )
                    } */}




                </form>
            </Paper>
        </Box>
    )
}

export default CustomForm