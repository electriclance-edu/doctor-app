class Utility {
    /**
     * Algorithm for creating an new ID
     * @param {string} count Old count
     * @returns {string} New count
     */
    static newID(count) {
        const charArray = [...count];

        for (let i = charArray.length - 1; i >= 0; i--) {
            let digit = parseInt(charArray[i]);
            digit++;

            if (digit === 10) {
                charArray[i] = "0";
                if (i === 0) {
                    charArray.unshift("1");
                    break;
                }
            } else {
                charArray[i] = digit.toString();
                break;
            }
        }

        return charArray.join("");
    }

    /**
     * Fetches a random element from an array
     * @param {any[]} array
     */
    static randElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Random number generator
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    static rng(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}