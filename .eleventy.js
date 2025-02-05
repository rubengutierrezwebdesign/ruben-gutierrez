module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/pages/projects/web-designer');
    eleventyConfig.addPassthroughCopy('./src/pages/projects');
    
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

    eleventyConfig.addCollection("posts", function(collection) {
        const coll = collection.getFilteredByTag("posts");
    
        for(let i = 0; i < coll.length ; i++) {
            const prevPost = coll[i-1];
            const nextPost = coll[i + 1];
    
            coll[i].data["prevPost"] = prevPost;
            coll[i].data["nextPost"] = nextPost;
        }
    
        return coll;
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        },
    }

}




