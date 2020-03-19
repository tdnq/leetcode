function generate(num) {
    if (!num) {
        return [];
    }
    if (num === 1) {
        return [[1]];
    }
    if (num === 2) {
        return [[1], [1, 1]];
    }
    let tar = [[1], [1, 1]];
    for (let i = 2; i < num; i++) {
        tar[i]=[1];
        for (let j = 1; j < i; j++) {
            tar[i][j] = tar[i - 1][j - 1] + tar[i - 1][j];
        }
        tar[i].push(1);
    }
    return tar;
}
    generate(5);
    module.exports = generate;