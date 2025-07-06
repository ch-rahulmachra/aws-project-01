document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const responseMessage = document.getElementById("responseMessage");

  try {
    const res = await fetch("https://alb-backend-api-1627916734.ap-south-1.elb.amazonaws.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    responseMessage.innerText = result.message || "Submitted successfully!";
  } catch (err) {
    responseMessage.innerText = "Failed to submit. Try again later.";
  }
});
