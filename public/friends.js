console.log("connected");

var people = [
    {
        name: "Kiley",
         photo: "https://photos.google.com/share/AF1QipOhWr598AKTcxBJg8LIbFQjo6jLWTonLy67qZtljdse0dfRdropA4R2bCqhZBAX3Q?key=XzRLRGhwM3YzMnNidXNJeGdRdWpCMVNZczFHamdB",
         scores: ["3", "3", "3", "3", "3", "1", "2", "3", "3", "4"]
    },
    {
        name: "Hannah",
         photo: "https://photos.app.goo.gl/gr7gBJh8Cxmk7viO2",
         scores: ["4", "3", "1", "4", "1", "3", "1", "5", "2", "4"]
    },
    {
        name: "Beau",
         photo: "https://photos.google.com/share/AF1QipNsUMPT4FAJUegYefIRSdezAERI_fTX4hDBU42PHJ5aBLstzoVjEUrHcZUqtkPsUQ?key=a0RwYmZRV3hWVzhkWjV0aE5KemQ2bVN6T1R4aDlB",
         scores: ["5", "3", "4", "2", "4", "3", "2", "3", "2", "4"]
    }
]

$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newCharacter = {
      name: $("#name").val().trim(),
      role: $("#role").val().trim(),
      age: $("#age").val().trim(),
      forcePoints: $("#force-points").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/new", newCharacter)
      .then(function(data) {
        console.log(data);
        alert("Adding character...");
      });
  });