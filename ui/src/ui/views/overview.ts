import { html } from "lit";
import type { GatewayHelloOk } from "../gateway.ts";
import type { UiSettings } from "../storage.ts";
import { formatDurationHuman } from "../format.ts";

export type OverviewProps = {
  connected: boolean;
  hello: GatewayHelloOk | null;
  settings: UiSettings;
  password: string;
  lastError: string | null;
  presenceCount: number;
  sessionsCount: number | null;
  cronEnabled: boolean | null;
  cronNext: number | null;
  lastChannelsRefresh: number | null;
  onSettingsChange: (next: UiSettings) => void;
  onPasswordChange: (next: string) => void;
  onSessionKeyChange: (next: string) => void;
  onConnect: () => void;
  onRefresh: () => void;
};

export function renderOverview(props: OverviewProps) {
  const snapshot = props.hello?.snapshot as
    | { uptimeMs?: number; policy?: { tickIntervalMs?: number } }
    | undefined;
  const uptime = snapshot?.uptimeMs ? formatDurationHuman(snapshot.uptimeMs) : "n/a";

  // Calculate some demo metrics (we'll replace with real data later)
  const activeAgents = 4;
  const totalMessages = 1247;
  const apiCalls = 89;

  return html`
    <div class="dashboard-home">
      <!-- Status Cards Row -->
      <div class="status-row">
        <div class="status-card">
          <div class="status-label">Connection</div>
          <div class="status-value ${props.connected ? "green" : "warn"}">
            ${props.connected ? "Online" : "Offline"}
          </div>
          <div class="status-change">
            ${props.connected ? "Gateway connected" : "Disconnected"}
          </div>
        </div>

        <div class="status-card">
          <div class="status-label">Active Agents</div>
          <div class="status-value blue">${activeAgents}</div>
          <div class="status-change">+2 since yesterday</div>
        </div>

        <div class="status-card">
          <div class="status-label">Sessions</div>
          <div class="status-value blue">${props.sessionsCount ?? 0}</div>
          <div class="status-change">Recent conversations</div>
        </div>

        <div class="status-card">
          <div class="status-label">Uptime</div>
          <div class="status-value green">${uptime}</div>
          <div class="status-change">Since last restart</div>
        </div>
      </div>

      <!-- Content Panels Row -->
      <div class="panel-row">
        <!-- Recent Activity Panel -->
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Recent Activity</div>
            <div class="panel-action">View All →</div>
          </div>
          <div class="panel-body">
            <div class="activity-item">
              <div class="activity-icon" style="background: #1f6feb;">💬</div>
              <div class="activity-content">
                <div class="activity-title">New message from JC</div>
                <div class="activity-meta">2 minutes ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon" style="background: #238636;">✓</div>
              <div class="activity-content">
                <div class="activity-title">Cron job completed</div>
                <div class="activity-meta">15 minutes ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon" style="background: #d29922;">⚡</div>
              <div class="activity-content">
                <div class="activity-title">Agent skill installed</div>
                <div class="activity-meta">1 hour ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon" style="background: #1f6feb;">🔧</div>
              <div class="activity-content">
                <div class="activity-title">Config updated</div>
                <div class="activity-meta">2 hours ago</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Active Agents Panel -->
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Active Agents</div>
            <div class="panel-action">Manage →</div>
          </div>
          <div class="panel-body">
            <div class="agent-card">
              <div class="agent-avatar" style="background: linear-gradient(135deg, #1f6feb, #58a6ff);">JC</div>
              <div class="agent-info">
                <div class="agent-name">Jarvis Central</div>
                <div class="agent-status">
                  <span class="status-dot"></span>Active · Main agent
                </div>
              </div>
            </div>
            <div class="agent-card">
              <div class="agent-avatar" style="background: linear-gradient(135deg, #238636, #2ea043);">JT</div>
              <div class="agent-info">
                <div class="agent-name">Jarvis Technical</div>
                <div class="agent-status">
                  <span class="status-dot"></span>Active · Technical
                </div>
              </div>
            </div>
            <div class="agent-card">
              <div class="agent-avatar" style="background: linear-gradient(135deg, #d29922, #e3b341);">JR</div>
              <div class="agent-info">
                <div class="agent-name">Jarvis Research</div>
                <div class="agent-status">
                  <span class="status-dot"></span>Active · Research
                </div>
              </div>
            </div>
            <div class="agent-card">
              <div class="agent-avatar" style="background: linear-gradient(135deg, #bc4c00, #d15704);">TH</div>
              <div class="agent-info">
                <div class="agent-name">THOR</div>
                <div class="agent-status">
                  <span class="status-dot"></span>Active · Content
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- System Stats Panel -->
      <div class="panel" style="margin-top: 16px;">
        <div class="panel-header">
          <div class="panel-title">System Statistics</div>
          <div class="panel-action">View Details →</div>
        </div>
        <div class="panel-body">
          <div class="quick-actions">
            <div class="quick-action">
              <div class="action-icon">📊</div>
              <div class="action-label">Messages: ${totalMessages}</div>
            </div>
            <div class="quick-action">
              <div class="action-icon">🔌</div>
              <div class="action-label">API Calls: ${apiCalls}</div>
            </div>
            <div class="quick-action">
              <div class="action-icon">⏰</div>
              <div class="action-label">
                Cron: ${props.cronEnabled ? "Enabled" : "Disabled"}
              </div>
            </div>
          </div>
        </div>
      </div>

      ${
        !props.connected
          ? html`
              <div class="panel" style="margin-top: 16px;">
                <div class="panel-header">
                  <div class="panel-title">Connection Settings</div>
                </div>
                <div class="panel-body">
                  <div class="form-grid">
                    <label class="field">
                      <span>WebSocket URL</span>
                      <input
                        .value=${props.settings.gatewayUrl}
                        @input=${(e: Event) => {
                          const v = (e.target as HTMLInputElement).value;
                          props.onSettingsChange({ ...props.settings, gatewayUrl: v });
                        }}
                        placeholder="ws://100.x.y.z:18789"
                      />
                    </label>
                    <label class="field">
                      <span>Gateway Token</span>
                      <input
                        .value=${props.settings.token}
                        @input=${(e: Event) => {
                          const v = (e.target as HTMLInputElement).value;
                          props.onSettingsChange({ ...props.settings, token: v });
                        }}
                        placeholder="OPENCLAW_GATEWAY_TOKEN"
                      />
                    </label>
                  </div>
                  <div class="row" style="margin-top: 14px;">
                    <button class="btn" @click=${() => props.onConnect()}>Connect</button>
                    <button class="btn" @click=${() => props.onRefresh()}>Refresh</button>
                  </div>
                  ${
                    props.lastError
                      ? html`<div class="callout danger" style="margin-top: 14px;">
                          ${props.lastError}
                        </div>`
                      : html``
                  }
                </div>
              </div>
            `
          : html``
      }
    </div>
  `;
}
