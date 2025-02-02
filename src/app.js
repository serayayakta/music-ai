import { SettingsPage } from "./pages/settings.js";
import { SubscriptionPage } from "./pages/subscriptions.js";
import { ProfilePage } from "./pages/profile.js";

const routes = {
    'settings': SettingsPage,
    'subscriptions': SubscriptionPage,
    'profile': ProfilePage
};

function navigateTo(page) {
    if (routes[page]) {
        document.getElementById("app").innerHTML = routes[page]();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".bottom-nav button").forEach(button => {
        button.addEventListener("click", () => {
            navigateTo(button.getAttribute("data-route"));
        });
    });
    navigateTo('settings'); // Load default page on startup
});