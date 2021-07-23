const url = "api.jofuz.xyz";

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
