window.addEventListener('load',function(){
    console.log('page is loaded');

    fetch('ant_anatomy.json')
    .then(function(response){
        console.log(response);
        return response.json()
    })

    .then(function(data){
        console.log(data.description); 
    })
})

