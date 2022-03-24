class Symptom {
    /**
     * Symptom class
     * @param {Object} options
     * @param {string} options.name
     * @param {Object} options.specs
     * @param {number} options.specs.cardiologist
     * @param {number} options.specs.dermatologist
     * @param {number} options.specs.endocrinologist
     * @param {number} options.specs.gastroenterologist
     * @param {number} options.specs.generalPhysician
     * @param {number} options.specs.gynecologist
     * @param {number} options.specs.neurologist
     * @param {number} options.specs.ophthalmologist
     * @param {number} options.specs.pulmonologist
     * @param {number} options.specs.urologist
     */
    constructor(options) {
        this.name = options.name;
        this.specs = options.specs;
    }

	static DIARRHEA = new Symptom({
	    name: "Diarrhea",
	    specs: {
	        cardiologist: 0.2,
	        dermatologist: 0,
	        endocrinologist: 0.5,
	        gastroenterologist: 1,
	        generalPhysician: 0.5,
	        gynecologist: 0,
	        neurologist: 0,
	        ophthalmologist: 0,
	        pulmonologist: 0,
	        urologist: 0.2,
	    },
	});
	static DRY_COUGH = new Symptom({
	    name: "Dry Cough",
	    specs: {
	        cardiologist: 0.1,
	        dermatologist: 0,
	        endocrinologist: 0,
	        gastroenterologist: 0,
	        generalPhysician: 0.1,
	        gynecologist: 0,
	        neurologist: 0,
	        ophthalmologist: 0,
	        pulmonologist: 1,
	        urologist: 0,
	    },
	});
	static FEVER = new Symptom({
	    name: "Fever",
	    specs: {
	        cardiologist: 0.5,
	        dermatologist: 0.3,
	        endocrinologist: 0.5,
	        gastroenterologist: 0.7,
	        generalPhysician: 1,
	        gynecologist: 0.5,
	        neurologist: 0.8,
	        ophthalmologist: 0.5,
	        pulmonologist: 0.8,
	        urologist: 0.7,
	    },
	});
	static FREQUENT_URINATION = new Symptom({
	    name: "Frequent Urination",
	    specs: {
	        cardiologist: 0.3,
	        dermatologist: 0,
	        endocrinologist: 0.5,
	        gastroenterologist: 0,
	        generalPhysician: 0.1,
	        gynecologist: 0.3,
	        neurologist: 0,
	        ophthalmologist: 0,
	        pulmonologist: 0,
	        urologist: 1,
	    },
	});
	static INSOMNIA = new Symptom({
		name: "Insomnia",
		specs: {
	        cardiologist: 0.2,
	        dermatologist: 0,
	        endocrinologist: 0.1,
	        gastroenterologist: 0.5,
	        generalPhysician: 0.1,
	        gynecologist: 0.1,
	        neurologist: 1,
	        ophthalmologist: 0.5,
	        pulmonologist: 0,
	        urologist: 0,
		},
	});
	static RASHES = new Symptom({
		name: "Rashes",
		specs: {
	        cardiologist: 0.2,
	        dermatologist: 1,
	        endocrinologist: 0.1,
	        gastroenterologist: 0.5,
	        generalPhysician: 0.1,
	        gynecologist: 0.5,
	        neurologist: 0,
	        ophthalmologist: 0.2,
	        pulmonologist: 0,
	        urologist: 0,
		},
	});
	static RUNNY_NOSE = new Symptom({
		name: "Runny Nose",
		specs: {
	        cardiologist: 0,
	        dermatologist: 0,
	        endocrinologist: 0,
	        gastroenterologist: 0,
	        generalPhysician: 0.1,
	        gynecologist: 0,
	        neurologist: 0.1,
	        ophthalmologist: 0,
	        pulmonologist: 1,
	        urologist: 0,
		},
	});
	static SHORTNESS_OF_BREATH = new Symptom({
	    name: "Shortness of Breath",
	    specs: {
	        cardiologist: 0.1,
	        dermatologist: 0,
	        endocrinologist: 0,
	        gastroenterologist: 0,
	        generalPhysician: 0.1,
	        gynecologist: 0,
	        neurologist: 0,
	        ophthalmologist: 0,
	        pulmonologist: 1,
	        urologist: 0,
	    },
	});
	static STUFFY_NOSE = new Symptom({
		name: "Stuffy Nose",
		specs: {
	        cardiologist: 0,
	        dermatologist: 0,
	        endocrinologist: 0,
	        gastroenterologist: 0,
	        generalPhysician: 0.1,
	        gynecologist: 0,
	        neurologist: 0.1,
	        ophthalmologist: 0,
	        pulmonologist: 1,
	        urologist: 0,
		},
	});
	static VOMITING = new Symptom({
		name: "Vomiting",
		specs: {
	        cardiologist: 0.2,
	        dermatologist: 0,
	        endocrinologist: 0.5,
	        gastroenterologist: 1,
	        generalPhysician: 0.5,
	        gynecologist: 0.1,
	        neurologist: 0,
	        ophthalmologist: 0,
	        pulmonologist: 0,
	        urologist: 0.3,
		},
	});
	static WET_COUGH = new Symptom({
	    name: "Wet Cough",
	    specs: {
	        cardiologist: 0.1,
	        dermatologist: 0,
	        endocrinologist: 0,
	        gastroenterologist: 0,
	        generalPhysician: 0.1,
	        gynecologist: 0,
	        neurologist: 0,
	        ophthalmologist: 0,
	        pulmonologist: 1,
	        urologist: 0,
	    },
	});
}