fetch("https://fakestoreapi.com/products").then(async (data)=>{
    // console.log(data);
    return data.json();
}).then(async (objectData)=>{
    console.log(objectData[0].timestamp);
    let tableData="";
    objectData.map(async (values)=>{
            tableData+=`<tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
    
     
})  