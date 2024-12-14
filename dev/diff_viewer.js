const DiffViewer = {
    init: function (config) {
        this.diff = config.diff;
        this.shareUrl = config.shareUrl;
        this.files = config.files;
        // Bind the methods to preserve 'this' context
        this.copyFileContent = this.copyFileContent.bind(this);
        this.copyShareUrl = this.copyShareUrl.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.showDiff();
    },

    showDiff: function () {
        const targetElement = document.getElementById('diffView');
        const configuration = {
            drawFileList: false,
            matching: 'lines',
            outputFormat: 'side-by-side',
            highlight: true,
            colorScheme: 'auto',
        };

        const diff2htmlUi = new Diff2HtmlUI(targetElement, this.diff, configuration);
        diff2htmlUi.draw();
        diff2htmlUi.highlightCode();

        // Increase timeout to ensure DOM is ready
        setTimeout(() => {
            const fileHeaders = document.querySelectorAll('.d2h-file-header');
            fileHeaders.forEach((header, index) => {
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-button';
                copyBtn.textContent = 'Copy';
                copyBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.copyFileContent(index);
                });
                header.classList.add('file-header');
                header.appendChild(copyBtn);
            });
        }, 500);
    },

    copyFileContent: function (fileIndex) {
        const fileHeaders = document.querySelectorAll('.d2h-file-header');
        const copyButton = fileHeaders[fileIndex]?.querySelector('.copy-button');
        const fileNameElement = document.querySelectorAll('.d2h-file-name-wrapper')[fileIndex]?.querySelector('.d2h-file-name');

        if (!fileNameElement) {
            console.error('File name element not found');
            return false;
        }

        if (!copyButton) {
            console.error('Copy button not found');
            return false;
        }

        const fileName = fileNameElement.textContent.trim().split('\n')[0];
        const fileContent = this.files[fileName];

        if (!fileContent) {
            console.error('File content not found for:', fileName);
            return false;
        }

        this.copyToClipboard(fileContent, copyButton, 'Copy', 'Code copied!');
        return false;
    },

    copyShareUrl: function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const shareButton = document.querySelector('.copy-button__share');
        if (!shareButton) {
            console.error('Share button not found');
            return;
        }
        this.copyToClipboard(this.shareUrl, shareButton, 'Share', 'Link copied!');
    },

    copyToClipboard: async function (text, button, originalText, copiedText) {
        if (!button || !text) {
            console.error('Missing required parameters for copyToClipboard');
            return;
        }

        try {
            // Try the modern Clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                // Fallback for Safari and other browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    document.execCommand('copy');
                } finally {
                    textArea.remove();
                }
            }

            button.textContent = copiedText;
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            button.textContent = 'Copy failed';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        }
    }
};