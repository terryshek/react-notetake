module.exports = {
    entry:"./app/components/Main.js",
    output:{
        filename:"public/bundle.js"
    },
    module:{
        loaders:[{
            test:/\.jsx?$/,
            exclude:/(node_module\bower_component)/,
            loader:'babel',
            query:{
                presets:["react","es2015"]
            }
        }]
    }
}
