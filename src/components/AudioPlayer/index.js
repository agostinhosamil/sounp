import { useEffect, useRef, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import WaveSurfer from 'wavesurfer.js'

import AppContext from '@config/state/context'

import { setPlayingMusic, unsetPlayingMusic } from '@reducers/playingMusic'

export const AudioPlayer = (music) => {
  const [playing, setPlaying] = useState(false)
  const containerRef = useRef()
  const playButtonRef = useRef()
  const dispatch = useDispatch()
  const playingMusicId = useSelector(state => state.playingMusic.data.id)
  const { setSelectedMusicContext, selectedMusicContext } = useContext(AppContext)
  // const playingMusicAudioContext = useSelector(({ playingMusic }) => playingMusic.audioContext)

  const [selectedMusicPlayPercent, setSelectedMusicPlayPercent] = useState(0)

  const { preview } = music

  useEffect(() => {

    const WaveSurfer = require('wavesurfer.js')

    // if (selectedMusicContext) {
    //   console.log("selectedMusicContext => \n", selectedMusicContext)
    // }

    // console.log("playingMusicAudioContext", playingMusicAudioContext)

    containerRef.current.innerHTML = '';

    containerRef.waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#eeeeee",
      progressColor: "OrangeRed",
      cursorColor: "OrangeRed",
      barWidth: 3,
      barRadius: 3,
      responsive: true,
      height: 150,
      // If true, normalize by the maximum peak instead of 1.0.
      normalize: true,
      // Use the PeakCache to improve rendering speed of large waveforms.
      partialRender: true
    })

    // if (selectedMusicContext) {
    //   containerRef.waveSurfer.init()
    // }

    containerRef.waveSurfer.load(preview)

    containerRef.waveSurfer.on('finish', () => {
      setPlaying(false)

      if (!playing) {
        dispatch(unsetPlayingMusic())
      }
    })

    // containerRef.waveSurfer.on('ready', () => {
    //   if (selectedMusicContext && playingMusicId === music.id) {
    //     console.log('KA', selectedMusicContext.getCurrentTime())

    //     selectedMusicContext.pause()
    //     console.log('After pause', selectedMusicContext.getCurrentTime())

    //     setSelectedMusicPlayPercent(selectedMusicContext.getCurrentTime() / selectedMusicContext.getDuration())
        
    //     // playButtonRef.click()
    //     // console.log('After click')

    //     // const autoEventList = [
    //     //   'mousemove',
    //     //   'mouseover'
    //     // ]

    //     // autoEventList.forEach(autoEvent => {
    //     const someEventHandler = () => {
    //       if (!containerRef.waveSurfer.isPlaying()) {
    //         // containerRef.waveSurfer.play()
    //         handlePlayPause()
    //         containerRef.waveSurfer.seekTo(selectedMusicPlayPercent)


    //         setPlaying(true)
    //         // setSelectedMusicContext(containerRef.waveSurfer)

    //         //selectedMusicContext.destroy()

    //         // containerRef.waveSurfer.stateUpdated = true
    //       }

    //       // window.removeEventListener('mousemove', someEventHandler, true)
    //     }

    //     window.addEventListener('mousemove', someEventHandler, true)
    //     // })
    //   }
    // })
    
    // console.log(containerRef.waveSurfer)

    // if (autoplay) {
    //   containerRef.waveSurfer.playPause()
    // }
  }, [preview, selectedMusicPlayPercent])

  function handlePlayPause () {
    setPlaying(!playing)

    if (!playing) {
      if (!!selectedMusicContext) {
        const currentPlayerTime = selectedMusicContext.getCurrentTime() / selectedMusicContext.getDuration()
        containerRef.waveSurfer.seekTo((currentPlayerTime < 0 || currentPlayerTime > 1) ? 0 : currentPlayerTime)
        selectedMusicContext.pause()
      }

      // console.log("Playing => ", music)

      setSelectedMusicContext(containerRef.waveSurfer)

      dispatch(setPlayingMusic({ music }))
    } else {
      //setSelectedMusicContext(null)
      //dispatch(unsetPlayingMusic())
    }

    containerRef.waveSurfer.playPause()
  }

  return (
    <div>
      <div ref={containerRef}></div>
      <button ref={playButtonRef} onClick={handlePlayPause}>
        {!playing ? 'Play' : 'Pause'}
      </button>
    </div>
  )
}
