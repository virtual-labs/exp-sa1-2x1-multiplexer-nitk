// ===== Button and input =====
const getO = document.getElementById("o");
const getFo = document.getElementById("fo");

const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const tableBody = document.getElementById("table-body");

// ===== Create a td tag =====
const createTd = (value) => {
  const td = document.createElement("td");
  td.innerText = value;
  td.classList.add("border");
  td.classList.add("border-gray-400");
  return td;
};

// ===== Creating a row =====
const createRow = (o, fo, fault) => {
  const tr = document.createElement("tr");
  const td1 = createTd(o);
  tr.appendChild(td1);
  const td2 = createTd(fo);
  tr.appendChild(td2);
  const td3 = createTd(fault);
  if (fault == "No Fault") {
    td3.classList.add("bg-green-200");
  } else {
    td3.classList.add("bg-red-200");
  }
  tr.appendChild(td3);
  tableBody.appendChild(tr);
};

// ===== Validate Input =====
const checkNum = (num) => {
  if (!isNaN(num) && num != "" && (num == 1) | (num == 0)) {
    return true;
  } else {
    return false;
  }
};

// ===== Faults =====
const getResult = (o, fo) => {
  if (o==fo) {
    return "No Fault";
  } else if(o==0 && fo==1) {
    return "A SA1, B SA1, C SA1, E SA1, F SA1, G SA1, H SA1";
  } else if(o==1 && fo==0) {
    return "A SA1, C SA1, D SA1";
  }
  else {
    return "Not SA0 or SA1 fault";
  }
};

// ===== Getting Result =====
checkBtn.addEventListener("click", () => {
  const o = getO.value;
  const fo = getFo.value;
  if (checkNum(o) && checkNum(fo)) {
    createRow(o, fo, getResult(o, fo));
  }
  getO.value = "";
  getFo.value = "";
});

resetBtn.addEventListener("click", () => {
  let len = tableBody.rows.length;
  if (len > 2) {
    for (let i = 2; i < len; i++) {
      tableBody.deleteRow(2);
    }
  }
});