import './sidebar.js';

export default `
    <div id="sidebar" class="sidebar">
        <div class="sidebar__content">
            <div id="sidebarBody" class="sidebar__body open">
                {{>sidebarContent}}
            </div>
            <div class="sidebar__controls">
                <div class='sidebar__toggle' id="sidebarToggle" data-status='open'>🠢</div>
            </div>
        </div>
    </div>
`;
