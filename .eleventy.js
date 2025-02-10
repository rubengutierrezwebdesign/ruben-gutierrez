module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/pages/projects-tools-templates/web-designer');
    eleventyConfig.addPassthroughCopy('./src/pages/projects-tools-templates/');
    
    eleventyConfig.addNunjucksFilter("postDate", function(value) {
        // Assuming value is a Date object or a string that can be parsed into a Date
        const date = new Date(value);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
            };
        return date.toLocaleDateString('en-US', options);  // Adjust format as needed
      });


    return {
        dir: {
            input: "src",
            output: "_site"
        },
    }

}




