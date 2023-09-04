import { faqsData } from 'dh-marvel/components/faqs/faqsData'
import { FaqsType } from 'dh-marvel/interface/faqs';
import { NextApiRequest, NextApiResponse } from 'next'

type Data = FaqsType[] | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    // Consultar el method de la petición si es get enviamos los datos de lo contrario enviamos un mensaje de error
    if (req.method === "GET") {
        res.status(200).json(faqsData)
    } else {
        res.status(400).json({ message: "Método no permitido" })
    }

}