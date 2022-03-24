class Utility {
	/**
	 * testWord -> TEST_WORD
	 * @param {string} str
	 * @returns {string}
	 */
	static camelCaseToCapsUnderscore(str) {
		return str.toUpperCase().replace(" ", "_");
	}
	
	/**
	 * TEST_WORD -> testWord
	 * @param {string} str
	 * @returns {string}
	 */
	static capsUnderscoreToCamelCase(str) {
		str = str.toLowerCase();
		const words = str.split("_");

		for (let i = 0; i < words.length; i++) {
			if (i === 0) continue;

			const letters = [...words[i]];
			letters[0] = letters[0].toUpperCase();
			words[i] = letters.join("");
		}

		return words.join("");
	}

    /**
     * Gets month from 1-12 number input
     * @param {number} mm 
     */
    static getMonth(mm) {
        const months = [
            "January", "Febuary", "March", "April",
            "May", "June", "July", "August",
            "September", "Octomber", "November", "December",
        ];

        return months[mm - 1];
    };
	
    /**
     * Algorithm for creating an new ID
     * @param {string} count Old count
     * @returns {string} New count
     */
    static newID(count) {
        const digits = [...count];

        for (let i = digits.length - 1; i >= 0; i--) {
            let digit = parseInt(digits[i]);
            digit++;

            if (digit === 10) {
                digits[i] = "0";
                if (i === 0) {
                    digits.unshift("1");
                    break;
                }
            } else {
                digits[i] = digit.toString();
                break;
            }
        }

        return digits.join("");
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