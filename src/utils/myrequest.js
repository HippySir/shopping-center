function myrequert(url,method="GET",data={},header={}){
    return new Promise((resovle,reject)=>{
        wx.request({
            url:url,
            method:method,
            data:data,
            header:header,
            success:function(res){
                resovle(res);
            },
            fail:function(res){
                reject(res);
            },
        })
    })
}
// 在他的基础之上再来封装一个get方法
myrequert.get = function(url,data={}){
    return myrequert(url,"GET",data,{});
}
export default myrequert;