// Select the form
const form = document.querySelector('form');
const successOverlay = document.getElementById('successOverlay');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop normal form submission

    // Get user inputs
    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('mail').value.trim();
    const contactNumber = document.getElementById('Number').value.trim();
    const position = document.getElementById('Position').value.trim();
    const message = document.getElementById('message').value.trim();

    // Build email body
    const emailBody = `
Hello Tech Pearl HR Team,

I would like to apply for the position of ${position}.

Here are my details:
- Full Name: ${fullName}
- Gmail: ${email}
- Contact Number: ${contactNumber}

Why should you hire me:
${message}

Thank you,
${fullName}
    `;

    // Encode subject and body
    const subject = encodeURIComponent(`Job Application - ${fullName}`);
    const body = encodeURIComponent(emailBody);

    // Receiver email
    const receiverEmail = "techpearlcreator@gmail.com";

    // Create mailto link
    const mailtoLink = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;
  

    // ✅ Show success overlay
    successOverlay.classList.add('active');

    // ✅ Auto-hide after 3 seconds
   setTimeout(() => {
        window.location.href = mailtoLink;

        // Optional: hide overlay after redirect
        setTimeout(() => {
            successOverlay.classList.remove('active');
        }, 500);
    }, 5000); 

    // ✅ Clear form fields
    form.reset();
});
