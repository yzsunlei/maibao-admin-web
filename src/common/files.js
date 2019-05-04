// 创建对象URL
export const createObjectURL = function(blob){
    if(window.URL) {
        return window.URL.createObjectURL(blob);
    }else if(window.webkitURL) {
        return window.webkitURL.createObjectUrl(blob);
    }else {
        return null;
    }
};

// 从内存中移除对象URL
export const revokeObjectURL = function (url) {
    if(window.URL) {
        window.URL.revokeObjectURL(url);
    } else if(window.webkitURL) {
        window.webkitURL.revokeObjectURL(url)
    }
};
