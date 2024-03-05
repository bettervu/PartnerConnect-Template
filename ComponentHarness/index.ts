import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { Configuration as CompilerConfig } from 'webpack';
import WebpackDevServer, { Configuration as ServerConfig } from 'webpack-dev-server';

// we are attempting to get our bas /integration-toolkit directory here

const basePath = path.join(__dirname, '.');
const serverPath = path.dirname(require.main!.filename);
const enrichmentIntegrationBasePath = path.join(path.dirname(require.main!.filename), '../src');
const rootPath = path.join(basePath, '/component-harness-server/');
const node_modules_path = path.join(basePath, '../node_modules/');

const serverConfig: ServerConfig = {
  port: 3000,
  open: true,
  client: {
    progress: true
  },
  host: '127.0.0.1'
};
const compilerConfig: CompilerConfig = {
  entry: [path.join(rootPath, '/src/index.tsx')],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      components: path.resolve(
        enrichmentIntegrationBasePath,
        'EnrichmentComponents/TimelineMarkerPopover/components/TooltipPopoverContent'
      ),
      server: serverPath,
      react: path.resolve(node_modules_path, 'react')
    },
    extensions: ['.js', '.styl', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        include: [
          path.join(rootPath, '/src'),
          path.join(
            enrichmentIntegrationBasePath,
            'EnrichmentComponents/TimelineMarkerPopover/components/TooltipPopoverContent'
          )
        ],
        use: {
          loader: path.join(node_modules_path, 'babel-loader'),
          options: {
            presets: [
              path.join(node_modules_path, '@babel/preset-env'),
              path.join(node_modules_path, '@babel/preset-react')
            ]
          }
        }
      },
      {
        test: /\.ts(x?)/,
        exclude: /node_modules/,
        include: [
          path.join(rootPath, '/src'),
          path.join(enrichmentIntegrationBasePath),
          path.join(
            enrichmentIntegrationBasePath,
            'EnrichmentComponents/TimelineMarkerPopover/components/TooltipPopoverContent'
          )
        ],
        use: { loader: 'ts-loader', options: { happyPackMode: true } }
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        parser: {
          node: true
        },
        use: [
          path.join(node_modules_path, 'style-loader'),
          {
            loader: path.join(node_modules_path, 'css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path]__[local]'
              },
              sourceMap: true
            }
          },
          {
            loader: path.join(node_modules_path, 'stylus-loader'),
            options: {
              sourceMap: true,
              stylusOptions: {
                outputStyle: 'expanded'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'index.html')
    })
  ]
};

export default async function ComponentServer() {
  const compiler = webpack(compilerConfig);
  const s = new WebpackDevServer(serverConfig, compiler);
  s.start();
}
