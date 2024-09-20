// MUI Imports
import Button from '@mui/material/Button'

// Type Imports
import type { ChildrenType } from '@core/types'


// Component Imports
import Providers from '@components/Providers'


// Util Imports
import { getMode, getSystemMode } from '@core/utils/serverHelpers'

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'
  const mode = getMode()
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      {children}
    </Providers>
  )
}

export default Layout

