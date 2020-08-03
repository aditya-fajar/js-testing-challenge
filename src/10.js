function censor(str, censoredWords, censorSymbol = '#') {
    const replaceBanned = (match) => censorSymbol.repeat(match.length);
    const filter = new RegExp(censoredWords.join('|'), 'gi');

    return str.replace(filter, replaceBanned);
}
module.exports = censor;