<?php
    header("Content-type:text/html;charset=utf-8");

    //1.接受前端数据
    $mobliePhoneNum = $_POST['mobliePhoneNum'];
    //2.连接数据库
    $conn = mysql_connect("localhost","root","root");
    //3.修改编码格式
    mysql_query("set names 'utf8'",$conn);
    //4.选择数据库
    mysql_select_db("mydbh5",$conn);
    //5.执行语句
    $sqlstr = "select * from dwvip where mobliePhoneNum='$mobliePhoneNum'";
    $result = mysql_query($sqlstr,$conn);
    $rows = mysql_num_rows($result);
    if($rows>0){
        mysql_close($conn);
        echo "1";
    }else{
        // $sqlstr = "insert into dwvip(username,sex,mobliePhoneNum) value('$username','$sex','$mobliePhoneNum')";
        // $result = mysql_query($sqlstr,$conn);//返回值为1，0
        //6.关闭数据库
        // mysql_close($conn);
        // if($result!=1){
        //     echo "0";//注册失败
        // }else{
        //     echo "1";//注册成功
        // }
        echo "0";
    }
    // echo $sqlstr;
?>