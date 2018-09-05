let mix = require('laravel-mix');
let path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        extensions: [
            '.ts'
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: [
                'ng-annotate-loader',
                'babel-loader'
            ]
        }, {
            test: /\.ts$/,
            loaders: [
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: path.resolve(__dirname, 'tsconfig.json')
                    },
                },
                'angular2-template-loader'
            ]
        }]
    }
})
    .js('resources/assets/js/main.ts', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
