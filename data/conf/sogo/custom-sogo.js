// redirect to mailcow login form
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.forms.namedItem("loginForm");
    if (loginForm) {
        window.location.href = '/user';
    }
});
// logout function
function mc_logout() {
    fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "logout=1"
    }).then(() => window.location.href = '/');
}

// Custom SOGo JS

// Change the visible font-size in the editor, this does not change the font of a html message by default
CKEDITOR.addCss("body {font-size: 16px !important}");

// Enable scayt by default
//CKEDITOR.config.scayt_autoStartup = true;

// ── Gmail Theme: Dark Mode Toggle ─────────────────────────────────────────
(function () {
  var STORAGE_KEY = 'sg-theme';
  var DARK_CLASS  = 'sg-dark';

  // Apply saved preference immediately to avoid flash of light mode
  if (localStorage.getItem(STORAGE_KEY) === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body && document.body.classList.add(DARK_CLASS);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Re-apply after DOM ready (body may not exist above)
    if (localStorage.getItem(STORAGE_KEY) === 'dark') {
      document.body.classList.add(DARK_CLASS);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Inject toggle button
    var btn = document.createElement('button');
    btn.className = 'sg-dark-toggle';
    btn.title = 'Toggle dark mode';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    updateIcon(btn);
    btn.addEventListener('click', function () {
      var isDark = document.body.classList.toggle(DARK_CLASS);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
      updateIcon(btn);
    });
    document.body.appendChild(btn);
  });

  function updateIcon(btn) {
    var isDark = document.body && document.body.classList.contains(DARK_CLASS);
    btn.textContent = isDark ? '☀️' : '🌙';
  }
})();
// ──────────────────────────────────────────────────────────────────────────

