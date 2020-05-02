var fName, amount, lname, email, phone, matric, category;//variables to be used

 function validate() {
     var x=document.querySelectorAll("input[required]");
     errorMsg="";
     var proceed = true;
     
     for (var i=0; i < x.length; i++) {
         //checks if they are validated
         if (x[i].checkValidity()==false ||
            x[i].value.replace(/^\s+|\s+$/gm, '').length <= 0) 
         {
             errorMsg+= x[i].title
             +" empty or value not valid. Please enter valid value for "
             +x[i].title+"<br>";
             x[i].focus()
             proceed = false;
             break;
         }

     }
     document.getElementById('errorMsg').innerHTML=errorMsg;


     if (proceed == true) {
        //if validation is successful
        document.getElementById("submitBtn").disabled=true;//disable the pay btn
        document.getElementById("processing").style.display="block";//disable the pay btn
        
        document.getElementById('errorMsg').innerHTML="";

        fName = document.getElementById("fName").value;
        lname = document.getElementById("lName").value;
        email = document.getElementById("Email").value;
        phone = document.getElementById("Phone").value;
        // matric = document.getElementById("matric").value;
        category = document.getElementById("category").value;
        // amount = Number(document.getElementById("amount").value);
        payWithPayant()
     }

 }

//  function payWithPayant() {
//      // body...
//      console.log("fName: " + fName)
//      console.log("lname: " + lname)
//      console.log("email: " + email)
//      console.log("phone: " + phone)
//      console.log("category: " + category)
//      console.log("amount: " + amount)
//      console.log(typeof(amount))
//  }

   function payWithPayant() {
                var handler = Payant.invoice({
                  "key": "6272422fa66b1d9952392b8612e83f5bb17a1b4f",
                  "client": {
                        "first_name": fName,
                        "last_name": lname,
                        "email": email,
                        "phone": phone
                    },
                  "due_date": "12/30/2020",
                  "fee_bearer": "account",
                  "items": [
                    {
                      "item": category,
                      "description": "Learn with Tim online class",
                      "unit_cost": amount,
                      "quantity": "1"
                    }
                  ],
                  callback: function(response) {
                    console.log(response);
                  },
                  onClose: function() {
                    console.log('Window Closed.');
                  }
                });

                handler.openIframe();
          }