import React, { FC } from 'react'

interface Props {
    comicName: string;
    comicImage: string;
    address: string;
    price: number;
}

const CompraCard: FC<Props> = ({ comicName, comicImage, address, price,  }) => {
    return (
        <div>CompraCard</div>
    )
}

export default CompraCard