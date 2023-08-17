import { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  AlbumCoverImage,
  TitleSkeleton,
  Data
} from './styles'

export const LoadingMusicCardContent = () => (
  <Fragment>
    <AlbumCoverImage>
      <Skeleton height={290} />
    </AlbumCoverImage>
    <Data>
      <TitleSkeleton>
        <Skeleton />
      </TitleSkeleton>
      <Skeleton count={4} />
    </Data>
  </Fragment>
) 
