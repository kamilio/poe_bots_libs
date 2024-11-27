
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
        diff2htmlUi.draw();
        diff2htmlUi.highlightCode();

        // Add copy buttons to each file header
        setTimeout(() => {
            const fileHeaders = document.querySelectorAll('.d2h-file-header');
            fileHeaders.forEach((header, index) => {
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-button';
                copyBtn.textContent = 'Copy Source';
                copyBtn.onclick = () => this.copyFileContent(index);
                header.classList.add('file-header');
                header.appendChild(copyBtn);
            });
        }, 100);
    },

    copyFileContent: function (fileIndex) {
        const codeContainers = document.querySelectorAll('.d2h-file-name-wrapper');
        const filename = codeContainers[fileIndex]?.querySelector('.d2h-file-name');
        if (fileHeader) {
            const fileName = fileHeader.textContent.trim().split('\n')[0];
            const fileContent = this.files[fileName];
            navigator.clipboard.writeText(fileContent).then(() => {
                const copyButton = codeContainers[fileIndex].querySelector('.copy-button');
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            });
        }
    },

    copyShareUrl: function () {
        navigator.clipboard.writeText(this.shareUrl).then(() => {
            const shareButton = document.querySelector('.copy-button__share');
            shareButton.textContent = 'Link copied!';
            setTimeout(() => {
                shareButton.textContent = 'Share';
            }, 2000);
        });
    }
};