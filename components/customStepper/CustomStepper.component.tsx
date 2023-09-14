import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormProvider, useForm } from "react-hook-form";
import CustomForm from '../customForm/CustomForm.component';
import { Result } from 'dh-marvel/interface/comic';


const steps = ["Datos Personales", "Dirección de entrega", "Datos del pago",];

interface Props {
    result: Result
}

export default function HorizontalLinearStepper({ result }: Props) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const methods = useForm()

    return (

        <Box sx={{ width: '65%', display: "flex", flexDirection: "column", alignCenter: "center" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel >{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            
                <CustomForm activeStep={activeStep} result={result} handleBack={handleBack} handleNext={handleNext} />
            
        </Box>

    );
}
