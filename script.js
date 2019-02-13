
    // get a random number between 0 and 499
    //
    //var randNum = Math.floor((Math.random() * 3) + 1);

    // An array of URL's
    var randURLs = [
        "http://bit.ly/engver4",
        "http://bit.ly/engver3",
        "http://bit.ly/engver2"
    ];

    window.location.href = randURLs[Math.floor(Math.random() * 3)];
    //window.open(randURLs[randNum]);
