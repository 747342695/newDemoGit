/**
 * 协同办公js
 * @author wangfauri
 */

const cooperativeModule = {
    /**
     * get请求获取通知公告分页信息
     */
    getNotification: function (data, callback) {
        APIUtils.get("/api/newsmanage/news/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData), callback);
    },
    /**
     * get请求获取通知公告所有公告状态
     */
    getAllDatastatus: function (callback) {
        APIUtils.get("/base/getSysDict?dictTypeCode=NEWSSTATUS", callback);
    },
    /**
     * get请求获取通知公告详情信息
     */
    getNotificationDetail: function (data, callback) {
        APIUtils.get("/api/newsmanage/news/"+data, callback);
    },
    /**
     * get请求获取通知公告详情附件
     */
    getNotificationFile: function (data, callback) {
        APIUtils.get("/api/base/fileassociation/?businessid="+data+"&associationtype=1&pageIndex=0&pageSize=10", callback);
    },

};