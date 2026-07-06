var url = "https://jsonplaceholder.typicode.com/users";
var result = "";
fetch(url)
  .then((response) => response.json()) 
    .then((data) => {
      
        for (let i = 0; i < data.length; i++)
        {
          result += "<tr><td>" + data[i].username + "</td> "+"<td>" +data[i].email +"</td></tr>";
        }
        document.getElementById("tabledata").innerHTML ="<h1 style='text-align:center'>UserInformation</h1>"+ result;
        console.log(data)
  })
  .catch((error) => {
    console.log(error);
  });
