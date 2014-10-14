<?php get_header(); ?>
<script language="javascript" src="/wp-content/themes/energy/js/morearticle.js"></script>
<div class="mainCon"> 
  <!--左侧内容 begin-->
  <div class="leftBox"> 
    <!--头条 begin-->
    <?php get_template_part('toutiao'); ?>
    <!--头条 end--> 
    <!--最新 begin-->
    <div class="zuixinBox">
      <h2>最新<span>Lastest News</span></h2>
	  <div id="listarticles">
	  <?php 
	  global $postids;
	  query_posts( array('post__not_in'=>$postids,'caller_get_posts' => 1,'post_status'=>'publish','showposts' => 10 ) );?>
      <?php get_template_part('loop_www'); ?>
	  </div>
    </div>
    <!--最新 end--> 
    <!--加载更多 begin-->
	<?php $the_query = new WP_Query(array('post__not_in'=>$postids,'caller_get_posts' => 1,'post_status'=>'publish','showposts' => 1) );
	$num = $the_query->found_posts;	
	if($num>10){?>
    <div class="more" id="morearchive"><a href="javascript:void(0);" target="_self" onclick="loadMore(10,10)">加载更多</a></div>
	<?php }?>
    <!--加载更多 end--> 
  </div>
  
  <!--左侧内容 end--> 
  <!--右侧内容 begin-->
  <div class="rightBox"> 
    <!--观点 begin-->
    <?php get_template_part('sidebar_guandian'); ?>
    <!--观点 end--> 
    <!--ad begin-->
    <div class="rightAd"> 
      <script language="javascript"> 
ads_display(827)
</script> 
    </div>
    <!--ad end--> 
    
    <!--资讯 begin-->
    <!--sidebar_biaoqianyun-->
    <!--资讯 end--> 
    
    <!--内容合作 begin-->
    <!--sidebar_neironghezuo-->
    <!--内容合作 end--> 
    
    <!-- 活动进行 begin-->
	<!--sidebar_huodong-->
    <!--活动进行 end--> 
    <!--微信 begin--><div style="margin-top: 25px;"></div>
    <?php dynamic_sidebar('weiboerweima'); ?>
    <!--微信 end--> 
    <!--排行榜 begin-->
    <?php get_template_part('sidebar_hots'); ?>
    <!--排行榜 end--> 
    <!--ad begin-->
    <div class="rightAd"> 
      <script language="javascript"> 
		ads_display(828)
		</script> 
    </div>
    <!--ad end--> 
    <!--寻求创媒工场关注 begin-->
    <?php dynamic_sidebar('xunqiubaodao'); ?>
    <!--寻求创媒工场关注 end--> 
    
  </div>
  <!--右侧内容 end-->
  <div class="clear"></div>
  <!--底通广告 begin-->
  <div class="b_t_ad"><script language="javascript"> 
ads_display(829)
</script> </div>
  <!--底通广告 end--> 
</div>

<?php get_footer(); ?>