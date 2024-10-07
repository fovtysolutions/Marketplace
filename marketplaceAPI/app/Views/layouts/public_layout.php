<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gritupp</title>
    <link rel="icon" href="<?=base_url()?>/images/favicon1.png" type="image/gif" sizes="20x20">
    <?= $this->include("outsideCDN/bootstrap") ?>
    <?= $this->include("outsideCDN/fontcdn") ?>
    <link href="<?=base_url()?>/css/style.css" rel="stylesheet" type="text/css" />
    <link href="<?=base_url()?>/css/banner_styling.css" rel="stylesheet" type="text/css" />
    <link href="<?=base_url()?>/css/all.css" rel="stylesheet" type="text/css" />
</head>
    <body>
        <div class="page-wrapper">
            <?= $this->include("header") ?>
            <?= $this->renderSection("content") ?>
            <?= $this->include("footer") ?>
        </div>
        <script 
            src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
            crossorigin="anonymous" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"
        >
        </script>
        <script src="<?=base_url()?>/js/app.js" type="text/javascript"></script>
    </body>
</html>