<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Buntings D2 application</title>
    <link rel="icon" type="image/x-icon" href="./images/ICON/icon.ico">

    <link rel="stylesheet" type="text/css" href="css/main.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body>

    <div class="structure">

        <label class="structure__hamburger" for="hamburgerOpen">
            <div class="structure__hamburger--line"></div>
        </label>
        <input type="checkbox" class="structure__hamburger--button" name="hamburgerOpen" id="hamburgerOpen" value="2">

        <div class="structure__hamburger--menu">
            <div class="structure__hamburger--backdrop"></div>
            <div class="structure__hamburger--top">
                <div class="structure__hamburger--name jazzyText">
                    <div>Alex Bunting</div>
                </div>

                <div class="structure__line"></div>

                <div class="structure__buttons">
                    <div class="structure__button" data-pointer="main.php">Home</div>
                    <div class="structure__button" data-pointer="uiux.php?project=0">Front End Development</div>
                    <div class="structure__button" data-pointer="coding.php">Technical Skills</div>
                    <div class="structure__button" data-pointer="soft.php">Soft Skills</div>
                </div>
            </div>
        </div>

        <div class="structure__menu">
            <div class="structure__name jazzyText">
                <div class="structure__name--name">Alex</div>
                <div class="structure__name--name">Bunting</div>
            </div>

            <div class="structure__line"></div>

            <div class="structure__dtwo">Application for the Junior Website Developer position with D2 Creative.</div>

            <div class="structure__line"></div>

            <div class="structure__buttons">
                <div class="structure__button" data-pointer="main.php">Home</div>
                <div class="structure__button" data-pointer="uiux.php?project=0">Front End Development</div>
                <div class="structure__button" data-pointer="coding.php">Technical Skills</div>
                <div class="structure__button" data-pointer="soft.php">Soft Skills</div>
            </div>

        </div>

        <div id="load" class="structure__load">
            <div class="loader">
                <div class="loader__background"></div>
                <div class="loader__front">
                    <div class="loader__spinner"></div>
                </div>
            </div>

            <div id="load__content" class="structure__load--content"></div>
        </div>
    </div>

    <script src="./javascript/js.js"></script>

</body>

</html>