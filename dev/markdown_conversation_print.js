body {
    margin: 0;
    padding: 0;
    background - color: #f0f0f0;
    font - family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans - serif;
    /* min-height: 100vh; */
}
.page {
    width: 8.5in;
    max - width: 95 %;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    box - sizing: border - box;
    min - height: 100vh;
    box - shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.message {
    margin: 1rem 0;
    padding: 1rem;
    border - radius: 8px;
    word - wrap: break-word;
    overflow - wrap: break-word;
    position: relative;
}

.message - header {
    display: flex;
    align - items: center;
    margin - bottom: 0.5rem;
    font - weight: 500;
    justify - content: space - between;
}

.message - header.hidden {
    display: none;
}

.header - left {
    display: flex;
    align - items: center;
}

.avatar {
    width: 32px;
    height: 32px;
    border - radius: 50 %;
    margin - right: 0.8rem;
    display: flex;
    align - items: center;
    justify - content: center;
    font - weight: bold;
    color: white;
    flex - shrink: 0;
}

.user.avatar {
    background: #2C3E50;
}

.bot.avatar {
    background: #3498DB;
}

.system.avatar {
    background: #95A5A6;
}

.message - content {
    line - height: 1.6;
    width: 100 %;
}

.message - content pre {
    white - space: pre - wrap;
    word - wrap: break-word;
    overflow - x: auto;
    max - width: 100 %;
}

.message - content img {
    max - width: 100 %;
    height: auto;
}

/* Table styles */
.message - content table {
    border - collapse: collapse;
    width: 100 %;
    margin: 1rem 0;
}

.message - content th,
.message - content td {
    border: 1px solid #ddd;
    padding: 8px;
    text - align: left;
}

.message - content th {
    background - color: #f5f5f5;
    font - weight: bold;
}

.message - content tr: nth - child(even) {
    background - color: #fafafa;
}

.message - content tr:hover {
    background - color: #f0f0f0;
}

/* Line editing styles */
.content - line {
    position: relative;
    padding: 2px 4px;
}

.content - line.table - wrapper {
    padding: 0;
}

.content - line.table - wrapper:hover {
    background - color: transparent;
}

.editing - enabled.content - line: not(.table - wrapper):hover {
    background - color: #f0f0f0;
}

.line - actions {
    display: none;
    position: absolute;
    right: 0;
    top: 50 %;
    transform: translateY(-50 %);
    background - color: white;
    border: 1px solid #ddd;
    border - radius: 4px;
    padding: 4px;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z - index: 100;
}

.editing - enabled.content - line: hover.line - actions {
    display: block;
}

.editing - enabled.message: hover.message - actions {
    opacity: 1;
}

.remove - btn {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    padding: 2px 8px;
    font - size: 0.9em;
}

.remove - btn:hover {
    background - color: #fee;
}

.message - actions {
    opacity: 0;
    transition: opacity 0.2s;
}

.content - line > p {
    margin: 0;
}

.toggle - container {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: white;
    padding: 0.5rem;
    border - radius: 4px;
    box - shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    z - index: 1000;
    display: flex;
    align - items: center;
    gap: 0.5rem;
}

.toggle -switch {
    position: relative;
    display: inline - block;
    width: 48px;
    height: 24px;
}

    .toggle -switch input {
    opacity: 0;
width: 0;
height: 0;
}

.toggle - slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background - color: #ccc;
    transition: .4s;
    border - radius: 24px;
}

.toggle - slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background - color: white;
    transition: .4s;
    border - radius: 50 %;
}

.toggle -switch input:checked + .toggle - slider {
    background - color: #2196F3;
}

.toggle -switch input:checked + .toggle - slider:before {
    transform: translateX(24px);
}

body.images - hidden.message - content img {
    display: none;
}

@media screen and(max - width: 600px) {
    body {
        background - color: white;
    }
    
    .page {
        width: 100 %;
        max - width: 100 %;
        margin: 0;
        padding: 0.5rem;
        box - shadow: none;
    }
    
    .message {
        padding: 0.75rem;
        margin: 0.75rem 0;
    }
    
    .avatar {
        width: 24px;
        height: 24px;
        margin - right: 0.5rem;
        font - size: 0.8rem;
    }

    .message - content table {
        display: block;
        overflow - x: auto;
        white - space: nowrap;
    }
}

@media print {
    body {
        background: none;
        margin: 0;
        padding: 0;
        font - family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans - serif;
    }
    .page {
        width: 100 %;
        margin: 0;
        padding: 0;
        box - shadow: none;
        min - height: auto;
    }
    .line - actions, .message - actions {
        display: none!important;
    }
    .toggle - container {
        display: none;
    }
    @page {
        margin: 0;
        size: auto;
    }
    .message {
        page -break-inside: avoid;
        break-inside: avoid;
    }
    .message - content {
        page -break-inside: avoid;
        break-inside: avoid;
    }
    .message - content pre,
    .message - content img {
        page -break-inside: avoid;
        break-inside: avoid;
    }
}   