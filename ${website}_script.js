// I was getting access errors with requesting via this:
/* var requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "include", // include, *same-origin, omit
};

fetch(
  "https://www.ryanair.com/ie/en/trip?tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2021-07-23&tpEndDate=2021-07-26&tpDiscount=0&tpPromoCode=&tpOriginIata=DUB&tpDestinationIata=PRG",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
 */

// So I used Postman to get the data and manually created the data model

const url = "api.capturedata.ie";

let flightModel = {
  tpAdults: 1,
  tpTeens: 0,
  tpChildren: 0,
  tpInfants: 0,
  tpStartDate: "2021-07-23",
  tpEndDate: "2021-07-26",
  tpDiscount: 0,
  tpPromoCode: "",
  tpOriginlata: "DUB",
  tpDestinationlata: "PRG",
};

const headerParams = {
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
  body: flightModel,
  method: "POST",
};
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));
