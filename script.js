function login() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

function pay(eventName, price) {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("payment").classList.remove("hidden");

    document.getElementById("eventName").innerText = "Event: " + eventName;
    document.getElementById("amount").innerText = "Amount: ₹" + price;
}

function success() {
    alert("Payment Successful! 🎉");
    document.getElementById("payment").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}
