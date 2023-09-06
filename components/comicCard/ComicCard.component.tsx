import React, { FC } from 'react'
import { Result } from 'dh-marvel/interface/comic';
import { Button, CardActions, CardContent, Typography, Card } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
    result: Result
}

const ComicCard: FC<Props> = ({ result }) => {
    console.log()
    const router = useRouter();

    const handleClick = () => {
        router.push(`/comics/${result.id}`);
    };

    const handleClickComprar = () => {
        router.push(`/checkout/${result.id}`);
    };


    return (
        <Card sx={{ maxWidth: 500, padding: 3, marginBottom: 3,  }}>
            <Image
                width={250}
                height={250}
                src={result?.images[0]?.path.concat(".",result?.images[0]?.extension)}
                alt={result.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {result.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {result.description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button onClick={handleClick} size="medium" variant="outlined" color="primary">
                    Ver Detalle
                </Button>
                <Button onClick={handleClickComprar} size="medium" variant="outlined" color="primary">
                    Comprar
                </Button>
            </CardActions>
        </Card>
    )
}

export default ComicCard