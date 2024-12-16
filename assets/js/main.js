// assets/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // 初始化Gitalk
    if (document.getElementById('gitalk-container')) {
        const gitalk = new Gitalk({
            clientID: site.gitalk.clientID,
            clientSecret: site.gitalk.clientSecret,
            repo: site.gitalk.repo,
            owner: site.gitalk.owner,
            admin: site.gitalk.admin,
            id: location.pathname,
            title: document.title
        });
        gitalk.render('gitalk-container');
    }

    // 响应式导航菜单
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.site-nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 代码高亮
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});