let employeeDetails = document.querySelector(".emp-details");
let allEmpDetails = JSON.parse(localStorage.getItem("courses"));
showItem();
//  let allEmpDetails = JSON.parse(localStorage.getItem("courses"));
function showItem() {
  let employeeDetails = document.querySelector(".emp-details");
  let html = "";
  allEmpDetails.map(function (item, index) {
    html += `
<div class="emp-1">
<div class="pic">
<img src="./${item.source}" alt="">
</div>
<div class="emp-d">
    <h5>Name:${item.Name}</h5>
    <h5>Id:${item.MemberId}</h5>
    <h5>skill:${item.skill}<input type="text" id="am"></h5>
    <h5>Project:${item.Project}</h5>
    <h5>Hcm:${item.HCM}</h5>
    <button type="button" class="btn btn-warning onclick="editTask(${index})">Edit</button>
    <button type="button" class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
</div>
</div>
`;
  });
  employeeDetails.innerHTML = html;
}

function editTask(index) {
  let allEmpDetails = JSON.parse(localStorage.getItem("courses"));
  let allEmpDetailsVal = allEmpDetails[index];
  //   console.log(allEmpDetailsVal);
  //   let ram = document.getElementById(am);
  //   //   an.style.display = "list-item";
  //   ram.style.display = "block";
  let val = prompt("what do you want to update");
  //   console.log(val);
  allEmpDetailsVal.skill = val;
  localStorage.setItem("courses", JSON.stringify(allEmpDetails));
  showItem();

  //   console.log(allEmpDetailsVal);
}

function deleteTask(index) {
  let allEmpDetails = JSON.parse(localStorage.getItem("courses"));
  let allEmpDetailsVal = allEmpDetails[index];
  allEmpDetails.splice(index, 1);
  localStorage.setItem("courses", JSON.stringify(allEmpDetails));
  showItem();
}
let searchVal = document.getElementById("search");
searchVal.addEventListener("input", function () {
  let searchValIn = searchVal.value;
  let allEmpDetails = JSON.parse(localStorage.getItem("courses"));
  let ananda = allEmpDetails;
  let khoka = allEmpDetails.filter((item) => {
    let ram = item.Name.toLowerCase();
    return ram.includes(searchValIn);
  });
  allEmpDetails = khoka;
  //   console.log(allEmpDetails);
  showItem();
  //   document.location.reload();
  allEmpDetails = ananda;
  //   console.log(khoka);
});
