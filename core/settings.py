import os
from import_export.formats.base_formats import XLSX
from pathlib import Path
from environ import Env


BASE_DIR = Path(__file__).resolve().parent.parent

env = Env()
Env.read_env(BASE_DIR / ".env")

SECRET_KEY = env("DJANGO_SECRET_KEY")

DEBUG = True

ALLOWED_HOSTS = env("DJANGO_ALLOWED_HOSTS").split(" ")

LOGIN_REDIRECT_URL = "/"

CSRF_TRUSTED_ORIGINS = env("CSRF_TRUSTED_ORIGINS").split(" ")

INTERNAL_IPS = env("INTERNAL_IPS").split(" ")

# Application definition

INSTALLED_APPS = [
    "dashboard",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "debug_toolbar",
    "django_celery_results",
    "django_telethon",
    "import_export",
    "cointer"
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]

ROOT_URLCONF = "core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "core.wsgi.application"

X_FRAME_OPTIONS = "SAMEORIGIN" 

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.sqlite3",
#         "NAME": BASE_DIR / "db.sqlite3",
#     }
# }

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": env("POSTGRES_DB"),
        "USER": env("POSTGRES_USER"),
        "PASSWORD": env("POSTGRES_PASSWORD"),
        "HOST": env("POSTGRES_HOST"),
        "PORT": env("POSTGRES_PORT"),
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = "ru-ru"

TIME_ZONE = "Europe/Moscow"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "static"

# STORAGES = {
#     "default": {
#         "BACKEND": "django.core.files.storage.FileSystemStorage",
#     },
#     "staticfiles": {
#         "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
#     },
# }


# Media files

MEDIA_URL = "media/"
MEDIA_ROOT = BASE_DIR / "media"

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


# Dashboard

DASHBOARD_CUSTOMIZATION = {
    "search_model": "cointer.transaction",
    "sidebar_icons": {
        "auth.user": "person",
        "django_celery_results.taskresult": "task",
        "cointer.toptrader": "account_balance_wallet",
        "cointer.transaction": "contract",
    },
    "hidden_apps": [
        "dashboard",
        "sites",
        "auth",
    ],
    "hidden_models": [
        "django_celery_results.groupresult",
    ],
    "apps_order": [
        "cointer",
        "django_celery_results",
        "auth",
    ],
    "extra_links": [
        {
            "manager": [
                {
                    "name": "Документация",
                    "admin_url": "/admin/doc/",
                    "icon": "description"
                },
            ]
        }
    ],
}


# Celery

CELERY_BROKER_URL = env("CELERY_BROKER_URL")
CELERY_ACCEPT_CONTENT = {"application/json"}
CELERY_RESULT_SERIALIZER = "json"
CELERY_TASK_SERIALIZER = "json"
CELERY_TIMEZONE = "Europe/Moscow"
CELERY_RESULT_BACKEND = "django-db"
CELERY_RESULT_EXTENDED = True
CELERY_BROKER_CONNECTION_RETRY_ON_STARTUP = True


# Logger

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s"
        },
        "simple": {
            "format": "%(levelname)-4s %(asctime)s [%(name)s]: %(message)s"
        },
    },
    "handlers": {
        "null": {
            "level": "DEBUG",
            "class": "logging.NullHandler",
        },
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "simple"
        },
    },
    "loggers": {
        "django": {
            "handlers": ["null"],
            "propagate": True,
            "level": "INFO",
        },
        "cointer": {
            "handlers": ["console"],
            "level": "DEBUG",
        }
    }
}


# SOLANA API

MORALIS_API_KEY = env("MORALIS_API_KEY")
HELIUS_API_KEY = env("HELIUS_API_KEY")


# CAPTCHA
CAPTCHA_API_KEY = env("CAPTCHA_API_KEY")
CAPTCHA_EXTENSION_LINK = env("CAPTCHA_EXTENSION_LINK")
CAPTCHA_EXTENSION_DIR = env("CAPTCHA_EXTENSION_DIR")

# TELETHON
TELETHON_API_ID=env("TELETHON_API_ID") 
TELETHON_API_HASH=env("TELETHON_API_HASH")
TELEGRAM_PHONE_NUMBER = env("TELEGRAM_PHONE_NUMBER")

os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"

# Export

EXPORT_FORMATS = [XLSX]