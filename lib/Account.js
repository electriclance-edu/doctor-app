class Account {
    // Static fields
    static userCount = "0";

    /**
     * Base account class
     * @param {Object} options
     * @param {string} options.username
     * @param {string} options.password
     * @param {string} options.emailAddress
     * @param {string} options.phoneNo
     * 
     * @param {Object} options.name
     * @param {string} options.name.given
     * @param {string} options.name.middle
     * @param {string} options.name.sur
     * 
     * @param {Object} options.birthday
     * @param {number} options.birthday.year
     * @param {number} options.birthday.month
     * @param {number} options.birthday.day
     * 
     * @param {string} options.province
     * @param {string} options.city
     */
    constructor(options) {
        Account.userCount = Utility.newID(Account.userCount);
        this.userID = Account.userCount;
        this.accountCreated = new Date();

        this.username = options.username;
        this.password = options.password;
        this.emailAddress = options.emailAddress;
        this.phoneNo = options.phoneNo

        this.name = new Name(options.name);
        this.birthday = new Day({
            year: options.birthday.year,
            month: options.birthday.month,
            day: options.birthday.day,
        });

        this.province = options.province;
        this.city = options.city;

		this.premium = false;
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