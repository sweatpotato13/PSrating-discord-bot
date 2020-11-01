import * as fetch from "node-fetch";

var ratings = { atcoder: 0, codeforces: 0 };
var handles = { atcoder: "CuteWisp", codeforces: "CuteWisp" };

// Codeforcesのレーティングを取得する
function getCodeforcesRating() {
    let data = "";
    fetch(
        "http://codeforces.com/api/user.info?handles=" + handles["codeforces"]
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            data = myJson;
            console.log(data);
        });
}

// AtCoderのレーティングを取得する(AtCoderの仕様変更で使えなくなる恐れあり)
function getAtCoderRating() {
    let data = "";
    var userpage = "https://atcoder.jp/user/" + handles["atcoder"];
    var yql =
        'select * from htmlstring where url="' +
        userpage +
        '" and xpath="//*[@id=\'main-div\']/div/div/div[2]/dl/dd[2]/span"';
    var url =
        "https://query.yahooapis.com/v1/public/yql?q=" +
        encodeURI(yql) +
        "&format=json&env=store://datatables.org/alltableswithkeys";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            data = myJson;
            console.log(data);
        });
}

getCodeforcesRating();
//getAtCoderRating();
