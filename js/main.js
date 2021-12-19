(function(){

    const wrapEl = document.querySelector('.wrap');
    const titleEl = document.querySelector('.title');
    const title_2El = document.querySelector('.title_2');

    const handleScroll = () => {
        let sct = window.pageYOffset;
        let useScroll = wrapEl.offsetHeight - innerHeight;
        let per = (sct / useScroll) * 100 + '%';

        titleEl.style.left = -(sct / useScroll) * 100 + '%';
        title_2El.style.left = (sct / useScroll) * 100 + '%';
    };

    window.addEventListener('scroll', handleScroll);

})();