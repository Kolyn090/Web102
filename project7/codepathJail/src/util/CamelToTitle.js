function camelToTitle(text) {
    // Insert space before each capital letter and capitalize the first character
    const withSpaces = text.replace(/([A-Z])/g, ' $1');
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

export default camelToTitle;
