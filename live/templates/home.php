    
    <div class="content">	
        <div id="carousel">
            <div class="stage">
            	<div class="owl-carousel owl-theme">
            <?php foreach ($banners as $idx => $item) : ?>
                <?php if (!is_file($_SERVER['DOCUMENT_ROOT'].$banner_path.$item->image_src)) continue; ?>
                    <div class="item">                    	
                        <img src="<?=site_url($banner_path.$item->image_src)?>" />
                        <h2 class="slide-title colour1"><?=$item->title?></h2>
                    <?php if (!empty($item->slug)) : ?>    
                        <div class="slide-link">
                        	<a href="<?=site_url($item->slug)?>">Read the full article</a>
                        </div>
                    <?php endif;?>
                    </div>
            <?php endforeach;?> 
                </div>
            </div>
            <div class="controls">
                <ul>
                <?php reset($banners);?>
				<?php $liClasses = array("firstLI", "", "lastLi"); ?>   
                <?php foreach ($banners as $idx => $item) : ?>
                    <?php if (!is_file($_SERVER['DOCUMENT_ROOT'].$banner_th_path.$item->image_src)) continue; ?>                    
                    <li class="<?= $liClasses[$idx] ?>"><a href="#" class="button button-<?=($idx+1).($idx==0 ? ' active':'')?>" style="background: url(<?=site_url($banner_th_path.$item->image_src)?>)"></a></li>
                <?php endforeach;?> 
                </ul>
            </div>
        </div>
    </div>
    