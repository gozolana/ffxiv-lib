import { cpSync, rmSync } from 'fs'

rmSync('./assets', { recursive: true, force: true })
rmSync('./lib', { recursive: true, force: true })
rmSync('./plugin', { recursive: true, force: true })
//rmSync('./lib.js', { force: true })
//rmSync('./plugin.js', { force: true })

cpSync('./dist/assets', './assets', { recursive: true })
cpSync('./dist/lib', './lib', { recursive: true })
cpSync('./dist/plugin', './plugin', { recursive: true })
//cpSync('./dist/lib.js', './lib/index.js')
//cpSync('./dist/plugin.js', './plugin/index.js')
