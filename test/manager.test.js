const Manager = require(`../lib/Manager`)

describe("Employee class", () => {
    describe("Initilization", () => {
        it("should include name, id, email, office number", () => {
            const name = "Ryan";
            const id  = "2";
            const email = "ryanjohnson@gmail.com"
            const officeNumber = "19";

                expect(name).toEqual("Callan Hunter");
                expect(id).toEqual(1);
                expect(email).toEqual("calhunter@gmail.com");
                expect(officeNumber).toEqual("51")
        })
    })
})