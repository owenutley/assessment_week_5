
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};

document.getElementById("wisdomButton").onclick = function () {
    axios.get("http://localhost:4000/api/wisdom/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};  

document.getElementById("taskButton").onclick = function () {
  axios.get("http://localhost:4000/api/tasks/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
}; 

// const userContainer = document.querySelector('#user-info')
// const entryForm = document.querySelector('#form1')

// const baseURL = `http://localhost:4004/api`

// const entry = body => axios.post(`${baseURL}/entry`, body).then(res => {
//   journalEntry(res.data)
// }).catch(err => {
//   console.log(err)
//   alert('Uh oh. Your request did not work.')
// })

// function journalEntry(event) {
//   event.preventDefault()

//   let title = document.querySelector('#title')
//   let date = document.querySelector('#date')
//   // let image = document.querySelector('#image')
//   // let script = document.querySelector('#script')

//   let bodyObj = {
//     title: title.value,
//     date: date.value,
//     // image: image.value,
//     // script: script.value 
//   }

//   entry(bodyObj)

//   title.value = ''
//   date.value = ''
//   // image.value = ''
//   // script.value = ''
// }

// function createUserCard(data) {
//   userContainer.innerHTML = ''
//   const userCard = document.createElement('div')
//   userCard.classList.add('user-card')

//   userCard.innerHTML = `<p class="title">Title: ${data.title}</p>
//   <p class="date"Date: ${data.date}</p>`
//   // <p class="image">Image: ${data.image}</p>
//   // <p class="script">${data.script}</p>
  


//   userContainer.appendChild(userCard)
// }

// entryForm.addEventListener('submit', journalEntry)