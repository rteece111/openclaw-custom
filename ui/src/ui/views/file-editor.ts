import { html } from "lit";

export type FileEditorProps = {
  connected: boolean;
};

// Basic file editor view - will enhance with Monaco later
export function renderFileEditor(props: FileEditorProps) {
  return html`
    <div class="file-editor-container">
      <!-- File Tree Sidebar -->
      <div class="file-tree-sidebar">
        <div class="file-tree-header">
          <h2>Files</h2>
          <div class="tree-actions">
            <button class="tree-btn" title="New File">+</button>
            <button class="tree-btn" title="Refresh">↻</button>
          </div>
        </div>
        <div class="file-tree-content">
          <!-- Workspace folder -->
          <div class="tree-folder">
            <div class="folder-header">
              <span class="folder-icon">📁</span>
              <span class="folder-name">workspace-technical</span>
            </div>
            <div class="folder-children">
              <div class="file-item active">
                <span class="file-icon">📄</span>
                <span>MEMORY.md</span>
              </div>
              <div class="file-item">
                <span class="file-icon">📄</span>
                <span>SOUL.md</span>
              </div>
              <div class="file-item">
                <span class="file-icon">📄</span>
                <span>IDENTITY.md</span>
              </div>
              <div class="file-item">
                <span class="file-icon">📄</span>
                <span>TOOLS.md</span>
              </div>
            </div>
          </div>

          <!-- Skills folder -->
          <div class="tree-folder">
            <div class="folder-header">
              <span class="folder-icon">📁</span>
              <span class="folder-name">skills</span>
            </div>
          </div>

          <!-- Mockups folder -->
          <div class="tree-folder">
            <div class="folder-header">
              <span class="folder-icon">📁</span>
              <span class="folder-name">mockups</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Editor Area -->
      <div class="editor-main">
        <div class="editor-tabs">
          <div class="editor-tab active">
            <span class="tab-icon">📄</span>
            <span class="tab-name">MEMORY.md</span>
            <button class="tab-close">×</button>
          </div>
        </div>

        <div class="editor-content">
          ${
            props.connected
              ? html`
                  <div class="editor-placeholder">
                    <div class="placeholder-icon">📝</div>
                    <div class="placeholder-title">File Editor</div>
                    <div class="placeholder-text">
                      Select a file from the tree or create a new one to start editing.
                    </div>
                    <div class="placeholder-text muted">Monaco Editor integration coming soon.</div>
                  </div>
                `
              : html`
                  <div class="editor-placeholder">
                    <div class="placeholder-icon">⚠️</div>
                    <div class="placeholder-title">Not Connected</div>
                    <div class="placeholder-text">Connect to the gateway to access files.</div>
                  </div>
                `
          }
        </div>

        <div class="editor-footer">
          <div class="footer-left">
            <span class="mono">UTF-8</span>
            <span class="separator">|</span>
            <span class="mono">Markdown</span>
            <span class="separator">|</span>
            <span class="mono">Ln 1, Col 1</span>
          </div>
          <div class="footer-right">
            <span class="muted">Ready</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
