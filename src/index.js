module.exports = function reverse (n) {
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}
