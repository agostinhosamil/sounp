import { createSlice } from '@reduxjs/toolkit'

const playingMusicSlice = createSlice({
  name: 'playingMusic',
  initialState: {
    data: {},
    audioContext: null
  },
  reducers: {
    setPlayingMusic(state, { payload }) {
      state.data = payload.music
      state.audioContext = payload.audioContext
    },

    unsetPlayingMusic(state) {
      state.data = {}
      state.audioContext = null
    }
  }
})

export const { setPlayingMusic, unsetPlayingMusic } = playingMusicSlice.actions

export default playingMusicSlice.reducer
