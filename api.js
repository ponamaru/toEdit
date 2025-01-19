document.write( '<div id="editUI" class="item2"><p>shiftキーと1キーで非表示</p><button id="systemEditB" onclick="Cene8()">Other</button><button id="emnemyEditB" onclick="Cene3()">enemys</button><button id="friendEditB" onclick="Cene4()">friends</button><button id="skillFEditB" onclick="Cene9()">skill(f)</button><div id="editEnemy"><p>敵の数</p><div id="Menemy">3</div><button id="CeneL" onclick="Cene()">←</button><button id="CeneR" onclick="Cene2()">→</button><p></p><div id="enemydiv1"><form><p>敵1</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview(this);"></form>名前<input id="input1" oninput="inputM()" placeholder="敵1の名前" value="敵1">大きさ<input id="input4" oninput="inputM()" placeholder="大きさ" value="300">位置(上下)<input id="input5" oninput="inputM()"  value="250"><p>位置(左右)<input id="input7" oninput="inputM()" value="200">HP<input id="input17" oninput="inputM()" value="100">最大攻撃力<input id="input37" oninput="inputM3()" placeholder="敵1の最大攻撃力" value="20"></p></div><form name="myform"><div id="img"></div><div id="enemydiv2"><form><p>敵2</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview2(this);"></form><p>名前<input id="input2" oninput="inputM2()" value="敵2">大きさ<input id="input8" oninput="inputM2()" placeholder="大きさ" value="300">位置(上下)<input id="input9" oninput="inputM2()" placeholder="位置(上下)" value="250"><p>位置(左右)<input id="input10" oninput="inputM2()"  placeholder="位置(左右)" value="600">HP<input id="input16" oninput="inputM2()" placeholder="HP" value="100">最大攻撃力<input id="input36" oninput="inputM2()" placeholder="敵2の最大攻撃力" value="20"></p></div><div id="enemydiv3"><form><p>敵3</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview3(this);"></form>名前<input id="input11" oninput="inputM3()" placeholder="敵3の名前" value="敵3">大きさ<input id="input12" oninput="inputM3()" placeholder="大きさ" value="300">位置(上下)<input id="input13" oninput="inputM3()" placeholder="位置(上下)" value="250"><p>位置(左右)<input id="input14" oninput="inputM3()" placeholder="位置(左右)" value="1000">HP<input id="input15" oninput="inputM3()" placeholder="HP" value="100">最大攻撃力<input id="input35" oninput="inputM3()" placeholder="敵3の最大攻撃力" value="20"></div></div><div id="editFriend"><p>味方の数</p><div id="Menemy2">3</div><button id="CeneL2" onclick="Cene5()">←</button><button id="CeneR2" onclick="Cene6()">→</button><div id="frienddiv1"><form><p>味方1の画像</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview4(this);"></form>名前<input id="input18" oninput="inputM4()" placeholder="味方1の名前" value="味方1">HP<input id="input19" oninput="inputM4()" placeholder="味方1のhp" value="100">MP<input id="input20" oninput="inputM4()" placeholder="味方1のmp" value="50">最大攻撃力<input id="input21" oninput="inputM4()" placeholder="味方1の最大攻撃力" value="20"></p></div><div id="frienddiv2"><form><p>味方2の画像</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview5(this);"></form>名前<input id="input22" oninput="inputM5()" placeholder="味方2の名前" value="味方2">HP<input id="input23" oninput="inputM5()" placeholder="味方2のhp" value="100">MP<input id="input25" oninput="inputM5()" placeholder="味方2のmp" value="50">最大攻撃力<input id="input24" oninput="inputM5()" placeholder="味方2の最大攻撃力" value="20"></div><div id="frienddiv3"><form><p>味方3の画像</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview6(this);"></form>名前<input id="input27" oninput="inputM6()" placeholder="味方3の名前" value="味方3">HP<input id="input26" oninput="inputM6()" placeholder="味方3のhp" value="100">MP<input id="input32" oninput="inputM6()" placeholder="味方3のmp" value="50">最大攻撃力<input id="input33" oninput="inputM6()" placeholder="味方3の最大攻撃力" value="20"></div><div id="frienddiv4"><form><p>味方4の画像</p><input type="file" accept="image/*" multiple=" multiple" onchange="preview7(this);"></form>名前<input id="input28" oninput="inputM7()" placeholder="味方4の名前" value="味方4">HP<input id="input29" oninput="inputM7()" placeholder="味方4のhp" value="100">MP<input id="input30" oninput="inputM7()" placeholder="味方4のmp" value="50">最大攻撃力<input id="input31" oninput="inputM7()" placeholder="味方4の最大攻撃力" value="20"></div></div><div id="editSystem">BGM<input id="34" type="file" accept="audio/*" oninput="preview8(this)"><p>背景<input id="in34" type="file" accept="image/*" oninput="Cback(this)"></p><a id="btn" download="sample.zip">すべてのデータをダウンロード</a></div><div id="friendSkill">スキル名<input id="in1" value="スキル1" oninput="inputM8()"><select id="kouka" onchange="inputM8()"><option value="敵1体にこうげき">敵1体にこうげき</option><option value="回復">回復</option><option value="HP吸収">HP吸収</option><option value="味方の攻撃力アップ">味方の攻撃力アップ</option><option value="敵の攻撃力ダウン">敵の攻撃力ダウン</option></select>最小効力<input id="in2" value="20" oninput="inputM8()">最大効力<input id="in4" value="20" oninput="inputM8()"><p>演出<select id="direction" onchange="inputM8()"><option value="なし">なし</option><option value="あり">あり</option></select><input id="in3" type="file" accept="image/*" oninput="preview9(this)"></p>消費MP<input id="in5" value="5" oninput="inputM8()"></div></div>');

document.getElementById('in3').style.display = 'none';
var UIv = true;
function inputM (){
enemyName[0] = document.getElementById('input1').value;
document.getElementById('enemy1').style.width = document.getElementById('input4').value;
document.getElementById('enemy1').style.top = document.getElementById('input5').value;
document.getElementById('enemy1').style.left = document.getElementById('input7').value;
enemyHp[0] = document.getElementById('input17').value;
enemyAttack[0] = document.getElementById('input37').value;
    }

function inputM2 (){
enemyName[1] = document.getElementById('input2').value;
document.getElementById('enemy2').style.width = document.getElementById('input8').value;
document.getElementById('enemy2').style.top = document.getElementById('input9').value;
document.getElementById('enemy2').style.left = document.getElementById('input10').value;
enemyHp[1] = document.getElementById('input16').value;
enemyAttack[1] = document.getElementById('input36').value;
    }
function inputM3 (){
enemyName[2] = document.getElementById('input11').value;
document.getElementById('enemy3').style.width = document.getElementById('input12').value;
document.getElementById('enemy3').style.top = document.getElementById('input13').value;
document.getElementById('enemy3').style.left = document.getElementById('input14').value;
enemyHp[2] = document.getElementById('input15').value;
enemyAttack[2] = document.getElementById('input35').value;
    }

function inputM4 (){
friend[0] = document.getElementById('input18').value;
friendHp[0] = document.getElementById('input19').value;
friendMp[0] = document.getElementById('input20').value;
friendHb[0] = document.getElementById('input19').value;
friendMb[0] = document.getElementById('input20').value;
friendAttack[0] = document.getElementById('input21').value;
document.getElementById("friendName").innerText = friend[0];
    }

function inputM5 (){
friend[1] = document.getElementById('input22').value;
friendHp[1] = document.getElementById('input23').value;
friendMp[1] = document.getElementById('input25').value;
friendHb[1] = document.getElementById('input23').value;
friendMb[1] = document.getElementById('input25').value;
friendAttack[1] = document.getElementById('input24').value;
document.getElementById("friendName2").innerText = friend[1];
    }
function inputM6 (){
friend[2] = document.getElementById('input27').value;
friendHp[2] = document.getElementById('input26').value;
friendMp[2] = document.getElementById('input32').value;
friendHb[2] = document.getElementById('input26').value;
friendMb[2] = document.getElementById('input32').value;
friendAttack[2] = document.getElementById('input33').value;
document.getElementById("friendName3").innerText = friend[2];
    }
