// Garden Gnome Software - Skin
// Pano2VR 6.0.6/17336
// Filename: myvr.ggsk
// Generated 2020-01-07T14:00:05

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
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 76px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 267px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 22px;';
		hs+='border-radius : 22px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 53px;';
		hs+='visibility : inherit;';
		hs+='width : 267px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_10);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=2;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 15px;';
		hs+='border-radius : 15px;';
		hs+='background : #00aaff;';
		hs+='border : 1px solid #909090;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 255px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_1.appendChild(me._rectangle_1);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=-1;
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 179px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(170,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5373\u5c06\u8fdb\u5165VR\u7684\u4e16\u754c";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_1.appendChild(me._text_2);
		me.divSkin.appendChild(me._container_1);
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
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
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
			var flag=me._image_2.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._image_2.style[domTransition]='none';
			} else {
				me._image_2.style[domTransition]='all 100ms ease-out 0ms';
			}
			if (flag) {
				me._image_2.style.opacity='0.4';
				me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
			} else {
				me._image_2.style.opacity='0.1';
				me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
			}
			me._image_2.ggOpacitiyActive=!flag;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
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
		me.divSkin.appendChild(me._image_2);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
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
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			player.openUrl("http:\/\/blog.darler.cn","_blank");
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
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility=(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity)?'inherit':'hidden';
			me._container_1.ggVisible=true;
		});
		player.addListener('imagesready', function() {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
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
		var hs='';
		if (me._rectangle_1.ggParameter) {
			hs+=parameterToTransform(me._rectangle_1.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._rectangle_1.style[domTransform]=hs;
		var hs='';
		if (me._image_1.ggParameter) {
			hs+=parameterToTransform(me._image_1.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0.1)) + 'deg) ';
		me._image_1.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	me.skinTimerEvent();
};