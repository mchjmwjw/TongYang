var Ajax={
    get: function(url, fn) {
        var xhr = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { // readyState == 4说明请求已完成
                fn.call(this, xhr.responseText);  //从服务器获得数据
            }
        };
        xhr.send();
    },
    post: function (url, data, fn) {         // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  // 添加http头，发送信息至服务器时内容编码类型
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {  // 304未修改
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send(data);
    }
}

Ajax.get('getallproducts', function(a){
    var data = JSON.parse(a);
})