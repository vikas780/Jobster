import { configureStore } from '@reduxjs/toolkit'

import userSlice from './features/userSlice'
import jobSlice from './features/job/jobSlice'
import allJobSlice from './features/alljobs/allJobSlice'
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobSlice,
  },
})
