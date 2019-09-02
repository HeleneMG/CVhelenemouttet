    <main>
        <section class="contact">
            <h3>Formulaire de contact</h3>
            <form action="url-traitement.php" method="get" class="ajax">
                <label>Nom : <input type="text" name="contact-nom" id="contact-nom" required></label>
                <label>Email : <input type="text" name="contact-email" id="contact-email" required></label>
                <label>Message : <textarea name="contact-message" id="contact" cols="30" rows="1"></textarea></label>
                <button type="submit">Envoyez votre message</button>
                <div class="confirmation"></div>
            </form>
        </section>
    </main>
    </body>

</html>