import { cpSync } from 'fs'
cpSync('./dist', '.', { recursive: true })
