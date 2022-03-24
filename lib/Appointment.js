class Appointment {
    // Fields
    static appointmentCount = "0";

    /**
     * @param {Object} options
     * @param {string} options.patientID
     * @param {string} options.doctorID
     * @param {Symptom[]} options.symptoms
     * @param {string} options.description
     */
    constructor(options) {
        this.id = Appointment.generateID();
        this.patientID = options.patientID;
        this.doctorID = options.doctorID;
        this.symptoms = options.symptoms;
        this.description = options.description;
    }

    /**
     * Generates a unique ID for newly made appointments
     * @returns {string}
     */
    static generateID() {
        Appointment.appointmentCount = Utility.newID(Appointment.appointmentCount);
        return Appointment.appointmentCount;
    }
}