
function start(){
 var cs = document.getElementById("cs_0");
 cs.getContext("2d").fillRect(50,50,150,150);
 return;
}

function push(){
 
 return 0;
}


function dy(){
 var mnbr=new ArrayBuffer(128);
 var mnbrvw=new Uint8Array(mnbr);
 mnbrvw.set([0,0x61,0x73,0x6D,0x01,0,0,0],0);
 var brlh=8;
 brlh+=adsn(mnbrvw,brlh,1,
  otw([
   ota([
    oti(0x60),
    otw([
     oti(0x7F)
    ]),
    otw([])
   ]),
   ota([
    oti(0x60),
    otw([]),
    otw([])
   ])
  ])
 );
 brlh+=adsn(mnbrvw,brlh,2,
  otw([
   ota([
    ots("imports"),
    ots("import_func"),
    oti(0),
    oti(0)
   ])
  ])
 );
 brlh+=adsn(mnbrvw,brlh,3,
  otw([
   oti(1)
  ])
 );
 brlh+=adsn(mnbrvw,brlh,7,
  otw([
   ota([
    ots("export_func"),
    oti(0),
    oti(1)
   ])
  ])
 );
 brlh+=adsn(mnbrvw,brlh,10,
  otw([
   ott(ota([
    otw([]),
    otb(0x41),oti(42),
    otb(0x41),oti(59),
    otb(0x6C),
    otb(0x10),oti(0),
    otb(0x0B)
   ]))
  ])
 );
 var itot={
  imports:{
   import_func: function(p0){
    alert(""+p0);
    return;
   }
  }
 };
 var i,j,atsg="";
 for(i=0;i<5;i++){
  for(j=0;j<16;j++){
   atsg+=mnbrvw[i*16+j].toString(16)+",";
  }
  atsg+="\n";
 }
 alert(atsg);
 WebAssembly.instantiate(mnbr.slice(0,brlh),itot).then((rt) => rt.instance.exports.export_func());
 //alert("Completed"+mnbrvw);
 return;
}
function adsn(br,ix,id,da){
 var ay=pada(da),si=1;
 br[ix]=id;
 si+=wrnr(br,ix+si,ay.length);
 br.set(ay,ix+si);
 return si+ay.length;
}
function pada(da){
 var i,c,p=0,ay=[],tp,sg,tpay;
 tp=da.c;
 switch(da.t){
  case "f":
   p+=wrft(ay,p,tp);
   break;
  case "i":
   p+=wrnr(ay,p,tp);
   break;
  case "b":
   ay.push(tp);
   break;
  case "t":
   tp=pada(tp);
   p+=wrnr(ay,p,tp.length);
   ay=ay.concat(tp);
   break;
  case "s":
   sg=tp;
   tp=[];
   c=0;
   for(i=0;i<sg.length;i++){
    c=sg.codePointAt(i);
    if(c>0xFFFF) i++;
    tp.push(
     { t:"i",c:BigInt(c) }
    );
   }
  case "w":
   p+=wrnr(ay,p,tp.length);
  default:
   for(i=0;i<tp.length;i++){
    tpay=pada(tp[i]);
    ay=ay.concat(tpay);
    p+=tpay.length;
   }
   break;
 }
 return ay;
}
function wrnr(br,ix,nr){
 var i,j=BigInt(nr);
 for(i=0;(j>>7n)!=0n;i++){
  br[ix+i]=(Number(j)&0x7F)|0x80;
  j>>=7;
 }
 br[ix+i]=Number(j);
 return i+1;
}
function wrft(br,ix,ft){
 var br=new ArrayBuffer(8);
 var vw=DataView(br);
 vw.setFloat64(0,ft);
 return wrnr(br,ix,vw.getBigUint64(0));
}
function ott(ct){
 return { t:"t",c:ct };
}
function otf(ct){
 return { t:"f",c:ct };
}
function oti(ct){
 return { t:"i",c:BigInt(ct) };
}
function ots(ct){
 return { t:"s",c:ct };
}
function otb(ct){
 return { t:"b",c:ct };
}
function otw(ct){
 return { t:"w",c:ct };
}
function ota(ct){
 return { t:"a",c:ct };
}
