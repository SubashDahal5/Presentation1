
//form validation
function validateForm()
{
    var firstName = document.forms["myForm"]["fname"].value;
    var lastName = document.forms["myForm"]["lname"].value;
    var Email = document.forms["myForm"]["email"].value;
    var gender = document.forms["myForm"]["genderDetails"].value;
    var messageDetails = document.forms["myForm"]["message"].value;

    //alert(messageDetails)
    if (firstName == "" || lastName == "" || Email == "" || messageDetails == "") 
    {
        alert("Empty fields are present!!! Please enter the values...");
    }

    else
    {
        alert("Thank you for your feedback!!!")
    }
}