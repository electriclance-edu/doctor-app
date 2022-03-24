class Day {
    /**
     * Represents a calendar day
     * @param {Object} options 
     * @param {number} options.year
     * @param {number} options.month
     * @param {number} options.day
     */
    constructor(options) {
        this.year = options.year;
        this.month = options.month;
        this.day = options.day;
    }

    /**
     * ex: 25 March 2022
     * @returns {string}
     */
    dayMonthYear() {
        return `${this.day} ${Utility.getMonth(this.month)} ${this.year}`;
    }

    /**
     * ex: 25 Mar 2022
     * @returns {string}
     */
    dayMonYear() {
        return `${this.day} ${Utility.getMonth(this.month).slice(0, 3)} ${this.year}`;
    }

    /**
     * 25/03/22
     * @param {string} inBetween What to put in between the numbers (default: /)
     * @returns {string}
     */
    ddmmyy(inBetween) {
        return `${this.day < 10 ? "0" : ""}${this.day}${inBetween | "/"}${this.month < 10 ? "0" : ""}${this.month}${inBetween | "/"}${this.year % 100}`;
    }

    /**
     * ex: 25/03/2022
     * @param {string} inBetween What to put in between the numbers (default: /)
     * @returns {string}
     */
    ddmmyyyy(inBetween) {
        return `${this.day < 10 ? "0" : ""}${this.day}${inBetween | "/"}${this.month < 10 ? "0" : ""}${this.month}${inBetween | "/"}${this.year}`;
    }
}