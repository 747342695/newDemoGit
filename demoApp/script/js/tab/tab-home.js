/**
 * 首页页面js
 * @author wangfarui
 */

const homeModule ={
    /**
     * get请求获取项目信息
     */
    getProject:function(callback) {
        APIUtils.get("/api/gov/home/project",callback);
    },
    /**
     * get请求获取设备信息
     */
    getDevice:function(callback) {
        APIUtils.get("/api/gov/home/device",callback);
    },
    /**
     * get请求获取设备信息
     */
    getWeather:function(callback) {
        APIUtils.get("/api/gov/home/weather",callback);
    },
    /**
     * get请求获取安全日志信息
     */
    getSafetyLog:function(callback) {
        APIUtils.get("/api/gov/home/safetyLog",callback);
    },
    /**
     * get请求获取安全交底信息
     */
    getSafetyDisclosures:function(callback) {
        APIUtils.get("/api/gov/home/safetyDisclosures",callback);
    },
    /**
     * get请求获取危险源管理信息
     */
    getDangerRecord:function(callback) {
        APIUtils.get("/api/gov/home/dangerRecord",callback);
    },
    /**
     * get请求获取安全整改信息
     */
    getSafetyRectify:function(callback) {
        APIUtils.get("/api/gov/home/safetyRectify",callback);
    },
    /**
     * get请求获取安全检查信息
     */
    getSafetyCheck:function(callback) {
        APIUtils.get("/api/gov/home/safetyCheck",callback);
    }

}