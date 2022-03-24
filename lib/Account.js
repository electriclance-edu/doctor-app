class Account {
    // Static fields
    static userCount = "0";

    /**
     * Base account class. Also used for Guest accounts.
     * @param {Object} options
     * @param {Object} options.name
     * @param {string} options.name.given
     * @param {string} options.name.middle
     * @param {string} options.name.sur
     */
    constructor(options) {
        this.name = new Name(options.name);
    }

    /**
     * Generates a unique user ID for newly made accounts
     * @returns {string}
     */
    static generateUserID() {
        Account.userCount = Utility.newID(Account.userCount);
        return Account.userCount;
    }
}