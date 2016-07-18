module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;

function index(req, res) {
    res.cookie('IndexCookie', 'This was set from Index');
    // res.clearCookie('IndexCookie');
    // res.render('index', { 
    //     layout: 'layout', 
    //     title: 'Index', 
    //     cookie: JSON.stringify(req.cookies),
    //     session: JSON.stringify(req.session),
    //     pagecount: req.session.pageCount,
    //     signedCookie: JSON.stringify(req.signedCookies)
    // });
    res.render('index', { 
        layout: 'layout', 
        title: 'Index'
    });
};

function login(req, res) {
    res.render('login', { layout: 'layout', title: 'Login', token: req.csrfToken() });
};

function loginProcess(req, res) {
    console.log(req.body);
    res.send(req.body.username + ' ' + req.body.password);
};

function chat(req, res) {
    res.render('chat', { layout: 'layout', title: 'Chat'});
};