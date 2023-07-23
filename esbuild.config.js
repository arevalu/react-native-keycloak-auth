const glob = require('tiny-glob');
const { build } = require('esbuild');
const pkg = require('./package.json');

(async () => {
  const entryPoints = await glob('./src/*.js');

  const shared = {
    bundle: true,
    entryPoints,
    // Treat all dependencies in package.json as externals to keep bundle size to a minimum
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    logLevel: 'info',
    minify: true,
    sourcemap: true,
  };

  build({
    ...shared,
    format: 'esm',
    outdir: './dist/esm/index.js',
    target: ['esnext'],
  });

  build({
    ...shared,
    format: 'cjs',
    outdir: './dist/cjs/index.js',
    target: ['esnext'],
  });
})();
