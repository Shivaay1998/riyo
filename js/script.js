$('.SubmitButton').click(function(){
        
    var urldata = $('#dropDownId :selected').val(); 
    window.open(urldata) 
    // window.open("http://"+urldata+".html")  //  to add  online urls
});
