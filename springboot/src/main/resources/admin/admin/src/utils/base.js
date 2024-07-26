const base = {
    get() {
        return {
            url : "http://localhost:8080/deviceshare/",
            name: "deviceshare",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "网吧管理系统"
        } 
    }
}
export default base
