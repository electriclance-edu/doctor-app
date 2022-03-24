class DoctorAccount extends Account {
    /**
     * @param {Object} options
     * @param {string} options.username
     * @param {string} options.password
     * @param {string} options.emailAddress
     */
    constructor(options) {
        super();
        this.userID = Account.generateUserID();
        this.username = options.username;
        this.password = options.password;
        this.emailAddress = options.emailAddress;
    }
}