
$.ajax({
    type : 'get',
    url : 'https://api.covid19api.com/summary',
    success : function(response)
    {
        console.log(response.Countries)

        for(var i=0 ; i<response.Countries.length ; i++){
           
           var totalrecovered = parseInt(0.985*(response.Countries[i].TotalConfirmed - response.Countries[i].TotalDeaths));
           totalactive = response.Countries[i].TotalConfirmed - totalrecovered - response.Countries[i].TotalDeaths
           
           var tablerow = `<tr> 
           <td>${response.Countries[i].Country}</td> 
           <td>${response.Countries[i].TotalConfirmed}</td> 
           <td>${totalactive}</td> <td>${totalrecovered}</td> 
           <td>${response.Countries[i].TotalDeaths}</td> 
           </tr>`
        
            $('#tbody').append(tablerow)
        }

    },
    error : function(error)
    {
        console.log(error)
    }
})
