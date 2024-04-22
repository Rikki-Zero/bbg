const doNothing = require("./doNothing.js");

module.exports = function () {
  document.getElementById("container").insertAdjacentHTML("beforeend",getUiFileContent(
    "article_manager_title_ui.html",
  ));

  document.getElementById("edit_article_meta_dialog_footer").innerHTML
    = getUiFileContent("edit_article_meta_dialog_footer_ui.html");

  for (let i = 0; i < blog["文章列表"].length; i++) {
    if (blog["文章列表"][i]["是否置顶"]) {
      document.querySelector("#container").insertAdjacentHTML("beforeend",`
        <div class="article-item" id="article-item-${i}">
            <div class="article-item-sub"><i class="fa fa-thumb-tack"></i> ${langdata.ARTICLE_IS_TOP[lang_name]}</div>
            <h2>${blog["文章列表"][i]["文章标题"]}</h2>
           
            
        </div>
            `);
    }
  }

  for (let i = 0; i < blog["文章列表"].length; i++) {
    if (blog["文章列表"][i]["是否置顶"]) {
      doNothing();
    } else {
      document.querySelector("#container").insertAdjacentHTML("beforeend",`
        <div class="article-item" id="article-item-${i}">
            <h2>${blog["文章列表"][i]["文章标题"]}</h2>
           
            
        </div>
            `);

      document.querySelector(`#article-item-${i}`).insertAdjacentHTML("beforeend",`
                <div class="article-item-sub" id="article-item-sub-${i}"></div>
                `);

      document.querySelector(`#article-item-sub-${i}`).insertAdjacentHTML("beforeend",`
      <i class="fa fa-calendar"></i> ${langdata.ARTICLE_CREATEDAT[lang_name]} <span style="border-bottom: 1px dashed #676161;">${convertTimeStampToLocalTime(blog["文章列表"][i]["创建时间（时间戳）"])}</span>，${langdata.LASTMODIFIEDAT[lang_name]} <span style="border-bottom: 1px dashed #676161;">${convertTimeStampToLocalTime(blog["文章列表"][i]["修改时间（时间戳）"])}</span><br />
            `);

      if (blog["文章列表"][i]["标签"].length === 0) {
        doNothing();
      } else {
        document.querySelector(`#article-item-sub-${i}`).insertAdjacentHTML("beforeend",`
        <i class="fa fa-tags"></i> ${langdata.TAGS[lang_name]}
                `);

        for (let k = 0; k < blog["文章列表"][i]["标签"].length; k++) {
          document.querySelector(`#article-item-sub-${i}`).insertAdjacentHTML("beforeend",`
                    <button class="btn btn-light btn-sm">${blog["文章列表"][i]["标签"][k]}</button>
                    `);
        }
      }

      document.querySelector(`#article-item-${i}`).insertAdjacentHTML("beforeend",`
            <br /><p>${blog["文章列表"][i]["摘要"]}</p>
                `);
    }

    // TODO: i18n encrypt_options
    document.querySelector(`#article-item-${i}`).insertAdjacentHTML("beforeend", `
    
    <button class="btn btn-outline-primary" onclick="edit_article('${blog["文章列表"][i]["文件名"]}', ${i})"><i class="fa fa-edit"></i> ${langdata.EDIT_AND_PREVIEW_ARTICLE_CONTENT[lang_name]}</button>
    <button class="btn btn-outline-primary" onclick="edit_article_meta(${i})"><i class="fa fa-info-circle"></i> ${langdata.EDIT_ARTICLE_META[lang_name]}</button>
    <button class="btn btn-outline-danger" onclick="delete_article(${i})"><i class="fa fa-trash-o"></i> ${langdata.DELETE_ARTICLE[lang_name]}</button>
    <span id="encryption_related_func_${i}"></span>
    <br /><br />
    <button class="btn btn-outline-primary" onclick="let_article_up(${i})"><i class="fa fa-arrow-up"></i> ${langdata.LET_ARTICLE_GO_UP[lang_name]}</button>
    <button class="btn btn-outline-primary" onclick="let_article_down(${i})"><i class="fa fa-arrow-down"></i> ${langdata.LET_ARTICLE_GO_DOWN[lang_name]}</button>
    `);
    if (blog["文章列表"][i]["是否加密"]){
      document.querySelector(`#encryption_related_func_${i}`).insertAdjacentHTML("beforeend",`
      <button class="btn btn-outline-warning" onclick="ui_decrypt_article(${i})"><i class="fa fa-unlock"></i> ${langdata.DECRYPT_ARTICLE[lang_name]}</button>
      `);
    } else {
      document.querySelector(`#encryption_related_func_${i}`).insertAdjacentHTML("beforeend",`
      <button class="btn btn-outline-success" onclick="ui_encrypt_article(${i})"><i class="fa fa-lock"></i> ${langdata.ENCRYPT_ARTICLE[lang_name]}</button>
      `);
    }
  }
  document.getElementById("nav_to_article_manager").classList.add("active");
};
