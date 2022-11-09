export default `
    <form id='form_registration' class='registration-form'>
        <label>Почта
            <div id='email' class="form-field"></div>
        </label>
        <label>Логин
            <div id='login' class="form-field"></div>
        </label>
        <label>Имя
            <div id='first_name' class="form-field"></div>
        </label>
        <label>Фамилия
            <div id='second_name' class="form-field"></div>
        </label>
        <label>Телефон
            <div id='phone' class="form-field"></div>
        </label>
        <label>Пароль
            <div id='password' class="form-field"></div>
        </label>
        <label>Пароль (ещё раз)
            <div id='password_repeat' class="form-field"></div>
        </label>
        <div class='registration-form__controls'>
            <Button class='btn btn-primary'>Зарегистрироваться</Button>
            <a href="/pages/login/login.html">
                Войти
            </a>
        </div>
    </form>
`;
