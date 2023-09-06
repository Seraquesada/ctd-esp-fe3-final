import ComicCard from 'dh-marvel/components/comicCard/ComicCard.component'
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'
import { Comics, Result } from 'dh-marvel/interface/comic'
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

interface Props {
    result: Result
}

const ComicPage: NextPage<Props> = ({ result }) => {
    return (
        <LayoutGeneral >
            <ComicCard result={result} />
        </LayoutGeneral>
    )
};


export const getStaticPaths: GetStaticPaths = async () => {
    const comics: Comics = await getComics(undefined, 12);

    const paths = comics.results?.map((comic) => ({
        params: { id:  comic.id }, 
    }));


    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context)
    const id = Number(context.params?.id);

    const character = await getComic(id)

    return {
        props: {
            result: character
        }
    }
}

export default ComicPage