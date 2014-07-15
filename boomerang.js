(function(){var e;e=function(){function e(e){this.options=e!=null?e:{},this.options.localMode?this.cssUrl="http://localhost:8080/lib/boomerang.css":this.cssUrl="https://s3.amazonaws.com/assets.heroku.com/boomerang/boomerang.css",this.app=this.options.app,this.addon=this.options.addon,this.head=document.querySelector("head"),this.body=document.querySelector("body"),this.attachStylesheet(),this.attachDiv(),window.addEventListener("click",this.hideMenu),document.querySelector("#heroku-boomerang a.toggler").addEventListener("click",this.toggleMenu),this.body.classList.add("heroku-boomerang-loaded")}return e.prototype.attachStylesheet=function(){var e;return e=document.createElement("link"),e.type="text/css",e.rel="stylesheet",e.href=this.cssUrl,this.head.appendChild(e)},e.prototype.attachDiv=function(){return this.div=document.createElement("div"),this.div.className="boomerang",this.div.id="heroku-boomerang",this.div.innerHTML='<a href="#" class="toggler logo">Heroku Add-ons</a>',this.app!=null&&this.addon!=null?this.div.innerHTML+='<ul>\n  <li class="big"><a href="http://'+this.app+'.herokuapp.com">'+this.app+'</a></li>\n  <li class="sub"><a href="https://dashboard.heroku.com/apps/'+this.app+'/resources">Resources</a></li>\n  <li class="sub"><a href="https://dashboard.heroku.com/apps/'+this.app+'/activity">Activity</a></li>\n  <li class="sub"><a href="https://dashboard.heroku.com/apps/'+this.app+'/collaborators">Collaborators</a></li>\n  <li class="sub"><a href="https://dashboard.heroku.com/apps/'+this.app+'/settings">Settings</a></li>\n\n  <li class="big"><a href="https://addons.heroku.com/'+this.addon+'">'+this.addon+'</a></li>\n  <li class="sub"><a href="https://devcenter.heroku.com/articles/'+this.addon+'">Docs</a></li>\n</ul>':this.div.innerHTML+='<ul>\n  <li><a href="https://dashboard.heroku.com">My Apps</a></li>\n  <li><a href="https://addons.heroku.com">Add-ons</a></li>\n  <li><a href="https://devcenter.heroku.com">Documentation</a></li>\n  <li><a href="https://help.heroku.com">Support</a></li>\n</ul>',this.body.appendChild(this.div)},e.prototype.hideMenu=function(){var e;e=document.querySelector("#heroku-boomerang");if(e)return e.classList.remove("active")},e.prototype.toggleMenu=function(e){e==null&&(e=null),document.querySelector("#heroku-boomerang").classList.toggle("active");if(e)return e.stopPropagation()},e.init=function(t){return t==null&&(t={}),window.boomerang=new e(t)},e.reset=function(){var e,t;e=document.getElementById("boomerang");if(e){t=e.querySelector("a.toggler"),t&&t.removeEventListener("click",this.toggleMenu),window.removeEventListener("click",this.hideMenu);if(e)return e.parentNode.removeChild(e)}},e}(),window.Boomerang=e,document.querySelector("[data-app]")&&document.querySelector("[data-addon]")&&(document.readyState==="complete"?e.init():document.addEventListener("DOMContentLoaded",function(){return e.init()}))}).call(this);