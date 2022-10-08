fetch("https://script.google.com/macros/s/AKfycbwes9nOwkc79sxesYIyHmhoQh7ToxUrAVomXeknyXsDq4za8V8wxe80UbWqpW9xUGbj/exec").then((data)=>{
    // console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].timestamp);
    let tableData="";
    objectData.map((values)=>{
        // if(values.length!=''){
            tableData+=`<tr>
            <td>${values.timestamp}</td>
            <td>${values.your_name}</td>
            <td>${values.your_mobile_number}</td>
            <td>${values.platform}</td>
            <td>${values.product_name}</td>
            <td>${values.product_id}</td>
            <td>${values.order_date}</td>
            <td>${values.payment_method}</td>
            <td>${values.email_address}</td>
            </tr>`;
        // }
    });
    document.getElementById("table_body").innerHTML=tableData;
})