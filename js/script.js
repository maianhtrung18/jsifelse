function sapXep(){
    var so1 = document.getElementById("soNguyen1").value;
    var so2 = document.getElementById("soNguyen2").value;
    var so3 = document.getElementById("soNguyen3").value;

    var temp;
    if(Number(so1)%1 != 0 || Number(so2)%1 != 0 || Number(so2)%1 != 0 || so1 == "" || so2 == "" || so3 == ""){
        document.getElementById("kqSapXep").innerHTML = "Hãy nhập số nguyên";
    }
    else{
        if (Number(so1) > Number(so2)){
            temp = so2;
            so2 = so1;
            so1 = temp;
        }
        if (Number(so1) > Number(so3)){
            temp = so3;
            so3 = so1;
            so1 = temp;
        }
        if (Number(so2) > Number(so3)){
            temp = so3;
            so3 = so2;
            so2 = temp;
        }
    
        document.getElementById("kqSapXep").innerHTML = so1 + " " + so2 + " " + so3;
    }
    
}

document.getElementById("sapXep").onclick = sapXep;

function chaoHoi(){
    var person = document.getElementById("family").value;
    
    if(person === "dad"){
        document.getElementById("kqChao").innerHTML = "Chào Bố";
    }
    else if(person === "mum"){
        document.getElementById("kqChao").innerHTML = "Chào Mẹ";
    }
    else if(person === "brother"){
        document.getElementById("kqChao").innerHTML = "Chào Anh trai";
    }
    else if(person === "sister"){
        document.getElementById("kqChao").innerHTML = "Chào Em gái";
    }
    else{
        document.getElementById("kqChao").innerHTML = "Hãy cho biết ai đang sử dụng máy?";
    }

}
document.getElementById("chao").onclick = chaoHoi;

function demChanLe(){
    var so1 = document.getElementById("soN1").value;
    var so2 = document.getElementById("soN2").value;
    var so3 = document.getElementById("soN3").value;

    var soChan = 0;
    var soLe = 0;
    if(Number(so1)%1 != 0 || Number(so2)%1 != 0 || Number(so2)%1 != 0 || so1 == "" || so2 == "" || so3 == ""){
        document.getElementById("kqTinh").innerHTML = "Hãy nhập số nguyên";
    }else{
        if (so1%2 === 0){
            soChan += 1;
        }
        else{
            soLe += 1;
        }
        if (so2%2 === 0){
            soChan += 1;
        }
        else{
            soLe += 1;
        }
        if (so3%2 === 0){
            soChan += 1;
        }
        else{
            soLe += 1;
        }
    
        document.getElementById("kqTinh").innerHTML = "Số Chẵn: " + soChan + ", Số Lẻ: " + soLe;
    }

    

}

document.getElementById("tinh").onclick = demChanLe;


function tamGiac(){
    var canh1 = document.getElementById("canh1").value;
    var canh2 = document.getElementById("canh2").value;
    var canh3 = document.getElementById("canh3").value;

    canh1 = Number(canh1);
    canh2 = Number(canh2);
    canh3 = Number(canh3);

    if(canh1 == "" || canh2 == "" || canh3 == ""){
        document.getElementById("kqTamGiac").innerHTML = "Hãy nhập 3 cạnh tam giác";
    }else{
        if(canh1<canh2+canh3 && canh2<canh1+canh3 && canh3<canh1+canh2){
            if(canh1*canh1==canh2*canh2+canh3*canh3 || canh2*canh2==canh1*canh1+canh3*canh3 || canh3*canh3==canh1*canh1+canh2*canh2){
                document.getElementById("kqTamGiac").innerHTML = "Đây là tam giác vuông";
            }
            else if(canh1==canh2 && canh2==canh3){
                document.getElementById("kqTamGiac").innerHTML = "Đây là tam giác đều";
            }
            else if(canh1==canh2 || canh2==canh3 || canh1==canh3){
                document.getElementById("kqTamGiac").innerHTML = "Đây là tam giác cân";
            }
            else if(canh1*canh1>canh2*canh2+canh3*canh3 || canh2*canh2>canh1*canh1+canh3*canh3 || canh3*canh3>canh1*canh1+canh2*canh2){
                document.getElementById("kqTamGiac").innerHTML = "Đây là tam giác tù";
            }
            else{
                document.getElementById("kqTamGiac").innerHTML = "Đây là tam giác nhọn";
            }
        }else{
            document.getElementById("kqTamGiac").innerHTML = "Đó không phải 3 cạnh của tam giác";
        }
    }
}

document.getElementById("tamGiac").onclick = tamGiac;