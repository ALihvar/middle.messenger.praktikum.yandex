export default `
    <form id='form_login' class='login-form'>
        <label class='settings__label'>Логин
            <div id='login' class='form-field'></div>
        </label>
        <label class='settings__label'>Пароль
            <div id='password' class='form-field'></div>
        </label>
        <div class='login-form__controls'>
            <Button type='submit' class='btn btn-primary'>Вход</Button>
            <a href="/pages/registration/registration.html">
                Зарегистрироваться
            </a>
        </div>
    </form>
`;
