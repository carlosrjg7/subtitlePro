<?php
get_header();
global $post;
$thumbID = get_post_thumbnail_id($post->ID);
$imgDestacada = wp_get_attachment_url($thumbID);
?>
    <div class="pageSection">
    <div class="headerPage">
        <div class="imgDestacada">
            <img src="<?php echo $imgDestacada; ?>" alt="">
        </div>
        <div class="titulo">
            <h1><?php echo get_the_title(); ?></h1>
        </div>
    </div>
    <div class="paginas col-12">
        <div class="row ">
            <div class="col-12">
                <?php
                if (have_posts()) :
                    while (have_posts()) :
                        the_post();
                        the_content();
                    endwhile;
                endif; ?>
            </div>
        </div>
    </div>
<?php
get_footer();
