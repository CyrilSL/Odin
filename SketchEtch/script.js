$('document').ready(function(){
    var val=16;    
    var $n;
    var c=1;
      
    
    tableGrid(); //<--------Starts Here
    function tableGrid(){
        createTable();
        createGrid();
    };
    
    
    function createTable(){
        console.log("<table> created id='tbl'");
        $('#cont').append('<table id="tbl"> </table>');
    };
    
    function createGrid(){
        console.log("Grids created");
        var c=1;
        for(var i=1;i<=val;i++)
      {
        $n=$('<tr class='+i+'> </tr>');
        $('#tbl').append($n);
        for(var j=1;j<=val;j++)
        {
         //$('.'+i+'').append($n);
         $('.'+i+'').append('<td class="inactive" id='+c+'> </td>');  
         c++;
        }
        //console.log(i);
      }
    };
    
    $('td').mouseenter(function()
    {
        console.log("Doing!");
        var t=this.id;
        $('#'+t+'').removeClass('inactive').addClass('active');
    });
    
    
    $('button').click(function(){
        console.log('refresh');
        $("#tbl").remove();
        console.log("Table Removed");
      $('#cont').load(tableGrid());
      console.log('Reload Table and Grid');
     });
    
});
