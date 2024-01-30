function validate()
{
    var a=document.getElementById('t').value;
    var b=document.getElementById('t1').value;
    if(b==="cel")
    {
        var c=(a-32)/1.8;
        document.getElementById('res').innerText=`${c}`;
    }
    if(b==="fah")
    {
        var f=(a*1.8)+32;
        document.getElementById('res').innerText=`${f}`;
    }
}