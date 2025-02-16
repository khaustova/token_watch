# Generated by Django 5.1 on 2025-01-28 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('token_hunter', '0020_settings_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='settings',
            options={'ordering': ['name'], 'verbose_name': 'Настройки', 'verbose_name_plural': 'Настройки'},
        ),
        migrations.RenameField(
            model_name='settings',
            old_name='sns_no_bought',
            new_name='sns_no_bought_min',
        ),
        migrations.RenameField(
            model_name='settings',
            old_name='sns_no_sold',
            new_name='sns_no_sold_max',
        ),
        migrations.RenameField(
            model_name='settings',
            old_name='tt_no_bought',
            new_name='tt_no_bought_min',
        ),
        migrations.RenameField(
            model_name='settings',
            old_name='tt_no_sold',
            new_name='tt_no_sold_max',
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_no_bought_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество снайперов без покупки'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_no_sold_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество снайперов без продажи'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_no_bought_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество снайперов без покупки'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_no_sold_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество снайперов без продажи'),
        ),
    ]
