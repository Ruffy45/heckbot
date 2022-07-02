function getBotResponse(input) {
    const keywords = ["web","development","app","machine","learning","iot","cyber","security","cloud","computing"];
    //standardization
    input = input.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '')
    const word = input.split(" ");
    const final = [];
    var n = [];
    words = word.map(v => v.toLowerCase());
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < keywords.length; j++) {
            if (words[i] == keywords[j]) {
                final[i] = keywords[j]
                var n = final.filter(value => Object.keys(value).length !== 0);
            }
        }
    }
    n = n.join(" ")
    if (n.length == 0) {
        result = "x";
    }
    else {
        result = n;
    }
    //Start of dictionary that stores standardized inputs and results
    var1="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
    
    
    
    var dict = {
        "web development": "Here is a playlist on Web Development: https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n, Here are some sites for reference:https://www.freecodecamp.org/ and also https://www.geeksforgeeks.org/",
        "app development": "Here is a playlist on: https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd",
        "iot": "Here is a playlist on: https://www.youtube.com/watch?v=APH6Nrar27w&list=PLYwpaL_SFmcB8fDd64B8SkJiPpEIzpCzC",
        "cyber security": "Here is a playlist on: https://www.youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII",
        "cloud computing": "Here is a playlist on: https://www.youtube.com/c/5MinutesEngineering",
        "machine learning": "Here is a playlist on: https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe",
       
        "else": "Try another spelling or some other query!"
    }
    return dict[n] || dict["else"]

}