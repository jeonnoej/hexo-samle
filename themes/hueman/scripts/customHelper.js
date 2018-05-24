/**
 * Common Function for custom helers
 */
const hasDeprecatedTag = (tags) => {
    return tags.some(tag => {
        if (tag.name.toUpperCase() === 'DEPRECATED') {
            return true;
        }
    });
};

hexo.extend.helper.register('setDeprecatedTitle', function(tags, title){
    return hasDeprecatedTag(tags) ? `<del>${title}</del>` : title;
});