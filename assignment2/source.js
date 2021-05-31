    function delete_row(r)//delete function
    {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("tab").deleteRow(i);  

    }
    var li;
    function helpCancel(...args){
        li=args;
        
    }
    
    function edit_row(no)//edit function
        {
            //var no = r.parentNode.parentNode.rowIndex;
            document.getElementById("edit_button"+no).style.visibility="hidden";
            document.getElementById("save_button"+no).style.visibility="visible";
            document.getElementById("cancel_button"+no).style.visibility="visible";

            var FirstName=document.getElementById("First Name"+no);
            var MiddleName=document.getElementById("Middle Name"+no);
            var LastName=document.getElementById("Last Name"+no);
            var email =document.getElementById("Email"+no) ;  
            var Phone_N =document.getElementById("Phone_Number"+no) ; 
            var role =document.getElementById("Role"+no) ; 
            var address =document.getElementById("Address"+no) ;

            var FName=FirstName.innerHTML;
            var MName=MiddleName.innerHTML;
            var LName=LastName.innerHTML;
            var Email=email.innerHTML;
            var Phone=Phone_N.innerHTML;
            var Role=role.innerHTML;
            var Address=address.innerHTML;
            
                  helpCancel(FName,MName,LName,Email,Phone,Role,Address);
              
            FirstName.innerHTML="<input type='text' id='First_Name"+no+"'  value='"+FName+"'/>";
            MiddleName.innerHTML="<input type='text' id='Middle_Name"+no+"'  value='"+MName+"'/>";
            LastName.innerHTML="<input type='text' id='Last_Name"+no+"'  value='"+LName+"'/>";
            email.innerHTML="<input type='text' id='Email_"+no+"'  value='"+Email+"'/>";
            Phone_N.innerHTML="<input type='text' id='Phone_Number_"+no+"'  value='"+Phone+"'/>";
            role.innerHTML="<input type='text' id='Role_"+no+"'  value='"+Role+"'/>";
            address.innerHTML="<input type='text' id='Address_"+no+"'  value='"+Address+"'/>";
        } 
        function save_row(no)//save function
                {
                 //var no = r.parentNode.parentNode.rowIndex;
                 var FirstName=document.getElementById("First_Name"+no).value;
                 var MiddleName=document.getElementById("Middle_Name"+no).value;
                 var LastName=document.getElementById("Last_Name"+no).value;
                 var email =document.getElementById("Email_"+no).value ;  
                 var Phone_N =document.getElementById("Phone_Number_"+no).value ; 
                 var role =document.getElementById("Role_"+no).value ; 
                 var address =document.getElementById("Address_"+no).value ;
                
                 document.getElementById("First Name"+no).innerHTML=FirstName;
                 document.getElementById("Middle Name"+no).innerHTML=MiddleName;
                 document.getElementById("Last Name"+no).innerHTML=LastName;
                 document.getElementById("Email"+no).innerHTML=email ;  
                 document.getElementById("Phone_Number"+no).innerHTML=Phone_N ; 
                 document.getElementById("Role"+no).innerHTML=role ; 
                 document.getElementById("Address"+no).innerHTML=address ;
                
                 document.getElementById("edit_button"+no).style.visibility="visible";
                 document.getElementById("save_button"+no).style.visibility="hidden";
                 document.getElementById("cancel_button"+no).style.visibility="hidden";
                } 
        function cancel_row(no){ //cancel function
            
            document.getElementById("First Name"+no).innerHTML=li[0];
            document.getElementById("Middle Name"+no).innerHTML=li[1];
            document.getElementById("Last Name"+no).innerHTML=li[2];
            document.getElementById("Email"+no).innerHTML=li[3] ;  
            document.getElementById("Phone_Number"+no).innerHTML=li[4] ; 
            document.getElementById("Role"+no).innerHTML=li[5]; 
            document.getElementById("Address"+no).innerHTML=li[6];
                
            document.getElementById("edit_button"+no).style.visibility="visible";
            document.getElementById("save_button"+no).style.visibility="hidden";
            document.getElementById("cancel_button"+no).style.visibility="hidden";
        }                
    //Function called by Load button       
   function CreateTableFromJSON() {
       //Changing load button to Refresh button after clicking on it.
        document.getElementById("wer").innerHTML="Refresh Data";
        //obects 
        var myBooks = [
            {
                "First Name": "Deepti",
                "Middle Name": "Shikha",
                "Last Name": "Ojha",
                "Email": "deepti11@gmail.com",
                "Phone_Number":"8788832321",
                "Role":"Engineer",
                "Address":"Manipur"
            },
            {
                "First Name": "Karishma",
                "Middle Name": "Solanki",
                "Last Name": "Bhola",
                "Email": "karishma@gmail.com",
                "Phone_Number":"8765432093",
                "Role":"Analyst",
                "Address":"Assam"
            },
            {
                "First Name": "Srijal",
                "Middle Name": "Punam",
                "Last Name": "Sharma",
                "Email": "srijal13@gmail.com",
                "Phone_Number":"9835543216",
                "Role":"Data Scientist",
                "Address":"Chennai"
            }
        ]

        // EXTRACT VALUE FOR HTML TABLE HEADER. 
        
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.setAttribute("id","tab")
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        var th = document.createElement("th");    //LAST COLUMN FOR EDIT AND DELETE BUTTON
        tr.appendChild(th);
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);
            tr.setAttribute("id","row"+i+"")

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.setAttribute("id",col[j]+(i+1))
                tabCell.innerHTML = myBooks[i][col[j]];
            }
            //adding EDIT button and setting its attribute
            var tabCell = tr.insertCell(-1);
            var button1= document. createElement("button");
            button1.setAttribute('id', "edit_button"+(i+1));  
            button1.textContent = 'Edit';
            ////adding funtionality to EDIT button
            button1.setAttribute("onclick","edit_row("+(i+1)+")");
            tabCell.appendChild(button1);
            //Adding save button which is visible after clicking on edit button

            var button3= document.createElement("button");
            button3.setAttribute('id', "save_button"+(i+1));  
            button3.textContent = 'Save';
            button3.style.visibility = "hidden";
            button3.setAttribute("onclick","save_row("+(i+1)+")");
            tabCell.appendChild(button3);

            //Adding cancel button which is visible after clicking on edit button

            var button4= document.createElement("button");
            button4.setAttribute('id', "cancel_button"+(i+1));  
            button4.textContent = 'cancel';
            button4.style.visibility = "hidden";
            button4.setAttribute("onclick","cancel_row("+(i+1)+")");

            tabCell.appendChild(button4);
            
            //adding delete button
            var button2 = document. createElement("button");
            
            button2.setAttribute('id', 'btni');  
            button2.textContent = 'Delete';
            button2.setAttribute("onclick","delete_row(this)");

            tabCell.appendChild(button2)
            
        }

       
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
