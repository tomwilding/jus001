if (self.CavalryLogger) { CavalryLogger.start_js(["NRrQg"]); }

__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIAddComment.react','UFIAddCommentActionType','UFIAsyncWrapper','UFICallbackStore','UFICommentEditIDStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFINewCommentNotifier'],(function a(b,c,d,e,f,g){'use strict';h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k));};function h(j,k){i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new (c('UFIDispatcher'))();this.$UFIAddCommentController4={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c('UFIAddCommentActionType').SUBMIT_NEW,function(l){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(j,'form'),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp);}.bind(this));this.$UFIAddCommentController5=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);c('UFICommentEditIDStore').addListener(function(){var l=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render();}}.bind(this));this.render();}h.prototype.render=function(){var j=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,j),this.$UFIAddCommentController1);};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove();};var i=function j(){this.renderAddComment=function(k,l){if(this.$UFIAddCommentController5!==null||!l||!l.cancomment||!l.actorforpost)return null;return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:l.actorforpost,targetID:l.ownerid,initialData:null,ref:null,withoutSeparator:false,editingComment:{},isEditing:false,mentionsDataSource:l.mentionsdatasource,showSendOnEnterTip:l.showsendonentertip,multiCompanyGroupsCount:l.multicompanygroupscount,allowPhotoAttachments:l.allowphotoattachments&&!k.islivestreaming,allowVideoAttachments:l.allowvideoattachments&&!k.islivestreaming,allowStickerAttachments:l.allowstickerattachments&&!k.islivestreaming,allowGifAttachments:l.allowgifattachments&&!k.islivestreaming,allowTipJar:Boolean(l.istipjarenabled&&k.islivestreaming),contextArgs:k,subtitle:l.subtitle,isQAndA:l.isqanda,keepFocus:k.islivestreaming});}.bind(this);};f.exports=h;}),null);
__d('PhotoAlbumAudienceInput',['Arbiter','CSS','DOM','Event'],(function a(b,c,d,e,f,g){function h(i,j,k,l,m){'use strict';this.$PhotoAlbumAudienceInput1=i;if(j){this.$PhotoAlbumAudienceInput2=j;this.$PhotoAlbumAudienceInput3=k;this.$PhotoAlbumAudienceInput4=l;this.$PhotoAlbumAudienceInput5=m;c('Arbiter').subscribe('Tokenizer/init',this.$PhotoAlbumAudienceInput6.bind(this));c('Event').listen(this.$PhotoAlbumAudienceInput4,'click',this.$PhotoAlbumAudienceInput7.bind(this));}}h.prototype.removeHiddenPrivacyWidget=function(){'use strict';[this.$PhotoAlbumAudienceInput1,this.$PhotoAlbumAudienceInput2,this.$PhotoAlbumAudienceInput5].forEach(function(i){if(i&&c('CSS').hasClass(i,'hidden_elem'))c('DOM').remove(i);});};h.prototype.$PhotoAlbumAudienceInput7=function(){'use strict';this.$PhotoAlbumAudienceInput8.removeAllTokens();this.$PhotoAlbumAudienceInput9(null,null);};h.prototype.$PhotoAlbumAudienceInput6=function(i,j){'use strict';if(this.$PhotoAlbumAudienceInput8||this.$PhotoAlbumAudienceInput3!=j.element)return;this.$PhotoAlbumAudienceInput8=j;this.$PhotoAlbumAudienceInput9(null,null);c('Arbiter').subscribe('Form/change',this.$PhotoAlbumAudienceInput9.bind(this));};h.prototype.$PhotoAlbumAudienceInput9=function(i,j){'use strict';var k=this.$PhotoAlbumAudienceInput8.getTokens().length>0;this.$PhotoAlbumAudienceInput10(k);};h.prototype.$PhotoAlbumAudienceInput10=function(i){'use strict';c('CSS').conditionShow(this.$PhotoAlbumAudienceInput2,i);c('CSS').conditionShow(this.$PhotoAlbumAudienceInput1,!i);this.$PhotoAlbumAudienceInput5&&c('CSS').conditionShow(this.$PhotoAlbumAudienceInput5,i);};f.exports=h;}),null);
__d('TagTypeaheadView',['AsyncRequest','ContextualTypeaheadView','CSS','DOM','FamilyTaggingConfig','Parent'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ContextualTypeaheadView'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this,k,l);this.hintText=l.hintText;this.userEd=l.userEd;this.origAutoSelect=l.autoSelect;this.setSuggestions(l.suggestions);}j.prototype.init=function(){'use strict';c('CSS').addClass(this.element,'uiTagTypeaheadView');i.init.call(this);};j.prototype.buildResults=function(k){'use strict';if(!this.value&&this.hintText)k.unshift({subtext:this.hintText,type:'hintText'});if(this.userEd){new (c('AsyncRequest'))().setURI('/ajax/fof/user_education.php').setData({increment:1}).send();k.unshift({subtext:this.userEd,type:'userEdText'});}if(c('FamilyTaggingConfig').gk){var l=[],m=[];for(var n=0;n<k.length;n++)if(k[n].type!=='family_tags'&&k[n].index!=-1000&&k[n].type!=='hintText'){l.push(k[n]);}else m.push(k[n]);k=m.concat(l);i.updateResults.call(this,k);}var o=i.buildResults.call(this,k);if(this.userEd)k.shift();if(!this.value)k.shift();return o;};j.prototype.show=function(){'use strict';var k=c('DOM').scry(this.context,'.typeaheadBackdrop');if(k.length>0)c('CSS').addClass(k[0],'resultsPresent');return i.show.call(this);};j.prototype.hide=function(){'use strict';var k=c('DOM').scry(this.context,'.typeaheadBackdrop');if(k.length>0)c('CSS').removeClass(k[0],'resultsPresent');return i.hide.call(this);};j.prototype.render=function(k,l,m){'use strict';this.autoSelect=this.origAutoSelect&&k.length;this.disableAutoSelect=k.length===0;l=l.concat(this.getAdditionalResults());i.render.call(this,k,l,m);};j.prototype.getItems=function(){'use strict';var k=i.getItems.call(this);if(!this.value)k.shift();if(this.userEd)k.shift();return k;};j.prototype.getSuggestions=function(){'use strict';return this.suggestions;};j.prototype.setSuggestions=function(k){'use strict';this.suggestions=k?k.map(String):[];this.visible=!!this.suggestions.length;};j.prototype.addSuggestion=function(k){'use strict';this.suggestions.unshift(k);};j.prototype.addTypeaheadFlip=function(k){'use strict';c('CSS').addClass(this.element,k);};j.prototype.removeTypeaheadFlip=function(k){'use strict';c('CSS').removeClass(this.element,k);};j.prototype.getContext=function(){'use strict';var k=c('Parent').byClass(this.element,'typeaheadContainer');if(k){return k;}else return i.getContext.call(this);};j.prototype.getAdditionalResults=function(){'use strict';return [];};f.exports=j;}),null);
__d('ProgressiveDatepicker',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','Event','Parent','getElementText','mixin','shield','Focus'],(function a(b,c,d,e,f,g){var h,i;function j(m){return new Date(m[0],m[1],m[2],m[3],m[4]);}function k(m,n){while(m.length)c('DOM').insertAfter(n,m.pop());}h=babelHelpers.inherits(l,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function l(m,n){'use strict';i.constructor.call(this);this._root=m;this._savedLabels={};this._savedPeriodsBack=[];this._savedPeriodsFront=[];this._menus={};this._dayOrderAscending=n.dayorderascending;var o=0;if(n.gmtoffset!==undefined)o=-new Date().getTimezoneOffset()-n.gmtoffset;this._mintime=n.mintime&&new Date(1000*n.mintime-o*60000);this._maxtime=n.maxtime&&new Date(1000*n.maxtime-o*60000);c('DataStore').set(m,'datepicker',this);c('DOM').scry(m,'select').forEach(function(p){c('Event').listen(p,'change',c('shield')(this._handleChange,this,p));var q=c('Parent').byClass(p,'period');c('Event').listen(p,'focus',c('CSS').addClass.bind(null,q,'periodFocus'));c('Event').listen(p,'blur',c('CSS').removeClass.bind(null,q,'periodFocus'));this._setMenuSelectionState(p);if(p.getAttribute('data-name')==='month')this._filterInvalidDates();}.bind(this));c('DOM').scry(m,'a.periodLabel').forEach(function(p){var q=c('Parent').byClass(p,'period');c('Event').listen(p,'click',function(){c('CSS').addClass(q,'periodSelected');c('CSS').addClass(q,'periodFocus');c('Focus').set(c('DOM').find(q,'select'));});});this._filterInvalidDates();this.inform('initialized',this,c('Arbiter').BEHAVIOR_STATE);}l.prototype.setDate=function(m,n,o,p,q){'use strict';this._addSavedPeriods();var r=l.PERIODS;for(var s=0;s<r.length;s++)this._setValueForPeriod(r[s],arguments[s]);this._filterInvalidDates();this.inform('changed');};l.prototype.setDateWithTimestamp=function(m){'use strict';var n=new Date(m);this.setDate(n.getFullYear(),n.getMonth()+1,n.getDate(),n.getHours(),n.getMinutes());};l.prototype.isSet=function(){'use strict';var m=l.PERIODS;for(var n=0;n<m.length;n++)if(this._getValueForPeriod(m[n]))return true;return false;};l.prototype.getRoot=function(){'use strict';return this._root;};l.prototype.getValues=function(){'use strict';var m=l.PERIODS,n={};for(var o=0;o<m.length;o++){var p=this._getValueForPeriod(m[o]);if(p)n[m[o]]=p;}return n;};l.prototype.getDate=function(){'use strict';var m=this.getValues();return new Date(m.year||0,(m.month||1)-1,m.day||1,m.hour||0,m.minute||0);};l.prototype.getTimestamp=function(){'use strict';return Math.round(this.getDate().getTime()/1000);};l.prototype._setValueForPeriod=function(m,n){'use strict';var o=this._menuForPeriodName(m);if(!o)return;if(n===undefined)n='';var p=o.options;for(var q=0,r=p.length;q<r;q++)if(p[q].value==n){o.selectedIndex=q;break;}this._setMenuSelectionState(o);};l.prototype._getValueForPeriod=function(m){'use strict';var n=this._menuForPeriodName(m);return n&&n.options[n.selectedIndex].value;};l.prototype._handleChange=function(m){'use strict';this._setMenuSelectionState(m);this._filterInvalidDates();this.inform('changed');};l.prototype._setMenuSelectionState=function(m){'use strict';var n=c('Parent').byClass(m,'period');if(!n)return;if(c('CSS').hasClass(n,'periodRequired')){if(m.selectedIndex===0)m.selectedIndex=1;}else this._updateLabel(m);var o=m.getAttribute('data-name'),p=m.options[m.selectedIndex].value;c('CSS').conditionClass(n,'periodSelected',p);c('CSS').conditionClass(this._root,this._selectedClass(o),p);if(!p)this._resetMenu(l.PERIODS.indexOf(o)+1);};l.prototype._updateLabel=function(m){'use strict';var n=m.getAttribute('data-name'),o=m.options[0];if(!this._savedLabels[n])this._savedLabels[n]=c('getElementText')(o);if(m.selectedIndex===0){c('DOM').setContent(o,this._savedLabels[n]);}else c('DOM').setContent(o,'--');};l.prototype._daysInMonth=function(m,n){'use strict';return new Date(m||1999,n+1||1,0).getDate();};l.prototype._daysInCurrentMonth=function(){'use strict';return this._daysInMonth(this._getValueForPeriod('year'),this._getValueForPeriod('month')-1);};l.prototype._menuForPeriodName=function(m){'use strict';if(!this._menus[m])this._menus[m]=c('DOM').scry(this._root,'.'+m+'Menu')[0];return this._menus[m];};l.prototype._selectedClass=function(m){'use strict';return 'uiProgressiveDatepickerSelected-'+m;};l.prototype._resetMenu=function(m){'use strict';var n=l.PERIODS;for(;m<n.length;m++){var o=n[m],p=this._menuForPeriodName(o);if(!p)return;if(c('Parent').byClass(p,'periodRequired')){p.selectedIndex=1;}else{c('CSS').removeClass(c('Parent').byClass(p,'period'),'periodSelected');c('CSS').removeClass(this._root,this._selectedClass(o));p.selectedIndex=0;this._updateLabel(p);}}};l.prototype._addSavedPeriods=function(){'use strict';var m=l.PERIODS;for(var n=0;n<m.length;n++){var o=this._menuForPeriodName(m[n]);if(!o)return;this._savedPeriodsFront[n]||(this._savedPeriodsFront[n]=[]);this._savedPeriodsBack[n]||(this._savedPeriodsBack[n]=[]);var p=o.options[0],q=o.options[o.options.length-1];if(n===l.PERIODS.indexOf('hour')||n===l.PERIODS.indexOf('minute')||n===l.PERIODS.indexOf('day')&&this._dayOrderAscending){k(this._savedPeriodsFront[n],p);k(this._savedPeriodsBack[n],q);}else{k(this._savedPeriodsBack[n],p);k(this._savedPeriodsFront[n],q);}}};l.prototype._filterInvalidDates=function(){'use strict';this._addSavedPeriods();var m=l.PERIODS,n=this.getValues();for(var o=0;o<m.length;o++){var p=this._menuForPeriodName(m[o]);if(!p)return;this._savedPeriodsFront[o]||(this._savedPeriodsFront[o]=[]);this._savedPeriodsBack[o]||(this._savedPeriodsBack[o]=[]);for(var q=1;q<p.options.length;){var r=p.options[q],s=[o-1>=0?n[m[0]]:0,o-1>=1?n[m[1]]-1:0,o-1>=2?n[m[2]]:1,o-1>=3?n[m[3]]:0,o-1>=4?n[m[4]]:0];s[o]=r.value;if(o===l.PERIODS.indexOf('month'))s[o]=s[o]-1;var t=j(s),u=[o-1>=0?n[m[0]]:9001,o-1>=1?n[m[1]]-1:11,o-1>=2?n[m[2]]:this._daysInCurrentMonth(),o-1>=3?n[m[3]]:23,o-1>=4?n[m[4]]:59];u[o]=r.value;if(o===l.PERIODS.indexOf('month')){u[o]--;u[o+1]=this._daysInMonth(u[0],u[1]);}var v=j(u),w=t>this._maxtime,x=v<this._mintime,y=o===l.PERIODS.indexOf('day')&&r.value>this._daysInCurrentMonth();if(x||w||y){if(r.selected){r.selected=false;this._resetMenu(o);}c('DOM').remove(r);if(w||y){this._savedPeriodsBack[o].push(r);}else this._savedPeriodsFront[o].push(r);}else q++;}}};l.getInstance=function(m){'use strict';return m?c('DataStore').get(m,'datepicker'):null;};Object.assign(l,{PERIODS:['year','month','day','hour','minute']});f.exports=l;}),null);
__d('TypeaheadHintText',['emptyFunction'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';this._typeahead.getCore().resetOnKeyup=false;};Object.assign(h.prototype,{disable:c('emptyFunction')});f.exports=h;}),null);
__d('legacy:HintTextTypeaheadBehavior',['TypeaheadHintText'],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.hintText=function(h){h.enableBehavior(c('TypeaheadHintText'));};}),3);