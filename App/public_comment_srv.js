module.exports = function () {

  create_confirm_dialog(`
  <p>${langdata.PUBLIC_COMMENT_SERVICE_AGREEMENT[0][lang_name]}</p>
  <p>${langdata.PUBLIC_COMMENT_SERVICE_AGREEMENT[1][lang_name]}</p>
  
  `
  ,`
  save_blog_settings();

  blog["全局评论设置"]["启用valine评论"] = true;
  blog["全局评论设置"]["valine设置"].leancloud_appid = "SykuVs4qcWMkl4RUtKEUlmog-gzGzoHsz";
  blog["全局评论设置"]["valine设置"].leancloud_appkey = "0jowkR4ct0lJbWcvocymEkKw";
  blog["全局评论设置"]["valine设置"]["是否使用bbg公共评论服务"] = true;

  BlogInstance.writeBlogData();
  toast_creator("success",langdata.ALERT_SUCCESSFUL_REGISTER[lang_name]);
  document.getElementById("container").innerHTML = "";
  render_blog_settings();
  enterBlogSettingInterfaceOf('favicon');
  
  
  `);
};
