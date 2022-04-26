const Engineer = require(`../lib/Engineer`)

describe("Engineer class", () => {
    describe("Initilization", () => {
        it("should include name, id, email, github", () => {
            const name = "Ryan";
            const id  = "2";
            const email = "ryanjohnson@gmail.com"
            const github = "callanhunter";

                expect(name).toEqual("Callan Hunter");
                expect(id).toEqual(1);
                expect(email).toEqual("calhunter@gmail.com");
                expect(github).toEqual("callanhunter")
        })
    })
})