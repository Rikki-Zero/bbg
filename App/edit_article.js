
const dialog = require("@electron/remote").dialog;
const shell = require("@electron/remote").shell;

module.exports = function (filename, i) {
/*   try {
    shell.openPath(`${rootDir}/data/articles/${filename}`);
  } catch (error) {
    dialog.showErrorBox("无法打开文章文件（ERR_CANNOT_OPEN_ARTICLE_FILE）", `文章文件打开失败。\n请确保文章文件存在，并且你有足够的权限访问。\n以下是错误日志，请将此信息报告给开发者：\n\n${error}`);
  } */
  // 这里先检测一下文章是否需要验证密码解密
  window.open(`./markdown_editor.html?rootdir=${rootDir}&path=/data/articles/${filename}`);
};
