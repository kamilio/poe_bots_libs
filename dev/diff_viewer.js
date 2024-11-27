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
                const fileName = header.querySelector('.d2h-file-name').textContent.trim();
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-button';
                copyBtn.setAttribute('data-filename', fileName);
                copyBtn.textContent = 'Copy Source';
                header.classList.add('file-header');
                header.appendChild(copyBtn);
            });
            this.initializeClipboard();
        }, 100);
    },

    initializeClipboard: function () {
        this.clipboard = new ClipboardJS('.copy-button', {
            text: (trigger) => this.files[trigger.getAttribute('data-filename')] || ''
        });

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
            const fileName = button.getAttribute('data-filename');
            button.textContent = `Copy failed: ${this.files[fileName] ? 'Unknown error' : 'File not found'}`;
            setTimeout(() => {
                button.textContent = 'Copy Source';
            }, 2000);
        });
    }
};