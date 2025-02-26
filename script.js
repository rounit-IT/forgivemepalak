let noCount = 0;
let lastStep = false; // Track if it's the last step
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // Detect mobile

// Function when "Yes" is clicked
function sayYes() {
    let message = document.getElementById("message");
    document.getElementById("buttons").style.display = "none"; // Hide buttons

    if (lastStep) {
        message.innerText = "Akhir Man Hi Gayi ❤️"; // Final message

        // Show next message after 2 seconds
        setTimeout(() => {
            message.innerText = "Abb Message Krro Cutie 💖";
        }, 2000);
    } else {
        message.innerText = "Message me ❤️"; // Normal case
    }

    // Start continuous heart falling effect
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 2 + 1 + "rem";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// Function when "No" is clicked
function sayNo() {
    noCount++;
    let message = document.getElementById("message");
    let noButton = document.querySelector(".no");

    if (noCount === 1) {
        message.innerText = "Please Palak, don't be angry 😢";
    } else if (noCount === 2) {
        message.innerText = "I'm really sorry, please forgive me 🙏";
    } else if (noCount === 3) {
        message.innerText = "Okay, last chance! Please say Yes 😭";
    } else {
        // On the last click, enable movement immediately
        lastStep = true; // Set last step to true

        if (isMobile) {
            noButton.setAttribute("ontouchstart", "moveNoButton()"); // Move when touched (mobile)
        } else {
            noButton.setAttribute("onmouseover", "moveNoButton()"); // Move when hovered (desktop)
            moveNoButton(); // Move immediately after last click
        }
    }
}

// Function to move "No" button
function moveNoButton() {
    let noButton = document.querySelector(".no");
    
    // Random position (within screen limits)
    let x = Math.random() * 80;
    let y = Math.random() * 80;

    noButton.style.position = "absolute";
    noButton.style.left = x + "vw";
    noButton.style.top = y + "vh";
}
