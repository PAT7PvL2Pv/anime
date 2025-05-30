// http://www.donghuapiandaquan.com
var rule = {
    title: '动画片大全',
    host: 'https://www.dhpdq2.com',
    url: 'https://www.dhpdq2.com/katong/fyclass-fypage/',
    searchUrl: '/vodsearch/**----------fypage---/',
    class_parse: '.c_class li;a&&Text;a&&href;.*/(.*?)/',
    //searchable: 2,
    //quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '.stui-vodlist;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    double: true,
    一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级: {
        title: 'h1&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(2)&&Text',
        img: '.vodlist_thumb&&data-original',
        desc: '.playinfo&&p:eq(0)&&Text;.playinfo&&p:eq(1)&&Text;.playinfo&&p:eq(2)&&Text;.playinfo&&p:eq(3)&&Text',
        content: '.content:eq(1)',
        tabs: '.relatesdh .title h3',
        lists: '.relatesdh:eq(#id) li',
    },
    搜索: '*',
}