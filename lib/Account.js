class Account {
    // Static fields
    static userCount = "0";

    /**
     * Base account class
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
        Account.userCount = Utility.newID(Account.userCount);
        this.userID = Account.userCount;
        this.username = options.username;
        this.password = options.password;
        this.emailAddress = options.emailAddress;
        this.name = new Name(options.name);
    }

    /**
     * Gets all appointments where the account is involved in
     * @param {PatientAccount | DoctorAccount} account Account of the patient/doctor to search for
     * @returns {Appointment[]}
     */
    getAppointments(database) {
        return database.appointments.filter(x => [x.patientID, x.doctorID].includes(this.userID));
    }
}