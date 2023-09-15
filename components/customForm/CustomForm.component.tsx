import React, { FC, useEffect, useRef, useState } from 'react'

import { set, useFormContext } from "react-hook-form";
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

interface DefaultValues {
    customer: {
        name: string;
        lastname: string;
        email: string;
    };
    address: {
        address1: string;
        address2: string;
        city: string;
        state: string;
        zipCode: string;
    };
    card: {
        number: string;
        cvc: string;
        expDate: string;
        nameOnCard: string;
    };
    order: {
        name: string,
        image: string,
        price: number
    }

}

const defaultValues: DefaultValues = {
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
    order: {
        name: "",
        image: "",
        price: 0
    }

};



const CustomForm: FC<Props> = ({ result, activeStep, handleBack, handleNext }) => {

    // const { handleSubmit, getValues, getFieldState, formState } = useFormContext();

    const router = useRouter() 
    
    const name = result?.title!
    const image = result?.thumbnail.path.concat(".", result?.thumbnail.extension)!
    const price = result?.price!

    const order : typeof defaultValues.order = {
        name,
        image,
        price
    }

    const [info, setinfo] = useState(defaultValues)

    const formatearInfo = (data: DefaultValues): CheckoutInput => {
        const dataFormat = {
            customer: {
                ...data.customer,
                address: {
                    ...data.address
                },
            },
            card: {
                ...data.card
            },
            order: {
                ...data.order
            },

        }
        return dataFormat;
    }

    const onSubmit = async () => {
        try {
            const dataFormateada = formatearInfo(info);
            const response = await postCheckOut(dataFormateada);
            
        } catch (error) {
            console.error('API call error:', error);
        }
    };

    const handlerCustomer = (data: typeof defaultValues.customer) => {

        setinfo({
            ...info,
            customer: { ...data },
            order: { ...order }
        });
        handleNext()

    }
    const handlerAddress = (data: typeof defaultValues.address) => {
        setinfo({
            ...info,
            address: { ...data },
        });
        handleNext()
    }

    const handlerCard = (data: typeof defaultValues.card) => {
        setinfo({
            ...info,
            card: { ...data },
        })

    }


    return (
        <Box sx={{ width: "80%", alignSelf: "center", marginTop: "2rem" }}>
            <Paper
                elevation={8}
                sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
            >
                <div onSubmit={onSubmit} >
                    {activeStep === 0 && <DataPersonal handleNext={handleNext} handlerCustomer={handlerCustomer} />}

                    {activeStep === 1 && < DataDireccionEntrega handleNext={handleNext} handlerAddress={handlerAddress} />}

                    {activeStep === 2 && <DataDelPago handlerCard={handlerCard} />}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        {activeStep >= 1 && <Button onClick={handleBack}>Anterior</Button>}
                    </Box>


                    {activeStep === 2 && <Button type='submit'>Enviar</Button>}
                </div>

            </Paper>
        </Box>
    )
}

export default CustomForm