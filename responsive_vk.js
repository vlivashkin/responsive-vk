var link = document.createElement("link");
link.href = chrome.extension.getURL("vk_responsive.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);