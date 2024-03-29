import webpack from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('ts', 'tsx');
  config.module!.rules!.push(buildCssLoaders(true));

  config.module!.rules = config.module!.rules!.map(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    (rule: webpack.RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    }
  );
  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config!.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    })
  );
  return config;
};
