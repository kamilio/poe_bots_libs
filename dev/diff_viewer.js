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
            highlight: true
        };

        const diff2htmlUi = new Diff2HtmlUI(targetElement, this.diff, configuration);

        // Hook into the diff2html lifecycle
        targetElement.addEventListener('diff2html:rendered', () => {
            const fileHeaders = document.querySelectorAll('.d2h-file-header');
            this.addCopyButtons(fileHeaders);
        });

        diff2htmlUi.draw();
        diff2htmlUi.highlightCode();
    },

    addCopyButtons: function (fileHeaders) {
        fileHeaders.forEach((header, index) => {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-button';
            copyBtn.textContent = 'Copy Source';
            copyBtn.onclick = () => this.copyFileContent(index);
            header.classList.add('file-header');
            header.appendChild(copyBtn);
        });
    },

    copyFileContent: function (fileIndex) {
        const codeContainers = document.querySelectorAll('.d2h-file-name-wrapper');
        const fileNameElement = codeContainers[fileIndex]?.querySelector('.d2h-file-name');

        if (fileNameElement) {
            const fileName = fileNameElement.textContent.trim().split('\n')[0];
            const fileContent = this.files[fileName];

            if (fileContent) {
                this.copyToClipboard(fileContent, codeContainers[fileIndex].querySelector('.copy-button'));
            }
        }
    },

    copyShareUrl: function () {
        const shareButton = document.querySelector('.copy-button__share');
        this.copyToClipboard(this.shareUrl, shareButton);
    },

    copyToClipboard: async function (text, button) {
        const originalText = button.textContent;

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

            button.textContent = 'Copied!';
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