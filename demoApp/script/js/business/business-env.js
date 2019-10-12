/**
 * 环境js
 * @author fangping
 * @since 2019-06-08
 */

var envModule = {
    /**
     * 分页查询项目列表页面
     * @param data 请求参数
     * @param callback 回调函数
     */
    queryProjectList: function (data, callback) {
        APIUtils.get("/api/gov/project/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex, callback);
    },
    /**
     * 查询某项目今天的天气
     * @param data 请求参数
     * @param callback 回调函数
     */
    getTodayWeather: function (data, callback) {
        APIUtils.get("/api/zhgd/safety/env/getNowEvn/" + data.projectId, callback);
    },
    /**
     * 查询某一个项目前一个星期（前7天）的历史天气
     * @param data 请求参数
     * @param callback
     */
    queryBeforeWeekWeather: function (data, callback) {
        APIUtils.get("/api/gov/weather/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData)+"&sortOrder="+data.sortOrder+"&sortField="+data.sortField, callback);
    },
}
