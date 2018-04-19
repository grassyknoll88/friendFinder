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
    var newFriend = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

    console.log(newFriend);
      

    $.post("/api/new", newFriend)
      .then(function(data) {
        console.log(data);
      });
  });