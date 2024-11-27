const DiffViewer = {
    init: function (config) {
        this.diff = config.diff;
        this.shareUrl = config.shareUrl;
        this.files = config.files;
        this.clipboard = new ClipboardJS('.copy-button');
        this.showDiff();
        this.initializeClipboard();
    },

    showDiff: function () {
        const targetElement = document.getElementById('diffView');
        if (!targetElement) {
            console.error('Diff view element not found');
            return;
        }

        const configuration = {
            drawFileList: false,
            matching: 'lines',
            outputFormat: 'side-by-side',
            highlight: true
        };

        const diff2htmlUi = new Diff2HtmlUI(targetElement, this.diff, configuration);
        diff2htmlUi.draw();
        diff2htmlUi.highlightCode();

        this.addCopyButtons();
    },

    addCopyButtons: function () {
        setTimeout(() => {
            const fileHeaders = document.querySelectorAll('.d2h-file-header');
            fileHeaders.forEach((header, index) => {
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-button';
                copyBtn.setAttribute('data-clipboard-target', `#file-content-${index}`);
                copyBtn.textContent = 'Copy Source';
                header.classList.add('file-header');
                header.appendChild(copyBtn);
            });
        }, 100);
    },

    initializeClipboard: function () {
        this.clipboard.on('success', (e) => {
            const button = e.trigger;
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy Source';
            }, 2000);
        });

        this.clipboard.on('error', (e) => {
            console.error('Copy failed:', e);
            const button = e.trigger;
            button.textContent = 'Copy failed';
            setTimeout(() => {
                button.textContent = 'Copy Source';
            }, 2000);
        });
    }
};