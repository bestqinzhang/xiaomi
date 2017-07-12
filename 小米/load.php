<?
    echo '<meta http-equiv="content-type" content="text/html; charset=utf-8">';
    $user = isset($_POST['user'])? $_POST['user'] : '';
    $pWd = isset($_POST['pWd'])? $_POST['pWd'] : '';
    if(empty($user) || empty($pWd)){
        echo '用户名和密码不能为空';
        exit();
    }
    if($user=='123' && $pwd=='123'){
        echo '登陆成功';
    }else{
        echo '用户名或密码错误';
    }
?>