<script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
function load(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users', 
        type: 'GET',
        success: function (response){
            //console.log(response);

            let html = '<table class = "table table-bordered">';
            html += '<tr>';
            html +='<td>ID</td>';
            html +='<td>Name</td>';
            html +='<td>Phone</td>';
            html +='<td>Email</td>';
            html += '</tr>';

            response.forEach(val => {
                html += '<tr>';
                html += `<td>${val.id}</td><td>${val.name}</td>`;
                html += `<td>${val.phone}</td><td>${val.email}</td>`;
                html += '</tr>';
            });

            html += '</table>';
            $('#items').html(html);

            console.log(response);
        }
    });
}

    $(function(){
        setTimeout(()=>{
            load();
        },500);
        
    });