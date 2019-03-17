//toggle About Me section
function toggleHideArticle(element){
    element.classList.toggle('hideArticle'); //css .hideArticle display: none; ---- we will toggle this
    }
    
    function linkBtnToArticle(){
      const articleBtn = document.querySelector('.iconBtn');  //button being clicked
    
      articleBtn.addEventListener('click', function(){  //when click toggle article
        const hideArticle = document.querySelector('.article'); //.article is tagged to same item as .hideArticle
        toggleHideArticle(hideArticle);
        
    });
    }
    
    function runArticleHideAboutMe() {
      linkBtnToArticle();
    }
    
    runArticleHideAboutMe();

  
  // toggle military serv
  function toggleHideArticleMilServ(element){
  element.classList.toggle('hideArticle1'); 
  }
  
  function linkBtnToArticleMilServ(){
    const articleBtn = document.querySelector('.iconBtn1');  
  
    articleBtn.addEventListener('click', function(){
      const hideArticle = document.querySelector('.article1');
      toggleHideArticleMilServ(hideArticle);
    });
  }
  
  function runArticleHideMilServ() {
    linkBtnToArticleMilServ();
  }
  
  runArticleHideMilServ();

