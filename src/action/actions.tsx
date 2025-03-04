import { createAction } from "@reduxjs/toolkit"

export const increase = createAction<number>('bank/increase')
export const decrease = createAction<number>('bank/decrease')