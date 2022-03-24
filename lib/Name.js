class Name {
    /**
     * Person name information
     * @param {Object} options
     * @param {string} options.given
     * @param {string} options.middle
     * @param {string} options.sur
     */
    constructor(options) {
        this.given = options.given;
        this.middle = options.middle;
        this.sur = options.sur;
    }

    /** 
     * ex: John A. Smith
     * @returns {string}
     */
    givenFirst() {
        return `${this.given} ${this.middle.charAt(0)}. ${this.sur}`;
    }

    /**
     * ex: Smith, John A.
     * @returns {string}
     */
    surnameFirst() {
        return `${this.sur}, ${this.given} ${this.middle.charAt(0)}.`;
    }

    /** 
     * ex: SMITH, John A.
     * @returns {string}
     */
    surnameFirstCaps() {
        return `${this.sur.toUpperCase()}, ${this.given} ${this.middle.charAt(0)}.`;
    }
}