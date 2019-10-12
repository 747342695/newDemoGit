/**
 * 消息js
 * @author cuican
 * @since 2019-07-01
 */
var messageModule = {
    /**
     * 查询平台消息
     * @param data 分页数据
     * @param callback 回调方法
     */
    queryMessageList:function (data,callback) {
        APIUtils.get("/api/gov/message/queryMessage?pageSize="+data.pageSize  + "&pageIndex="+data.pageIndex +"&searchData="+JSON.stringify(data.searchData),callback);
    },
    /**
     * 查询整改到期消息
     * @param data 分页数据
     * @param callback 回调方法
     */
    messageEndTimeList: function (data,callback) {
        APIUtils.get("/api/gov/message/queryWarning?pageSize="+data.pageSize  + "&pageIndex="+data.pageIndex +"&searchData="+JSON.stringify(data.searchData),callback);
    },
    /**
     * 查询人员信息
     * @param data 分页数据
     * @param callback 回调方法
     */
    getPeople: function (data,callback) {
        APIUtils.get("/api/gov/message/people?pageSize="+data.pageSize  + "&pageIndex="+data.pageIndex +"&searchData="+JSON.stringify(data.searchData),callback);
    },
    /**
     * 发送信息
     * @param data 所有待发送消息的信息
     * @param callback 回调方法
     */
    sendMessage: function (data,callback) {
        APIUtils.post("/api/gov/message/", data, callback, true);
    },
};