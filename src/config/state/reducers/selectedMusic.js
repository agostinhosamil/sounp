import { createSlice } from '@reduxjs/toolkit'

const selectedMusicSlice = createSlice({
  name: 'selectedMusic',
  initialState: {
    id: null
  },
  reducers: {
    setSelectedMusic(state, { payload }) {
      state.id = payload.id
    },

    unsetSelectedMusic(state) {
      state.id = null
    }
  }
})

export const { setSelectedMusic, unsetSelectedMusic } = selectedMusicSlice.actions

export default selectedMusicSlice.reducer
