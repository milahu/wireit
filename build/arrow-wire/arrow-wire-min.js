YUI.add("arrow-wire",function(b,a){b.ArrowWire=function(c){b.ArrowWire.superclass.constructor.apply(this,arguments);};b.ArrowWire.NAME="arrowwire";b.extend(b.ArrowWire,b.WireBase,{_draw:function(){var G=7;var e=G+3;var v=[4+e,4+e];var k=this.get("src").getXY();var D=this.get("tgt").getXY();var h=Math.sqrt(Math.pow(k[0]-D[0],2)+Math.pow(k[1]-D[1],2));this.moveTo((k[0]+6),(k[1]+6));this.lineTo((D[0]+6),(D[1]+6));var p=k;var n=D;var m=[0,0];var j=20;var q=(h===0)?0:1-(j/h);m[0]=Math.abs(p[0]+q*(n[0]-p[0]));m[1]=Math.abs(p[1]+q*(n[1]-p[1]));var g=p[0]-n[0];var s=p[1]-n[1];var r=p[0]*n[1]-p[1]*n[0];var J,I,i,l;if(g!==0){J=s/g;I=r/g;}else{J=0;}if(J===0){i=0;}else{i=-1/J;}l=m[1]-i*m[0];var x=1+Math.pow(i,2);var w=2*i*l-2*m[0]-2*m[1]*i;var u=-2*m[1]*l+Math.pow(m[0],2)+Math.pow(m[1],2)-Math.pow(G,2)+Math.pow(l,2);var H=Math.pow(w,2)-4*x*u;if(H<0){return;}var F=(-w+Math.sqrt(H))/(2*x);var E=(-w-Math.sqrt(H))/(2*x);var f=i*F+l;var c=i*E+l;if(p[1]==n[1]){var y=(p[0]>n[0])?1:-1;F=n[0]+y*j;E=F;f-=G;c+=G;}this.moveTo(n[0]+6,n[1]+6);this.lineTo(F+6,f+6);this.moveTo(n[0]+6,n[1]+6);this.lineTo(E+6,c+6);this.end();}});b.ArrowWire.ATTRS=b.merge(b.WireBase.ATTRS,{});},"@VERSION@",{"requires":["wire-base"]});