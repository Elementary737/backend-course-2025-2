const date = "20220201"; 

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/res");

url.searchParams.append("date", date);
url.searchParams.append("json", ""); 

console.log(url.toString());
