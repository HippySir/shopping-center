function myrequert(){
    return new Promise((resovle,reject)=>{
        wx.request({
            url:"",
            header:"",
            data:{},
            success:resovle,
            fail:reject,
        })
    })
}
export default myrequert;