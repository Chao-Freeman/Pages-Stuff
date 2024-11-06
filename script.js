addEventListener("load", function(){
    let elever=document.getElementById("FTCDashVer");
    function showErrorMsg(){
        elever.innerHTML = "Failed to get latest version, please visit <a href=\"https://acmerobotics.github.io/ftc-dashboard/gettingstarted\"><strong>this</strong></a> site to get latest version."
    }
    fetch("https://acmerobotics.github.io/ftc-dashboard/gettingstarted").then(function success(result){
        result.text().then(function(e){
            let r=e.match(/(?<=implementation 'com.acmerobotics.dashboard:dashboard:).+?(?=')/);
            if(r!=null){
                elever.innerText = r[0];
                return;
            }
            showErrorMsg();
        }, function(result){
            showErrorMsg();
            console.error(result);
        });
    }, function(result){
        showErrorMsg();
        console.error(result);
    });
});
