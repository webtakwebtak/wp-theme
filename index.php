<?php get_header(); ?>

<div class="container">
    <div class="row">

        <h1>Hello world!</h1>

        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                the_content();
            endwhile;
        endif;
        ?>

    </div>
</div>

<?php get_footer(); ?>
