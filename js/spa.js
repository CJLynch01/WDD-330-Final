import { dateToday } from "./date";

// const currentDate = dateToday

function changeIndex(page) {
    const content = document.getElementById('generatedInfo');

    switch (page) {
        case 'day':
            content.innerHTML = `
                <h2>
                    Date: 
                </h2>
                <p>
                    This is the main page of our SPA.
                </p>
                <p>
                    Explore the different sections using
                    the navigation menu.
                </p>
            `;
            break;
        case 'week':
            content.innerHTML = `
                <h2>About Us</h2>
                <p>
                    This is the about page content. Learn more 
                    about our purpose and team.
                </p>
                <p>
                    We're passionate about creating engaging and
                    informative SPAs.
                </p>
            `;
            break;
        case 'journal':
            content.innerHTML = 
                `<h2>Contact Us</h2> 
                <p>
                    Feel free to reach out to us!
                </p> 
                <form> 
                   <label for="name">Name:</label> 
                   <input type="text" id="name" name="name" 
                          placeholder="Your Name" required>
                   <label for="email">Email:</label> 
                   <input type="email" id="email" name="email" 
                          placeholder="Your Email" required>
                   <label for="message">Message:</label> 
                   <textarea id="message" name="message" 
                             placeholder="Your Message" 
                             rows="4" required>
                    </textarea>
                   <button type="submit">Send Message</button> 
                </form>`;
            break;
        case 'excel':
            content.innerHTML = `
                <h2>About Us</h2>
                <p>
                    This is the about page content. Learn more 
                    about our purpose and team.
                </p>
                <p>
                    We're passionate about creating engaging and
                    informative SPAs.
                </p>
            `;
            break;
 
        default:
            content.innerHTML = '<h2>Page not found!</h2>';
    }
}