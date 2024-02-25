import consola from "consola"

try {
    consola.info('Starting build')
    await Bun.build({
        entrypoints: ['./index.ts'],
        outdir: './dist',
        external: [
            "*"
        ],
        target: 'node',
    })
    consola.success('Build complete')
} catch (e) {
    consola.error('Build failed', e)
}