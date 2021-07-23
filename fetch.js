var myHeaders = new Headers();
myHeaders.append(
  "Cookie",
  "fr-correlation-id=4ebbadfd-6092-410d-a0c8-8fc4f8db8e4c; fr-device-id=d2a46963-77a9-4e98-a1be-36086e4dfe9b"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://www.ryanair.com/ie/en/trip?tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2021-07-23&tpEndDate=2021-07-26&tpDiscount=0&tpPromoCode=&tpOriginIata=DUB&tpDestinationIata=PRG",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
