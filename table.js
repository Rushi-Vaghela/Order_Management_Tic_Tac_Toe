fetch("https://script.google.com/macros/s/AKfycbwo0-qab4zbB688W3XbEGgD4eFOqBxKokRkxg6727he1qKqV0AVHhv0XeG8jfenl5g8/exec").then(async (data)=>{
    // console.log(data);
    let i=0;
    return data.json();
}).then(async (objectData)=>{
    console.log(objectData[0].timestamp);

    function nameoffield(status)
    {
        if(status===0)
            return "Placed";
        else if(status===1)
            return "Accepted";
        else if(status===2)
            return "Dispatched";
        else if(status===3)
            return "Delivered";
        else if(status==4)
            return "Cancelled";   
    }

    let ac=0,dis=0;
    let tableData="";
    objectData.map(async (values)=>
    {
            if(values.status==1)
                ac++;
            if(values.status==2)
                dis++;
            tableData+=`<tr>
                <td>${++i}</td>
                <td>${values.your_name}</td>
                <td>${values.platform}</td>
                <td>${values.product_name, values.product_id}</td>
                <td>${values.order_date.slice(0,10)}</td>
                <td>${nameoffield(values.status)}</td>
                <td>${values.address}</td>
                <td>${values.payment_method}</td>
                
            </tr>`;
    });

    document.getElementById("table_body").innerHTML=tableData;
    document.getElementById("orders").innerText=i;
    document.getElementById("pending").innerText=ac;
    document.getElementById("totaldis").innerText=dis;

    setTimeout(function(){
        window.location.reload();
    }, 300000);
    
})