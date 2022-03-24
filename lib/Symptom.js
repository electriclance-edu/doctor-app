class Symptom {
    /**
     * Symptom class
     * @param {Object} options
     * @param {string} name
     * @param {string[]} specializations
     */
    constructor(options) {
        this.name = options.name;
        this.specializations = options.specializations;
    }
}