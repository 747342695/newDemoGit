/**
 * 安全整改js
 * @author fangping
 * @since 2019-06-28
 */
var safetyModule = {

    /**
     * 查询安全整改
     * @param data 分页数据
     * @param callback 回调方法
     */
    querySafetyRectificationList:function (data,callback) {
        APIUtils.get("/api/gov/safety/?pageSize="+data.pageSize  + "&pageIndex="+data.pageIndex +"&searchData="+JSON.stringify(data.searchData),callback);
    },

    /**
     * 查询安全整改条目数
     * @param callback 回调方法
     */
    getSafetyRectificationCount:function (callback) {
        APIUtils.get("/api/gov/safety/getSafetyRectificationCount",callback);
    }
};