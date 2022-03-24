const database = new Database();

database.patients.push(new PatientAccount({
    name: {
        given: "Mozzarella",
        middle: "Lactose",
        sur: "Chedddarson",
    },
    username: "MCheddarson",
    password: "Ch33seH3nt4!",
    emailAddress: "mcheddarson@cheese.com",
}));

console.log(database.searchPatientByID("1").name.givenFirst());
