/**
 * 安全监督js
 * @author cuican
 */
const superModule = {
    /**
     *
     * @param data
     */
   query : function (data,callback) {
        APIUtils.get(SYS_CONF.DOMAIN+"/USER/PAGE/"+data.projectId, callback)
    } ,
    /**
     * get请求获取安全日志分页信息
     */
    getLog: function (data, callback) {
        APIUtils.get("/api/gov/log/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData), callback);
    },
    /**
     * get请求获取单个id安全日志信息
     */
    getLogById: function (id, callback) {
        APIUtils.get("/api/gov/log/"+id, callback);
    },
    /**
     * get请求获取安全日志评论信息
     */
    getLogComment: function (data, callback) {
        APIUtils.get("/api/gov/log/comment/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData), callback);
    },
    /**
     * post请求新增安全日志/交底评论信息
     */
    addComment: function (data, callback) {
        APIUtils.post("/api/gov/log/comment/", data, callback, true);
    },
    /**
     * get请求获取所有工种信息(交底)
     */
    getAllProfession: function (callback) {
        APIUtils.get("/api/base/dict/findDictByTypeCode?dictTypeCode=ZHGD_PROFESSION", callback);
    },
    /**
     * get请求获取危险源管理分页信息
     *  @param data
     *  @param callback
     */
    getHazard: function (data, callback) {
        APIUtils.get("/api/gov/hazard/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData), callback);
    },
    /**
     * get请求根据ID获取危险源详情分页信息
     *  @param data
     *  @param callback
     */
    getHazardList: function (data, callback) {
        APIUtils.get("/api/gov/hazard/details?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData), callback);
    },
    /**
     * get请求获取单个危险源详细信息
     *  @param hazardId
     *  @param callback
     */
    getHazardDetail: function (hazardId, callback) {
        APIUtils.get("/api/gov/hazard/" + hazardId, callback);
    },
    /**
     * get请求分页获取设备管理信息
     *  @param data
     *  @param callback
     */
    getDevice: function (data, callback) {
        APIUtils.get("/api/gov/device/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData), callback);
    },
    /**
     * get请求获取单个设备详细信息
     *  @param deviceId
     *  @param callback
     */
    getDeviceDetail: function (deviceId, callback) {
        APIUtils.get("/api/gov/device/" + deviceId, callback);
    },
    /**
     * get请求分页获取安全检查信息
     *  @param data
     *  @param callback
     */
    getSafetyRecord: function (data, callback) {
        APIUtils.get("/api/gov/safety/?pageSize=" + data.pageSize + "&pageIndex=" + data.pageIndex + "&searchData=" + JSON.stringify(data.searchData), callback);
    },
    /**
     * get请求获取单个安全检查详细信息
     *  @param id
     *  @param callback
     */
    getSafetyRecordDetail: function (id, callback) {
        APIUtils.get("/api/gov/safety/" + id, callback);
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
        APIUtils.get("/api/gov/hazard/allState", callback);
    },
    /**
     * get请求获取所有危险源类型信息
     */
    getAllDangerName: function (callback) {
        APIUtils.get("/base/getSysDict?dictTypeCode=ZHGD_DANGER_TYPE", callback);
    },

    /**
     * get请求获取单个安全整改详细信息
     *  @param Id
     *  @param callback
     */
    getRectificationDetail: function (id,callback) {
        APIUtils.get("/api/gov/safety/" + id, callback);
    },
    /**
     * 生成证书号
     */
    getRectifyCode:function (callback) {
        APIUtils.get("/api/syssnrule/getsyssnrulecode?ruleid=SAFERECTIFY", callback);
    },
    // /**
    //  * 选择检查部位
    //  * @param
    //  */
    // showCheckParkList:function (projectId,callback) {
    //     APIUtils.get("/base/toWin?winUrl=admin/common/treeSelector&fkId="+projectId, callback);
    // },
    addRecordFormat:function(data,callback){
        APIUtils.post("/api/gov/safety/",data,callback,true)
    },
    /**
     * 获取所有根父节点检查项
     */
    getAllCheckProject:function (callback) {
        APIUtils.get("/api/gov/checkProject/all",callback)
    },
    /**
     * 根据父节点id获取问题分类 检查项
     */
    getCheckProjectDetail:function (data,callback) {
        APIUtils.get("/api/gov/checkProject/"+data,callback)
    },
    /**
     * 获取检查类型
     */
    getAllType:function (data,callback) {
        APIUtils.get("/api/base/dict/findDictByTypeCode?dictTypeCode=ZHGD_RECTIFY_TYPE",data,callback)
    },
    /**
     * 获取通知书类型
     */
    getRectifyBook:function (data,callback) {
        APIUtils.get("/api/base/dict/findDictByTypeCode?dictTypeCode=ZHGD_NOTICE_TYPE",data,callback)
    },
    /**
     * 获取设备类型
     */
    getDeviceType:function (data,callback) {
        APIUtils.get("/api/base/dict/findDictByTypeCode?dictTypeCode=ZHGD_DEVICETYPE",data,callback)
    },
    /**
     * 获取通知书类型
     */
    getAllNoticeType:function (data,callback) {
        APIUtils.get("/api/base/dict/findDictByTypeCode?dictTypeCode=ZHGD_NOTICE_TYPE",data,callback)
    },
    /**
     * 生成通知书编号
     */
    getAutoF5:function (callback) {
        APIUtils.get("/api/syssnrule/getsyssnrulecode?ruleid=ZGTZS", callback);
    },
    /**
     * get请求获取设备详情图片信息
     *  @param deviceId
     *  @param callback
     */
    getDeviceDetailImg: function (deviceImgData, callback) {
        APIUtils.get("/api/base/fileassociation/?businessid="+deviceImgData.businessid +"&associationtype="+deviceImgData.associationtype, callback);
    },
    /**
     * 上传图片
     * @param userId 用户id
     * @param file 图片
     * @param callback
     * @return 文件信息（文件名newName，大小size，服务器相对地址url）
     */
    uploadImg:function(file, callback) {
        //上传路径
        var webUploadPath = 'http://47.104.190.94:9006/';
        api.ajax({
            //上传路径
            url:  webUploadPath+ '/api/base/files/upload',
            method: 'post',
            data: {
                files: {//图片链接上传
                    Fdata: file
                },
                values: {//上传参数
                    "packageName": "safety",
                    // "userId": userId,
                }
            },
            headers: {Authorization: TOKEN},
        }, callback);
    },
};