exports.get_myprofile = ( _ , res) => {
    res.render( 'users/myprofile.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
}

exports.get_myprofile_write = ( _ , res) => {
    res.render( 'users/write.html');
}

exports.post_myprofile_write = ( req , res ) => {
    res.send(req.body);
}