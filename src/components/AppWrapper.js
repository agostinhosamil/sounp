import { useState } from 'react'
import { useSelector } from 'react-redux'

import { PlayingMusicPopup } from '@components/PlayingMusicPopup'

import AppContext from '@config/state/context'

export function AppWrapper ({ children }) {
  const [selectedMusicContext, setSelectedMusicContext] = useState(null)

  const playingMusic = useSelector(state => state.playingMusic.data)
  const selectedMusicId = useSelector(state => state.selectedMusic.id)

  return (
    <AppContext.Provider 
      value={{ 
        selectedMusicContext, 
        setSelectedMusicContext 
      }}
      >
      {children}

      {playingMusic.id && selectedMusicId !== playingMusic.id && (
        <PlayingMusicPopup {...playingMusic} context={selectedMusicContext} />
      )}
    </AppContext.Provider>
  )
}
