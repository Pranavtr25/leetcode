/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let flag = true;
    while (flag) {
        flag = false;
        for (let i = 1; i < asteroids.length; i++) {
            if (asteroids[i] < 0 && asteroids[i - 1] > 0) {
                flag = true;
                if (Math.abs(asteroids[i]) > Math.abs(asteroids[i - 1])) {
                    asteroids.splice(i - 1, 1);
                } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i - 1])) {
                    asteroids.splice(i, 1);
                } else {
                    asteroids.splice(i - 1, 2);
                }
            }
        }
    }
    return asteroids;
};