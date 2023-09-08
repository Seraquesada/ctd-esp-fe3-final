import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

import { FaqsType } from 'dh-marvel/interface/faqs';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';


interface Props {
    faqs: FaqsType[]
}

const Faqs: NextPage<Props> = ({ faqs }) => {
    return (
        <LayoutGeneral>
            <Container>
                {faqs.map(faq => {
                    return (
                        <Accordion key={faq.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>)
                })}
            </Container>
        </LayoutGeneral>
    )
};

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch(`${process.env.API_ROUTE}/faqs`)
    const faqs = await response.json()

    return {
        props: {
            faqs
        }
    }
}

export default Faqs;

