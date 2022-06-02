function generatehtml(data) {
  function cardCreate(team) {
    const cards = [];
    for (var i = 0; i < team.length; i++) {
      var extraQ = "";
      if (team[i].getRole() === "Manager") {
        extraQ = team[i].officeNumber;
      } else if (team[i].getRole() === "Intern") {
        extraQ = team[i].school;
      } else if (team[i].getRole() === "Engineer") {
        extraQ = team[i].github;
      }
      cards.push(`
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${team[i].getRole()}</h5>
            <p class="card-text">${team[i].name}</p>
            <p class="card-text">${team[i].id}</p>
            <p class="card-text">${team[i].email}</p>
            <p class="card-text">${extraQ}</p>
          </div>
        </div>
        `);
    }
    return cards.join(" ");
  }
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    ${cardCreate(data.filter((member) => member.getRole() === "Manager"))}
    ${cardCreate(data.filter((member) => member.getRole() === "Intern"))}
    ${cardCreate(data.filter((member) => member.getRole() === "Engineer"))}
</body>
</html>
  `;
}

module.exports = generatehtml;
