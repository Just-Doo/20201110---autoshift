exports.get_home = ( _ , res) => {
    res.render( 'layout/home.html' , 
        { title : "Welcome to AutoShift" } // message 란 변수를 템플릿으로 내보낸다.
    );
}
