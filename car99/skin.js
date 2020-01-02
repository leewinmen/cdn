// Garden Gnome Software - Skin
// Pano2VR 6.0.6/17336
// Filename: Gyros.ggsk
// Generated 2019-12-27T08:46:54

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 153px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -0.83%;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 244px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 244px;';
		hs+='height: 50px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 30px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="CAR99-24";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._text_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 30px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='right : 6%;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	me.skinTimerEvent();
};