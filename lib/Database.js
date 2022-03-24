class Database {
    /** Database where all patients, doctors, guests, and appointments are stored */
    constructor() {
        /** @type {PatientAccount[]} */
        this.patients = [];

        /** @type {DoctorAccount[]} */
        this.doctors = [];

        /** @type {Account[]} */
        this.guests = [];
        
        /** @type {Appointment[]} */
        this.appointments = [];
    }

    /**
     * Gets all appointments where the patient/doctor is involved in
     * @param {PatientAccount | DoctorAccount | Account} account Account of the patient/doctor in question
     * @returns {Appointment[]}
     */
    getAppointments(account) {
        return this.appointments.filter(x => [x.patientID, x.doctorID].includes(account.id));
    }
    
    /**
     * @param {string} id
     * @returns {DoctorAccount}
     */
    searchDoctorByID(id) { return this.doctors.find(x => x.userID === id); }

    /**
     * @param {string} id
     * @returns {Account}
     */
    searchGuestByID(id) { return this.guests.find(x => x.userID === id); }

    /**
     * @param {string} id
     * @returns {PatientAccount}
     */
    searchPatientByID(id) { return this.patients.find(x => x.userID === id); }
}