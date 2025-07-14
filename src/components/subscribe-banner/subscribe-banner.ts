import './subscribe-banner.css';

export function Subscribe(): string {
  return `
    <section class="subscribe">
      <div class="subscribe__text">
        <h2>STAY UPTO DATE ABOUT<br>OUR LATEST OFFERS</h2>
      </div>
      <form class="subscribe__form">
        <div class="subscribe__input-wrapper">
          <input type="email" class="subscribe__input" placeholder="Enter your email address" required />
        </div>
        <button type="submit" class="subscribe__button">Subscribe to Newsletter</button>
      </form>
    </section>
  `;
}

export function setupSubscribe(): void {
  const form = document.querySelector('.subscribe__form') as HTMLFormElement;
  const input = form?.querySelector('input') as HTMLInputElement;

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = input.value.trim();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    await mockRequest(email);
    form.outerHTML = `<p class="subscribe__success">Success! You've subscribed to our newsletter.</p>`;
  });
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mockRequest(email: string): Promise<void> {
  return new Promise((resolve) => {
    console.log('Sending email to backend:', email);
    setTimeout(resolve, 1000);
  });
}
