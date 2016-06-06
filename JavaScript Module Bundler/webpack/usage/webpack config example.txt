module.exports = {

    context: __dirname + "/",

    // The entry point for the bundle.
    entry: {
        test:["./js/test.js"],
        react:["./js/react.js"]
    },

    // Options affecting the output of the compilation.
    output: {
        // The output directory as absolute path (required).
        path: __dirname + '/bundle',
        // Specifies the name of each output file on disk.
        filename: '[name].js'
    },

    // Options affecting the normal modules
    module: {
        /**
         * An array of automatically applied loaders.
         * Each item can have these properties
         * test: A condition that must be met
         *   "test" is commonly used to match the file extension
         * exclude: A condition that must not be met
         *   "exclude" should be used to exclude exceptions
         * include: A condition that must be met
         *   "include" is commonly used to match the directories
         * loader: A string of “!” separated loaders
         *   The loaders here are resolved relative to the resource which they are applied to.
         *   If you have loaders installed from npm and your node_modules folder is not in a parent folder of all source files,
         *   webpack cannot find the loader.
         * loaders: An array of loaders as string
         */
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel", // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ["transform-runtime"]
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loader: "style!css"
            }
        ]
    }
}
