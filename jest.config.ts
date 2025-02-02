import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}

export default config
