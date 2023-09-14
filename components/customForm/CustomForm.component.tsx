import React, { FC, useEffect, useState } from 'react'

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
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'rules';
import * as yup from "yup";


interface Props {
    activeStep: number
    result: Result
    handleBack: () => void
    handleNext: () => void
}


const defaultValues = {
    customer: {
        name: "",
        lastname: "",
        email: "",
    },
    address: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
    },
    card: {
        number: "",
        cvc: "",
        expDate: "",
        nameOnCard: "",
    },

};

const CustomForm: FC<Props> = ({ result, activeStep, handleBack, handleNext }) => {

    // const { handleSubmit, getValues, getFieldState, formState } = useFormContext();

    
    
    
    const [data, setData] = useState(defaultValues)
    console.log(data.address, data.card,data.customer)
    const router = useRouter()
    const redirect = (response: CheckoutInput) => {
        if (response?.card) {
            router.push(`/checkout?=comicId${result.id}`);
        }
    }

    const handlerCustomer = (data: any) => {
        setData({ ...data, customer: data })
        handleNext()

    }
    const handlerAddress = (data: any) => {
        setData({ ...data, address: data })
        handleNext()
    }
    const handlerCard = (data: any) => {
        setData({ ...data, card: data })
        
    }

    const onSubmit = async (data: any) => {
        const name = result?.title
        const image = result?.thumbnail.path.concat(".", result?.thumbnail.extension)
        const price = result.price

        const { order } =
        {
            order: {
                name,
                image,
                price
            }
        }
        data.order = order
        console.log(data)

        // await postCheckOut(data)
        // redirect(await postCheckOut(data))
    };


    return (
        <Box sx={{ width: "80%", alignSelf: "center", marginTop: "2rem" }}>
            <Paper
                elevation={8}
                sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
            >

                <div >

                    {activeStep === 0 && <DataPersonal handleNext={handleNext} handlerCustomer={handlerCustomer} />}

                    {activeStep === 1 && < DataDireccionEntrega handleNext={handleNext} handlerAddress={handlerAddress} />}

                    {activeStep === 2 && <DataDelPago handlerCard={handlerCard} />}


                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        {/* {activeStep >= 1 && <Button onClick={handleBack}>Anterior</Button>}
                        {activeStep < 2 && <Button variant="contained" onClick={handleNext}>Siguiente</Button>}
                        {activeStep === 2 && <Button variant="contained" type="submit" >Enviar</Button>} */}
                    </Box>
                </div>

            </Paper>
        </Box>
    )
}

export default CustomForm