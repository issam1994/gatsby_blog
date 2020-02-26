const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
      // etc.
    ],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })
  
module.exports = () => {
    console.log("current environment!!!",process.env.NODE_ENV)
    return ({
        plugins: [
            require("tailwindcss"),
            require('postcss-preset-env')({ stage: 1 }),
            ...process.env.NODE_ENV === 'production'
          ? [purgecss]
          : []
        ],
    })
}