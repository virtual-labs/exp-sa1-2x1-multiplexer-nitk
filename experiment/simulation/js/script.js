document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const heading1 = document.getElementById("heading1");
  const heading2 = document.getElementById("heading2");

  // Ensure both headings are initially hidden
  heading1.style.display = "none";
  heading2.style.display = "none";

  // Add click event listeners to the buttons
  button1.addEventListener("click", () => {
    // console.log('SIMULATOR - I button clicked');
    heading1.style.display = "block"; // Show heading1
    heading2.style.display = "none"; // Hide heading2
  });

  button2.addEventListener("click", () => {
    // console.log('SIMULATOR - II button clicked');
    heading2.style.display = "block"; // Show heading2
    heading1.style.display = "none"; // Hide heading1
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const buttonDiv = document.getElementById("buttonDiv"); // Target the buttonDiv container
  const gridContainer = document.querySelector(".grid-container"); // Grid container reference
  const simulatorTable = document.querySelector(".simulator-table"); // Reference to the class
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const sectionToPrint1 = document.getElementById("section-to-print");
  const sectionToPrint2 = document.getElementById("section-to-print2"); // Reference to #section-to-print2

  // Function to hide the buttonDiv and show the simulator-table
  function showSimulatorTable() {
    buttonDiv.style.display = "none"; // Hide the button container
    gridContainer.style.display = "block"; // Show the grid container if required
    simulatorTable.style.display = "block"; // Make the simulator-table visible
    input1.style.display = "flex";
    sectionToPrint1.style.display = "table";
  }

  // Function to make #input2 and #section-to-print2 visible
  function showInput2() {
    buttonDiv.style.display = "none"; // Hide the button container
    gridContainer.style.display = "block"; // Show the grid container if required
    simulatorTable.style.display = "block"; // Make the simulator-table visible
    input2.style.display = "flex";
    sectionToPrint2.style.display = "table"; // Make #section-to-print2 visible as a table
  }

  // Add click event listeners to both buttons
  button1.addEventListener("click", showSimulatorTable);
  button2.addEventListener("click", showInput2); // Trigger visibility of #input2 and #section-to-print2
});

