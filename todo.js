let id = 0;

document.getElementById('add').addEventListener('click', () => {
        let createdDate = new Date();
        let table = document.getElementById('list');
        let row = table.insertRow(1);
        row.setAttribute('id', `item-${id}`);
        row.insertCell(0).innerHTML = document.getElementById('new-task').value;
        row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
        row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
        row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
        let actions = row.insertCell(4);
        actions.appendChild('');
        document.getElementById('new-task').value = '';
    });