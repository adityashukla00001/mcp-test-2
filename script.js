// Sign-in button event listeners
document.addEventListener('DOMContentLoaded', function() {
    const signinButtons = document.querySelectorAll('.signin-button');

    signinButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const providers = ['Jira', 'GitHub', 'Azure DevOps'];
            const provider = providers[index];
            
            console.log(`Signing in with ${provider}...`);
            
            // Add a visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);

            // Simulate sign-in process
            simulateSignIn(provider);
        });

        // Add keyboard support
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

/**
 * Simulate sign-in process
 * @param {string} provider - The authentication provider name
 */
function simulateSignIn(provider) {
    console.log(`Initiating ${provider} authentication flow...`);
    
    // In a real application, this would:
    // 1. Redirect to the provider's authentication endpoint
    // 2. Handle OAuth flow
    // 3. Validate credentials on the backend
    // 4. Redirect to the dashboard on success
    
    // For demo purposes, we'll show a notification
    showNotification(`Redirecting to ${provider} sign-in...`);
}

/**
 * Show a temporary notification
 * @param {string} message - The notification message
 */
function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #2563EB;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        document.body.appendChild(notification);
    }

    notification.textContent = message;
    notification.style.display = 'block';

    // Auto-hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Add smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    // Preload any external images/assets
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
        });
    });
});
