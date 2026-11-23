document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const statusDiv = document.getElementById("formStatus");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 
        
        statusDiv.innerHTML = "<p style='color: #10B981; margin-top: 15px; font-weight: bold; font-size: 1.1rem;'>¡Genial! Tu mensaje ha sido enviado correctamente.</p>";
        form.reset();
        
        setTimeout(() => {
            statusDiv.innerHTML = "";
        }, 5000);
    });
});
