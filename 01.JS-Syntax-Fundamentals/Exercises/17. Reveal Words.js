function solve(words, template) {
    words = words.split(', ')
    while (words.length > 0) {
        word = words.shift();
        template = template.replace('*'.repeat(word.length), word)
    }
    return template;
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');
    
