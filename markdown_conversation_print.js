function initializeMarkdownConversationPrint({ showHeaders, autoPrint, enableEditing, showImageToggle, messages }) {
    function getInitials(name) {
        return name.split(' ').map(word => word[0]).join('').toUpperCase();
    }

    function isTableContent(line) {
        return line.trim().startsWith('|') || line.trim().match(/^\|?[\s-|]+\|?$/);
    }

    function findTableLines(lines, startIndex) {
        const tableLines = [];
        for (let i = startIndex; i < lines.length; i++) {
            if (isTableContent(lines[i])) {
                tableLines.push(lines[i]);
            } else {
                break;
            }
        }
        return tableLines;
    }

    function wrapLinesWithActions(content, messageIndex) {
        const lines = content.split('\n');
        const wrappedContent = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (isTableContent(line)) {
                const tableLines = findTableLines(lines, i);
                const tableContent = tableLines.join('\n');
                const rendered = marked.parse(tableContent);

                wrappedContent.push(`
                    <div class="content-line table-wrapper">
                        ${rendered}
                    </div>
                `);

                i += tableLines.length - 1;
            } else {
                const rendered = marked.parse(line);
                wrappedContent.push(`
                    <div class="content-line">
                        ${rendered}
                    </div>
                `);
            }
        }

        return wrappedContent.join('');
    }

    function renderMessages() {
        const chat = document.getElementById('chat');
        chat.innerHTML = messages.map((msg, index) => `
            <div class="message ${msg.role}">
                <div class="message-header ${showHeaders ? '' : 'hidden'}">
                    <div class="header-left">
                        <div class="avatar">${getInitials(msg.name)}</div>
                        ${msg.url ? `<a href="${msg.url}" target="_blank">${msg.name}</a>` : `
                            <div>${msg.name}</div>
                        `}
                    </div>
                </div>
                <div class="message-content">${wrapLinesWithActions(msg.content, index)}</div>
            </div>
        `).join('');
    }

    function createImageToggle() {
        if (!showImageToggle) return;

        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'toggle-container';
        toggleContainer.innerHTML = `
            <label class="toggle-switch">
                <input type="checkbox" id="imageToggle">
                <span class="toggle-slider"></span>
            </label>
            <span>Show Images</span>
        `;
        document.body.appendChild(toggleContainer);

        const toggle = document.getElementById('imageToggle');
        toggle.checked = true;

        toggle.addEventListener('change', (e) => {
            document.body.classList.toggle('images-hidden', !e.target.checked);
        });
    }

    renderMessages();
    createImageToggle();

    if (autoPrint) {
        window.addEventListener('load', () => {
            window.print();
        });
    }
}