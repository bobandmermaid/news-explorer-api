## NewsExplorer
![GitHub package.json version](https://img.shields.io/github/package-json/v/bobandmermaid/news-explorer-api?style=flat-square)

### О проекте
+ Backend проекта NewsExplorer. Это сервис, в котором      
можно найти новости по запросу и сохранить в личном кабинете      
`Дипломный проект сделанный для Яндекс.Практикум`

### Функциональность
    Локально - http://localhost:3000
    отправлять через Postman

    POST /signup — регистрация пользователя с переданными в теле запроса:    
     name, email, password
    POST /signin — авторизация пользователя по email и password 
    GET /users/me — возвращает информацию о пользователе
    GET /articles - возвращает все сохранённые пользователем статьи
    POST /articles — создаёт статью с переданными в теле: 
    keyword, title, text, date, source, link и image
    DELETE /articles/articleId — удаляет сохранённую статью  по _id

### Стек  
`JavaScript`     
`Node.js`  
`Express.js`  
`MongoDB`   
`ESlint`

### Фронтенд проекта
+ https://github.com/bobandmermaid/news-explorer-frontend

### Развертывание проекта
1. Установить `Node.js`
2. Клонировать репозиторий `https://github.com/bobandmermaid/news-explorer-api.git`
3. Установить зависимости `npm i`
4. `npm run start` запускает сервер на `localhost:3000`
5. `npm run dev` запускает сервер на `localhost:3000` с хот релоудом
6. **ВАЖНО!:** Закоментировать строчку `secure: true`, в файле `controllers/auth.js`   
(Иначе работа приложения будет некорректной)
