!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.XRGeospatialAnchor=t()}(this,function(){"use strict";let e="undefined"!=typeof Float32Array?Float32Array:Array;Math.PI;function t(){let t=new e(16);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function r(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function i(){let t=new e(3);return e!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function o(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function a(e,t,r){let i=t[0],o=t[1],a=t[2],n=r[3]*i+r[7]*o+r[11]*a+r[15];return n=n||1,e[0]=(r[0]*i+r[4]*o+r[8]*a+r[12])/n,e[1]=(r[1]*i+r[5]*o+r[9]*a+r[13])/n,e[2]=(r[2]*i+r[6]*o+r[10]*a+r[14])/n,e}!function(){let e=i()}();function n(e){this._token=e.token,this._url=e.url;var t=Cesium.Resource.createIfNeeded(e.url);this._resource=t,this._tilingScheme=e.tilingScheme,Cesium.defined(this._tilingScheme)||(this._tilingScheme=new Cesium.WebMercatorTilingScheme({numberOfLevelZeroTilesX:1,numberOfLevelZeroTilesY:1,ellipsoid:Cesium.defaultValue(e.ellipsoid,Cesium.Ellipsoid.WGS84)})),this._heightmapWidth=64,this._levelZeroMaximumGeometricError=Cesium.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(this._tilingScheme.ellipsoid,this._heightmapWidth,this._tilingScheme.getNumberOfXTilesAtLevel(0)),this._proxy=e.proxy,this._terrainDataStructure={heightScale:1/256,heightOffset:-32768,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0,lowestEncodedHeight:0,highestEncodedHeight:16777215},this._errorEvent=new Cesium.Event;var r=e.credit;"string"==typeof r&&(r=new Cesium.Credit(r)),this._credit=r,this._readyPromise=Promise.resolve(!0),this._terrainPromises={}}Object.defineProperties(n.prototype,{errorEvent:{get:function(){return this._errorEvent}},credit:{get:function(){return this._credit}},tilingScheme:{get:function(){return this._tilingScheme}},ready:{get:function(){return!0}},readyPromise:{get:function(){return this._readyPromise}},hasWaterMask:{get:function(){return!1}},hasVertexNormals:{get:function(){return!1}}}),n.prototype.requestTileGeometry=function(e,t,r,i){var o=this._url+r+"/"+e+"/"+t+".png",a=this._proxy;Cesium.defined(a)&&(o=a.getURL(o));var n=this._resource.getDerivedResource({url:o,queryParameters:{cesium:!0},request:i}).fetchImage({preferImageBitmap:!0});if(Cesium.defined(n)){var s=this;return n.then(function(e){return new Cesium.HeightmapTerrainData({buffer:Cesium.getImagePixels(e,s._heightmapWidth,s._heightmapWidth),width:s._heightmapWidth,height:s._heightmapWidth,childTileMask:r<16?0:15,structure:s._terrainDataStructure})})}},n.prototype.getLevelMaximumGeometricError=function(e){return this._levelZeroMaximumGeometricError/(1<<e)},n.prototype.getTileDataAvailable=function(e,t,r){return r<16||void 0};const s="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};var c=null,l=null;if(void 0!==s.XRAnchor)c=s.XRAnchor;if(void 0!==s.XRDevice)l=s.XRDevice;const u={enableHighAccuracy:!0,maximumAge:3e4},d=t();var h=i(),m=i(),f=t(),p=function(){let t=new e(9);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}(),g=null,v=null,_=null,C=null,w=null,y=[],A=null,E=t(),x=t(),G=null,L=!1,T=null,O=null,M=!1,S=null,P=0;function R(){return L?O:C}async function F(e){var t=Cesium.Cartographic.clone(e,t);return await D(t),t.height}var b=null;function D(e){return Promise.resolve(Cesium.sampleTerrain(b,15,[e]).then(e=>e[0]))}function N(e,t){try{e.dispatchEvent("newGeoAnchor",{oldAnchor:e,newAnchor:t})}catch(e){console.error("newGeoAnchor event error",e)}}function X(e,t){!function(e){A(e,void 0,x),Cesium.Matrix4.inverseTransformation(x,E)}(e);for(let e=0;e<y.length;e++){const t=y[e];try{t()}catch(e){console.error("lazy finalization of geoanchor failed: ",e)}}y=[];try{t.dispatchEvent("updateCartesian")}catch(e){console.error("updateCartesian event error",e)}}var q=!1,W=0,k=0;async function I(e){if(q){var t=e-k;if(k+=t,_){_.coords.altitude+=t,(await v.requestFrameOfReference("head-model")).getTransformTo(G,f),r(h,f),r(m,R().modelMatrix),o(h,h,m);var i=h[1];a(m,h,_._localToFixed),g=Cesium.Cartesian3.unpack(m,0,g);let n=Cesium.Cartographic.fromCartesian(g),s=i,c=await F(n)+e-_.coords.altitude;h[0]=h[2]=0,h[1]=t,h[1]+=c-s,a(w,h,_._localToFixed),L||X(w,C)}}}var H=!1,Z=!1;async function j(e,r=!1){if(!H&&(!_||Z||r||_.coords.accuracy>e.coords.accuracy||_.coords.accuracy==e.coords.accuracy&&_.coords.altitudeAccuracy>e.coords.altitudeAccuracy)){H=!0,e={timestamp:e.timestamp,coords:{altitude:e.coords.altitude,latitude:e.coords.latitude,longitude:e.coords.longitude,accuracy:e.coords.accuracy,altitudeAccuracy:e.coords.altitudeAccuracy,heading:e.coords.heading,speed:e.coords.speed}};try{if(q){W=e.coords.altitude;let r=Cesium.Cartographic.fromDegrees(e.coords.longitude,e.coords.latitude,e.coords.altitude);await D(r),e.coords.altitude=r.height+k,e.cartesian=Cesium.Cartesian3.fromDegrees(e.coords.longitude,e.coords.latitude,e.coords.altitude),e._fixedToLocal=t(),e._localToFixed=t(),A(e.cartesian,void 0,e._localToFixed),Cesium.Matrix4.inverseTransformation(e._localToFixed,e._fixedToLocal)}console.log("new geo anchor: ",e.coords);let r=await v.requestFrameOfReference("head-model"),i=await v.addAnchor(d,r);Z=!1,i.addEventListener("remove",z),i._isInternalGeoAnchor=!0,!L&&C&&(N(C,i),await v.removeAnchor(C)),C=i,_=e,w=await async function(e,t,r=null){if(!r){let i=Cesium.Cartographic.fromDegrees(e,t);r=await F(i)}return Cesium.Cartesian3.fromDegrees(e,t,r)}(e.coords.longitude,e.coords.latitude,e.coords.altitude),L||X(w,C),H=!1}catch(e){H=!1,console.error("error setting the geospatial origin: ",e)}}}function z(){console.log("geoAnchor deleted by system, will use next geospatial report"),Z=!0}function U(e){e.code,console.error("watchPosition failed: ",e.message)}function V(e){_?e():y.push(e)}class B extends c{constructor(e){let t="geoAnchor-"+(new Date).getTime()+"-"+Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);super(d,t),this._cartographic=e,this._localCartesian=i(),this._cartesian=Cesium.Cartographic.toCartesian(e),this._newGeoOriginNotifier=this._newGeoAnchor.bind(this),this._updateCartesianNotifier=this._updateLocalCartesian.bind(this),this._updateLocalNotifier=this._updateLocalMatrix.bind(this);let r=R();r.addEventListener("newGeoAnchor",this._newGeoOriginNotifier),r.addEventListener("updateCartesian",this._updateCartesianNotifier),r.addEventListener("update",this._updateLocalNotifier),this._updateLocalCartesian()}_newGeoAnchor(e){e.oldAnchor.removeEventListener("newGeoAnchor",this._newGeoOriginNotifier),e.oldAnchor.removeEventListener("updateCartesian",this._updateCartesianNotifier),e.oldAnchor.removeEventListener("update",this._updateLocalNotifier),e.newAnchor.addEventListener("newGeoAnchor",this._newGeoOriginNotifier),e.newAnchor.addEventListener("updateCartesian",this._updateCartesianNotifier),e.newAnchor.addEventListener("update",this._updateLocalNotifier)}_updateLocalCartesian(){var e,t,r,i;e=h,t=this._cartesian.x,r=this._cartesian.y,i=this._cartesian.z,e[0]=t,e[1]=r,e[2]=i,a(this._localCartesian,h,E),M&&(function(e,t){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10]}(p,S.modelMatrix),function(e,t,r){let i=t[0],o=t[1],a=t[2];e[0]=i*r[0]+o*r[3]+a*r[6],e[1]=i*r[1]+o*r[4]+a*r[7],e[2]=i*r[2]+o*r[5]+a*r[8]}(this._localCartesian,this._localCartesian,p)),this._updateLocalMatrix()}_updateLocalMatrix(){var e,t,i;r(h,R().modelMatrix),e=h,t=h,i=this._localCartesian,e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],function(e,t){e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1}(f,h),super.updateModelMatrix(f,R.timeStamp)}get cartographic(){return null==this._cartographic&&(this._cartographic=Cesium.Cartographic.fromCartesian(this._cartesian)),this._cartographic}set cartographic(e){this._cartographic=e,this._cartesian=Cesium.Cartographic.toCartesian(e),this._updateLocalCartesian()}get cartesian(){return this._cartesian}set cartesian(e){this._cartesian=e,this._cartographic=null,this._updateLocalCartesian()}static getGeoOriginPose(){return R()?R().modelMatrix:d}static getOriginCartesian(){}static createGeoAnchor(e){return new Promise((t,r)=>{if(!window.hasOwnProperty("Cesium")){var i="must load Cesium.js for XRGeospatialAnchor to work";console.error(i),r(i)}V(()=>{t(new B(e))})})}static useEstimatedElevation(e,t=0){return async function e(t,r){let i=function(e){return new Promise(t=>setTimeout(t,e))};if(q!=t){if(q=t,k=r,_)for(q&&(_.coords.altitude=W);_updateOrigin;)await i(1),await j(_,!0)}else e&&I(r)}(e,t)}static updateOffsetFromGround(e){return I(e)}static overrideGeoOrientation(e){M=!0,S=e,L?X(T,O):_&&X(w,C)}static overrideGeoLocation(e,t){!L&&C?N(C,t):L&&N(O,t),L=!0,X(T=e,O=t)}static overrideGeoLocationOrientation(e,t){!L&&C?N(C,t):L&&N(O,t),M=!0,S=t,L=!0,X(T=e,O=t)}static useDeviceGeolocation(){L&&C&&N(O,C),M=!1,S=null,L=!1,T=null,O=null,_&&X(w,C)}static async getDefaultElevation(e){return await F(e)}static getDeviceElevation(){return new Promise((e,t)=>{V(()=>{v.requestFrameOfReference("head-model").then(t=>{t.getTransformTo(G,f),r(h,f);let i=h[1];r(h,R().modelMatrix);let o=i-h[1];e(_.coords.altitude+o)})})})}static async getDeviceCartographic(){return new Promise((e,t)=>{V(()=>{v.requestFrameOfReference("head-model").then(t=>{t.getTransformTo(G,f),r(h,f),r(m,R().modelMatrix),o(h,h,m),a(h,h,x),g=Cesium.Cartesian3.unpack(h,0,g),e(Cesium.Cartographic.fromCartesian(g))})})})}}return void 0!==s.XRGeospatialAnchr?console.warn("XRGeospatialAnchor already defined on global."):void 0!==s.XRAnchor&&void 0!==s.XRDevice&&(!function(){var e=(l=s.XRDevice).prototype.requestSession;l.prototype.requestSession=async function(t){let r=e.bind(this),i=await r(t);if(window.hasOwnProperty("Cesium")&&t.alignEUS&&t.geolocation){const e=()=>{v=null,P&&(navigator.geolocation.clearWatch(P),P=0),_=null,C=null,L=!1,M=!1,y=[],i.removeEventListener("end",e)};i._useGeolocation=!0,i.addEventListener("end",e),await async function(e){v=e,A||(A=Cesium.Transforms.localFrameToFixedFrameGenerator("east","up")),b||(b=new n({url:"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/",requestWaterMask:!0,requestVertexNormals:!0}));try{return await e.requestFrameOfReference("head-model"),G=await e.requestFrameOfReference("eye-level"),"geolocation"in navigator&&(P=navigator.geolocation.watchPosition(j,U,u),!0)}catch(e){return console.error("Can't start geolocation to XR mapping",e),!1}}(i)}return i};var t=l.prototype.endSession;l.prototype.endSession=function(e){let r=t.bind(this)(e);return session._useGeolocation&&B.closeSession(),r};var r=l.prototype.supportsSession;l.prototype.supportsSession=async function(e={}){let t=r.bind(this),i=Object.assign({},e);var o=!1;if(e.hasOwnProperty("geolocation")&&(o=!0,delete i.geolocation),await t(e),!o||e.hasOwnProperty("alignEUS"))return!0;throw null}}(),window.XRGeospatialAnchor=B),B});
