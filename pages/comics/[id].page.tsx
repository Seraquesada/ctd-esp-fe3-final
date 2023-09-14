import ComicCard from 'dh-marvel/components/comicCard/ComicCard.component'
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'
import { Result } from 'dh-marvel/interface/comic'
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, CardContent, Container, Typography, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link'

interface Props {
    result: Result
}

const ComicPage: NextPage<Props> = ({ result }) => {

    return (
        <LayoutGeneral >
            <Container sx={{ display: "flex", flexWrap: "no-wrap", flexDirection: "row", alignContent: "center", marginX: "10rem", marginY: "2rem" }}>
                <ComicCard result={result} />
                <Card sx={{ width: "100%", height: "max-content", padding: 2, marginLeft: 4 }}>
                    <CardContent>
                        <Typography gutterBottom variant="body1"  >
                            {result?.textObjects[0]?.text}
                        </Typography>

                        <Typography gutterBottom  >
                            <p>
                                Old Price
                                <span style={{ textDecoration: 'line-through', marginLeft: "10px" }}>
                                    {`$ ${result.oldPrice}`}
                                </span>
                            </p>
                        </Typography>
                        <Typography gutterBottom variant="body1" >
                            {` New Price $ ${result.price}`}
                        </Typography>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Characters</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    {result?.characters.items?.map(character => {
                                        return (
                                            <li key={character.name} >
                                                <Link href={`/personajes/${character.resourceURI.split("/").at(6)}`}>
                                                    {character.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Creadores</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {result?.creators.items?.map(character => {
                                    return (
                                        <p key={character.name}>
                                            {character.name}
                                        </p>)
                                })
                                }
                            </AccordionDetails>
                        </Accordion>
                    </CardContent>
                </Card>
            </Container>

        </LayoutGeneral>
    )
};


export const getStaticPaths: GetStaticPaths = async () => {
    const comics = await getComics();
    const paths = comics.data.results?.map((comic: Result) => ({
        params: { id: comic.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const id = Number(context.params?.id);
    const character = await getComic(id)

    return {
        props: {
            result: character
        }
    }
}

export default ComicPage