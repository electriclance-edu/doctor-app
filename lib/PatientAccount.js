class PatientAccount extends Account {
    /**
     * @param {Object} options
     * @param {string} options.username
     * @param {string} options.password
     * @param {string} options.emailAddress
     * @param {Object} options.name
     * @param {string} options.name.given
     * @param {string} options.name.middle
     * @param {string} options.name.sur
     */
    constructor(options) {
        super(options);
    }
}