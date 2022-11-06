export default `
    <div class="sidebar-content">
        <div class="sidebar-content__avatar" id='buttonLoadAvatar'>
            {{> avatar}}
            <div class='sidebar-content__avatar_back'>Загрузить фото</div>
        </div>

        {{> userData}}
        {{> userPasswors}}
    </div>
`;