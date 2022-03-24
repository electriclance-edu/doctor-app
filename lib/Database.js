class Database {
    /** Database where all patients, doctors, guests, and appointments are stored */
    constructor() {
        /** @type {PatientAccount[]} */
        this.patients = [];

        /** @type {DoctorAccount[]} */
        this.doctors = [];
        
        /** @type {Appointment[]} */
        this.appointments = [];
    }

    /**
     * @param {string} id
     * @returns {Appointment}
     */
    searchAppointmentByID(id) { return this.appointments.find(x => x.userID === id); }
    
    /**
     * @param {string} id
     * @returns {DoctorAccount}
     */
    searchDoctorByID(id) { return this.doctors.find(x => x.userID === id); }

    /**
     * @param {string} id
     * @returns {PatientAccount}
     */
    searchPatientByID(id) { return this.patients.find(x => x.userID === id); }
}