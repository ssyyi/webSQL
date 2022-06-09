function getMyDb() {
    //打开数据库，或者直接连接数据库参数：数据库名称，版本，概述，大小
    return openDatabase("myDb", "1.0", "it's to save demo data!", 1024 * 1024);
}
let db = getMyDb();

//插入数据
db.transaction(function (trans) {
    trans.executeSql("insert into Demo(mydata) values(?) ", [Mydata]);
});
//查询库中数据
function showAllTheData() {
    $("#data").empty();
    db.transaction(function (trans) {
        trans.executeSql("select * from Demo ", [], function () {
            if (data) {
                for (var i = 0; i < data.rows.length; i++) {
                    appendDataToTable(data.rows.item(i));
                }
            }
        });
    });
}

showAllTheData();

function appendDataToTable(data) { //将数据展示到表格里面
    let Mydata = data.mydata;
    let strHtml = "";
    strHtml += "<tr>";
    strHtml += "<td>" + Mydata + "</td>";
    $("#data").append(strHtml);
}