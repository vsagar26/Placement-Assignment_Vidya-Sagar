var selectedRow = null



function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["blogtitle"] = document.getElementById("title").value;
    formData["blogtext"] = document.getElementById("blogtext").value;
    return formData;

}



//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.blogtitle;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = truncatedstring(data.blogtext, 30);
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("blogtitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("blogtext").value = truncatedstring(selectedRow.cells[1].innerHTML, 30);
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.blogtitle;
    selectedRow.cells[1].innerHTML = truncatedstring(formData.blogtext, 30);
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("blogtitle").value = '';
    document.getElementById("author").value = '';
    document.getElementById("date").value = '';
    document.getElementById("blogtext").value = '';
    selectedRow = null;
}


const api_url =
	"https://jsonplaceholder.typicode.com/posts";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	
	show(data);
}
// Calling that async function
getapi(api_url);

const truncatedstring = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };


function show(data) {
	let tab = 
        
    
        `<tr>
		<th>${data[1].title}</th>
		<th>${truncatedstring(data[1].body , 50)}</th>
		
		</tr>
        
        <th>${data[2].title}</th>
		<th>${truncatedstring(data[2].body , 50)}</th>
		
		</tr>
        <th>${data[3].title}</th>
		<th>${truncatedstring(data[3].body , 50)}</th>
		
		</tr>`;
        
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}


{/* <td>${r.position}</td>
	<td>${r.salary}</td> */}

    // <th>Position</th>
	// 	<th>Salary</th>


    // const truncatedstring = (str, num) => {
    //     if (str?.length > num) {
    //       return str.slice(0, num) + "...";
    //     } else {
    //       return str;
    //     }
    //   };

      