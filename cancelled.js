fetch("https://script.google.com/macros/s/AKfycbwo0-qab4zbB688W3XbEGgD4eFOqBxKokRkxg6727he1qKqV0AVHhv0XeG8jfenl5g8/exec").then(async (data)=>{
    // console.log(data);
    let i=0;
    return data.json();
}).then(async (objectData)=>{
    console.log(objectData[0].timestamp);

    let tableData="";
    objectData.map(async (values)=>{
        if(values.status==4)
        {
            tableData+=`<tr>
                <td>${++i}</td>
                <td>${values.your_name}</td>
                <td>${values.platform}</td>
                <td>${values.product_name, values.product_id}</td>
                <td>${values.order_date.slice(0,10)}</td>
                <td>${"Cancelled"}</td>
            </tr>`;
        }
    });
    
    document.getElementById("table_cancel").innerHTML=tableData;
    document.getElementById("orders").innerText=i;
    setTimeout(function(){
        window.location.reload();
    }, 300000);
    
})