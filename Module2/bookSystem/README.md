Practice task
In this practice task, you need to create a dynamic button at the time when user-entered details will be shown as output after clicking on Add Book button.

You need to create a delete button as shown below. For this you need to create a deletebook function, which can include the below given partial code.

<button onclick="......")">Delete</button>)


The deletebook function will be called when the user clicks on the delete button. This function will also delete the book's detail in the management system for that particular ID.
Note: The particular ID is the array index number where the details of the particular book is stored.

To delete the book's detail you can use array method splice() inside deletebook function. This method is used to modify the books array, removing a single element starting from the specified index.

books.splice(index, 1);

This function deletes the book entry at the given index from the books array. After deletion, call the showBooks function to refresh the displayed book list.


plaintext
<button onclick="deletebook(${index})">Delete</button>

plaintext
function deletebook(index) {
    // Remove the book entry at the given index
    books.splice(index, 1);
    showbooks(); // Refresh the book list after deletion
}