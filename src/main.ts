import * as fetch from "node-fetch";

var handles = { atcoder: "CuteWisp", codeforces: "CuteWisp" };

function getCodeforcesRating() {
    // Use Codeforce official API
    let data = "";
    fetch(
        "http://codeforces.com/api/user.info?handles=" + handles["codeforces"]
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            data = myJson;
            console.log(data["result"][0]["rating"]);
        });
}

function getAtCoderRating() {
    // https://github.com/miozune/AtCoderUsersAPI
    let data = "";
    fetch(
        "https://us-central1-atcoderusersapi.cloudfunctions.net/api/info/username/" +
            handles["atcoder"]
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            data = myJson;
            console.log(data["data"]["rating"]);
        });
}

getCodeforcesRating();
getAtCoderRating();
