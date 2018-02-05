window.onload = function (ev) {
    document.title = document.querySelector('header>.title').innerText; //全局标题处理机制
    document.querySelector('.pull-left') !== null ? //全局返回處理機制
    document.querySelector('.pull-left').addEventListener('click', function () {
        console.log('back watched!');
        window.history.back();
    }) : null;
    var event = function event(ev) {
        //进入赛事资料库
        ev = ev || window.event;
        var target = ev.target || ev.srcElement,
            thisValue = target.innerText;
        console.log(target.className);
        switch (!!target) {
            case target.nodeName.toLowerCase() === 'li':
                window.location.href = '../compment/data-international.html?backurl=' + thisValue;
                break;
            case target.nodeName.toLowerCase() === 'span':
                window.location.href = '../compment/data-world-preselection.html?backurl=' + thisValue;
                break;
        }
    };
    var contNaw = document.querySelectorAll('#cont-naw>*'),
        conList = document.querySelectorAll('#con-list>*'),
        international = document.querySelector('.international'),
        raceSult = document.querySelectorAll('#race-sult>*'),
        raceResult = document.querySelectorAll('#raceResult>*'),
        proportionNav = document.querySelectorAll('#proportion-nav>*'),
        proportion = document.querySelectorAll('#proportion>*');

    var _loop = function _loop(i) {
        //data-ceania 导航切换
        contNaw[i].index = i;
        contNaw[i].onclick = function () {
            for (var j = 0; j < conList.length; j++) {
                conList[j].className = 'con-list';
                contNaw[j].className = '';
            }
            contNaw[i].className = 'active';
            conList[i].className = 'active-block con-list';
        };
        conList[i].onclick = event; //资料库进入赛事资料库
    };

    for (var i = 0; i < contNaw.length; i++) {
        _loop(i);
    }
    if (international) {
        international.onclick = event; //赛事资料库进入赛程赛果
    }

    var _loop2 = function _loop2(i) {
        //data-world-cup 小组积分与赛程切换
        raceSult[i].index = i;
        raceSult[i].onclick = function () {
            for (var j = 0; j < raceResult.length; j++) {
                raceResult[j].className = 'raceResult';
                raceSult[j].className = 'blue';
            }
            raceSult[i].className = 'yellow';
            raceResult[i].className = 'active-block raceResult';
        };
    };

    for (var i = 0; i < raceSult.length; i++) {
        _loop2(i);
    }

    var _loop3 = function _loop3(i) {
        //data-world-england 世界杯欧洲区预选赛切换
        proportionNav[i].index = i;
        proportionNav[i].onclick = function () {
            for (var j = 0; j < proportion.length; j++) {
                proportion[j].className = '';
                proportionNav[j].className = '';
            }
            proportionNav[i].className = 'active';
            proportion[i].className = 'active-block';
        };
    };

    for (var i = 0; i < proportionNav.length; i++) {
        _loop3(i);
    }
};
