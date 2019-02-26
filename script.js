(function(){
    "use strict";
    window.onload = function () {
        var total = 0;
        //document.getElementById("meat").reset();
        //Add event listener here!	
        var itemSelection = document.querySelector("#meat");
        itemSelection.addEventListener("change", DisplayPrice);
        var button = document.querySelector("#btn");
        button.addEventListener("click", AddRow);

        function AddRow(){
            //alert('your button is working');
    
            var item = document.querySelector("#meat").value;   //add code to get the value of both inputs (item/price)
            var quantity = document.querySelector("#quantity").value;
            //var quantity = 1;
            var price = document.querySelector("#price").value;  //value property will give you what user typed in box **Returns a string**
            createInnerHTML(item, quantity, price);
            updateTotal(quantity, price);
        }
        function DisplayPrice(){
            var item = document.querySelector("#meat").value;
            var dict = {"Ribeye": 16.99, "Porterhouse": 14.99, "Sirloin": 12.99, "Bacon": 13.99};
            var display = dict[item];
            var priceField = document.getElementsByName("price")[0]; //gets first element w name "price"
            priceField.value = display;

        }
        function createInnerHTML(item, quantity, price){  //**good form to separate event logic from template logic**
            quantity = parseFloat(quantity);
            price = parseFloat(price);
            var subtotal = (price * quantity);
            price = "$" + price.toFixed(2);
            subtotal = "$" + subtotal.toFixed(2);
            //var item = document.querySelector("#name").nodeValue;
            //var price = document.querySelector("#price").nodeValue;
            var list = document.getElementById("list");
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");
            var cell4 = document.createElement("td");
            var itemText = document.createTextNode(item);
            var quantityText = document.createTextNode(quantity);
            var priceText = document.createTextNode(price);
            var totalText = document.createTextNode(subtotal);
            cell1.appendChild(itemText);
            row.appendChild(cell1);
            list.appendChild(row);
            cell2.appendChild(quantityText);
            row.appendChild(cell2);
            list.appendChild(row);
            cell3.appendChild(priceText);
            row.appendChild(cell3);
            list.appendChild(row);
            cell4.appendChild(totalText);
            row.appendChild(cell4);
            list.appendChild(row);
            
        }
        function updateTotal(quantity, price){
            quantity = parseFloat(quantity);
            price = parseFloat(price);
            total += (price * quantity);
            //var priceText = document.createTextNode(total);
            var priceData = document.getElementById("totalPrice");
            priceData.innerHTML = "$" + total.toFixed(2);
            //add some validation so only numbers get added
        }
        }            
    }())

    