<?php /** * Template Name: EnergyListReview */ ?>
<?php get_header(); ?>
<link rel="stylesheet" type="text/css" href="http://testenergy.caixin.com/wp-content/themes/energy/css/pc/energyListReview.css" />
<script type="text/javascript" src="http://file.caixin.com/webjs/jquery-1.11.1.min.js"></script>
<script language="javascript" src="http://file.caixin.com/webjs/common/common_v2.js"></script>
<?php
global $wpdb;
$id = get_the_ID();
$tableTerms = 'cx_wp_terms';
$tableTaxonomy = 'cx_wp_term_taxonomy';
$tableRelation = 'cx_wp_term_relationships';
$tableArticle = 'cx_wp_posts';
$tableMeta = 'cx_wp_postmeta';
$title = get_the_title( $id );

// 取文章
$queryArticle = 'select article.ID,article.post_title,post_content,article.post_excerpt,article.guid,article.post_modified from '.
					$tableArticle.' as article where 
					article.ID='.$id;
$article = $wpdb->get_results( $queryArticle , ARRAY_A );
// 相关标签
$queryTags = 'select terms.name from '.
			$tableTerms.' as terms,'.
			$tableTaxonomy. ' as taxonomy,'.
			$tableRelation.' as relation where 
			relation.object_id = '.$article[0]['ID'].' and
			taxonomy.taxonomy="post_tag" and 
			taxonomy.term_taxonomy_id = relation.term_taxonomy_id and 
			terms.term_id = taxonomy.term_id';
$arrTags = $wpdb->get_results( $queryTags , ARRAY_A );
// 小编推荐
$queryReco = 'select article.ID,article.post_title,article.guid from '.
			$tableMeta.' as meta,'.
			$tableArticle.' as article where 
			meta.meta_key="article_type" and 
			meta.meta_value="图片" and 
			meta.post_id = article.ID and 
			article.ID <> '.$id.' 
			order by article.Id desc limit 3';
$arrReco = $wpdb->get_results( $queryReco , ARRAY_A );
// 主专题数据准备
$articleContent = $article[0]['post_content'];
preg_match_all( '/<a href=\"(.*?)\".*?>(.*?)<\/a>/i' , $articleContent , $matches );
?>

<div class="liu-banner" style="height:350px;" id="wsbnBanner">
    <section>
        <div class="banner" node-type="imgLists"> 
<?php
if( is_array( $matches[2] ) && sizeof( $matches[2] ) )
{
	$i = 0;
	$size = sizeof($matches[2]);
	foreach( $matches[2] as $key => $val )
	{
		$i++;
		preg_match_all('/<\s*img\s+[^>]*?src\s*=\s*(\'|\")(.*?)\\1[^>]*?\/?\s*>/i' , $val , $vals );
		$img = $vals[2][0];
		preg_match_all('/<\s*img\s+[^>]*?title\s*=\s*(\'|\")(.*?)\\1[^>]*?\/?\s*>/i' , $val , $vals );
		$desc = $vals[2][0];
?>
            <div class="indexBanner" node-type="imgList">
                <img src="<?php echo $img;?>">
                <div class="bannerMain cf">
                    <div class="Text">
                            <?php echo $i;?>/<?php echo $size;?></div>
                    <div class="bannercont">
                        <h2>
                            <?php echo $title;?></h2>
                        <p><?php echo $desc;?></p>
                    </div>
                </div>
            </div>
<?php
	}
}
?>
        </div>
        <a class="bannerLeft" href="javascript:;" node-type="left">&lt;</a>
        <a class="bannerRight" href="javascript:;" node-type="right">&gt;</a>    </section>
</div>

<div class="liu-main cf">

    <div class="left">
<!--评论 begin-->
	<?php comments_template(); ?>
<!--评论 end-->
	</div>
<?php
$num = sizeof( $arrTags );
if( 0 < $num )
{
?>
    <div class="right">
        <div>
            <div class="title">相关标签</div>
            <div class="content">
<?php
for( $i=0 ; $i<$num ; $i++ )
{
?>
                <a href="http://energy.caixin.com/?tag=<?php echo urlencode($arrTags[$i]['name']);?>" class="label"><?php echo $arrTags[$i]['name'];?></a>
<?php
}
?>
            </div>

        </div>
<?php 
}
$num = sizeof( $arrReco );
if( 0 < $num )
{
?>
        <div class="tujian">
            <div class="title">小编推荐</div>
            <div class="tujianContent">
                <ul>
<?php
for( $i=0 ; $i<$num ; $i++ )
{
	$img = wp_get_attachment_image_src( get_post_thumbnail_id( $arrReco[$i]['ID'] ) );
?>
                    <li>
                        <a href="<?php echo $arrReco[$i]['guid'];?>"><img src="<?php echo $img;?>"></a>

                        <h2><?php echo $arrReco[$i]['post_title'];?><span class="ic_8"></span></h2>
                  </li>
                </ul>
            </div>
<?php
}
?>
        </div>
<?php
}
?>
    </div>

</div>
<div class="shareLiu">
                        <SCRIPT LANGUAGE="JavaScript">
						 <!--
						  var share_title = encodeURIComponent("“听过很多道理，依然过不好这一生。”几天前，韩寒在自己的微博如是说。还有三周，韩寒导演的电影《后会无期》将迎来首映。从作家到车手，再到如今涉足电影，韩寒的精彩，让太多人期待。财新life邀您一起，抢观《后会无期》，面见国民岳父。");
						  var share_picUrl = encodeURIComponent("http://img.caixin.com/2014-05-22/1400814973677322.jpg");
						  var share_keyword = encodeURIComponent("财新网,生活频道");
						  var share_popUpUrl = encodeURIComponent("http://life.caixin.com/?cat=736");
						  var share_description=encodeURIComponent("“听过很多道理，依然过不好这一生。”几天前，韩寒在自己的微博如是说。还有三周，韩寒导演的电影《后会无期》将迎来首映。从作家到车手，再到如今涉足电影，韩寒的精彩，让太多人期待。财新life邀您一起，抢观《后会无期》，面见国民岳父。");
						 //-->
						
						</SCRIPT> 
								<a href="javascript:;" class="share_sina" title="分享到新浪微博" onClick="caixinPostShare('tsina',share_title,share_description,share_popUpUrl,share_picUrl);"></a>
                                <a href="javascript:;" class="share_qq" title="分享到腾讯微博" onClick="caixinPostShare('qqweibo',share_title,share_description,share_popUpUrl,share_picUrl);"></a>
								<a class="jiathis_button_weixin share_weixin" title="分享到微信" href="javascript:;"></a>
                    </div>
<?php get_footer(); ?>

<script language="javascript" src="http://v2.jiathis.com/code/jia.js" charset="utf-8"></script>
<script type="text/javascript" src="http://testenergy.caixin.com/wp-content/themes/energy/js/phone_wsbnjs.js"></script>

<script type="text/javascript">
    
    $('#wsbnBanner').height($('[node-type="imgList"] img').height() + 'px');
</script>

