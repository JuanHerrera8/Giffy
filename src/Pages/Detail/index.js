import React from 'react'
import Gif from 'components/Gif/Gif'
import {Redirect} from 'wouter'
import useSingleGif from 'hooks/useSingleGif'
import { Helmet } from 'react-helmet'
import Spinner from 'components/Spinner'

export default function Detail ({ params }) {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})
  const title = gif ? gif.title : ''


  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>CArgando...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }
  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return <>
      <Helmet>
        <title>{title} || Giffy</title>
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
}
