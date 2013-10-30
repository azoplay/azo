

function Tintuccode(listData) {
    var txt = '';
    for (var i = 0; i < listData.length; i++) {
        txt = txt + '<div class="tt_dong1"><img border="0" style="width: 140px;height: 100px;" src="';
        txt = txt + listData[i].imageUrl + '"><a href="' + listData[i].link + '">' + listData[i].title + '</a><p>' + listData[i].description + '</p><p style="margin:3px !important;color:#aaa">' + listData[i].Time + '</p><div class="clear"></div></div>';
    }
    txt = txt + '<div id="pageNew"></div>';

    return txt;
}

function pageNewShow(pagenumber, pageCount) {
    var txt = '<div class="phantrang">';
    if (pagenumber != 1) {
        txt = txt + '<a id="1" class="page" href="javascript:listviewNews(1);">«</a><a id="2" class="page" href="javascript:listviewNews('+(pagenumber-1)+');">‹</a>';
    }
    for (var i = 1; i <= pageCount; i++) {
        if (i == pagenumber) {
            txt = txt + '<a id="' + i + '" class="page pt" href="javascript:listviewNews('+i+');">' + i + '</a>';
         } else {
            txt = txt + '<a id="' + i + '" class="page" href="javascript:listviewNews('+i+');">' + i + '</a>';
        }
    }
    if (pagenumber != pageCount) {
        txt = txt + '<a id="' + pageCount + '" class="page" href="javascript:listviewNews('+(pagenumber+1)+');">›</a><a id="' + pageCount + '" class="page" href="javascript:listviewNews(' + pageCount + ');">»</a>';
    }
    txt = txt += '</div>';
    return txt;
}

function pageNewShow2(pagenumber, pageCount) {
    var txt = '<div class="phantrang">';
    if (pagenumber != 1) {
        txt = txt + '<a id="1" class="page" href="javascript:ListviewDadang(1);">«</a><a id="2" class="page" href="javascript:ListviewDadang(' + (pagenumber - 1) + ');">‹</a>';
    }
    for (var i = 1; i <= pageCount; i++) {
        if (i == pagenumber) {
            txt = txt + '<a id="' + i + '" class="page pt" href="javascript:ListviewDadang(' + i + ');">' + i + '</a>';
        } else {
            txt = txt + '<a id="' + i + '" class="page" href="javascript:ListviewDadang(' + i + ');">' + i + '</a>';
        }
    }
    if (pagenumber != pageCount) {
        txt = txt + '<a id="' + pageCount + '" class="page" href="javascript:ListviewDadang(' + (pagenumber + 1) + ');">›</a><a id="' + pageCount + '" class="page" href="javascript:ListviewDadang(' + pageCount + ');">»</a>';
    }
    txt = txt += '</div>';
    return txt;
}

function listviewNews(p) {
    var display = 5;
    var pt = p ? p : 1;
    var model = data;
    var len = model.length;
    var display = display;
    var startPos = (pt - 1) * display;
    var endPos = Math.min(startPos + display, len);
    var listData = new Array();
    for (var i = startPos; i < endPos; i++) {
        listData.push(model[i]);
    }
    $('#cot_t_news').html(Tintuccode(listData));
    pageCount = Math.ceil(len / display);
    $('#cot_t_news').find('#pageNew').html(pageNewShow(pt, pageCount));
}

function Zendcode(listData) {
    var txt = '<div class="listItems">';
    for (var i = 0; i < listData.length; i++) {
        var timemin = listData[i].Time.split(" ngày ");
        var timehaha = timemin[1].replace('/', '-');
        timehaha = timehaha.replace('/', '-');
        txt = txt + '<div class="tt_dong2"><span>' + timehaha + '</span><a href="/tin-tuc/' + listData[i].link + '">' + listData[i].title + '</a></div>';
    }
    txt = txt + '</div>';
    return txt;
}
function ListviewDadang(p) {
    var display = 3;
    var pt = p ? p : 1;
    var model = data;
    var len = model.length;
    var display = display;
    var startPos = (pt - 1) * display;
    var endPos = Math.min(startPos + display, len);
    var listData = new Array();
    for (var i = startPos; i < endPos; i++) {
        listData.push(model[i]);
    }
    $('#listItems').html(Zendcode(listData));
    pageCount = Math.ceil(len / display);
    $('#listNewsOldest').find('#phantrang').html(pageNewShow2(pt, pageCount));
}