const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');
const cardBody = document.getElementById('cardBody');

enterButton.addEventListener('click', (event) => {

  getUser(input.value);
  event.preventDefault();
});


/**
 * Llamado al backend con queryParam
 * @param {*} username
 */
async function getUser(username) {
  if(username == ""){
    alert('No deje el campo vacio');
  }
  else{
    const resp = await fetch(`api/users/${username}`);
  const data = await resp.json();
  console.log('data from back', data);

  if(data[0]['friends'] === undefined){
    alert('No existe el usuario');
  }
  else{
    printValues(data, username);
  }
  

  }
}

function printValues(data, username){
  cardBody.textContent = username 
  let friends = document.createElement('div');
  friends.className = "btn btn-primary"
  friends.id = "friends"
  friends.textContent = " friends: " + Object.keys(data[0]['friends']).length
  let play = document.createElement('div');
  play.className = "btn btn-primary"
  play.id = "play"
  play.textContent =" Plays: " + Object.keys(data[1]['plays']).length 

  cardBody.appendChild(friends)
  cardBody.appendChild(play)

  let plays = [];
  data[1]['plays'].forEach((element) => {
      if (!plays.includes(element)) {
        plays.push(element);
      }
  });
  


  plays.forEach(play => {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = play

    tr.appendChild(td)

    table.appendChild(tr)
});

}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
