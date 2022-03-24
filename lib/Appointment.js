class Appointment {
    static appointmentCount = "0";

    constructor(options) {
        this.id = Appointment.generateID();
        this.patient = options.patient;
        this.doctor = options.doctor;
        this.anatomyThingy = options.anatomyThingy;
        this.description = options.description;
    }

    // Methods
    static generateID() {
        Appointment.appointmentCount = Utility.newID(Appointment.appointmentCount);
        return Appointment.appointmentCount;
    }
}