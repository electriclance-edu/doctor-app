class Symptom {
    /** @type {Symptom[]} */
    static list = [];

    /**
     * Symptom class
     * @param {Object} options
     * @param {string} options.name
     * @param {Object} options.specs
     * @param {number} options.specs.cardiologist
     * @param {number} options.specs.dermatologist
     * @param {number} options.specs.endocrinologist
     * @param {number} options.specs.gastroenterologist
     * @param {number} options.specs.generalPsychiatrist
     * @param {number} options.specs.gynecologist
     * @param {number} options.specs.neurologist
     * @param {number} options.specs.ophthalmologist
     * @param {number} options.specs.pulmonologist
     * @param {number} options.specs.urologist
     */
    constructor(options) {
        this.name = options.name;
        this.specs = options.specs;
    }
}