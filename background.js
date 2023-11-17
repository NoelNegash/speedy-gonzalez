chrome.commands.onCommand.addListener((command, tab) => {
    console.log(tab)
    if (command === "increase_playback_rate") {
        if (tab) chrome.tabs.sendMessage(tab.id, { speed: "up" });
    } else if (command === "decrease_playback_rate") {
        if (tab) chrome.tabs.sendMessage(tab.id, { speed: "down" });
    }
});