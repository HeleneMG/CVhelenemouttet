<main>
    <section class="content contact">
        <h4>Contact</h4>
        <form action="url-traitement.php" method="get" class="ajax">
            <label id="contact-nom">Nom</label>
            <input type="text" name="contact-nom" id="contact-nom" placeholder="Jon Snow" required>

            <label id="contact-email">Email</label>
            <input type="text" name="contact-email" id="contact-email" placeholder="jonthebastard@mail.me" required>

            <label id="contact-message">Message</label>
            <textarea name="contact-message" id="contact" cols="40" rows="10" placeholder="Winter is coming"></textarea>

            <button type="submit">Envoyez votre message</button>
            <div class="confirmation"></div>

            <input type="hidden" name="idFormulaire" value="contact">
        </form>
    </section>
</main>
</body>

</html>
