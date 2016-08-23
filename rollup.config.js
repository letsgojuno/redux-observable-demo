import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'src/index.js',
  dest: 'dist/rollup.bundle.js',
  format: 'iife',
  plugins: [
    replace({
      'process.env.NODE_ENV': '"production"'
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      presets: ['es2015-loose-rollup'],
      plugins: [],
      babelrc: false,
      include: '**/*.js',
    }),
    uglify()
  ]
};
