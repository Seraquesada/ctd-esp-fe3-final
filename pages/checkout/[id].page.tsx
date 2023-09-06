import ComicCard from 'dh-marvel/components/comicCard/ComicCard.component'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { Comics, Result } from 'dh-marvel/interface/comic'
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

interface Props {
  result: Result
}

const CheckOut : NextPage<Props> = ({ result }) => {
  return (
    <LayoutCheckout>
      <ComicCard result={result} />
      <div>CheckOut</div>
      
    </LayoutCheckout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const comics: Comics = await getComics(undefined, 12);

  const paths = comics.results?.map((comic : Result) => ({
      params: { id: comic.id.toString()}, 
  }));


  return {
      paths,
      fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  const id = Number(params?.id);

  const character = await getComic(id)

  return {
      props: {
          result: character
      }
  }
}

export default CheckOut