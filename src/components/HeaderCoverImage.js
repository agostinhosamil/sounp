import { useState, Fragment, useEffect } from 'react'
import MoreMusicsImage1 from '../images/undraw_media_player_re.svg'
import MoreMusicsImage2 from '../images/undraw_share_re_9kfx.svg'
import MoreMusicsImage3 from '../images/undraw_social_networking_re_i1ex.svg'
import MoreMusicsImage4 from '../images/undraw_audio_player_re_cl20.svg'
import MoreMusicsImage5 from '../images/undraw_playlist_re_1oed.svg'
import MoreMusicsImage6 from '../images/undraw_uploading_re_okvh.svg'
import MoreMusicsImage7 from '../images/undraw_video_streaming_re_v3qg.svg'
import MoreMusicsImage8 from '../images/undraw_online_media_re_r9qv.svg'
import MoreMusicsImage9 from '../images/undraw_trends_re_2bd0.svg'

export function HeaderCoverImage () {
  const [coverImageIndex, setCoverImageIndex] = useState(0)

  const coverImagesList = [
    MoreMusicsImage1,
    MoreMusicsImage2,
    MoreMusicsImage3,
    MoreMusicsImage4,
    MoreMusicsImage5,
    MoreMusicsImage6,
    MoreMusicsImage7,
    MoreMusicsImage8,
    MoreMusicsImage9,
  ]

  useEffect(() => {
    setCoverImageIndex(parseInt(Math.random() * coverImagesList.length))
  }, [coverImagesList.length])

  const HeaderCoverImageElement = coverImagesList[
    coverImageIndex
  ]

  return (
    <Fragment>
      <HeaderCoverImageElement />
    </Fragment>
  )
}
