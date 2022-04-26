const Intern = require(`../lib/Intern`)

describe("Employee class", () => {
    describe("Initilization", () => {
        it("should include name, id, email, school", () => {
            const name = "Ryan";
            const id  = "2";
            const email = "ryanjohnson@gmail.com"
            const school = "University of Oregon";

                expect(name).toEqual("Callan Hunter");
                expect(id).toEqual(1);
                expect(email).toEqual("calhunter@gmail.com");
                expect(school).toEqual("North Dakota State Univerity")
        })
    })
})