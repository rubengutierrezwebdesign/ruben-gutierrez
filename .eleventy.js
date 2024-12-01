module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/pages/projects/web-designer');
    eleventyConfig.addPassthroughCopy('./src/pages/projects');

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

