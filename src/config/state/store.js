import { configureStore } from '@reduxjs/toolkit'

import playingMusic from './reducers/playingMusic'
import selectedMusic from './reducers/selectedMusic'

const store = configureStore({
  reducer: {
    playingMusic,
    selectedMusic
  }
})

export default store
