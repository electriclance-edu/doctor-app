class PatientAccount extends Account {
    /**
     * @param {Object} options
     * @param {Object} options.name
     * @param {string} options.name.given
     * @param {string} options.name.middle
     * @param {string} options.name.sur
     * @param {string} options.username
     * @param {string} options.password
     * @param {string} options.emailAddress
     */
    constructor(options) {
        super({ name: options.name });
        this.userID = Account.generateUserID();
        this.username = options.username;
        this.password = options.password;
        this.emailAddress = options.emailAddress;
    }
}