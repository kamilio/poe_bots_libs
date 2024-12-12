const DiffViewer = {
    init: function (config) {
        this.diff = config.diff;
        this.shareUrl = config.shareUrl;
        this.files = config.files;
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

        setTimeout(() => {
            const fileHeaders = document.querySelectorAll('.d2h-file-header');
            fileHeaders.forEach((header, index) => {
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-button';
                copyBtn.textContent = 'Copy';
                copyBtn.onclick = (e) => {
                    e.preventDefault();
                    this.copyFileContent(index);
                }
                header.classList.add('file-header');
                header.appendChild(copyBtn);
            });
        }, 100);
    },

    copyFileContent: function (fileIndex) {
        const fileHeaders = document.querySelectorAll('.d2h-file-header');
        const copyButton = fileHeaders[fileIndex]?.querySelector('.copy-button');
        const fileNameElement = document.querySelectorAll('.d2h-file-name-wrapper')[fileIndex]?.querySelector('.d2h-file-name');

        if (!fileNameElement) {
            raiseError('File name element not found');
        }

        if (!copyButton) {
            raiseError('Copy button not found');
        }

        if (fileNameElement && copyButton) {
            const fileName = fileNameElement.textContent.trim().split('\n')[0];
            const fileContent = this.files[fileName];

            if (fileContent) {
                this.copyToClipboard(fileContent, copyButton, 'Copy', 'Code copied!');
            }
        }
        return False
    },

    copyShareUrl: function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const shareButton = document.querySelector('.copy-button__share');
        this.copyToClipboard(this.shareUrl, shareButton, 'Share', 'Link copied!');
        return false;
    },

    copyToClipboard: async function (text, button, originalText, copiedText) {
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