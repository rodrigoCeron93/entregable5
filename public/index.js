const  myfun = (e)=>{

    let data = new FormData(e);
    let dat ={}
    for (let [key, value] of data) {
        dat[key]=value
    }
    console.log(dat)


    fetch("http://localhost:8080/api/productos",{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(dat), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    })
    .then(response => console.log(response.json()))
    .then(data => console.log(data));

    
return false;
}