function Validate()
{
    var x = document.forms.myform.username.value;
    var y = document.forms.myform.pwd.value;
    if (x == "" || x == null)
    {
        alert("Name cannot be blank");
        return false;
    }
    if (y=="" || y.length < 6)
    {
     alert("pwd must be atleast 6 and above ");
     return false;
    }
    true;
}