(this["webpackJsonp@banana-cake-pop/main"]=this["webpackJsonp@banana-cake-pop/main"]||[]).push([[95],{1055:function(e,n,t){"use strict";t.r(n),t.d(n,"setupMode",(function(){return rt}));var r=t(75),i=t(76),o=t(73),a=t(74),s=t(77),u=t(105),c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,f=Object.prototype.hasOwnProperty,g={};c(g,"__esModule",{value:!0}),function(e,n,t){if(n&&"object"===typeof n||"function"===typeof n){var r,i=Object(s.a)(l(n));try{var o=function(){var i=r.value;f.call(e,i)||"default"===i||c(e,i,{get:function(){return n[i]},enumerable:!(t=d(n,i))||t.enumerable})};for(i.s();!(r=i.n()).done;)o()}catch(a){i.e(a)}finally{i.f()}}}(g,u);var h,p,v,m,b,k,C,_,w,y,E,A,x,I,S,T,j,O,L,R,M,P,F,D,N,U,W,V,B,K,z,q,H,X,J,$,Q,G,Y,Z,ee,ne,te,re,ie,oe,ae,se,ue,ce=function(){function e(n){var t=this;Object(o.a)(this,e),this._defaults=n,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return Object(a.a)(e,[{key:"_stopWorker",value:function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}},{key:"dispose",value:function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}},{key:"_checkIfIdle",value:function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())}},{key:"_getClient",value:function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=g.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}},{key:"getLanguageServiceWorker",value:function(){for(var e,n=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this._getClient().then((function(n){e=n})).then((function(e){if(n._worker)return n._worker.withSyncedResources(r)})).then((function(n){return e}))}}]),e}();(p=h||(h={})).MIN_VALUE=-2147483648,p.MAX_VALUE=2147483647,(m=v||(v={})).MIN_VALUE=0,m.MAX_VALUE=2147483647,(k=b||(b={})).create=function(e,n){return e===Number.MAX_VALUE&&(e=v.MAX_VALUE),n===Number.MAX_VALUE&&(n=v.MAX_VALUE),{line:e,character:n}},k.is=function(e){var n=e;return dn.objectLiteral(n)&&dn.uinteger(n.line)&&dn.uinteger(n.character)},(_=C||(C={})).create=function(e,n,t,r){if(dn.uinteger(e)&&dn.uinteger(n)&&dn.uinteger(t)&&dn.uinteger(r))return{start:b.create(e,n),end:b.create(t,r)};if(b.is(e)&&b.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+r+"]")},_.is=function(e){var n=e;return dn.objectLiteral(n)&&b.is(n.start)&&b.is(n.end)},(y=w||(w={})).create=function(e,n){return{uri:e,range:n}},y.is=function(e){var n=e;return dn.defined(n)&&C.is(n.range)&&(dn.string(n.uri)||dn.undefined(n.uri))},(A=E||(E={})).create=function(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}},A.is=function(e){var n=e;return dn.defined(n)&&C.is(n.targetRange)&&dn.string(n.targetUri)&&(C.is(n.targetSelectionRange)||dn.undefined(n.targetSelectionRange))&&(C.is(n.originSelectionRange)||dn.undefined(n.originSelectionRange))},(I=x||(x={})).create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},I.is=function(e){var n=e;return dn.numberRange(n.red,0,1)&&dn.numberRange(n.green,0,1)&&dn.numberRange(n.blue,0,1)&&dn.numberRange(n.alpha,0,1)},(T=S||(S={})).create=function(e,n){return{range:e,color:n}},T.is=function(e){var n=e;return C.is(n.range)&&x.is(n.color)},(O=j||(j={})).create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},O.is=function(e){var n=e;return dn.string(n.label)&&(dn.undefined(n.textEdit)||X.is(n))&&(dn.undefined(n.additionalTextEdits)||dn.typedArray(n.additionalTextEdits,X.is))},(R=L||(L={})).Comment="comment",R.Imports="imports",R.Region="region",(P=M||(M={})).create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return dn.defined(t)&&(o.startCharacter=t),dn.defined(r)&&(o.endCharacter=r),dn.defined(i)&&(o.kind=i),o},P.is=function(e){var n=e;return dn.uinteger(n.startLine)&&dn.uinteger(n.startLine)&&(dn.undefined(n.startCharacter)||dn.uinteger(n.startCharacter))&&(dn.undefined(n.endCharacter)||dn.uinteger(n.endCharacter))&&(dn.undefined(n.kind)||dn.string(n.kind))},(D=F||(F={})).create=function(e,n){return{location:e,message:n}},D.is=function(e){var n=e;return dn.defined(n)&&w.is(n.location)&&dn.string(n.message)},(U=N||(N={})).Error=1,U.Warning=2,U.Information=3,U.Hint=4,(V=W||(W={})).Unnecessary=1,V.Deprecated=2,(B||(B={})).is=function(e){var n=e;return void 0!==n&&null!==n&&dn.string(n.href)},(z=K||(K={})).create=function(e,n,t,r,i,o){var a={range:e,message:n};return dn.defined(t)&&(a.severity=t),dn.defined(r)&&(a.code=r),dn.defined(i)&&(a.source=i),dn.defined(o)&&(a.relatedInformation=o),a},z.is=function(e){var n,t=e;return dn.defined(t)&&C.is(t.range)&&dn.string(t.message)&&(dn.number(t.severity)||dn.undefined(t.severity))&&(dn.integer(t.code)||dn.string(t.code)||dn.undefined(t.code))&&(dn.undefined(t.codeDescription)||dn.string(null===(n=t.codeDescription)||void 0===n?void 0:n.href))&&(dn.string(t.source)||dn.undefined(t.source))&&(dn.undefined(t.relatedInformation)||dn.typedArray(t.relatedInformation,F.is))},(H=q||(q={})).create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return dn.defined(t)&&t.length>0&&(i.arguments=t),i},H.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.title)&&dn.string(n.command)},(J=X||(X={})).replace=function(e,n){return{range:e,newText:n}},J.insert=function(e,n){return{range:{start:e,end:e},newText:n}},J.del=function(e){return{range:e,newText:""}},J.is=function(e){var n=e;return dn.objectLiteral(n)&&dn.string(n.newText)&&C.is(n.range)},(Q=$||($={})).create=function(e,n,t){var r={label:e};return void 0!==n&&(r.needsConfirmation=n),void 0!==t&&(r.description=t),r},Q.is=function(e){var n=e;return void 0!==n&&dn.objectLiteral(n)&&dn.string(n.label)&&(dn.boolean(n.needsConfirmation)||void 0===n.needsConfirmation)&&(dn.string(n.description)||void 0===n.description)},(G||(G={})).is=function(e){return"string"===typeof e},(Z=Y||(Y={})).replace=function(e,n,t){return{range:e,newText:n,annotationId:t}},Z.insert=function(e,n,t){return{range:{start:e,end:e},newText:n,annotationId:t}},Z.del=function(e,n){return{range:e,newText:"",annotationId:n}},Z.is=function(e){var n=e;return X.is(n)&&($.is(n.annotationId)||G.is(n.annotationId))},(ne=ee||(ee={})).create=function(e,n){return{textDocument:e,edits:n}},ne.is=function(e){var n=e;return dn.defined(n)&&he.is(n.textDocument)&&Array.isArray(n.edits)},(re=te||(te={})).create=function(e,n,t){var r={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),void 0!==t&&(r.annotationId=t),r},re.is=function(e){var n=e;return n&&"create"===n.kind&&dn.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||dn.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||dn.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||G.is(n.annotationId))},(oe=ie||(ie={})).create=function(e,n,t,r){var i={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==r&&(i.annotationId=r),i},oe.is=function(e){var n=e;return n&&"rename"===n.kind&&dn.string(n.oldUri)&&dn.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||dn.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||dn.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||G.is(n.annotationId))},(se=ae||(ae={})).create=function(e,n,t){var r={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(r.options=n),void 0!==t&&(r.annotationId=t),r},se.is=function(e){var n=e;return n&&"delete"===n.kind&&dn.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||dn.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||dn.boolean(n.options.ignoreIfNotExists)))&&(void 0===n.annotationId||G.is(n.annotationId))},(ue||(ue={})).is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every((function(e){return dn.string(e.kind)?te.is(e)||ie.is(e)||ae.is(e):ee.is(e)})))};var de,le,fe,ge,he,pe,ve,me,be,ke,Ce,_e,we,ye,Ee,Ae,xe,Ie,Se,Te,je,Oe,Le,Re,Me,Pe,Fe,De,Ne,Ue,We,Ve,Be,Ke,ze,qe,He,Xe,Je,$e,Qe,Ge,Ye,Ze,en,nn,tn,rn,on,an,sn,un=function(){function e(e,n){this.edits=e,this.changeAnnotations=n}return e.prototype.insert=function(e,n,t){var r,i;if(void 0===t?r=X.insert(e,n):G.is(t)?(i=t,r=Y.insert(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=Y.insert(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,n,t){var r,i;if(void 0===t?r=X.replace(e,n):G.is(t)?(i=t,r=Y.replace(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=Y.replace(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,n){var t,r;if(void 0===n?t=X.del(e):G.is(n)?(r=n,t=Y.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(n),t=Y.del(e,r)),this.edits.push(t),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),cn=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,n){var t;if(G.is(e)?t=e:(t=this.nextId(),n=e),void 0!==this._annotations[t])throw new Error("Id "+t+" is already in use.");if(void 0===n)throw new Error("No annotation provided for id "+t);return this._annotations[t]=n,this._size++,t},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new cn(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(ee.is(e)){var t=new un(e.edits,n._changeAnnotations);n._textEditChanges[e.textDocument.uri]=t}}))):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new un(e.changes[t]);n._textEditChanges[t]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(he.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new un(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new un(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new cn,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if($.is(n)||G.is(n)?r=n:t=n,void 0===r?i=te.create(e,t):(o=G.is(r)?r:this._changeAnnotations.manage(r),i=te.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,n,t,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if($.is(t)||G.is(t)?i=t:r=t,void 0===i?o=ie.create(e,n,r):(a=G.is(i)?i:this._changeAnnotations.manage(i),o=ie.create(e,n,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if($.is(n)||G.is(n)?r=n:t=n,void 0===r?i=ae.create(e,t):(o=G.is(r)?r:this._changeAnnotations.manage(r),i=ae.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();(le=de||(de={})).create=function(e){return{uri:e}},le.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.uri)},(ge=fe||(fe={})).create=function(e,n){return{uri:e,version:n}},ge.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.uri)&&dn.integer(n.version)},(pe=he||(he={})).create=function(e,n){return{uri:e,version:n}},pe.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.uri)&&(null===n.version||dn.integer(n.version))},(me=ve||(ve={})).create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},me.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.uri)&&dn.string(n.languageId)&&dn.integer(n.version)&&dn.string(n.text)},(ke=be||(be={})).PlainText="plaintext",ke.Markdown="markdown",function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(be||(be={})),(Ce||(Ce={})).is=function(e){var n=e;return dn.objectLiteral(e)&&be.is(n.kind)&&dn.string(n.value)},(we=_e||(_e={})).Text=1,we.Method=2,we.Function=3,we.Constructor=4,we.Field=5,we.Variable=6,we.Class=7,we.Interface=8,we.Module=9,we.Property=10,we.Unit=11,we.Value=12,we.Enum=13,we.Keyword=14,we.Snippet=15,we.Color=16,we.File=17,we.Reference=18,we.Folder=19,we.EnumMember=20,we.Constant=21,we.Struct=22,we.Event=23,we.Operator=24,we.TypeParameter=25,(Ee=ye||(ye={})).PlainText=1,Ee.Snippet=2,(Ae||(Ae={})).Deprecated=1,(Ie=xe||(xe={})).create=function(e,n,t){return{newText:e,insert:n,replace:t}},Ie.is=function(e){var n=e;return n&&dn.string(n.newText)&&C.is(n.insert)&&C.is(n.replace)},(Te=Se||(Se={})).asIs=1,Te.adjustIndentation=2,(je||(je={})).create=function(e){return{label:e}},(Oe||(Oe={})).create=function(e,n){return{items:e||[],isIncomplete:!!n}},(Re=Le||(Le={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Re.is=function(e){var n=e;return dn.string(n)||dn.objectLiteral(n)&&dn.string(n.language)&&dn.string(n.value)},(Me||(Me={})).is=function(e){var n=e;return!!n&&dn.objectLiteral(n)&&(Ce.is(n.contents)||Le.is(n.contents)||dn.typedArray(n.contents,Le.is))&&(void 0===e.range||C.is(e.range))},(Pe||(Pe={})).create=function(e,n){return n?{label:e,documentation:n}:{label:e}},(Fe||(Fe={})).create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return dn.defined(n)&&(i.documentation=n),dn.defined(t)?i.parameters=t:i.parameters=[],i},(Ne=De||(De={})).Text=1,Ne.Read=2,Ne.Write=3,(Ue||(Ue={})).create=function(e,n){var t={range:e};return dn.number(n)&&(t.kind=n),t},(Ve=We||(We={})).File=1,Ve.Module=2,Ve.Namespace=3,Ve.Package=4,Ve.Class=5,Ve.Method=6,Ve.Property=7,Ve.Field=8,Ve.Constructor=9,Ve.Enum=10,Ve.Interface=11,Ve.Function=12,Ve.Variable=13,Ve.Constant=14,Ve.String=15,Ve.Number=16,Ve.Boolean=17,Ve.Array=18,Ve.Object=19,Ve.Key=20,Ve.Null=21,Ve.EnumMember=22,Ve.Struct=23,Ve.Event=24,Ve.Operator=25,Ve.TypeParameter=26,(Be||(Be={})).Deprecated=1,(Ke||(Ke={})).create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o},(qe=ze||(ze={})).create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},qe.is=function(e){var n=e;return n&&dn.string(n.name)&&dn.number(n.kind)&&C.is(n.range)&&C.is(n.selectionRange)&&(void 0===n.detail||dn.string(n.detail))&&(void 0===n.deprecated||dn.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))&&(void 0===n.tags||Array.isArray(n.tags))},(Xe=He||(He={})).Empty="",Xe.QuickFix="quickfix",Xe.Refactor="refactor",Xe.RefactorExtract="refactor.extract",Xe.RefactorInline="refactor.inline",Xe.RefactorRewrite="refactor.rewrite",Xe.Source="source",Xe.SourceOrganizeImports="source.organizeImports",Xe.SourceFixAll="source.fixAll",($e=Je||(Je={})).create=function(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t},$e.is=function(e){var n=e;return dn.defined(n)&&dn.typedArray(n.diagnostics,K.is)&&(void 0===n.only||dn.typedArray(n.only,dn.string))},(Ge=Qe||(Qe={})).create=function(e,n,t){var r={title:e},i=!0;return"string"===typeof n?(i=!1,r.kind=n):q.is(n)?r.command=n:r.edit=n,i&&void 0!==t&&(r.kind=t),r},Ge.is=function(e){var n=e;return n&&dn.string(n.title)&&(void 0===n.diagnostics||dn.typedArray(n.diagnostics,K.is))&&(void 0===n.kind||dn.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||q.is(n.command))&&(void 0===n.isPreferred||dn.boolean(n.isPreferred))&&(void 0===n.edit||ue.is(n.edit))},(Ze=Ye||(Ye={})).create=function(e,n){var t={range:e};return dn.defined(n)&&(t.data=n),t},Ze.is=function(e){var n=e;return dn.defined(n)&&C.is(n.range)&&(dn.undefined(n.command)||q.is(n.command))},(nn=en||(en={})).create=function(e,n){return{tabSize:e,insertSpaces:n}},nn.is=function(e){var n=e;return dn.defined(n)&&dn.uinteger(n.tabSize)&&dn.boolean(n.insertSpaces)},(rn=tn||(tn={})).create=function(e,n,t){return{range:e,target:n,data:t}},rn.is=function(e){var n=e;return dn.defined(n)&&C.is(n.range)&&(dn.undefined(n.target)||dn.string(n.target))},(an=on||(on={})).create=function(e,n){return{range:e,parent:n}},an.is=function(e){var n=e;return void 0!==n&&C.is(n.range)&&(void 0===n.parent||an.is(n.parent))},function(e){function n(e,t){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);n(i,t),n(o,t);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=t(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,n,t,r){return new ln(e,n,t,r)},e.is=function(e){var n=e;return!!(dn.defined(n)&&dn.string(n.uri)&&(dn.undefined(n.languageId)||dn.string(n.languageId))&&dn.uinteger(n.lineCount)&&dn.func(n.getText)&&dn.func(n.positionAt)&&dn.func(n.offsetAt))},e.applyEdits=function(e,t){for(var r=e.getText(),i=n(t,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(sn||(sn={}));var dn,ln=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,r=n.length;if(0===r)return b.create(0,e);for(;t<r;){var i=Math.floor((t+r)/2);n[i]>e?r=i:t=i+1}var o=t-1;return b.create(o,e-n[o])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return"undefined"!==typeof e},e.undefined=function(e){return"undefined"===typeof e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.numberRange=function(e,t,r){return"[object Number]"===n.call(e)&&t<=e&&e<=r},e.integer=function(e){return"[object Number]"===n.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===n.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"===typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(dn||(dn={}));var fn=function(){function e(n,t,r){var i=this;Object(o.a)(this,e),this._languageId=n,this._worker=t,this._disposables=[],this._listener=Object.create(null);var a=function(e){var n,t=e.getLanguageId();t===i._languageId&&(i._listener[e.uri.toString()]=e.onDidChangeContent((function(){window.clearTimeout(n),n=window.setTimeout((function(){return i._doValidate(e.uri,t)}),500)})),i._doValidate(e.uri,t))},s=function(e){g.editor.setModelMarkers(e,i._languageId,[]);var n=e.uri.toString(),t=i._listener[n];t&&(t.dispose(),delete i._listener[n])};this._disposables.push(g.editor.onDidCreateModel(a)),this._disposables.push(g.editor.onWillDisposeModel(s)),this._disposables.push(g.editor.onDidChangeModelLanguage((function(e){s(e.model),a(e.model)}))),this._disposables.push(r((function(e){g.editor.getModels().forEach((function(e){e.getLanguageId()===i._languageId&&(s(e),a(e))}))}))),this._disposables.push({dispose:function(){for(var e in g.editor.getModels().forEach(s),i._listener)i._listener[e].dispose()}}),g.editor.getModels().forEach(a)}return Object(a.a)(e,[{key:"dispose",value:function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables.length=0}},{key:"_doValidate",value:function(e,n){this._worker(e).then((function(n){return n.doValidation(e.toString())})).then((function(t){var r=t.map((function(e){return function(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:gn(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}(0,e)})),i=g.editor.getModel(e);i&&i.getLanguageId()===n&&g.editor.setModelMarkers(i,n,r)})).then(void 0,(function(e){console.error(e)}))}}]),e}();function gn(e){switch(e){case N.Error:return g.MarkerSeverity.Error;case N.Warning:return g.MarkerSeverity.Warning;case N.Information:return g.MarkerSeverity.Info;case N.Hint:return g.MarkerSeverity.Hint;default:return g.MarkerSeverity.Info}}var hn=function(){function e(n,t){Object(o.a)(this,e),this._worker=n,this._triggerCharacters=t}return Object(a.a)(e,[{key:"triggerCharacters",get:function(){return this._triggerCharacters}},{key:"provideCompletionItems",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doComplete(i.toString(),pn(n))})).then((function(t){if(t){var r=e.getWordUntilPosition(n),i=new g.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=t.items.map((function(e){var n,t,r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:bn(e.kind)};return e.textEdit&&("undefined"!==typeof(t=e.textEdit).insert&&"undefined"!==typeof t.replace?r.range={insert:mn(e.textEdit.insert),replace:mn(e.textEdit.replace)}:r.range=mn(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(kn)),e.insertTextFormat===ye.Snippet&&(r.insertTextRules=g.languages.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))}}]),e}();function pn(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function vn(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function mn(e){if(e)return new g.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function bn(e){var n=g.languages.CompletionItemKind;switch(e){case _e.Text:return n.Text;case _e.Method:return n.Method;case _e.Function:return n.Function;case _e.Constructor:return n.Constructor;case _e.Field:return n.Field;case _e.Variable:return n.Variable;case _e.Class:return n.Class;case _e.Interface:return n.Interface;case _e.Module:return n.Module;case _e.Property:return n.Property;case _e.Unit:return n.Unit;case _e.Value:return n.Value;case _e.Enum:return n.Enum;case _e.Keyword:return n.Keyword;case _e.Snippet:return n.Snippet;case _e.Color:return n.Color;case _e.File:return n.File;case _e.Reference:return n.Reference}return n.Property}function kn(e){if(e)return{range:mn(e.range),text:e.newText}}var Cn=function(){function e(n){Object(o.a)(this,e),this._worker=n}return Object(a.a)(e,[{key:"provideHover",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),pn(n))})).then((function(e){if(e)return{range:mn(e.range),contents:wn(e.contents)}}))}}]),e}();function _n(e){return"string"===typeof e?{value:e}:(n=e)&&"object"===typeof n&&"string"===typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var n}function wn(e){if(e)return Array.isArray(e)?e.map(_n):[_n(e)]}var yn=function(){function e(n){Object(o.a)(this,e),this._worker=n}return Object(a.a)(e,[{key:"provideDocumentSymbols",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:En(e.kind),range:mn(e.location.range),selectionRange:mn(e.location.range),tags:[]}}))}))}}]),e}();function En(e){var n=g.languages.SymbolKind;switch(e){case We.File:return n.Array;case We.Module:return n.Module;case We.Namespace:return n.Namespace;case We.Package:return n.Package;case We.Class:return n.Class;case We.Method:return n.Method;case We.Property:return n.Property;case We.Field:return n.Field;case We.Constructor:return n.Constructor;case We.Enum:return n.Enum;case We.Interface:return n.Interface;case We.Function:return n.Function;case We.Variable:return n.Variable;case We.Constant:return n.Constant;case We.String:return n.String;case We.Number:return n.Number;case We.Boolean:return n.Boolean;case We.Array:return n.Array}return n.Function}var An=function(){function e(n){Object(o.a)(this,e),this._worker=n}return Object(a.a)(e,[{key:"provideDocumentFormattingEdits",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,In(n)).then((function(e){if(e&&0!==e.length)return e.map(kn)}))}))}}]),e}(),xn=function(){function e(n){Object(o.a)(this,e),this._worker=n}return Object(a.a)(e,[{key:"provideDocumentRangeFormattingEdits",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.format(i.toString(),vn(n),In(t)).then((function(e){if(e&&0!==e.length)return e.map(kn)}))}))}}]),e}();function In(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Sn=function(){function e(n){Object(o.a)(this,e),this._worker=n}return Object(a.a)(e,[{key:"provideDocumentColors",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:mn(e.range)}}))}))}},{key:"provideColorPresentations",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,vn(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=kn(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(kn)),n}))}))}}]),e}(),Tn=function(){function e(n){Object(o.a)(this,e),this._worker=n}return Object(a.a)(e,[{key:"provideFoldingRanges",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=function(e){switch(e){case L.Comment:return g.languages.FoldingRangeKind.Comment;case L.Imports:return g.languages.FoldingRangeKind.Imports;case L.Region:return g.languages.FoldingRangeKind.Region}return}(e.kind)),n}))}))}}]),e}();var jn,On=function(){function e(n){Object(o.a)(this,e),this._worker=n}return Object(a.a)(e,[{key:"provideSelectionRanges",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),n.map(pn))})).then((function(e){if(e)return e.map((function(e){for(var n=[];e;)n.push({range:mn(e.range)}),e=e.parent;return n}))}))}}]),e}();function Ln(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Rn(e){return 10===e||13===e||8232===e||8233===e}function Mn(e){return e>=48&&e<=57}(jn||(jn={})).DEFAULT={allowTrailingComma:!1};var Pn=function(e,n){void 0===n&&(n=!1);var t=e.length,r=0,i="",o=0,a=16,s=0,u=0,c=0,d=0,l=0;function f(n,t){for(var i=0,o=0;i<n||!t;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}r++,i++}return i<n&&(o=-1),o}function g(){if(i="",l=0,o=r,u=s,d=c,r>=t)return o=t,a=17;var n=e.charCodeAt(r);if(Ln(n)){do{r++,i+=String.fromCharCode(n),n=e.charCodeAt(r)}while(Ln(n));return a=15}if(Rn(n))return r++,i+=String.fromCharCode(n),13===n&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,c=r,a=14;switch(n){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var n="",i=r;;){if(r>=t){n+=e.substring(i,r),l=2;break}var o=e.charCodeAt(r);if(34===o){n+=e.substring(i,r),r++;break}if(92!==o){if(o>=0&&o<=31){if(Rn(o)){n+=e.substring(i,r),l=2;break}l=6}r++}else{if(n+=e.substring(i,r),++r>=t){l=2;break}switch(e.charCodeAt(r++)){case 34:n+='"';break;case 92:n+="\\";break;case 47:n+="/";break;case 98:n+="\b";break;case 102:n+="\f";break;case 110:n+="\n";break;case 114:n+="\r";break;case 116:n+="\t";break;case 117:var a=f(4,!0);a>=0?n+=String.fromCharCode(a):l=4;break;default:l=5}i=r}}return n}(),a=10;case 47:var g=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<t&&!Rn(e.charCodeAt(r));)r++;return i=e.substring(g,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var p=t-1,v=!1;r<p;){var m=e.charCodeAt(r);if(42===m&&47===e.charCodeAt(r+1)){r+=2,v=!0;break}r++,Rn(m)&&(13===m&&10===e.charCodeAt(r)&&r++,s++,c=r)}return v||(r++,l=1),i=e.substring(g,r),a=13}return i+=String.fromCharCode(n),r++,a=16;case 45:if(i+=String.fromCharCode(n),++r===t||!Mn(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var n=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&Mn(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&Mn(e.charCodeAt(r))))return l=3,e.substring(n,r);for(r++;r<e.length&&Mn(e.charCodeAt(r));)r++}var t=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&Mn(e.charCodeAt(r))){for(r++;r<e.length&&Mn(e.charCodeAt(r));)r++;t=r}else l=3;return e.substring(n,t)}(),a=11;default:for(;r<t&&h(n);)r++,n=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(n),r++,a=16}}function h(e){if(Ln(e)||Rn(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,i="",o=0,a=16,l=0},getPosition:function(){return r},scan:n?function(){var e;do{e=g()}while(e>=12&&e<=15);return e}:g,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return l}}};function Fn(e){return{getInitialState:function(){return new nt(null,null,!1,null)},tokenize:function(n,t){return function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=0,o=!1;switch(t.scanError){case 2:n='"'+n,i=1;break;case 1:n="/*"+n,i=2}var a=Pn(n),s=t.lastWasColon,u=t.parents,c={tokens:[],endState:t.clone()};for(;;){var d=r+a.getPosition(),l="",f=a.scan();if(17===f)break;if(d===r+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+n.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,f){case 1:u=et.push(u,0),l=Un,s=!1;break;case 2:u=et.pop(u),l=Un,s=!1;break;case 3:u=et.push(u,1),l=Wn,s=!1;break;case 4:u=et.pop(u),l=Wn,s=!1;break;case 6:l=Vn,s=!0;break;case 5:l=Bn,s=!1;break;case 8:case 9:l=Kn,s=!1;break;case 7:l=zn,s=!1;break;case 10:var g=u?u.type:0;l=s||1===g?qn:Xn,s=!1;break;case 11:l=Hn,s=!1}if(e)switch(f){case 12:l=$n;break;case 13:l=Jn}c.endState=new nt(t.getStateData(),a.getTokenError(),s,u),c.tokens.push({startIndex:d,scopes:l})}return c}(e,n,t)}}}var Dn,Nn,Un="delimiter.bracket.json",Wn="delimiter.array.json",Vn="delimiter.colon.json",Bn="delimiter.comma.json",Kn="keyword.json",zn="keyword.json",qn="string.value.json",Hn="number.json",Xn="string.key.json",Jn="comment.block.json",$n="comment.line.json";(Nn=Dn||(Dn={}))[Nn.Object=0]="Object",Nn[Nn.Array=1]="Array";var Qn,Gn,Yn,Zn,et=function(){function e(n,t){Object(o.a)(this,e),this.parent=n,this.type=t}return Object(a.a)(e,null,[{key:"pop",value:function(e){return e?e.parent:null}},{key:"push",value:function(n,t){return new e(n,t)}},{key:"equals",value:function(e,n){if(!e&&!n)return!0;if(!e||!n)return!1;for(;e&&n;){if(e===n)return!0;if(e.type!==n.type)return!1;e=e.parent,n=n.parent}return!0}}]),e}(),nt=function(){function e(n,t,r,i){Object(o.a)(this,e),this._state=n,this.scanError=t,this.lastWasColon=r,this.parents=i}return Object(a.a)(e,[{key:"clone",value:function(){return new e(this._state,this.scanError,this.lastWasColon,this.parents)}},{key:"equals",value:function(n){return n===this||!!(n&&n instanceof e)&&(this.scanError===n.scanError&&this.lastWasColon===n.lastWasColon&&et.equals(this.parents,n.parents))}},{key:"getStateData",value:function(){return this._state}},{key:"setStateData",value:function(e){this._state=e}}]),e}();(Gn=Qn||(Qn={}))[Gn.None=0]="None",Gn[Gn.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",Gn[Gn.UnexpectedEndOfString=2]="UnexpectedEndOfString",Gn[Gn.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",Gn[Gn.InvalidUnicode=4]="InvalidUnicode",Gn[Gn.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",Gn[Gn.InvalidCharacter=6]="InvalidCharacter",(Zn=Yn||(Yn={}))[Zn.OpenBraceToken=1]="OpenBraceToken",Zn[Zn.CloseBraceToken=2]="CloseBraceToken",Zn[Zn.OpenBracketToken=3]="OpenBracketToken",Zn[Zn.CloseBracketToken=4]="CloseBracketToken",Zn[Zn.CommaToken=5]="CommaToken",Zn[Zn.ColonToken=6]="ColonToken",Zn[Zn.NullKeyword=7]="NullKeyword",Zn[Zn.TrueKeyword=8]="TrueKeyword",Zn[Zn.FalseKeyword=9]="FalseKeyword",Zn[Zn.StringLiteral=10]="StringLiteral",Zn[Zn.NumericLiteral=11]="NumericLiteral",Zn[Zn.LineCommentTrivia=12]="LineCommentTrivia",Zn[Zn.BlockCommentTrivia=13]="BlockCommentTrivia",Zn[Zn.LineBreakTrivia=14]="LineBreakTrivia",Zn[Zn.Trivia=15]="Trivia",Zn[Zn.Unknown=16]="Unknown",Zn[Zn.EOF=17]="EOF";var tt=function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(e,r,i){var a;return Object(o.a)(this,t),(a=n.call(this,e,r,i.onDidChange))._disposables.push(g.editor.onWillDisposeModel((function(e){a._resetSchema(e.uri)}))),a._disposables.push(g.editor.onDidChangeModelLanguage((function(e){a._resetSchema(e.model.uri)}))),a}return Object(a.a)(t,[{key:"_resetSchema",value:function(e){this._worker().then((function(n){n.resetSchema(e.toString())}))}}]),t}(fn);function rt(e){var n=[],t=[],r=new ce(e);n.push(r);var i=function(){return r.getLanguageServiceWorker.apply(r,arguments)};function o(){var n=e.languageId,r=e.modeConfiguration;ot(t),r.documentFormattingEdits&&t.push(g.languages.registerDocumentFormattingEditProvider(n,new An(i))),r.documentRangeFormattingEdits&&t.push(g.languages.registerDocumentRangeFormattingEditProvider(n,new xn(i))),r.completionItems&&t.push(g.languages.registerCompletionItemProvider(n,new hn(i,[" ",":",'"']))),r.hovers&&t.push(g.languages.registerHoverProvider(n,new Cn(i))),r.documentSymbols&&t.push(g.languages.registerDocumentSymbolProvider(n,new yn(i))),r.tokens&&t.push(g.languages.setTokensProvider(n,Fn(!0))),r.colors&&t.push(g.languages.registerColorProvider(n,new Sn(i))),r.foldingRanges&&t.push(g.languages.registerFoldingRangeProvider(n,new Tn(i))),r.diagnostics&&t.push(new tt(n,i,e)),r.selectionRanges&&t.push(g.languages.registerSelectionRangeProvider(n,new On(i)))}o(),n.push(g.languages.setLanguageConfiguration(e.languageId,at));var a=e.modeConfiguration;return e.onDidChange((function(e){e.modeConfiguration!==a&&(a=e.modeConfiguration,o())})),n.push(it(t)),it(n)}function it(e){return{dispose:function(){return ot(e)}}}function ot(e){for(;e.length;)e.pop().dispose()}var at={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);