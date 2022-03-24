class Appointment {
    // Static fields
    static appointmentCount = "0";

    /**
     * @param {Object} options
     * @param {string} options.patientID
     * @param {string} options.doctorID
     * @param {Symptom[]} options.symptoms
     * @param {string} options.description
     */
    constructor(options) {
        Appointment.appointmentCount = Utility.newID(Appointment.appointmentCount);
        this.id = Appointment.appointmentCount;
        this.patientID = options.patientID;
        this.doctorID = options.doctorID;
        this.symptoms = options.symptoms;
        this.description = options.description;
    }
}