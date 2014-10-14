/**
liubowen082@163.com
2014-8-15
pc
*/

$('#content').on('mouseover','li',function(){
	$('#content li').removeClass('over');
	$(this).addClass('over')
	 })

$('#content').on('mouseout','li',function(){
	$(this).removeClass('over');
	 })


//  banner


function banner(){
	this.opt = {
		el:$("#banner"),
		isShow:0
		}
	this.opt.left = this.opt.el.find('[node-type="left"]');
	this.opt.right = this.opt.el.find('[node-type="right"]');
	this.opt.icon = this.opt.el.find('[node-type="icons"] a');
	this.opt.imgList = this.opt.el.find('[node-type="imgLists"]');
	this.opt.imgLists = this.opt.el.find('[node-type="imgLists"] [node-type="imgList"]');
	this.opt.len = this.opt.imgLists.length;
	this.isShow = this.opt.isShow;
	this.w = this.opt.el.width();
	this._w = this.opt.imgLists.eq(0).width();
	this._tew_ = (this.w - this._w)/2;
	this.init();
	}
banner.prototype = {
	init : function(){
		this.addEvent();
		this.show(this.isShow)
		
		
		},
	
	addEvent: function(){
		var that = this;
		this.opt.right.on('click',function(){
			
			if(that.isShow>=that.opt.len -1){
				that.isShow = 0;
				}else{
					that.isShow++;
					}
			
			
			that.show(that.isShow)
			});
		this.opt.left.on('click',function(){
			
			if(that.isShow <= 0){
				that.isShow = that.opt.len-1;
				}else{
					that.isShow--;
					}
			that.show(that.isShow)
			})
		
		this.opt.icon.on('click',function(){
							console.log($(this).parent())			  
				var index = $(this).index()
				that.isShow= index;					  
				that.show(that.isShow)						  
										  })
		
		},
	show : function(num){
		var next = ((this._w+40) * num - this._tew_)*-1;
		var that = this;
		this.opt.imgList.animate({"left":next+'px'},function(){
															 
			that.opt.imgLists.addClass('out')
			that.opt.imgLists.eq(num).removeClass('out');
			that.opt.icon.removeClass('over')
			that.opt.icon.eq(num).addClass('over')
															 
		})
		
		}
	
	
	
	
	}
	
	new banner();
	
(function(){
	var temp =  function(template, data){
		return template.replace(/#\{(.+?)\}/ig, function(){
			var key = arguments[1].replace(/\s/ig, '');
			var ret = arguments[0];
			var list = key.split('||');
			for (var i = 0, len = list.length; i < len; i += 1) {
				if (/^default:.*$/.test(list[i])) {
					ret = list[i].replace(/^default:/, '');
					break;
				}
				else 
					if (data[list[i]] !== undefined) {
						ret = data[list[i]];
						break;
					}
			}
			return ret;
		});
	};

	var page = 0 ,pageSize = $(".addMore").attr('pagesize') || 6;
	
	$(".addMore").on('click',function(){
			page++;
			var index = $(this).attr('index'),that = this;
			var pageSize = $(".addMore").attr('pagesize') || 6;
			var config = [
						 
						 {
							 url : 'http://testenergy.caixin.com/api/getenergymore.php',
							 temp : '<li>\
										<a href="#{url}" target="_blank">\
											<img src="#{pic}">\
										<div class="mainConLiu">\
												<h2>#{title}</h2>\
												<p>#{desc}</p>\
												<span>#{time}</span>\
												<span class="a_5">#{pv}</span>\
												<span class="a_6"></span>\
										</div>\
										</a>\
									</li>'
							 
							 
							 
							 
							 },
						{
							 url : 'http://testlife.caixin.com/api/getLifeIndexMore.php',
							temp :'<li>\
						            	<a href="#{url}" target="_blank">\
											<img src="#{pic}">\
						                <div class="mainConLiu">\
						                    <h2>#{title}</h2>\
						                </div>\
						                <span class="txt">\
						                	<span class="bg_1"><span class="ic_2"></span>#{pv}</span>\
						                	<span class="title">LIFE</span> #{time}<br />\
						                    #{desc}\
						                </span>\
						            	</a>\
						            </li>'
							 
							 
							 
							 
							 }
						 ]
			$.ajax({
				  url: config[index].url,
				  cache: false,
				  dataType:'jsonp',
				  data:{
					  page : page,
					  num:pageSize
					  },
				  success: function(json){
					  if(json.datas){
						  var str = "";
						  $.each(json.datas,function(i,a){
								a.desc = a.desc.substr(0,60)+'...';
								str+= temp(config[index].temp,a)	
							});
						  $(that).prev().append(str)
						  }
						if(json.cp*pageSize >= json.total){
							$(that).remove();
							
							
							}
					  
				  }
				});		  
									  
			return false;				  
			})	  
		  
		  
		  
		  
})()