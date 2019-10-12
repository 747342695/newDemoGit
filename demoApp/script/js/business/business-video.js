/**
 * 视频js
 * @author fangping
 * @since 2019-06-08
 */
var videoModule = {
    /**
     * 分页查询项目列表页面
     * @paran data 分页数据
     * @param callback 回调函数
     */
    queryProjectList: function (data, callback) {
        APIUtils.get("/api/gov/project/?pageSize=" + data.pageSize + "&pageIndex="+data.pageIndex, callback);
    },
    /**
     * 分页查询视频列表页面
     * @param data 数据  {pageSize:10,pageIndex:0.searchData:'[{name:'eq_date',value:'2019-01-12'},{'name':like_name,value:'zhangsan'}]}
     * @param callback 回调函数
     */
    queryVideoList: function (data, callback) {

        APIUtils.get("/api/gov/device/?pageSize="+data.pageSize  + "&pageIndex="+data.pageIndex +"&searchData="+JSON.stringify(data.searchData),callback);
    },
    /**
     * 查询视频详情
     * @param url
     * @param callback
     */
    getVideo: function (url, callback) {
        APIUtils.get(url, callback);
    }
}
