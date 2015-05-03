var ghostScripts = {};

ghostScripts.welcome =
{
  "prompt": null,
  "speak": "Hi, I'm Paulbot. Welcome to my Learninal! We will have fun today.",
  "do": null,
  "eval": null,
  "responses": [
    {
      "prompt": "I want to code",
      "speak": "Great! Hover over the black bar at the bottom and start coding.",
      "do": function() { paulbot.goTo(d3.select("strong")); },
      "responses": [
        {
          "prompt": "OK, bye.",
          "eval": "paulbot.hide();"
        }
      ]
    },
    {
      "prompt": "Show me some code",
      "speak": "Here's how to make an alert. It's pretty obnoxious, frankly.",
      "eval": "alert('heyyy')",
      "responses": [
        {
          "prompt": "How about something colorful?",
          "speak": "So true. Here, look, let's mess with the article styles:",
          "eval": "roulette();",
          "responses": [
            {
              "prompt": "Wow u are cool after all. Bye",
              "eval": "paulbot.hide();"
            }
          ]
        },
        {
          "prompt": "How about something destructive?",
          "speak": "OK cool well now we'll just delete random things on the page.",
          "eval": "destroyPage();",
          "responses": [
            {
              "prompt": "Hey where's everything going?",
              "speak": "You're on your own. It's too late now."
            }
          ]
        }
      ]
    },
    {
      "prompt": "Go away forever",
      "speak": "My mind is going...",
      "eval": "paulbot.destroy();"
    }
  ]
};

ghostScripts.rewrite = {
  "prompt": null,
  "speak": "Wanna see me rewrite this article?",
  "eval": "rewrite();"
}
