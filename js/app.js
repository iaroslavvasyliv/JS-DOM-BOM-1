
(function(){
	"use strict";
	
	// taking the container out of function if we need later
	var container = document.getElementById("app");
	
	function createTable() {
		// number of cells
		var numOfCells = 10;
		var tblContainer = document.createElement('div');
		var tbl = document.createElement('table');
		
		tblContainer.classList.add("table-container");
		tbl.classList.add("table");

		// loop through qty of cells
		// creating the cell each time in next loop moving 10 cells
		for (var i = 0; i < numOfCells; i += 1) {
			var tr = tbl.insertRow();
			for (var j = 0; j < numOfCells; j += 1) {
				var td = tr.insertCell(j);
				td.innerHTML = j + 1 + '';
			}
		}

		//  creating mooving buttons
		var btnLeft = document.createElement("button");
		var btnRight = document.createElement("button");
		btnLeft.classList.add("btn-left");
		btnRight.classList.add("btn-right");
		btnLeft.innerHTML = "move left";
		btnRight.innerHTML = "move right";
		btnLeft.addEventListener('click', moveTableLeft);
		btnRight.addEventListener('click', moveTableRight);

		//  appending table and buttons
		tblContainer.appendChild(tbl);
		tblContainer.appendChild(btnLeft);
		tblContainer.appendChild(btnRight);
		
		container.appendChild(tblContainer);
	}
	
	// movint table left
	function moveTableLeft() {
		var table = document.getElementsByClassName('table')[0];
		var origin = getComputedStyle(table, null).getPropertyValue("left");

		table.style.left = (parseFloat(origin) - 100) + 'px';
	}

	// moving table right
	function moveTableRight() {
		var table = document.getElementsByClassName('table')[0];
		var origin = getComputedStyle(table, null).getPropertyValue("left");

		table.style.left = (parseFloat(origin) + 100) + 'px';
	}
	
	// button for creating table
	function addButton(parentEl) {
		var button = document.createElement("button");
		button.classList.add("add-btn");
		button.innerHTML = "create table";
		button.addEventListener("click", createTable);
		parentEl.appendChild(button);
	}
	addButton(container);

})();