function inputM7 (){
friend[3] = document.getElementById('input28').value;
friendHp[3] = document.getElementById('input29').value;
friendMp[3] = document.getElementById('input30').value;
friendHb[3] = document.getElementById('input29').value;
friendMb[3] = document.getElementById('input30').value;
friendAttack[3] = document.getElementById('input31').value;
document.getElementById("friendName4").innerText = friend[3];
    }
function inputM8 (){
skillIntro[0] = document.getElementById('in1').value;
skillEffect[0] = document.getElementById('kouka').value;
skillMp[0] = document.getElementById('in5').value;
skillEffectL = document.getElementById('in2').value;
skillEffectB = document.getElementById('in4').value;
skillE[0] = document.getElementById('kouka').value + "消費mp" + skillMp[0];
if(document.getElementById('direction').value === "なし"){
document.getElementById('in3').style.display = 'none';
}else{
document.getElementById('in3').style.display = 'block';
}
    }

function Cene8() {
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editEnemy').style.display = 'none';
document.getElementById('editSystem').style.display = 'block';
document.getElementById('friendSkill').style.display = 'none';
}

function Cene9() {
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editEnemy').style.display = 'none';
document.getElementById('editSystem').style.display = 'none';
document.getElementById('friendSkill').style.display = 'block';
}

function Cene() {
if(Cenemy > 1) {
Cenemy -= 1;
document.getElementById('Menemy').innerText = Cenemy;
if(Cenemy === 2){
document.getElementById( enemyId[2] ).style.display = 'none';
aiful = 2;
enemyName.splice( aiful,1 );
enemyHp.splice( aiful,1 );
enemyId.splice( aiful,1 );
document.getElementById('enemydiv3').style.display = 'none';
}
if(Cenemy === 1){
document.getElementById( enemyId[1] ).style.display = 'none';
aiful = 1;
enemyName.splice( aiful,1 );
enemyHp.splice( aiful,1 );
enemyId.splice( aiful,1 );
document.getElementById('enemydiv2').style.display = 'none';
}
}
}

function Cene2() {
if(Cenemy < 3) {
Cenemy += 1;
document.getElementById('Menemy').innerText = Cenemy;
if(Cenemy === 2){
aiful = 1;
enemyName.splice( aiful,0,"enemy2" );
enemyHp.splice( aiful,0,100 );
enemyId.splice( aiful,0,"enemy2" );
document.getElementById( enemyId[1] ).style.display = 'block';
document.getElementById('enemydiv2').style.display = 'block';
}
if(Cenemy === 3){
aiful = 2;
enemyName.splice( aiful,0,"enemy3" );
enemyHp.splice( aiful,0,100 );
enemyId.splice( aiful,0,"enemy3" );
document.getElementById( enemyId[1] ).style.display = 'block';
document.getElementById( enemyId[2] ).style.display = 'block';
document.getElementById('enemydiv3').style.display = 'block';
}
}
}
var form = document.forms.myform;
var EditT = "enemy";
var file = null

var uri  = null

