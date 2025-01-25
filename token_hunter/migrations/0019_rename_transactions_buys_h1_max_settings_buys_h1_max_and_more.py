# Generated by Django 5.1 on 2025-01-24 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('token_hunter', '0018_transaction_pnl_loss_5'),
    ]

    operations = [
        migrations.RenameField(
            model_name='settings',
            old_name='transactions_buys_h1_max',
            new_name='buys_h1_max',
        ),
        migrations.RenameField(
            model_name='settings',
            old_name='transactions_buys_h1_min',
            new_name='buys_h1_min',
        ),
        migrations.RenameField(
            model_name='settings',
            old_name='transactions_sells_h1_max',
            new_name='sells_h1_max',
        ),
        migrations.RenameField(
            model_name='settings',
            old_name='transactions_sells_h1_min',
            new_name='sells_h1_min',
        ),
        migrations.RemoveField(
            model_name='settings',
            name='total_transactions_max',
        ),
        migrations.RemoveField(
            model_name='settings',
            name='total_transactions_min',
        ),
        migrations.RemoveField(
            model_name='settings',
            name='total_transfers_max',
        ),
        migrations.RemoveField(
            model_name='settings',
            name='total_transfers_min',
        ),
        migrations.AddField(
            model_name='settings',
            name='buys_h24_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество покупок (24 часа)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='buys_h24_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество покупок (24 часа)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='buys_h6_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество покупок (6 часов)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='buys_h6_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество покупок (6 часов)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='buys_m5_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество покупок (5 минут)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='buys_m5_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество покупок (5 минут)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='monitoring_rule',
            field=models.CharField(choices=[('boosted', 'Boosted'), ('filter', 'Фильтр')], default='boosted', max_length=64, verbose_name='Правильно мониторинга токенов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='price_change_h1_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальное изменение цены (1 час)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='price_change_h1_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Минимальное изменение цены (1 час)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='price_change_h24_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальное изменение цены (24 часа)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='price_change_h24_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Минимальное изменение цены (24 часа)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='price_change_h6_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальное изменение цены (6 часов)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='price_change_h6_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Минимальное изменение цены (6 часов)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sells_h24_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество продаж (24 часа)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sells_h24_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество продаж (24 часа)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sells_h6_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество продаж (6 часов)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sells_h6_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество продаж (6 часов)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sells_m5_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество продаж (5 минут)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sells_m5_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество продаж (5 минут)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_bought_sum_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальная сумма покупок снайперов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_bought_sum_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Минимальная сумма покупок снайперов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_held_all_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество снайперов, которые держат'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_held_all_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество снайперов, которые держат'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_no_bought',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество снайперов без покупки'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_no_sold',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество снайперов без продажи'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_pnl_loss_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество отрицательных PNL у снайперов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_pnl_loss_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество отрицательных PNL у снайперов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_sold_all_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество снайперов, продавших всё'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_sold_all_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество снайперов, продавших всё'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_sold_some_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество снайперов, продавших часть'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_sold_some_min',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество снайперов, продавших часть'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_sold_sum_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальная сумма продаж снайперов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='sns_sold_sum_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Минимальная сумма продаж снайперов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_bought_sum_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальная сумма покупок топов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_bought_sum_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальная сумма покупок топов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_no_bought',
            field=models.IntegerField(blank=True, null=True, verbose_name='Минимальное количество снайперов без покупки'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_no_sold',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество снайперов без продажи'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_pnl_loss_max',
            field=models.IntegerField(blank=True, null=True, verbose_name='Максимальное количество отрицательных PNL у топов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_sold_sum_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальная сумма продаж топов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='tt_sold_sum_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальная сумма продаж топов'),
        ),
        migrations.AddField(
            model_name='settings',
            name='volume_h1_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальный объём торгов (1 час)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='volume_h1_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Минимальный объём торгов (1 час)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='volume_h24_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальный объём торгов (24 часа)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='volume_h24_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Минимальный объём торгов (24 часа)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='volume_h6_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальный объём торгов (6 часов)'),
        ),
        migrations.AddField(
            model_name='settings',
            name='volume_h6_min',
            field=models.FloatField(blank=True, null=True, verbose_name='Минимальный объём торгов (6 часов)'),
        ),
        migrations.AlterField(
            model_name='settings',
            name='liquidity_max',
            field=models.FloatField(blank=True, null=True, verbose_name='Максимальная ликвидность'),
        ),
        migrations.AlterField(
            model_name='settings',
            name='liquidity_min',
            field=models.FloatField(blank=True, default=1000, null=True, verbose_name='Минимальная ликвидность'),
        ),
        migrations.AlterField(
            model_name='settings',
            name='mode',
            field=models.CharField(choices=[('data_collection', 'Сбор данных'), ('emulation', 'Эмуляция'), ('boosted', 'Boosted'), ('real', 'Реальная покупка')], default='boosted', max_length=64, verbose_name='Режим'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='PNL_loss_5',
            field=models.BooleanField(blank=True, null=True, verbose_name='PNL -5 %'),
        ),
    ]
