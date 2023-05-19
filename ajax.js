function ajaxrqt() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var output1 = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].completed == true) {
          output1 = output1 + "<tr><td>" + data[i].userId + "</td><td>" + data[i].title + "</td><td>" + "<input type='checkbox'>" + "</td></tr>";
        } else {
          output1 = output1 + "<tr><td>" + data[i].userId + "</td><td>" + data[i].title + "</td><td>" + "<input type='checkbox' checked disabled>" + "</td></tr>";
        }
      }
      document.getElementById("rowid").innerHTML = output1;

      
      var checkbox = document.querySelectorAll('input[type="checkbox"]');
      let count1 = 0;

      checkbox.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            count1++;
            if (count1 === 5) {
              check();
            }
          } else {
            count1--;
          }
        });
      });
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

function check() {
  alert(' Congrats. 5 Tasks have been Successfully Completed');
}
document.getElementById("ajaxrequest()").addEventListener("click", function() {
  ajaxrqt();
});



