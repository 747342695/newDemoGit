/**
 * 我的页面js
 * @author cuican
 */
/**
 * 系统配置
 * @type {{PROXY_IP: string, DOMAIN: string}}
 */

const myModule={
    /**
     * get请求数据
     * @param id 页面id
     * @param url 页面路径
     * @param pageParam 传递给下个页面的参数
     */
    my:function (staffId, callback) {
        APIUtils.get("/api/gov/myInfo/"+staffId,callback);

    }
}