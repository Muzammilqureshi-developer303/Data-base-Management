function submit() {
   const userdata = {};
   userdata.name = document.getElementById("fname").value;
   userdata.date = document.getElementById("dater").value;
   userdata.gender = document.getElementById("gender").value;
   userdata.email = document.getElementById("email").value;
   userdata.contact = document.getElementById("contact").value;
   userdata.emp = document.getElementById("emp").value;
   userdata.depart = document.getElementById("depart").value;
   userdata.job = document.getElementById("job").value;

   console.log(userdata);

  //  let displayname = document.getElementById("namedisplay");
  //  displayname.textContent = userdata.name;
  //  let displaydate = document.getElementById("displaydate");
  //  displaydate.textContent = userdata.date;
  //  let displaygender = document.getElementById("displaygender");
  //  displaygender.textContent = userdata.gender;
  //  let displayemail = document.getElementById("displayemail");
  //  displayemail.textContent = userdata.email;
  //  let displaycontact = document.getElementById("displaycontact");
  //  displaycontact.textContent = userdata.contact;
  //  let displayemp = document.getElementById("displayemployee");
  //  displayemp.textContent = userdata.emp;
  //  let displaydepart = document.getElementById("displaydepartment");
  //  displaydepart.textContent = userdata.depart;
  //  let displayjob = document.getElementById("displayjob");
  //  displayjob.textContent = userdata.job;



   const tr=document.createElement("tr")
  const fullName=document.createElement("td");
  fullName.innerText= userdata.name;

  tr.appendChild(fullName);
  const tBody=document.getElementById("tablebody")
  tBody.appendChild(tr);

  const tl=document.createElement("tr")
  const dater=document.createElement("td");
  dater.innerText= userdata.date;
 
  tr.appendChild(dater);
  const tBoo=document.getElementById("tablebody")
  tBoo.appendChild(tr);

  





}





