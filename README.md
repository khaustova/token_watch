**Token Hunter** – это веб-приложение на Django, предназначенное для настраиваемой торговли токенами в сети Solana.

## Используемые сервисы

Приложение использует следующие внешние сервисы для получения данных и анализа токенов:

:gem:  [DEX Screener](https://dexscreener.com/) и [DEX Screener API](https://docs.dexscreener.com/api/reference) – получение данных о токенах.  
:shield: [RugCheck](https://rugcheck.xyz/) – оценка безопасности токена.  
:bar_chart: [Getmoni](https://rugcheck.xyz/) – анализ активности по токену в X (Twitter).  

## Основные функции

Приложение предоставляет следующие возможности:

:mag_right: **Мониторинг токенов по фильтрам**  
:zap: **Мониторинг boosted токенов**  
:shopping_cart: **Эмуляция покупки токенов**  
:gear: **Настройка параметров для выбора токенов**  
:robot: **Покупка токенов через Maestro Sniper Bot в Telegram**  
:chart_with_upwards_trend: **Экспорт данных в Excel**  
:detective: **Парсинг топовых кошельков**  

## Запуск приложения

#### Шаг 1: Клонирование репозитория

Клонируйте репозиторий проекта на свой компьютер:

```
git clone https://github.com/khaustova/token_hunter.git
```

#### Шаг 2: Выбор способа запуска

Вы можете запустить приложение двумя способами: используя Docker или виртуальное окружение.

<details>
  <summary>Использовать Docker</summary>

1. Переименуйте файл `.env.example` в `.env` и добавьте свои данные.
2. Запустите проект с помощью команды:
    

```
docker-compose up --build
```
  
</details>  

<details>
  <summary>Использовать виртуальное окружение</summary>

1. Создайте виртуальное окружение:
    

```
python3 -m venv .venv
```

Активируйте виртуальное окружение:

- Для Linux/MacOS:
    

```
source .venv/bin/activate
```

- Для Windows:

```
.venv\Scripts\activate
```

Установите необходимые пакеты:

```
pip install -r requirements.txt
```

- Переименуйте файл `.env.example` в `.env` и добавьте свои данные.
- Убедитесь, что у вас установлены и запущены Redis и PostgreSQL.
- Выполните миграцию базы данных:
    

```
python3 manage.py migrate
```

Запустите Celery:

```
celery -A core worker -l info
```

Запустите сервер:

```
python3 manage.py runserver
```
  
</details> 


#### Шаг 3: Доступ к приложению

После выполнения всех шагов, приложение будет доступно по адресу:

http://127.0.0.1:8000

## Настройка Telegram

Для автоматической покупки и продажи токенов, а также для взаимодействия с Telegram-каналом, требуется настроить интеграцию с Telegram.

#### Шаг 1: Получение API ID и Hash

1. Перейдите на сайт https://my.telegram.org/auth.
2. Авторизуйтесь с номером телефона, который будете использовать для торговли.
3. Перейдите в **API development tools** и создайте новое приложение.
4. Скопируйте полученные значения `App api_id` и `App api_hash`.
5. Откройте файл `.env` и вставьте эти значения в соответствующие переменные:
    

```python
TELETHON_API_ID=ваш_идентификатор
TELETHON_API_HASH=ваш_хэш
```

#### Шаг 2: Авторизация в Telegram

1. Убедитесь, что в файле `.env` в переменной `TELEGRAM_PHONE_NUMBER` указан правильный номер телефона.
2. Выполните команду для авторизации:
    

```python
python3 manage.py authtelegram
```

3. Следуйте инструкциям на экране для завершения процесса авторизации.

## Настройка Maestro Sniper Bot

Для автоматической покупки токенов необходимо настроить взаимодействие с ботом Maestro Sniper Bot в Telegram.

1. Найдите бота @MaestroSniperBot и начните диалог.
2. Отправьте команду `/sniper`.
3. В открывшемся меню выберите **Call Channels** и сеть **SOL**.
4. Выберите канал **Me**.
5. Включите **Auto Buy**.
6. Задайте сумму для покупки токенов в параметре **Buy Amount**.
7. При необходимости установите параметры **Sell-Hi** и **Sell-Lo** для автоматической продажи токенов.

## Настройка параметров выбора токенов

Параметры выбора токенов могут быть настроены несколькими способами:

- Создать новые объекты модели **Settings** в панели администратора.
- Написать проверку внутри функции `check_settings()` в файле `settings.py`.

Функция `check_settings()` проверяет параметры в любом режиме работы и независимо от настроек, созданных в панели администратора.

## Скриншоты

![screen 1](https://github.com/user-attachments/assets/560bfbae-61f5-4f05-b6c1-e5352a15b0bf) 
![screen 2](https://github.com/user-attachments/assets/0a6e1f00-770b-4f6d-81c3-34f7e7897429)
