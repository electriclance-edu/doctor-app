class Account {
    // Fields
    static userCount = "999";

    // Constructor
    constructor() {
        /** @type {Appointment[]} */
        this.appointments = [];
    }

    // Methods
    static generateUserID() {
        Account.userCount = Utility.newID(Account.userCount);
        return Account.userCount;
    }
}