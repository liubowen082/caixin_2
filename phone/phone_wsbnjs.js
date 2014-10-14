/*
无所不能手机羰
*/



(function(){

var w=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

$("#wsbnBanner li").css({

    width : w + 'px'

});



function banner(){
    this.opt = {
        el:$("#wsbnBanner"),
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
        var next = ((this._w) * num - this._tew_)*-1;
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



})()