const webpack = require('webpack');
const pick = require('lodash/pick');
const kebabCase = require('lodash/kebabCase');
const externals = require('./remote-component.config');
const { log } = console;
const color = require('cli-color');
const green = color.greenBright;
const cyan = color.cyanBright;
const path = require('path');

const basePath = path.join(__dirname, '.');
const nodeModulesPath = path.join(basePath, '../../node_modules/');

module.exports = env => {
  let dist = `../../${env.integration}/dist`;
  if (env.component) dist = `../../${env.integration}/dist/${kebabCase(env.component)}`;

  const bundlePath = path.join(path.dirname(__filename), dist);
  log(green(`\nBasePath: `), basePath);
  log(green(`\nnodeModulesPath: `), nodeModulesPath);
  log(green(`\nbundlePath: `), bundlePath);

  let entry = `../../${env.integration}/src/enrichmentComponent/index.tsx`;
  if (env.component) entry = `../../${env.integration}/src/EnrichmentComponents/${env.component}/index.tsx`;

  return {
    plugins: [
      new webpack.EnvironmentPlugin({
        'process.env.NODE_ENV': process.env.NODE_ENV
      })
    ],
    entry: path.join(basePath, entry),
    output: {
      path: bundlePath,
      libraryTarget: 'commonjs'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js']
    },
    externals: {
      ...externals,
      'remote-component.config.js': 'remote-component.config.js'
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          type: 'asset/inline'
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: [
                  path.join(nodeModulesPath, '@babel/preset-env'),
                  // path.join(nodeModulesPath, '@babel/preset-typescript'),
                  path.join(nodeModulesPath, '@babel/preset-react')
                ],
                sourceMap: false
              }
            }
          ]
        },
        {
          test: /\.ts(x?)/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: { happyPackMode: true }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.styl$/,
          exclude: /node_modules/,
          parser: {
            node: true
          },
          use: [
            path.join(nodeModulesPath, 'style-loader'),
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[path]__[local]'
                },
                sourceMap: false
              }
            },
            {
              loader: path.join(nodeModulesPath, 'stylus-loader'),
              options: {
                stylusOptions: {
                  outputStyle: 'expanded'
                }
              }
            }
          ]
        }
      ]
    }
  };
};
