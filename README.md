**Stage 1B**: Testable Profile Card

A high-performance, accessible, and responsive Profile Card built with semantic HTML5, modern CSS, and vanilla JavaScript. This project was developed as part of the Frontend Wizards track to demonstrate proficiency in DOM manipulation, accessibility (A11y), and responsive design.

🚀 Live Demo
https://hng-stage-1b-frontend.vercel.app/


🛠 Features & Design Decisions
1. Semantic Architecture

Instead of "div soup," this card uses HTML5 Landmarks:

    <article>: Defines the card as a self-contained piece of content.

    <figure>: Wraps the avatar and its associated upload controls, providing clear context.

    <nav>: Used for social links to signal a navigation landmark to assistive technologies.

    <section>: Groups the Hobbies and Dislikes lists, providing a clear document outline.

2. High-Performance Epoch Timer

The requirement to show Date.now() in milliseconds was implemented using a setInterval strategy:

    Update Frequency: Set to 50ms. While the browser can attempt 1ms, a 50ms interval (20fps) provides a smooth visual "ticker" effect without overtaxing the CPU or the browser's event loop.

    Accessibility: The timer span includes aria-live="polite". This ensures screen readers are aware of the update but will not interrupt the user's current task to announce every single millisecond change.

3. Local Image Pipeline

To satisfy the "URL or Uploaded Image" requirement without a backend, the project utilizes the Web File API:

    Logic: When a user selects a file from their hard drive, the JavaScript generates a temporary Blob URL via URL.createObjectURL(file).

    Memory Management: To prevent memory leaks, URL.revokeObjectURL() is called after the image has successfully loaded into the DOM.

4. Responsive Layout

The UI follows a Mobile-First strategy:

    Mobile: Elements stack vertically in a single column for maximum readability on small screens.

    Desktop (768px+): The layout shifts to a multi-column grid. The avatar moves to the left of the bio, and the Hobbies/Dislikes lists transition from a vertical stack to a side-by-side grid.

♿ Accessibility (A11y)

    Contrast: All text colors were tested against their backgrounds to ensure they meet WCAG AA standards.

    Focus States: Custom :focus rings were added to all interactive elements (links and buttons) to ensure 100% keyboard navigability.

    Security: All external links use rel="noopener noreferrer" to prevent security vulnerabilities and performance issues when opening new tabs.

📂 Project Structure

    ├── index.html   # Semantic structure and data-testids
    ├── style.css    # Responsive Flex/Grid styles
    └── script.js    # Timer and Image Upload logic

⚙️ Local Setup

    Clone the repository: git clone https://github.com/mariioox/hng-stage-1b-frontend

    Open index.html in any modern web browser.

    To test the upload feature, click "Update Photo" and select any .jpg or .png from your device.
