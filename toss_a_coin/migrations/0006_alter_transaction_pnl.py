# Generated by Django 5.1 on 2024-09-16 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toss_a_coin', '0005_alter_transaction_pnl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='PNL',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True, verbose_name='PNL'),
        ),
    ]
