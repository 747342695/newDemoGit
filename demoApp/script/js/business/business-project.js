/**
 * 项目js
 * @author wangfauri
 */

const projectModule = {
    /**
     * get请求获取项目管理分页信息
     */
    getProject: function (data, callback) {
        APIUtils.get("/api/gov/project/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData), callback);
    },
    /**
     * get请求获取项目详细信息
     */
    getProjectDetail: function (data, callback) {
        APIUtils.get("/api/gov/project/" + data, callback);
    },
    /**
     * get请求获取所有项目信息
     */
    getAllProject: function (callback) {
        APIUtils.get("/api/gov/project/all", callback);
    },
    /**
     * get请求获取所有项目状态信息
     */
    getAllProjectState: function (callback) {
        APIUtils.get("/api/gov/project/allState", callback);
    },
    /**
     * get请求获取安全日志信息
     */
    getLog: function (data, callback) {
        APIUtils.get("/api/gov/project/log?id=" + data, callback);
    },
    /**
     * get请求获取安全交底信息
     */
    getDisclosures: function (data, callback) {
        APIUtils.get("/api/gov/project/disclosures?id=" + data, callback);
    },
    /**
     * get请求获取安全整改信息
     */
    getRectify: function (data, callback) {
        APIUtils.get("/api/gov/project/rectify?id=" + data, callback);
    },
    /**
     * get请求获取安全检查信息
     */
    getCheck: function (data, callback) {
        APIUtils.get("/api/gov/project/check?id=" + data, callback);
    },
    /**
     * get请求获取危险源信息
     */
    getDanger: function (data, callback) {
        APIUtils.get("/api/gov/project/danger?id=" + data, callback);
    },
    /**
     * get请求获取设备信息
     */
    getDevice: function (data, callback) {
        APIUtils.get("/api/gov/project/device?id=" + data, callback);
    }
};