let key = 0;
        function preview(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    document.getElementById('enemy1').src = e.target.result;
enemyIc[0] = e.target.result;
  const zip = new JSZip();
  const folder = zip.folder("images");
  const files = document.getElementById('fileInput').files;
      const blob5 = event.target.result;
      const imageName = `image${index + 1}.${file.name.split('.').pop()}`;
      folder.file(imageName, blob5, { type: file.type });
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview2(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    document.getElementById('enemy2').src = e.target.result;
enemyIc[1] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview3(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    document.getElementById('enemy3').src = e.target.result;
enemyIc[2] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview4(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    crI[0] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview5(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    crI[1] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview6(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    crI[2] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview7(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    crI[3] = e.target.result;
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
        function preview9(obj) {
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {

                });
                fileReader.readAsDataURL(obj.files[i]);
            }
        }
document.getElementById('friendSkill').style.display = 'none';

function Cene4() {
document.getElementById('editEnemy').style.display = 'none';
document.getElementById('editSystem').style.display = 'none';
document.getElementById('editFriend').style.display = 'block';
document.getElementById('friendSkill').style.display = 'none';
}
function Cene3() {
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editEnemy').style.display = 'block';
document.getElementById('editSystem').style.display = 'none';
document.getElementById('friendSkill').style.display = 'none';
}

function Cene5() {
if(Cfriend > 1) {
Cfriend -= 1;
document.getElementById('Menemy2').innerText = Cfriend;
if(Cfriend < 4)document.getElementById( 'hpmpUI4' ).style.display = 'none';
if(Cfriend < 3)document.getElementById( 'hpmpUI3' ).style.display = 'none';
if(Cfriend < 2)document.getElementById( 'hpmpUI2' ).style.display = 'none';
if(Cfriend < 4)document.getElementById( 'frienddiv4' ).style.display = 'none';
if(Cfriend < 3)document.getElementById( 'frienddiv3' ).style.display = 'none';
if(Cfriend < 2)document.getElementById( 'frienddiv2' ).style.display = 'none';
}
}
function Cene6() {
if(Cfriend < 4) {
Cfriend += 1;
document.getElementById('Menemy2').innerText = Cfriend;
if(Cfriend > 3)document.getElementById( 'hpmpUI4' ).style.display = 'block';
if(Cfriend > 2)document.getElementById( 'hpmpUI3' ).style.display = 'block';
if(Cfriend > 1)document.getElementById( 'hpmpUI2' ).style.display = 'block';
if(Cfriend > 3)document.getElementById( 'frienddiv4' ).style.display = 'block';
if(Cfriend > 2)document.getElementById( 'frienddiv3' ).style.display = 'block';
if(Cfriend > 1)document.getElementById( 'frienddiv2' ).style.display = 'block';
}
}

function Cback(obj) {
    let fileReader = new FileReader(); 

    fileReader.onload = function(e) {

        document.body.style.backgroundImage = `url(${e.target.result})`;

        bgmT[1] = obj.files[0].name;
    };

    fileReader.readAsDataURL(obj.files[0]);
}

function Cene7() {
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editEnemy').style.display = 'block';
}
document.getElementById('editFriend').style.display = 'none';
document.getElementById('editSystem').style.display = 'none';
document.getElementById('Menemy').innerText = Cenemy;
document.getElementById('Menemy2').innerText = Cfriend;
document.getElementById('editEnemy').style.display = 'none';
document.getElementById('editEnemy').style.display = 'block';
if(Cfriend < 4)document.getElementById( 'frienddiv4' ).style.display = 'none';
if(Cfriend < 3)document.getElementById( 'frienddiv3' ).style.display = 'none';

var n6key = false;

function n6keyF (){
var key_code = event.keyCode;
if(key_code === 16)n6key = false;
}

function UIview () {
var key_code = event.keyCode;
if(key_code === 65)alert(Cfriend);
if(key_code === 16)n6key = true;
if((key_code === 49)&&(n6key === true)) {
if(UIv === false) {
document.getElementById('editUI').style.display = 'block';
UIv = true;
}else {
document.getElementById('editUI').style.display = 'none';
UIv = false;
}
}
}

const btn = document.getElementById('btn');
btn.addEventListener("click", function() {
const blob3 = `
enemyName = [${document.getElementById('input1').value}, ${document.getElementById('input2').value}, ${document.getElementById('input11').value}, null, null, null];
enemyHp = [${document.getElementById('input17').value}, ${document.getElementById('input16').value}, ${document.getElementById('input15').value}, null, null, null];
enemyId = ["enemy1", "enemy2", "enemy3", null];
enemyIc = [${enemyIc[0]}, ${enemyIc[1]}, ${enemyIc[2]}, null];
friend = [${document.getElementById('input18').value}, ${document.getElementById('input22').value}, ${document.getElementById('input27').value}, ${document.getElementById('input28').value}];

friendHp = [${document.getElementById('input19').value}, ${document.getElementById('input25').value}, ${document.getElementById('input29').value}, ${document.getElementById('input33').value}];

friendMp = [${document.getElementById('input20').value}, ${document.getElementById('input26').value}, ${document.getElementById('input30').value}, ${document.getElementById('input32').value}];

friendHb = [${document.getElementById('input19').value}, ${document.getElementById('input25').value}, ${document.getElementById('input29').value}, ${document.getElementById('input33').value}];

friendMb = [${document.getElementById('input20').value}, ${document.getElementById('input26').value}, ${document.getElementById('input30').value}, ${document.getElementById('input32').value}];

crI = [${crI[0]}, ${crI[1]}, ${crI[2]}, ${crI[3]}];
attackE = 0;
Cfriend = ${Cfriend};
Cenemy = ${Cenemy};
friendAttack = [${document.getElementById('input21').value}, ${document.getElementById('input24').value}, null, null];
enemyAttack = [${document.getElementById('input37').value}, ${document.getElementById('input36').value}, ${document.getElementById('input31').value},];

if (Cenemy < 3) {
    document.getElementById("enemy3").style.display = 'none';
    aiful = 2;
    enemyName.splice(aiful, 1);
    enemyHp.splice(aiful, 1);
    enemyId.splice(aiful, 1);
}
if (Cenemy < 2) {
    document.getElementById("enemy2").style.display = 'none';
    aiful = 1;
    enemyName.splice(aiful, 2);
    enemyHp.splice(aiful, 2);
    enemyId.splice(aiful, 2);
    document.getElementById("enemy3").style.display = 'none';
}
if (Cfriend > 3) document.getElementById('hpmpUI4').style.display = 'block';
if (Cfriend < 4) document.getElementById('hpmpUI4').style.display = 'none';
if (Cfriend > 2) document.getElementById('hpmpUI3').style.display = 'block';
if (Cfriend < 3) document.getElementById('hpmpUI3').style.display = 'none';
if (Cfriend > 1) document.getElementById('hpmpUI2').style.display = 'block';
if (Cfriend < 2) document.getElementById('hpmpUI2').style.display = 'none';

document.getElementById("enemy1").style.left = ${document.getElementById('input7').value};
document.getElementById("enemy2").style.left = ${document.getElementById('input10').value};
document.getElementById("enemy3").style.left = ${document.getElementById('input14').value};
document.getElementById("enemy1").style.top = ${document.getElementById('input5').value};
document.getElementById("enemy2").style.top = ${document.getElementById('input9').value};
document.getElementById("enemy3").style.top = ${document.getElementById('input13').value};
document.getElementById("enemy1").style.width = ${document.getElementById('input4').value};
document.getElementById("enemy2").style.width = ${document.getElementById('input8').value};
document.getElementById("enemy3").style.width = ${document.getElementById('input12').value};
document.getElementById("enemy1").src = ${enemyIc[0]};
document.getElementById("enemy2").src = ${enemyIc[1]};
document.getElementById("enemy3").src = ${enemyIc[2]};
document.getElementById("bgmT").src = ${bgmT[0]};
document.body.style.backgroundImage = \`url(\${bgmT[1]})\`;
document.getElementById('friendName').innerText = ${friend[0]};
document.getElementById('friendName2').innerText = ${friend[1]};
document.getElementById('friendName3').innerText = ${friend[2]};
document.getElementById('friendName4').innerText = ${friend[3]};
`;

const blob4 = `<html>
<head>
    <style>
#editUI {
color: #FFF;
position: absolute;
z-index: 20;
background-color:rgba(0,0,0,0.5);
}
.typing-animation::after {
  content: '';
  border-right: 1px solid #333;
  margin-left: 2px;
  animation: flashing 1s linear infinite;
  opacity: 0;
}

@keyframes flashing {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

#area {
display: block;
	  color: #FFF;
	position: absolute;
	top: 0;
	left: 0;
    font-size: 30;
    background-color:rgba(0,0,0,0.5);
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;
}
#select {
	  color: white;
	position: absolute;
	top: 500;
	left: 600;
    font-size: 30;
    background-color:rgba(0,0,0,0.5);
}
#select2 {
	  color: #FFF;
	position: absolute;
	top: 550;
	left: 600;
    font-size: 30;
    background-color:rgba(0,0,0,0.5);
}
#select3 {
	  color: #FFF;
	position: absolute;
	top: 600;
	left: 600;
    font-size: 30;
    background-color:rgba(0,0,0,0.5);
}
#hpmpUI {
    	position: absolute;
    top: 400;
	left: 0;
    }
#square {
        background-color:rgba(0,0,255,0.5);
    width: 200px;
    height: 200px;
    	position: absolute;
    top: 70;
	left: 10;
}
#square-boder {
    width: 199px;
    height: 199px;
    	position: absolute;
    top: 70;
	left: 10;
  border: 1px solid #000;
}
#square2 {
    background-color:rgba(255,0,0,0.5);
    width: 200px;
    height: 200px;
    	position: absolute;
    top: 70;
	left: 10;
}
html, body {
    overflow: hidden;
}
 #triangle {
     width: 0;
         	position: absolute;
    top: 0;
	left: 0;
     height: 0;
     border-top: 20px solid transparent;
     border-right: 40px solid lightblue;
     transform: scale(-0.7, 0.7);
     border-bottom: 20px solid transparent;
 }
 #triangleD {
     width: 0;
         	position: absolute;
    top: 0;
	left: 0;
     height: 0;
     border-top: 10px solid transparent;
     border-right: 20px solid white;
     transform: scale(-0.2, 0.2);
     border-bottom: 10px solid transparent;
transform:rotate(-90deg); 
 }
 #triangleU {
     width: 0;
         	position: absolute;
    top: 0;
	left: 0;
     height: 0;
     border-top: 10px solid transparent;
     border-right: 20px solid white;
     transform: scale(-0.2, 0.2);
     border-bottom: 10px solid transparent;
transform:rotate(90deg); 
 }
#hp {
    	position: absolute;
    top: 100;
	left: 20;
}
#mp {
    	position: absolute;
    top: 120;
	left: 20;
}
#hp2 {
    	position: absolute;
    top: 100;
	left: 20;
}
#mp2 {
    	position: absolute;
    top: 120;
	left: 20;
}
#hp3 {
    	position: absolute;
    top: 100;
	left: 20;
}
#mp3 {
    	position: absolute;
    top: 120;
	left: 20;
}
#hp4 {
    	position: absolute;
    top: 100;
	left: 20;
}
#mp4 {
    	position: absolute;
    top: 120;
	left: 20;
}
#hpmpUI2 {
    	position: absolute;
    top: 400;
	left: 1300;
    }
#hpmpUI4 {
    	position: absolute;
    top: 0;
	left: 1300;
    }
#hpmpUI3 {
    	position: absolute;
    top: 0;
	left: 0;
    }
#square3 {
        background-color:rgba(0,0,255,0.5);
    width: 200px;
    height: 200px;
    	position: absolute;
    top: 70;
	left: 10;
}
#square-boder2 {
    width: 199px;
    height: 199px;
    	position: absolute;
    top: 70;
	left: 10;
  border: 1px solid #000;
}
#square4 {
    background-color:rgba(255,0,0,0.5);
    width: 200px;
    height: 200px;
    	position: absolute;
    top: 70;
	left: 10;
}
#square5 {
        background-color:rgba(0,0,255,0.5);
    width: 200px;
    height: 200px;
    	position: absolute;
    top: 70;
	left: 10;
}
#square-boder3 {
    width: 199px;
    height: 199px;
    	position: absolute;
    top: 70;
	left: 10;
  border: 1px solid #000;
}
#square6 {
    background-color:rgba(255,0,0,0.5);
    width: 200px;
    height: 200px;
    	position: absolute;
    top: 70;
	left: 10;
}
#square7 {
        background-color:rgba(0,0,255,0.5);
    width: 200px;
    height: 200px;
    	position: absolute;
    top: 70;
	left: 10;
}
#square-boder4 {
    width: 199px;
    height: 199px;
    	position: absolute;
    top: 70;
	left: 10;
  border: 1px solid #000;
}
#square8 {
    background-color:rgba(255,0,0,0.5);
    width: 200px;
    height: 200px;
    	position: absolute;
    top: 70;
	left: 10;
}
body {
  background-image: url("stage5.png");
  background-size: cover;
}
#enemy1 {
    	position: absolute;
    top: 250;
	left: 200;
}
#enemy2 {
    	position: absolute;
    top: 250;
	left: 600;
}
#fun {
    	position: absolute;
    top: 0;
	left: 500;
}
.blinking{
	-webkit-animation:blink 0.5s ease-in-out infinite alternate;
    -moz-animation:blink 0.5s ease-in-out infinite alternate;
    animation:blink 0.5s ease-in-out infinite alternate;
}
.blinking2{
	-webkit-animation:blink 0.2s ease-in-out;
    -moz-animation:blink 0.2s ease-in-out;
    animation:blink 0.2s ease-in-out;
animation-iteration-count: 2;
}
@-webkit-keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
}
@-moz-keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
}
@keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
}
#friendName {
position: absolute;
top: 80;
left: 20;
}
#friendName2 {
position: absolute;
top: 80;
left: 20;
}
#friendName3 {
position: absolute;
top: 80;
left: 20;
}
#friendName4 {
position: absolute;
top: 80;
left: 20;
}
#cr {
position: absolute;
top: 450;
left: 300;
width: 200;
display: none;
}
#enemy3 {
    	position: absolute;
    top: 250;
	left: 1000;
}
#uhuu {
display: none;
}
#uhu {
display: none;
}
    </style>
</head>
<audio id="bgmT" src="dorakue9.m4a"></audio>
<OBJECT ID="uhuu" DATA="sample.txt" TYPE="text/plain" WIDTH="100%" HEIGHT="100%"></OBJECT><div id="uhu"></div>
<img id="enemy1" class="op1" src="Slime_JE1.png"> <img class="op1" id="enemy2" src="Slime_JE1.png"><img class="op1" id="enemy3" src="Slime_JE1.png">
<img id="cr" src="black.png">
<div id="hpmpUI">
<div id="square"></div><div id="square-boder"></div>
<div id="square2"></div>
<div id="friendName">takashi</div>
<div id="hp">HP:200</div>
<div id="mp">MP:100</div>
</div>
<div id="hpmpUI2">
<div id="square3"></div><div id="square-boder2"></div>
<div id="square4"></div>
<div id="friendName2">hana</div>
<div id="hp2">HP:200</div>
<div id="mp2">MP:100</div>
</div>
<div id="hpmpUI3">
<div id="square5"></div><div id="square-boder3"></div>
<div id="square6"></div>
<div id="friendName3">bob</div>
<div id="hp3">HP:200</div>
<div id="mp3">MP:100</div>
</div>
<div id="hpmpUI4">
<div id="square7"></div><div id="square-boder4"></div>
<div id="square8"></div>
<div id="friendName4">uh</div>
<div id="hp4">HP:200</div>
<div id="mp4">MP:100</div>  <pre id="fileContent"></pre>
</div>
<div id="triangle"></div><div class="blinking" id="triangleD"></div><div class="blinking"  id="triangleU"></div>
<div id="fun">MP:100</div>
<div id="select">こうげき</div><div id="select2">スキル</div><div id="select3">アイテム</div>
<form name="myform"><input id="tubuY" name="myfile" type="file" />
<div id="area" class="typing-animation"></div>
<p>zキーで決定、xキーでキャンセル</p>
<script>
var friendAttack = [20,20,20,20];
var enemyAttack = [20,20,20,20];
var selectfun = 0;
var skillIntro = ["スキル1","スキル2","スキル3","スキル4","スキル5","スキル6",null];
var skillE = ["消a","消費mp:5","消費mp:5","消費mp:5","消費mp:5","消費mp:5",null];
var skillEffect = ["HP吸収","回復","敵の攻撃力ダウン","こうげき","味方の攻撃力アップ","消費mp:5",null];
var skillMp = [5,5,5,5,5,5,null];
var skillEffectL = [0,0,0,0];
var skillEffectB = [20,20,20,20];

var skillIntro2 = ["スキル7","スキル8","スキル9","スキル10","スキル11","スキル12",null];
var skillE2 = ["消費mp:5","消費mp:5","消費mp:5","消費mp:5","消費mp:5","スマホ取り上げ　mp:5",null];
var skillEffect2 = ["こうげき","回復","HP吸収","敵の攻撃力ダウン","味方の攻撃力アップ","消費mp:5",null];
var skillMp2 = [5,5,5,5,5,5,null];
var skillEffectL2 = [0,0,0,0];
var skillEffectB2 = [20,20,20,20];

var skillIntro3 = ["スキル13","スキル14","スキル15","スキル16","スキル17","スキル18",null];
var skillE3 = ["消費mp:5","消費mp:5","消費mp:5","消費mp:5","消費mp:5","消費mp:5",null];
var skillEffect3 = ["こうげき","回復","HP吸収","敵の攻撃力ダウン","味方の攻撃力アップ","消費mp:5",null];
var skillMp3 = [5,5,5,5,5,5,null];
var skillEffectL3 = [0,0,0,0];
var skillEffectB3 = [20,20,20,20];

var skillIntro4 = ["スキル19","スキル20","スキル21","スキル22","スキル23","スキル24",null];
var skillE4 = ["消費mp:5","消費mp:5","消費mp:5","消費mp:5","消費mp:5","消費mp:5",null];
var skillEffect4 = ["こうげき","回復","HP吸収","敵の攻撃力ダウン","味方の攻撃力アップ","消費mp:5",null];
var skillMp4 = [5,5,5,5,5,5,null];
var skillEffectL4 = [0,0,0,0];
var skillEffectB4 = [20,20,20,20];
var itemIntro = ["アイテム1","アイテム2","アイテム3","アイテム4","アイテム5","アイテム6",null];
var itemN = [3,3,2,3,3,3,null];
var itemE = ["hpを回復","mp回復","敵1体に攻撃","効果なし","効果なし","効果なし",null];
var target = ["","","",""]
var decide = 0;
var nowtext = 0;
var array = ["敵が現れた","どうする?","どうする?","行動した","たかしは","ゲームオーバー","勝利した"];
var enemyName = ["スライム","スライム2","スライム3",null,null,null];
var enemyHp = [100,100,100,null,null,null];
var enemyId = ["enemy1","enemy2","enemy3",null];
var y1 = 500;
var selectOver = 1;
var attaker = 0; var sc = false;
var action = [null,null,null,null];
var friend = ["takashi","hana","bob","uh"];
var friendHp = [100,100,100,100];
var friendMp = [50,50,50,50];
var friendHb = [100,100,100,100];
var friendMb = [50,50,50,50];
var crI = ["face.png","smile_woman.png","black.png","目.png"];
var enemyIc = ["Slime_JE1.png","Slime_JE1.png","Slime_JE1.png",null];
var attackE = 0;
var fun = 0;
var random = Math.floor( Math.random() * 31 ) + 0;
var random2 = Math.floor( Math.random() * Cfriend ) + 0;
var Cfriend = 2;
var Cenemy = 3;
var aiful = 0;
var aiOver = 0;
var bgm = false;
var skillEffectL = [0,0,0,0];
var skillEffectB = [20,20,20,20];
var form = document.forms.myform;
ww();


addEventListener('keydown', () => {
if(bgm === false) {
const audio = document.getElementById("bgmT");
audio.play();
audio.volume = 1;
audio.loop = true;
bgm = true;
}
});

document.getElementById("enemy1").src = enemyIc[0];
document.getElementById("enemy2").src = enemyIc[1];
document.getElementById("enemy3").src = enemyIc[2];

function preview8(obj) {
const audio = document.getElementById("bgmT");
audio.pause();
            for (i = 0; i < obj.files.length; i++) {
                let fileReader = new FileReader();
                fileReader.onload = ((e)=> {
                    audio.src = e.target.result;
bgmD = e.target.result;
audio.play();
                document.getElementById('editUI').innerHTML += "<a href=" + e.target.result + " download >ダウンロード</a>";
                });
                fileReader.readAsDataURL(obj.files[i]);
            }
}


function damageE() {
const image = document.getElementById(enemyId[enemyName.indexOf(action[attaker])]);
const image2 = document.getElementById(enemyId[enemyName.indexOf(target[attaker])]);
if(enemyName.includes(action[attaker]) === true){
image.animate(

	[
		{ opacity: 1 },
		{ opacity: 0 }
	],
	{
		duration: 100,
		easing: 'linear',
		iterations: 4,
		direction: 'alternate'
	},
);
}else{
if((itemIntro.includes(action[attaker]) === true)||(skillIntro.includes(action[attaker]) === true)||(skillIntro2.includes(action[attaker]) === true)||(skillIntro3.includes(action[attaker]) === true)||(skillIntro4.includes(action[attaker]) === true)){
image2.animate(

	[
		{ opacity: 1 },
		{ opacity: 0 }
	],
	{
		duration: 100,
		easing: 'linear',
		iterations: 4,
		direction: 'alternate'
	},
);
}else{
const image = document.getElementById(enemyId[0]);
image.animate(

	[
		{ opacity: 1 },
		{ opacity: 0 }
	],
	{
		duration: 100,
		easing: 'linear',
		iterations: 4,
		direction: 'alternate'
	},
);
}
}
}

function damageEa() {
damageE();
enemyHp[target[attaker]] -= random;
if(enemyHp[target[attaker]] < 1){
    Cenemy -= 1;
if(Cenemy < 1)fun = 2;
document.getElementById( enemyId[enemyName.indexOf(target[attaker])] ).style.display = 'none';
aiful = enemyName.indexOf(action[attaker]);
enemyName.splice( aiful,1 );
enemyHp.splice( aiful,1 );
enemyId.splice( aiful,1 );
    }
}
function carsol() {
document.getElementById("fun").innerText = attaker;
if (typeof datas !== 'undefined'){
document.getElementById("enemy1").style.left = datas[4];
document.getElementById("enemy2").style.left = datas[7];
document.getElementById("enemy3").style.left = datas[11];
document.getElementById("enemy1").style.top = datas[3];
document.getElementById("enemy2").style.top = datas[6];
document.getElementById("enemy3").style.top = datas[10];
document.getElementById("enemy1").style.width = datas[2];
document.getElementById("enemy2").style.width = datas[5];
document.getElementById("enemy3").style.width = datas[9];
}
if(selectfun === 1)document.getElementById( 'cr' ).style.display = 'block';
if(document.getElementById("area").innerText.includes(friend[3]) === true)document.getElementById( 'cr' ).src = crI[3];
if(document.getElementById("area").innerText.includes(friend[2]) === true)document.getElementById( 'cr' ).src = crI[2];
if(document.getElementById("area").innerText.includes(friend[1]) === true)document.getElementById( 'cr' ).src = crI[1];
if(document.getElementById("area").innerText.includes(friend[0]) === true)document.getElementById( 'cr' ).src = crI[0];

document.getElementById("hp").innerText = "HP:" + friendHp[0];
document.getElementById("mp").innerText = "MP:" + friendMp[0];
document.getElementById("hp2").innerText = "HP:" + friendHp[1];
document.getElementById("mp2").innerText = "MP:" + friendMp[1];
document.getElementById("hp3").innerText = "HP:" + friendHp[2];
document.getElementById("mp3").innerText = "MP:" + friendMp[2];
document.getElementById("hp4").innerText = "HP:" + friendHp[3];
document.getElementById("mp4").innerText = "MP:" + friendMp[3];

document.getElementById( 'square2' ).style.width = 200/friendHb[0]*friendHp[0];
document.getElementById( 'square2' ).style.height = 200/friendHb[0]*friendHp[0];
document.getElementById( 'square4' ).style.width = 200/friendHb[1]*friendHp[1];
document.getElementById( 'square4' ).style.height = 200/friendHb[1]*friendHp[1];
document.getElementById( 'square6' ).style.width = 200/friendHb[2]*friendHp[2];
document.getElementById( 'square6' ).style.height = 200/friendHb[2]*friendHp[2];
document.getElementById( 'square8' ).style.width = 200/friendHb[3]*friendHp[3];
document.getElementById( 'square8' ).style.height = 200/friendHb[3]*friendHp[3];

document.getElementById( 'square5' ).style.height = 200/friendMb[0]*friendMp[0];
document.getElementById( 'square5' ).style.width = 200/friendMb[0]*friendMp[0];
document.getElementById( 'square' ).style.width = 200/friendMb[1]*friendMp[1];
document.getElementById( 'square' ).style.height = 200/friendMb[1]*friendMp[1];
document.getElementById( 'square3' ).style.width = 200/friendMb[2]*friendMp[2];
document.getElementById( 'square3' ).style.height = 200/friendMb[2]*friendMp[2];
document.getElementById( 'square7' ).style.width = 200/friendMb[3]*friendMp[3];
document.getElementById( 'square7' ).style.height = 200/friendMb[3]*friendMp[3];

if(aiOver < 4){
aiOver += 1;
}else{
aiOver = 0;
}

if(friendHp[aiOver] < 1)friendHp[aiOver] = 0;
if(friendMp[aiOver] < 1)friendMp[aiOver] = 0;
if(friendHp[aiOver] > friendHb[aiOver])friendHp[aiOver] = friendHb[aiOver];
if(friendMp[aiOver] > friendMb[aiOver])friendMp[aiOver] = friendMb[aiOver];

if((selectfun === 3)&&(attaker === 0))document.getElementById("area").innerText = skillE[decide];
if((selectfun === 3)&&(attaker === 1))document.getElementById("area").innerText = skillE2[decide];
if((selectfun === 3)&&(attaker === 2))document.getElementById("area").innerText = skillE3[decide];
if((selectfun === 3)&&(attaker === 3))document.getElementById("area").innerText = skillE4[decide];
if(selectfun === 4)document.getElementById("area").innerText = itemE[decide] + " 残り" + itemN[decide] + "個";
}

let intervalI = setInterval(carsol, 1);

if(Cfriend > 3)document.getElementById( 'hpmpUI4' ).style.display = 'block';
if(Cfriend < 4)document.getElementById( 'hpmpUI4' ).style.display = 'none';
if(Cfriend > 2)document.getElementById( 'hpmpUI3' ).style.display = 'block';
if(Cfriend < 3)document.getElementById( 'hpmpUI3' ).style.display = 'none';
if(Cfriend > 1)document.getElementById( 'hpmpUI2' ).style.display = 'block';
if(Cfriend < 2)document.getElementById( 'hpmpUI2' ).style.display = 'none';
document.getElementById( 'triangleU' ).style.top = 470;
document.getElementById( 'triangleU' ).style.left = 650;
document.getElementById( 'triangleD' ).style.top = 650;
document.getElementById( 'triangleD' ).style.left = 650;
document.getElementById( 'triangleU' ).style.display = 'none';
document.getElementById( 'triangleD' ).style.display = 'none';

addEventListener( "keydown", zx);
function zx() {
var key_code = event.keyCode;
  if (key_code === 65) {
alert(Cenemy);
  }
  if (key_code === 69)alert(enemyName[0]);
	if( key_code === 90 ) {
    if((selectfun === 4)||(selectfun === 3)){

}
document.getElementById( 'triangleU' ).style.display = 'none';
document.getElementById( 'triangleD' ).style.display = 'none';
if((fun === 1)&&(document.getElementById("area").innerText === array[nowtext])) {
document.getElementById( 'cr' ).style.display = 'none';
nowtext = 5;
nulltype();
}
if((fun === 2)&&(document.getElementById("area").innerText === array[nowtext])) {
document.getElementById( 'cr' ).style.display = 'none';
nowtext = 6;
nulltype();
}
if(fun === 0) {
if(sc === true) {

skillItemQTE();

if(sc === true) {
    if(selectfun === 2){
action[attaker] = enemyName[decide];

}
    if(selectfun === 4){
action[attaker] = itemIntro[decide];
decide = 0;
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
}
}
    if(selectfun === 2){
sc = false;         decide = 0;
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
if(attaker < Cfriend - 1){

attaker += 1;
    document.getElementById("select").innerText = "こうげき";
document.getElementById("select2").innerText = "スキル";
document.getElementById("select3").innerText = "アイテム";
    nowtext = 1;
aiful = 0;
for (let i = 0; i < 4; i++) {
if(friendHp[attaker] + aiful < 1){
aiful += 1;
}else{
array[1] = friend[attaker + aiful] + "はどうする?";
}
}
    nulltype();
    document.getElementById( 'area' ).style.top = 400;
    selectblock();
    selectfun = 1;
}else{
selectnone();
attaker = 0;
document.getElementById( 'area' ).style.top = 600;
nowtext = 3;
selectfun = 6;
attacker = 0;
trun();
document.getElementById( 'cr' ).style.display = 'none';
}
}
}
if(document.getElementById("area").innerText === array[nowtext]) {
    if(document.getElementById("area").innerText === array[0]) {
nowtext = 1;
    aiful = 0;
for (let i = 0; i < 4; i++) {
if(friendHp[attaker] + aiful < 1){
aiful += 1;
}else{
array[1] = friend[attaker + aiful] + "はどうする?";
}
}
    nulltype();
    document.getElementById( 'area' ).style.top = 400;
    selectblock();
    selectfun = 1;
    }
    if(selectfun === 1){
if(document.getElementById("area").innerText === array[1]) {
if(decide === 0) {
if(document.getElementById("area").innerText === array[nowtext])selectfun = 2;
        decide = 0;
 window.setTimeout(sct,100);
    document.getElementById("select").innerText = enemyName[0] + " hp:"+ enemyHp[0];
document.getElementById("select2").innerText = enemyName[1] + " hp:" + enemyHp[1];
document.getElementById("select3").innerText = enemyName[2] + " hp:" + enemyHp[2];
if(document.getElementById("select3").innerText.includes(null)) {
document.getElementById( 'select3' ).style.display = 'none'; 
    }
if(document.getElementById("select2").innerText.includes(null)) {
document.getElementById( 'select2' ).style.display = 'none'; 
    }
        }
if(decide === 1) {
    if(document.getElementById("area").innerText === array[nowtext])selectfun = 3;
        decide = 0;
 window.setTimeout(sct, 100);
        y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
if(selectfun === 3)document.getElementById("area").innerText = skillE[decide];
if(attaker === 0)  {
document.getElementById("select").innerText = skillIntro[0];
document.getElementById("select2").innerText = skillIntro[1];
document.getElementById("select3").innerText = skillIntro[2];
}
if(attaker === 1)  {
document.getElementById("select").innerText = skillIntro2[0];
document.getElementById("select2").innerText = skillIntro2[1];
document.getElementById("select3").innerText = skillIntro2[2];
}
if(attaker === 2)  {
document.getElementById("select").innerText = skillIntro3[0];
document.getElementById("select2").innerText = skillIntro3[1];
document.getElementById("select3").innerText = skillIntro3[2];
}
if(attaker === 3) {
document.getElementById("select").innerText = skillIntro4[0];
document.getElementById("select2").innerText = skillIntro4[1];
document.getElementById("select3").innerText = skillIntro4[2];
}
document.getElementById( 'triangleD' ).style.display = 'block';
        }
    if(decide === 2) {
    if(document.getElementById("area").innerText === array[nowtext])selectfun = 4;
 window.setTimeout(sct, 100);
        decide = 0;
        y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
if(selectfun === 4)document.getElementById("area").innerText = itemE[decide];
    document.getElementById("select").innerText = itemIntro[0];
document.getElementById("select2").innerText = itemIntro[1];
document.getElementById("select3").innerText = itemIntro[2];
document.getElementById( 'triangleD' ).style.display = 'block';
        }
        
        }
    }

if(selectfun === 7){
selectfun = 1;
selectnone();
attaker = 0;
document.getElementById( 'area' ).style.top = 400;
nowtext = 1;
aiful = 0;
for (let i = 0; i < 4; i++) {
if(friendHp[attaker] + aiful < 1){
aiful += 1;
}else{
array[1] = friend[attaker + aiful] + "はどうする?";
}
}
    document.getElementById("select").innerText = "こうげき";
document.getElementById("select2").innerText = "スキル";
document.getElementById("select3").innerText = "アイテム";
selectblock();
}
if(selectfun === 6){trun();} //攻撃反映、すでに攻撃対象がタヒんでいる場合
}
}
}
    if( key_code === 88 ) {
document.getElementById( 'triangleU' ).style.display = 'none';
document.getElementById( 'triangleD' ).style.display = 'none';
if((selectfun === 1)&&(attaker > 0)) {
attaker -= 1;
array[1] = friend[attaker] + "はどうする?";
nulltype();
}
    if((selectfun === 2)||(selectfun === 3)||(selectfun === 4)){
                    y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
        decide = 0;
    document.getElementById("select").innerText = "こうげき";
document.getElementById("select2").innerText = "スキル";
document.getElementById("select3").innerText = "アイテム";
    nowtext = 1;
aiful = 0;
for (let i = 0; i < 4; i++) {
if(friendHp[attaker] + aiful < 1){
aiful += 1;
}else{
array[1] = friend[attaker + aiful] + "はどうする?";
}
}
    nulltype();
    document.getElementById( 'area' ).style.top = 400;
    selectblock();
    selectfun = 1;
sc = false;
}
    }

}

function trun() {
if(attaker < Cfriend){
if(friendHp[attaker] < 1)attaker += 1;

if(enemyName.includes(action[attaker])=== true) {
random = Math.floor( Math.random() * friendAttack[attaker] + 1 ) + 0;
if((enemyHp[enemyName.indexOf(action[attaker])] < 1)||(enemyName[enemyName.indexOf(action[attaker])] === null)) {
action[attaker] = enemyName[0];
}
enemyHp[enemyName.indexOf(action[attaker])] -= random;
array[4] = friend[attaker] + "の攻撃\n" + action[attaker] + "に" + random + "ダメージ";
damageE();
if(enemyHp[enemyName.indexOf(action[attaker])] < 1){
    Cenemy -= 1;
if(Cenemy < 1)fun = 2;
aiful = enemyName.indexOf(action[attaker]);
document.getElementById( enemyId[aiful] ).style.display = 'none';
enemyName.splice( aiful,1 );
enemyHp.splice( aiful,1 );
enemyId.splice( aiful,1 );
    }
}else{
if((skillIntro.includes(action[attaker])===true)||(itemIntro.includes(action[attaker])===true)){
array[4] = friend[attaker] + "は" + action[attaker] + "を使った";
skillItem();

}else{
enemyHp[0] -= random;
array[4] = friend[attaker] + "の攻撃\n" + enemyName[0] + "に" + random + "ダメージ";
damageE();
}

}
attaker += 1;
nowtext = 4;
}else{
if(attackE < Cenemy){
random = Math.floor( Math.random() * enemyAttack[attackE] + 1 ) + 0;
random2 = Math.floor( Math.random() * Cfriend) + 0;
attackE += 1;
if(friendHp[random2] < 1){
if(friendHp[random2 +1] < Cfriend) {
random2 -= 1;
}else{
random2 += 1;
    }
}
if(attaker > Cfriend -1){
friendHp[random2] -= random; //ダメージをくらう
array[4] = enemyName[attackE - 1] + "は攻撃した\n" + friend[random2] + "に" + random + "ダメージ"; 
if(friendHp[random2] < 1)Cfriend -= 1;
if(Cfriend < 1) fun = 1;
    }
}else{
attackE = 0;
selectfun = 1;
selectnone();
attaker = 0;
document.getElementById( 'area' ).style.top = 400;
nowtext = 1;
aiful = 0;
for (let i = 0; i < 4; i++) {
if(friendHp[attaker] + aiful < 1){
aiful += 1;
}else{
array[1] = friend[attaker + aiful] + "はどうする?";
}
}
    document.getElementById("select").innerText = "こうげき";
document.getElementById("select2").innerText = "スキル";
document.getElementById("select3").innerText = "アイテム";
selectblock();
}
}
nulltype();

}


function nulltype() {
document.getElementById("area").innerText = null;
    type();
    }
    
function type () {
const typing = (el, sentence) => {
　　 
    [...sentence].forEach((char, index) => {
　　　
      setTimeout(() => {
        document.querySelector(el).textContent += char;
      }, 25 * ++index);
    });
 }

typing('.typing-animation', array[nowtext]);
    }

type();
 function b () {
var key_code = event.keyCode;

if(( key_code === 40 )&&((document.getElementById( 'select' ).innerText.includes(friend[0]) === true)||(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true))) {
if(decide === 3){
    if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
y1 += 50;
document.getElementById( 'triangle' ).style.top = y1; 
        decide += 1;
}
}
}
if(( key_code === 40 )&&(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)) {
if(decide < Cenemy -1){ 
    y1 += 50;
document.getElementById( 'triangle' ).style.top = y1; 
        decide += 1;
}
}
	if(( key_code === 40 )&&(document.getElementById( 'select' ).innerText.includes(friend[0]) === true)) {
if(decide < Cfriend - 1){ 
    y1 += 50;
document.getElementById( 'triangle' ).style.top = y1; 
        decide += 1;
}

        }
if(selectfun === 1) {
	if( key_code === 38 ) {
if(decide > 0) {
        y1 -= 50;
    document.getElementById( 'triangle' ).style.top = y1;
    decide -= 1;

    }
    }
	if( key_code === 40 ) {
if(y1 < 600){ 
if(skillIntro[decide + 1] === null){}else{
    if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
y1 += 50;
document.getElementById( 'triangle' ).style.top = y1; 
        decide += 1;
}
}
}
        }
    }
if(selectfun === 2) {
if( key_code === 38 ) {

if(decide > 0) {
y1 -= 50;
    document.getElementById( 'triangle' ).style.top = y1;
decide -= 1;
}
}
if( key_code === 40 ) {
if(enemyName[decide + 1] === null){}else{
if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
y1 += 50;
    document.getElementById( 'triangle' ).style.top = y1;
decide += 1;
}
}
}
}
if(selectfun === 3) {

	if( key_code === 38 ) {
if(decide > 0) {
if(y1 < 550) {
if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
document.getElementById( 'triangleU' ).style.display = 'none';
document.getElementById( 'triangleD' ).style.display = 'block';
        y1 = 600;
    document.getElementById( 'triangle' ).style.top = y1;
    decide -= 1;
if(attaker === 0)  {
document.getElementById("select3").innerText = skillIntro[decide];
document.getElementById("select2").innerText = skillIntro[decide - 1];
document.getElementById("select").innerText = skillIntro[decide - 2];
}
if(attaker === 1)  {
document.getElementById("select3").innerText = skillIntro2[decide];
document.getElementById("select2").innerText = skillIntro2[decide - 1];
document.getElementById("select").innerText = skillIntro2[decide - 2];
}
if(attaker === 2)  {
document.getElementById("select3").innerText = skillIntro3[decide];
document.getElementById("select2").innerText = skillIntro3[decide - 1];
document.getElementById("select").innerText = skillIntro3[decide - 2];
}
if(attaker === 3) {
document.getElementById("select3").innerText = skillIntro4[decide];
document.getElementById("select2").innerText = skillIntro4[decide - 1];
document.getElementById("select").innerText = skillIntro4[decide - 2];
}
}
    }else{
        y1 -= 50;
    document.getElementById( 'triangle' ).style.top = y1;
    decide -= 1;
    }
    }
        }
	if( key_code === 40 ) {
    if(decide === selectOver * 3 - 1) {
if((document.getElementById( 'select' ).innerText.includes(friend[0]) === true)||(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)){}else{

document.getElementById( 'triangleU' ).style.display = 'block';
document.getElementById( 'triangleD' ).style.display = 'none';
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
    decide += 1;
document.getElementById( 'triangle' ).style.top = 500;
if(attaker === 0)  {
document.getElementById("select").innerText = skillIntro[decide];
document.getElementById("select2").innerText = skillIntro[decide + 1];
document.getElementById("select3").innerText = skillIntro[decide + 2];
}
if(attaker === 1)  {
document.getElementById("select").innerText = skillIntro2[decide];
document.getElementById("select2").innerText = skillIntro2[decide + 1];
document.getElementById("select3").innerText = skillIntro2[decide + 2];
}
if(attaker === 2)  {
document.getElementById("select").innerText = skillIntro3[decide];
document.getElementById("select2").innerText = skillIntro3[decide + 1];
document.getElementById("select3").innerText = skillIntro3[decide + 2];
}
if(attaker === 3) {
document.getElementById("select").innerText = skillIntro4[decide];
document.getElementById("select2").innerText = skillIntro4[decide + 1];
document.getElementById("select3").innerText = skillIntro4[decide + 2];
}
}
        }else{
if((document.getElementById( 'select' ).innerText.includes(friend[0]) === true)||(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)){
if(skillIntro[decide + 1] === null){}else{
if(decide < Cfriend - 1){
if(skillIntro[decide + 1] === null){}else{
if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
    y1 += 50;
document.getElementById( 'triangle' ).style.top = y1; 
        decide += 1;
}
}
}
}
        }else{
if(itemIntro[decide + 1] === null){}else{
if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
    y1 += 50;
document.getElementById( 'triangle' ).style.top = y1; 
        decide += 1;
}
}
}
}   
    }
    }
if(selectfun === 4) { //itemselect
	if( key_code === 38 ) {
if(decide > 0) {
if(y1 < 550) {
if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
document.getElementById( 'triangleU' ).style.display = 'none';
document.getElementById( 'triangleD' ).style.display = 'block';
        y1 = 600;
    document.getElementById( 'triangle' ).style.top = y1;
    decide -= 1;
    document.getElementById("select").innerText = itemIntro[decide - 2];
document.getElementById("select2").innerText = itemIntro[decide - 1];
document.getElementById("select3").innerText = itemIntro[decide];
}
    }else{
        y1 -= 50;
    document.getElementById( 'triangle' ).style.top = y1;
    decide -= 1;
    }
}
    }
	if( key_code === 40 ) {
    if(decide === selectOver * 3 - 1) {
if((document.getElementById( 'select' ).innerText.includes(friend[0]) === true)||(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)){}else{
                y1 = 500;
document.getElementById( 'triangleU' ).style.display = 'block';
document.getElementById( 'triangleD' ).style.display = 'none';
    document.getElementById( 'triangle' ).style.top = y1;
    decide += 1;
document.getElementById( 'triangle' ).style.top = 500;
        document.getElementById("select").innerText = itemIntro[decide];
document.getElementById("select2").innerText = itemIntro[decide + 1];
document.getElementById("select3").innerText = itemIntro[decide + 2];
}
        }else{
if((document.getElementById( 'select' ).innerText.includes(friend[0]) === true)||(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)){
if(itemIntro[decide + 1] === null){}else{
if(decide < Cfriend - 1){
if(itemIntro[decide + 1] === null){}else{
if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
    y1 += 50;
document.getElementById( 'triangle' ).style.top = y1; 
        decide += 1;
}
}
}
}
        }else{
if(itemIntro[decide + 1] === null){}else{
if(!document.getElementById( 'select' ).innerText.includes(friend[0]) === true){
    y1 += 50;
document.getElementById( 'triangle' ).style.top = y1; 
        decide += 1;
}
}
}
}   
    }
}
}



function skillItemQTE () {
if(selectfun === 4) {
if((document.getElementById( 'select' ).innerText.includes(friend[0]) === true)||(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)){
if(document.getElementById( 'select' ).innerText.includes(friend[0]) === true)target[attaker] = friend[decide];
if(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)target[attaker] = enemyName[decide];
sc = false;         decide = 0;
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
if(attaker < Cfriend - 1){
attaker += 1;
    document.getElementById("select").innerText = "こうげき";
document.getElementById("select2").innerText = "スキル";
document.getElementById("select3").innerText = "アイテム";
    nowtext = 1;
aiful = 0;
for (let i = 0; i < 4; i++) {
if(friendHp[attaker] + aiful < 1){
aiful += 1;
}else{
array[1] = friend[attaker + aiful] + "はどうする?";
}
}
    nulltype();
    document.getElementById( 'area' ).style.top = 400;
    selectblock();
    selectfun = 1;
}else{
selectnone();
attaker = 0;
document.getElementById( 'area' ).style.top = 600;
nowtext = 3;
selectfun = 6;
attacker = 0;
trun();
}
}else{
if((itemIntro[decide] === "アイテム1")||(itemIntro[decide] === "アイテム2")){
aiful = 0;
document.getElementById("select").innerText = null;
for (let i = 0; aiful < Cfriend; i++) {
aiful += 1;
  document.getElementById( 'select' ).innerText += friend[aiful - 1] + "\n";
}
document.getElementById( 'select2' ).style.display = 'none'; 
document.getElementById( 'select3' ).style.display = 'none'; 
}else{
if(itemIntro[decide] === "アイテム3"){
y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
    document.getElementById("select").innerText = enemyName[0] + " hp:"+ enemyHp[0];
document.getElementById("select2").innerText = enemyName[1] + " hp:" + enemyHp[1];
document.getElementById("select3").innerText = enemyName[2] + " hp:" + enemyHp[2];
if(document.getElementById("select3").innerText.includes(null)) {
document.getElementById( 'select3' ).style.display = 'none'; 
    }
if(document.getElementById("select2").innerText.includes(null)) {
document.getElementById( 'select2' ).style.display = 'none'; 
    }
}else{
sc = false;         decide = 0;
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
if(attaker < Cfriend - 1){
attaker += 1;
aiful = 0;
for (let i = 0; i < 4; i++) {
if(friendHp[attaker] + aiful < 1){
aiful += 1;
}else{
array[1] = friend[attaker + aiful] + "はどうする?";
}
}
    document.getElementById("select").innerText = "こうげき";
document.getElementById("select2").innerText = "スキル";
document.getElementById("select3").innerText = "アイテム";
    nowtext = 1;
    nulltype();
    document.getElementById( 'area' ).style.top = 400;
    selectblock();
    selectfun = 1;
}else{
selectnone();
attaker = 0;
document.getElementById( 'area' ).style.top = 600;
nowtext = 3;
selectfun = 6;
attacker = 0;
trun();
}
}
}
}
}
if(selectfun === 3) {
if((document.getElementById( 'select' ).innerText.includes(friend[0]) === true)||(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)){
if(document.getElementById( 'select' ).innerText.includes(friend[0]) === true)target[attaker] = friend[decide];
if(document.getElementById( 'select' ).innerText.includes(enemyName[0]) === true)target[attaker] = enemyName[decide];
sc = false;         decide = 0;
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
if(attaker < Cfriend - 1){
attaker += 1;
array[1] = friend[attaker] + "はどうする?";
    document.getElementById("select").innerText = "こうげき";
document.getElementById("select2").innerText = "スキル";
document.getElementById("select3").innerText = "アイテム";
    nowtext = 1;
    nulltype();
    document.getElementById( 'area' ).style.top = 400;
    selectblock();
    selectfun = 1;
}else{
selectnone();
attaker = 0;
document.getElementById( 'area' ).style.top = 600;
nowtext = 3;
selectfun = 6;
attacker = 0;
trun();
}
}else{

if(skillIntro[decide] === "スキル2"){
if(friendMp[attaker] > 4) {
action[attaker] = skillIntro[decide];
decide = 0;
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
aiful = 0;
document.getElementById("select").innerText = null;
for (let i = 0; aiful < Cfriend; i++) {
aiful += 1;
  document.getElementById( 'select' ).innerText += friend[aiful - 1] + "\n";
}
document.getElementById( 'select2' ).style.display = 'none'; 
document.getElementById( 'select3' ).style.display = 'none'; 
}
}else{
if(skillIntro[decide] === "スキル4"){
if(friendMp[attaker] > 4) {
action[attaker] = skillIntro[decide];
decide = 0;
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
    document.getElementById("select").innerText = enemyName[0] + " hp:"+ enemyHp[0];
document.getElementById("select2").innerText = enemyName[1] + " hp:" + enemyHp[1];
document.getElementById("select3").innerText = enemyName[2] + " hp:" + enemyHp[2];
if(document.getElementById("select3").innerText.includes(null)) {
document.getElementById( 'select3' ).style.display = 'none'; 
    }
if(document.getElementById("select2").innerText.includes(null)) {
document.getElementById( 'select2' ).style.display = 'none'; 
    }
}
}else{
array[1] = friend[attaker] + "はどうする?";
sc = false;         decide = 0;
                y1 = 500;
    document.getElementById( 'triangle' ).style.top = y1;
if(attaker < Cfriend - 1){
attaker += 1;
    document.getElementById("select").innerText = "こうげき";
document.getElementById("select2").innerText = "スキル";
document.getElementById("select3").innerText = "アイテム";
    nowtext = 1;
array[1] = friend[attaker] + "はどうする?";
    nulltype();
    document.getElementById( 'area' ).style.top = 400;
    selectblock();
    selectfun = 1;
}else{
selectnone();
attaker = 0;
document.getElementById( 'area' ).style.top = 600;
nowtext = 3;
selectfun = 6;
attacker = 0;
trun();
}
}
}
}
}

}

function skillItem() {
if(action[attaker].includes("アイテム1")){ 
friendHp[friend.indexOf(target[attaker])] += 10;
itemN[itemIntro.indexOf(action[attaker])] -= 1;
array[4] += "\n" + target[attaker] + "のhpは10回復した";
if(itemN[itemIntro.indexOf(action[attaker])] < 1) {
aiful = itemIntro.indexOf(action[attaker]);
itemN.splice( aiful,1 );
itemIntro.splice( aiful,1 );
itemE.splice( aiful,1 );
}
}
if(action[attaker].includes("アイテム2")){ 
friendMp[friend.indexOf(target[attaker])] += 10;
itemN[itemIntro.indexOf(action[attaker])] -= 1;
array[4] += "\n" + target[attaker] + "のmpは10回復した";
if(itemN[itemIntro.indexOf(action[attaker])] < 1) {
aiful = itemIntro.indexOf(action[attaker]);
itemN.splice( aiful,1 );
itemIntro.splice( aiful,1 );
itemE.splice( aiful,1 );
}
}
if(action[attaker].includes("スキル4")){ 
var skillLB = skillEffectL[0] + skillEffectB[0];
random = Math.floor( Math.random() * skillLB ) + skillEffectL[0];
enemyHp[target[attaker]] -= random;
damageEa();
array[4] += "\n" + target[attaker] + "に" + random + "ダメージ";
friendMp[attaker] -= 5;
if(enemyHp[target[attaker]] < 1){
    Cenemy -= 1;
if(Cenemy < 1)fun = 2;
document.getElementById( enemyId[enemyName.indexOf(target[attaker])] ).style.display = 'none';
aiful = enemyName.indexOf(action[attaker]);
enemyName.splice( aiful,1 );
enemyHp.splice( aiful,1 );
enemyId.splice( aiful,1 );
    }
}

if(action[attaker].includes("スキル2")){

friendHp[friend.indexOf(target[attaker])] += 10;
array[4] += "\n" + target[attaker] + "は10回復した";
friendMp[attaker] -= 5;

}
if(action[attaker].includes("アイテム3")){ 
random = Math.floor( Math.random() * 51 ) + 20;
damageEa();
array[4] += "\n" + target[attaker] + "に" + random + "ダメージ";
if(itemN[itemIntro.indexOf(action[attaker])] < 1) {
aiful = itemIntro.indexOf(action[attaker]);
itemN.splice( aiful,1 );
itemIntro.splice( aiful,1 );
itemE.splice( aiful,1 );
}
}

}


function sct() {
sc = true;
}
document.getElementById( 'area' ).style.top = 600;
document.getElementById( 'area' ).style.left = 550;
document.getElementById( 'triangle' ).style.top = 500;
document.getElementById( 'triangle' ).style.left = 550;
document.getElementById( 'triangle' ).style.display = 'none'; 
document.getElementById( 'select' ).style.display = 'none'; 
document.getElementById( 'select2' ).style.display = 'none'; 
document.getElementById( 'select3' ).style.display = 'none'; 

addEventListener( "keydown", b);

function selectblock() {
document.getElementById( 'triangle' ).style.display = 'block'; 
document.getElementById( 'select' ).style.display = 'block'; 
document.getElementById( 'select2' ).style.display = 'block'; 
document.getElementById( 'select3' ).style.display = 'block'; 
    }
function selectnone() {
document.getElementById( 'triangle' ).style.display = 'none'; 
document.getElementById( 'select' ).style.display = 'none'; 
document.getElementById( 'select2' ).style.display = 'none'; 
document.getElementById( 'select3' ).style.display = 'none'; 
document.getElementById( 'triangleU' ).style.display = 'none';
document.getElementById( 'triangleD' ).style.display = 'none';
    }
</script>
</script src="sample.js"></src>
</html>`;
//aaa111

var zip = new JSZip();
const blob = new Blob([blob3
],{ "type" : "application/javascript" });

zip.file("sample.js",blob);
zip.file("tomod.html",blob4);
const images = document.querySelectorAll('img');
const imagesFolder = "images";
let folder = zip.folder(imagesFolder);

let promises = [];

images.forEach((image, index) => {
  const imageUrl = image.src;

  const promise = fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      const imageName = `image${index + 1}.jpg`;  

      folder.file(imageName, blob);
    })
    .catch(error => {
      console.error(`画像の読み込みエラー: ${imageUrl}`, error);
    });

  promises.push(promise);
});

Promise.all(promises).then(() => {
  zip.generateAsync({ type: "blob" })
    .then(function(content) {
      
      var link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "js.zip";
      link.click();
    });
});  
});  

addEventListener( "keyup", n6keyF);
addEventListener( "keydown", UIview);
