(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Really sure??",
    "Будь ласка, подумайте ще раз...",
    "Just think about it!",
    "If you say no, I will be really sad 🥲...",
    "Мені буде дуже сумно...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "Почекай, переглянемо...",
    "Maybe you misclicked?",
    "Give it another thought!🫶",
    "Я знаю, що ти не це маєш на увазі!🫸",
    "Breath in, breath out, try again...",
    "You're breaking my heart 💔",
    "But... I want you 🥺",
    "What if I give you chocolate? 🍫",
    "I'll do anything! 😭",
    "Even the stars want you to say yes! ✨",
    "The universe is begging you!🪐",
    "I promise to be extra cute! 🥰",
    "You're making this very difficult...🫷",
    "This is emotional damage! 😭",
    "Saying yes will make my day! ❤️",
    "I'll let you pick the first date idea! 😉",
    "Isn't it a pitty that we didn't make it even happen!",
    "What if stars really wanted us to meet!✨",
    "You'll be Meave and I be Otis!",
    "Imagine how cute we’d be together! 😈 🧚🏻‍♀️",
    "Even Sem 🐺 would be disappointed!",
    "I’m running out of ways to convince you! 😵‍💫",
    "Remember how much I liked your communication style? 💕",
    "This is a trick question, right? 😳",
    "No isn’t an option! 😤",
    "Okay, now you're just teasing me 😏"
];


let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.1}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
