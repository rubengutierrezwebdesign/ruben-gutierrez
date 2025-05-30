module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/pages/');

    
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
    
     // Add a custom Nunjucks filter for truncating text
  eleventyConfig.addFilter("truncate", function(text, length) {
    if (text.length > length) {
      return text.slice(0, length) + "..."; // Adds "..." at the end
    }
    return text; // If text is shorter than the specified length, return it as-is
  });

  return {
    // Eleventy config options
  };

}

