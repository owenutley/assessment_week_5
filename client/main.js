
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4545/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};

document.getElementById("wisdomButton").onclick = function () {
    axios.get("http://localhost:4545/api/wisdom/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};  

document.getElementById("taskButton").onclick = function () {
  axios.get("http://localhost:4545/api/tasks/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
}; 

document.getElementById("bookButton").onclick = function () {
  axios.get("http://localhost:4545/api/books/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
}; 

document.getElementById("howButton").onclick = function () {
  axios.get("http://localhost:4545/api/how/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
}; 