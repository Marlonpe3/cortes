 // Manejar el envío del formulario
        document.getElementById("appointment-form").addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const service = document.getElementById("service").options[document.getElementById("service").selectedIndex].text;
            const date = document.getElementById("date").value;
            
            const confirmationHTML = `
                <div class="text-center p-4">
                    <i class="fas fa-check-circle text-success mb-3" style="font-size: 4rem;"></i>
                    <h3 class="mb-3">¡Reserva Confirmada!</h3>
                    <p class="mb-1"><strong>Nombre:</strong> ${name}</p>
                    <p class="mb-1"><strong>Servicio:</strong> ${service}</p>
                    <p class="mb-3"><strong>Fecha:</strong> ${date}</p>
                    <p>Te hemos enviado un correo de confirmación a ${email}</p>
                    <button class="btn btn-outline-primary mt-3" id="new-reservation">Nueva Reserva</button>
                </div>
            `;
            
            // Reemplazar formulario con mensaje de confirmación
            document.getElementById("appointment-form").innerHTML = confirmationHTML;
            
            // Manejar nueva reserva
            document.getElementById("new-reservation").addEventListener("click", function() {
                location.reload();
            });
        });

        // Manejar el envío del newsletter
        document.querySelectorAll(".newsletter-form").forEach(form => {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                const email = this.querySelector("input[type='email']").value;
                alert(`¡Gracias por suscribirte con ${email}! Pronto recibirás nuestras ofertas.`);
                this.reset();
            });
        });

        // Animaciones al desplazarse
        document.addEventListener("DOMContentLoaded", function() {
            const animateElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            animateElements.forEach(el => {
                observer.observe(el);
            });
        });