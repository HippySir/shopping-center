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
export default myrequert;