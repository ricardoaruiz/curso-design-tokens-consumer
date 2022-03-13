import * as globalStyles from 'design-tokens/dist/marca-a/js/global'
import * as lightStyles from 'design-tokens/dist/marca-a/js/light'
import * as darkStyles from 'design-tokens/dist/marca-a/js/dark'

type Global = typeof globalStyles
type Light = typeof lightStyles & Global;
type Dark = typeof darkStyles & Global;

export const light: Light = {
    ...globalStyles,
    ...lightStyles    
} as const

export const dark: Dark = {
    ...globalStyles,
    ...darkStyles
} as const