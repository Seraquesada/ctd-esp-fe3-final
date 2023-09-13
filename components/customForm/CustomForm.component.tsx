import React, { FC } from 'react'

import { useFormContext } from "react-hook-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { CheckoutInput } from 'dh-marvel/features/checkout/checkout.types';
import { postCheckOut } from 'dh-marvel/services/checkout/checkout-service';
import { Result } from 'dh-marvel/interface/comic';
import DataPersonal from './DataPersonal.component';
import DataDireccionEntrega from './DataDireccionEntrega.component';
import DataDelPago from './DataDelPago.component';

interface Props {
    activeStep: number
    result: Result
    handleBack: () => void
    handleNext: () => void
}



const CustomForm: FC<Props> = ({ result, activeStep, handleBack, handleNext }) => {

    const { handleSubmit, getValues } = useFormContext();

    const onSubmit = (data: any) => {

        const name = result?.title
        const image = result?.thumbnail.path.concat(".", result?.thumbnail.extension)
        const price = result.price

        const dataFinal: CheckoutInput = {
            customer: {
                name: getValues().name,
                lastname: getValues().lastname,
                email: getValues().email,
                address: {
                    address1: getValues().address1,
                    address2: getValues().address2,
                    city: getValues().city,
                    state: getValues().state,
                    zipCode: getValues().zipCode,
                },
            },
            card: {
                number: getValues().number,
                cvc: getValues().cvc,
                expDate: getValues().expDate,
                nameOnCard: getValues().nameOnCard,
            },
            order: {
                name,
                image,
                price
            }
        }
        data = dataFinal
        console.log(data, dataFinal)
        //postCheckOut(data)

    };


    return (
        <Box sx={{ width: "80%", alignSelf: "center", marginTop: "2rem" }}>
            <Paper
                elevation={8}
                sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
            >

                <form onSubmit={handleSubmit(onSubmit)}>
                    {activeStep === 0 && <DataPersonal />}

                    {activeStep === 1 && < DataDireccionEntrega />}

                    {activeStep === 2 && <DataDelPago />}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        {activeStep >= 1 && <Button onClick={handleBack}>Anterior</Button>}
                        {activeStep < 2 && <Button onClick={handleNext}>Siguiente</Button>}
                        {activeStep === 2 && <Button variant="contained" type="submit" >Enviar</Button>}
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default CustomForm