// ===== Button and input =====
const getI1 = document.getElementById("I1");
const getI2 = document.getElementById("I2");
const getSS = document.getElementById("S");
const getA = document.getElementById("a");
const getB = document.getElementById("b");
const getC = document.getElementById("c");
const getD = document.getElementById("d");
const getE = document.getElementById("e");
const getF = document.getElementById("f");
const getG = document.getElementById("g");
const getH = document.getElementById("h");
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
const createRow = (x, y, z, fault, ans, fRes) => {
  const tr = document.createElement("tr");
  const td1 = createTd(`${x} ${y} ${z}`);
  tr.appendChild(td1);
  const td2 = createTd(`${fault}`);
  tr.appendChild(td2);
  const td3 = createTd(ans);
  tr.appendChild(td3);

  const td5 = createTd(fRes);
  // ===== Wrong Mark for sum =====
  if (ans != fRes) {
    td5.classList.add("bg-red-200");
  }
  tr.appendChild(td5);
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
const checkOne = (num) => {
  if (!isNaN(num) && num != "" && num == 1) {
    return true;
  } else {
    return false;
  }
};

// x=s, y= I1 z=I2
const getAns = (x, y, z) => {
  if (x == 0 && y == 0 && z == 0) {
    return 0;
  } else if (x == 0 && y == 0 && z == 1) {
    return 0;
  } else if (x == 0 && y == 1 && z == 0) {
    return 1;
  } else if (x == 0 && y == 1 && z == 1) {
    return 1;
  } else if (x == 1 && y == 0 && z == 0) {
    return 0;
  } else if (x == 1 && y == 0 && z == 1) {
    return 1;
  } else if (x == 1 && y == 1 && z == 0) {
    return 0;
  } else if (x == 1 && y == 1 && z == 1) {
    return 1;
  }
};

// ===== Faults =====
const getFault = () => {
  let faults = [];
  if (checkOne(getA.value)) {
    faults.push("A");
  }
  if (checkOne(getB.value)) {
    faults.push("B");
  }
  if (checkOne(getC.value)) {
    faults.push("C");
  }
  if (checkOne(getD.value)) {
    faults.push("D");
  }
  if (checkOne(getE.value)) {
    faults.push("E");
  }
  if (checkOne(getF.value)) {
    faults.push("F");
  }
  if (checkOne(getG.value)) {
    faults.push("G");
  }
  if (checkOne(getH.value)) {
    faults.push("H");
  }
  getA.value = "";
  getB.value = "";
  getC.value = "";
  getD.value = "";
  getE.value = "";
  getF.value = "";
  getG.value = "";
  getH.value = "";

  return faults;
};

const ANDGate = (x, y) => {
  if (x == 0 && y == 0) {
    return 0;
  } else if (x == 0 && y == 1) {
    return 0;
  } else if (x == 1 && y == 0) {
    return 0;
  } else if (x == 1 && y == 1) {
    return 1;
  }
};

const NOTGate = (x) => {
  if (x == 0) {
    return 1;
  }
  return 0;
};

const ORGate = (x, y) => {
  if (x == 0 && y == 0) {
    return 0;
  } else if (x == 0 && y == 1) {
    return 1;
  } else if (x == 1 && y == 0) {
    return 1;
  } else if (x == 1 && y == 1) {
    return 1;
  }
};

const getFaultyAns = (S, I1, I2, faults) => {
  let ts = S;
  let tI1 = I1;
  let tI2 = I2;
  let tAns = "";
  let tG = "";
  let tF = "";
  let tE = NOTGate(S);

  faults.forEach((v) => {
    if (v == "A") {
      tI1 = 1;
    }
    if (v == "B") {
      tI2 = 1;
    }
    if (v == "C") {
      ts = 1;
      tE = 0;
    }
    if (v == "D") {
      tE = 0;
    }
    if (v == "E") {
      tE = 1;
    }
    if (v == "F") {
      tF = 1;
    }
    if (v == "G") {
      tG = 1;
    }
    if (v == "H") {
      tAns = 1;
    }
  });

  if (tAns != "") {
    return tAns;
  } else if (tF != "" && tG != "") {
    return ORGate(tF, tG);
  } else if (tF != "" && tG == "") {
    return ORGate(tF, ANDGate(tI1, tE));
  } else if (tF == "" && tG != "") {
    return ORGate(ANDGate(tI2, ts), tG);
  } else {
    return ORGate(ANDGate(tI1, tE), ANDGate(tI2, ts));
  }
};

const getFaultName = (faults) => {
  let temp = "";
  faults.forEach((v) => {
    temp += `${v}, `;
  });
  return temp.slice(0, temp.length - 2);
};

// ===== Getting Result =====
checkBtn.addEventListener("click", () => {
  const I1 = getI1.value;
  const I2 = getI2.value;
  const S = getSS.value;
  getI1.value = "";
  getI2.value = "";
  getSS.value = "";

  let faults = getFault();

  let flt = "";
  let fRes = "";
  if (faults.length == 0) {
    flt = "N/A";
    fRes = getAns(S, I1, I2);
  } else {
    fRes = getFaultyAns(S, I1, I2, faults);
    flt = getFaultName(faults);
  }

  if (checkNum(I1) && checkNum(I2) && checkNum(S)) {
    createRow(S, I1, I2, flt, getAns(S, I1, I2), fRes);
  }
});

resetBtn.addEventListener("click", () => {
  let len = tableBody.rows.length;
  if (len > 2) {
    for (let i = 2; i < len; i++) {
      tableBody.deleteRow(2);
    }
  }
});

function Refresh() {
  window.location = window.location.href;
}


// for simulator 2 functions

(function () {
  // ===== Button and input =====
  const getO = document.getElementById("o");
  const getFo = document.getElementById("fo");

  const checkBtn = document.getElementById("check-btn");
  const resetBtn = document.getElementById("reset-btn");
  const tableBody2 = document.getElementById("table-body2");

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
    tableBody2.appendChild(tr);
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
    if (o == fo) {
      return "No Fault";
    } else if (o == 0 && fo == 1) {
      return "A SA1, B SA1, C SA1, E SA1, F SA1, G SA1, H SA1";
    } else if (o == 1 && fo == 0) {
      return "A SA1, C SA1, D SA1";
    } else {
      return "Not SA0 or SA1 fault";
    }
  };

  // ===== Getting Result =====
  checkBtn.addEventListener("click", () => {
    const o = getO.value;
    const fo = getFo.value;

    if (checkNum(o) && checkNum(fo)) {
      const result = getResult(o, fo);
      createRow(o, fo, result);
    }
    getO.value = "";
    getFo.value = "";
  });

  resetBtn.addEventListener("click", () => {
    let len = tableBody2.rows.length;
    if (len > 2) {
      for (let i = 2; i < len; i++) {
        tableBody2.deleteRow(2);
      }
    }
  });
})();
